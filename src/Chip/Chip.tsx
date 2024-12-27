import { ButtonHTMLAttributes, FC, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/utils";

const chip = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        filled: "bg-blue-500 text-white hover:bg-blue-600 px-5 rounded-full py-2",
        outline: "border border-gray-300 text-gray-700 hover:bg-gray-100 px-5 rounded-full py-2",
        deletable: "bg-red-500 text-white hover:bg-red-600 px-5 rounded-full py-2",
        avatarChip: "flex items-center bg-gray-100 text-gray-700 hover:bg-gray-200 px-5 rounded-full py-2",
      },
    },
  }
);

export interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof chip> {}

export const Chip: FC<ChipProps> = forwardRef<HTMLButtonElement, ChipProps>(
  ({ children, className, variant, ...props }, ref) => {
    return (
      <button
        className={cn(chip({ variant, className }))}
        {...props}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);