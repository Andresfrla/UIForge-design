import { FC } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/utils";

const radioSelection = cva(
  "relative flex items-center gap-2 cursor-pointer",
  {
    variants: {
      variant: {
        default: "text-gray-900 dark:text-gray-100",
        secondary: "text-gray-600 dark:text-gray-400",
        accent: "text-primary-600 dark:text-primary-400",
      },
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
      layout: {
        horizontal: "flex-row",
        vertical: "flex-col",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      layout: "horizontal",
    }
  }
);

const radioCircle = cva(
  "relative rounded-full border-2 flex items-center justify-center transition-all",
  {
    variants: {
      variant: {
        default: "border-gray-300 dark:border-gray-600",
        secondary: "border-gray-400 dark:border-gray-500",
        accent: "border-primary-500 dark:border-primary-400",
      },
      size: {
        sm: "w-4 h-4",
        md: "w-5 h-5",
        lg: "w-6 h-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    }
  }
);

const radioInner = cva(
  "absolute rounded-full transform scale-0 transition-transform",
  {
    variants: {
      variant: {
        default: "bg-gray-900 dark:bg-gray-100",
        secondary: "bg-gray-600 dark:bg-gray-400",
        accent: "bg-primary-600 dark:bg-primary-400",
      },
      size: {
        sm: "w-2 h-2",
        md: "w-2.5 h-2.5",
        lg: "w-3 h-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    }
  }
);

export interface RadioSelectionProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof radioSelection> {
  label: string;
  description?: string;
}

export const RadioSelection: FC<RadioSelectionProps> = ({
  variant,
  size,
  layout,
  label,
  description,
  className,
  checked,
  disabled,
  ...props
}) => {
  return (
    <label
      className={cn(
        radioSelection({ variant, size, layout, className }),
        disabled && "opacity-50 cursor-not-allowed"
      )}
    >
      <div className="relative">
        <input
          type="radio"
          className="sr-only"
          checked={checked}
          disabled={disabled}
          {...props}
        />
        <div className={cn(radioCircle({ variant, size }))}>
          <div
            className={cn(
              radioInner({ variant, size }),
              checked && "scale-100"
            )}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="leading-none">{label}</span>
        {description && (
          <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {description}
          </span>
        )}
      </div>
    </label>
  );
};