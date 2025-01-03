import { FC, useState, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/utils";

const popover = cva(
  "absolute z-50 p-4 bg-white shadow-md rounded border",
  {
    variants: {
      position: {
        top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
        bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
        left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
        right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
      },
      variant: {
        light: "bg-white text-gray-800 border-gray-300",
        dark: "bg-gray-800 text-white border-gray-700",
        primary: "bg-blue-50 text-blue-900 border-blue-200",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      position: "top",
      variant: "light",
      rounded: "md",
    },
  }
);

export interface PopoverProps
  extends VariantProps<typeof popover> {
  isOpen: boolean;
  onClose: () => void;
  trigger: ReactNode;
  children: ReactNode;
  className?: string;
}

export const Popover: FC<PopoverProps> = ({
  isOpen,
  onClose,
  trigger,
  children,
  position,
  variant,
  rounded,
  className,
}) => {
  const [open, setOpen] = useState(isOpen);

  const togglePopover = () => {
    setOpen(!open);
    if (!open) onClose();
  };

  return (
    <div className="relative inline-block">
      <div onClick={togglePopover} className="cursor-pointer">
        {trigger}
      </div>
      {open && (
        <div
          className={cn(popover({ position, variant, rounded, className }))}
        >
          {children}
        </div>
      )}
    </div>
  );
};
