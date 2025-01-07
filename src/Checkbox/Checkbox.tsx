import { FC, useState, useEffect } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/utils";
import { Check } from "lucide-react";

const checkbox = cva(
  "relative inline-flex items-center justify-center rounded border transition-all duration-200 cursor-pointer",
  {
    variants: {
      variant: {
        default: "border-gray-300 hover:border-gray-400 bg-white",
        primary: "border-blue-300 hover:border-blue-400 bg-blue-50",
        success: "border-green-300 hover:border-green-400 bg-green-50",
        warning: "border-yellow-300 hover:border-yellow-400 bg-yellow-50",
        danger: "border-red-300 hover:border-red-400 bg-red-50",
      },
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6",
      },
      state: {
        unchecked: "",
        checked: "",
        disabled: "opacity-50 cursor-not-allowed",
        indeterminate: "",
      }
    },
    compoundVariants: [
      {
        variant: "default",
        state: "checked",
        className: "border-gray-500 bg-gray-500"
      },
      {
        variant: "primary",
        state: "checked",
        className: "border-blue-500 bg-blue-500"
      },
      {
        variant: "success",
        state: "checked",
        className: "border-green-500 bg-green-500"
      },
      {
        variant: "warning",
        state: "checked",
        className: "border-yellow-500 bg-yellow-500"
      },
      {
        variant: "danger",
        state: "checked",
        className: "border-red-500 bg-red-500"
      }
    ],
    defaultVariants: {
      variant: "default",
      size: "md",
      state: "unchecked"
    }
  }
);

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof checkbox> {
  label?: string;
  indeterminate?: boolean;
}

export const Checkbox: FC<CheckboxProps> = ({
  variant,
  size,
  state,
  className,
  label,
  disabled,
  checked: controlledChecked,
  indeterminate,
  onChange,
  ...props
}) => {
  const [internalChecked, setInternalChecked] = useState(!!controlledChecked);

  // Sync internal state with controlled state if provided
  useEffect(() => {
    if (controlledChecked !== undefined) {
      setInternalChecked(controlledChecked);
    }
  }, [controlledChecked]);

  const handleClick = (e: React.MouseEvent) => {
    if (!disabled) {
      const newChecked = !internalChecked;
      setInternalChecked(newChecked);
      
      // Create a synthetic change event
      const syntheticEvent = {
        target: {
          checked: newChecked,
          name: props.name,
          value: props.value,
        },
        preventDefault: () => {},
        stopPropagation: () => {},
      } as React.ChangeEvent<HTMLInputElement>;

      onChange?.(syntheticEvent);
    }
  };

  const currentState = disabled ? "disabled" : indeterminate ? "indeterminate" : internalChecked ? "checked" : "unchecked";
  
  return (
    <label className="inline-flex items-center gap-2 cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          disabled={disabled}
          checked={internalChecked}
          onChange={() => {}} // Empty onChange to avoid React warning
          {...props}
        />
        <div 
          className={cn(checkbox({ variant, size, state: currentState, className }))}
          onClick={handleClick}
          role="checkbox"
          aria-checked={internalChecked}
          aria-disabled={disabled}
        >
          {internalChecked && !indeterminate && (
            <Check 
              className="text-white" 
              size={size === "sm" ? 12 : size === "md" ? 14 : 16}
            />
          )}
          {indeterminate && (
            <div className={cn(
              "bg-white rounded-sm",
              size === "sm" ? "h-0.5 w-2" : size === "md" ? "h-0.5 w-2.5" : "h-1 w-3"
            )} />
          )}
        </div>
      </div>
      {label && (
        <span 
          className={cn(
            "select-none",
            disabled && "opacity-50",
            size === "sm" ? "text-sm" : size === "md" ? "text-base" : "text-lg"
          )}
        >
          {label}
        </span>
      )}
    </label>
  );
};