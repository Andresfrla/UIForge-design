import { FC } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/utils";

const container = cva("w-full mx-auto", {
  variants: {
    variant: {
      fluid: "px-4 sm:px-6 lg:px-8", 
      fixed: "max-w-7xl px-4 sm:px-6 lg:px-8", 
    },
  },
  defaultVariants: {
    variant: "fluid",
  },
});

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof container> {}

export const Container: FC<ContainerProps> = ({
  variant,
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn(container({ variant, className }))} {...props}>
      {children}
    </div>
  );
};
