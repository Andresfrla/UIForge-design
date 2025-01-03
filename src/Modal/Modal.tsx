import { FC, ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../utils/utils";

const modal = cva(
  "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50",
  {
    variants: {
      rounded: {
        none: "",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      rounded: "md",
    },
  }
);

const modalContent = cva("bg-white p-6 shadow-lg", {
  variants: {
    rounded: {
      none: "",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    rounded: "md",
  },
});

export interface ModalProps extends VariantProps<typeof modal> {
  isOpen: boolean;
  title?: string;
  description?: string;
  withActions?: boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
  children?: ReactNode;
}

export const Modal: FC<ModalProps> = ({
  isOpen,
  title,
  description,
  withActions,
  onConfirm,
  onCancel,
  rounded,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className={cn(modal({ rounded }))}>
      <div className={cn(modalContent({ rounded }))}>
        {title && <h2 className="text-lg font-bold mb-2">{title}</h2>}
        {description && <p className="text-sm text-gray-600 mb-4">{description}</p>}
        {children}
        {withActions && (
          <div className="mt-4 flex justify-end gap-2">
            <button
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
              onClick={onCancel}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={onConfirm}
            >
              Confirm
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
