import * as React from "react";
import { FC, forwardRef, InputHTMLAttributes, useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/utils";

const input = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "w-full",
        dropdown: "w-full",
        placeholder: "w-full placeholder:text-gray-500",
      },
      outline: {
        true: "border",
      },
      rounded: {
        basic: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-2xl",
        full: "rounded-full",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3 text-sm",
        md: "h-11 px-8 text-lg",
        lg: "h-14 px-12 text-lg",
        full: "h-16 px-14 w-full text-2xl",
      },
      shadow: {
        true: "shadow-md hover:shadow-lg",
        false: "shadow-none",
      },
      enabled: {
        true: "",
        false: "opacity-50 pointer-events-none",
      },
    },
  }
);

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof input> {
  options?: { label: string; year: number }[];
  placeholderText?: string;
}

export const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, outline, rounded, size = "default", shadow, enabled = true, options = [], placeholderText, ...props }, ref) => {
    const [filteredOptions, setFilteredOptions] = useState(options);
    const [query, setQuery] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setQuery(value);
      if (value) {
        setFilteredOptions(
          options.filter((option) =>
            option.label.toLowerCase().includes(value.toLowerCase())
          )
        );
      } else {
        setFilteredOptions(options);
      }
    };

    return (
      <div className={cn("relative", className)}>
        {variant === "dropdown" ? (
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={handleInputChange}
              className={cn(input({ variant, outline, rounded, size, shadow, enabled }))}
              {...props}
              ref={ref}
            />
            {filteredOptions.length > 0 && (
              <ul className="absolute w-full bg-white shadow-lg max-h-60 overflow-y-auto border rounded-lg mt-1 z-10">
                {filteredOptions.map((option, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => {
                      setQuery(option.label);
                      setFilteredOptions([]);
                    }}
                  >
                    {option.label}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ) : (
          <input
            className={cn(input({ variant, outline, rounded, size, shadow, enabled }))}
            placeholder={variant === "placeholder" ? placeholderText : undefined}
            {...props}
            ref={ref}
          />
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
