import { ButtonHTMLAttributes, FC, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/utils";

const button = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-blue-400 text-white font-bold hover:bg-blue-300",
        primary: "bg-blue-600 text-white font-bold hover:bg-blue-500",
        success: "bg-lime-500 text-white font-bold hover:bg-lime-400",
        warning: "bg-yellow-500 text-black font-bold hover:bg-yellow-400",
        danger: "bg-red-500 text-white font-bold hover:bg-red-400",
        ghost: "hover:bg-gray-100 hover:text-gray-700"
      },
      outline: {
        true: "border border-input bg-transparent text-gray-600 hover:bg-gray-100 hover:text-gray-800"
      },
      rounded: {
        basic: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-2xl",
        full: "rounded-full"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3 text-sm",
        md: "h-11 px-8 text-lg",
        lg: "h-14 px-12 text-lg",
        full: "h-16 px-14 w-full text-2xl"
      },
      shadow: {
        true: "shadow-md hover:shadow-lg",
        false: "shadow-none"
      },
      enabled: {
        true: "",
        false: "opacity-50 pointer-events-none"
      }
    },
    compoundVariants: [
      { variant: "primary", enabled: false, className: "bg-gray-300 text-gray-500" },
      { variant: "success", enabled: false, className: "bg-gray-300 text-gray-500" },
      { variant: "warning", enabled: false, className: "bg-gray-300 text-gray-500" },
      { variant: "danger", enabled: false, className: "bg-gray-300 text-gray-500" }
    ],
    defaultVariants: {
      variant: "default",
      size: "md",
      rounded: "md",
      shadow: false,
      enabled: true
    }
  }
);

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {}

export const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant, size, rounded, outline, shadow, enabled = true, ...props }, ref) => {
    return (
      <button
        className={cn(button({ variant, size, rounded, outline, shadow, enabled, className }))}
        disabled={!enabled}
        {...props}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);
