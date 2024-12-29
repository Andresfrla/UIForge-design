import { FC } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/utils";

const loader = cva("inline-block animate-spin", {
  variants: {
    variant: {
      default: "text-gray-500",
      primary: "text-blue-600",
      success: "text-lime-500",
      warning: "text-yellow-500",
      danger: "text-red-500"
    },
    size: {
      sm: "h-4 w-4 border-2",
      md: "h-6 w-6 border-2",
      lg: "h-8 w-8 border-4",
      xl: "h-10 w-10 border-4"
    },
    shape: {
      circle: "rounded-full",
      square: "rounded-none",
      rounded: "rounded-md"
    },
    borderStyle: {
      solid: "border-solid",
      dashed: "border-dashed",
      dotted: "border-dotted"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    shape: "circle",
    borderStyle: "solid"
  }
});

export interface LoaderProps
  extends React.HTMLAttributes<HTMLDivElement>, 
    VariantProps<typeof loader> {}

export const Loader: FC<LoaderProps> = ({ variant, size, shape, borderStyle, className, ...props }) => {
  return (
    <div
      className={cn(
        loader({ variant, size, shape, borderStyle, className }),
        "border-transparent border-t-current"
      )}
      {...props}
    />
  );
};
