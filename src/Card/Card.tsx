import { FC } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/utils";

const card = cva("rounded-lg shadow-md overflow-hidden", {
  variants: {
    variant: {
      default: "bg-white border border-gray-200",
      primary: "bg-blue-50 border border-blue-200",
      success: "bg-green-50 border border-green-200",
      warning: "bg-yellow-50 border border-yellow-200",
      danger: "bg-red-50 border border-red-200",
      elevated: "bg-white shadow-lg border border-gray-300", // Nueva variante elevated
      outlined: "bg-white border border-gray-400", // Variante outlined
      flat: "bg-gray-50", // Variante flat
    },
    size: {
      sm: "p-4 text-sm",
      md: "p-6 text-base",
      lg: "p-8 text-lg",
    },
    shadow: {
      none: "shadow-none",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    shadow: "md",
  },
});

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof card> {
  header?: string;
  content?: string;
  footer?: string;
  withActions?: boolean;
}

export const Card: FC<CardProps> = ({
  variant,
  size,
  shadow,
  className,
  header,
  content,
  footer,
  withActions,
  children,
  ...props
}) => {
  return (
    <div className={cn(card({ variant, size, shadow, className }))} {...props}>
      {header && (
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold">{header}</h2>
        </div>
      )}
      {content && <div className="p-4">{content}</div>}
      {children}
      {footer && (
        <div className="p-4 border-t border-gray-200">
          {footer}
          {withActions && (
            <div className="flex justify-end gap-2 mt-2">
              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600">
                Action 1
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded hover:bg-gray-300">
                Action 2
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
