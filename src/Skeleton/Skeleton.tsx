import { FC } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/utils";

const skeleton = cva(
  "animate-pulse bg-gray-200 dark:bg-gray-700", 
  {
    variants: {
      variant: {
        default: "rounded-md",
        circular: "rounded-full",
        rectangular: "rounded-none",
      },
      animation: {
        pulse: "animate-pulse",
        wave: "animate-shimmer bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 bg-[length:400%_100%]",
        none: "",
      },
      size: {
        xs: "",
        sm: "",
        md: "",
        lg: "",
        xl: "",
        full: "w-full",
      }
    },
    defaultVariants: {
      variant: "default",
      animation: "pulse",
      size: "md",
    }
  }
);

export interface SkeletonProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeleton> {
  width?: number | string;
  height?: number | string;
}

export const Skeleton: FC<SkeletonProps> = ({
  variant,
  animation,
  size,
  width,
  height,
  className,
  ...props
}) => {
  const sizeStyles = {
    xs: { width: width || "2rem", height: height || "2rem" },
    sm: { width: width || "4rem", height: height || "4rem" },
    md: { width: width || "6rem", height: height || "6rem" },
    lg: { width: width || "8rem", height: height || "8rem" },
    xl: { width: width || "10rem", height: height || "10rem" },
    full: { width: width || "100%", height: height || "100%" },
  };

  const selectedSize = size || "md";
  const style = {
    ...sizeStyles[selectedSize as keyof typeof sizeStyles],
    width: width || sizeStyles[selectedSize as keyof typeof sizeStyles].width,
    height: height || sizeStyles[selectedSize as keyof typeof sizeStyles].height,
  };

  return (
    <div
      className={cn(skeleton({ variant, animation, size, className }))}
      style={style}
      {...props}
    />
  );
};