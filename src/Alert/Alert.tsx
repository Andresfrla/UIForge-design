import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../utils/utils";
import { FaCheckCircle, FaInfoCircle, FaExclamationCircle, FaTimesCircle } from "react-icons/fa";

const alertStyles = cva(
  "flex items-center gap-4 p-4 rounded-md text-sm font-medium",
  {
    variants: {
      severity: {
        success: "bg-green-100 text-green-700 border border-green-300",
        info: "bg-blue-100 text-blue-700 border border-blue-300",
        warning: "bg-yellow-100 text-yellow-800 border border-yellow-300",
        error: "bg-red-100 text-red-700 border border-red-300",
      },
    },
    defaultVariants: {
      severity: "info",
    },
  }
);

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertStyles> {
  message: string;
}

const Alert: React.FC<AlertProps> = ({ severity, message, className, ...props }) => {
  const icons = {
    success: <FaCheckCircle className="text-green-700" />,
    info: <FaInfoCircle className="text-blue-700" />,
    warning: <FaExclamationCircle className="text-yellow-800" />,
    error: <FaTimesCircle className="text-red-700" />,
  };

  return (
    <div className={cn(alertStyles({ severity }), className)} {...props}>
      {icons[severity || "info"]}
      <span>{message}</span>
    </div>
  );
};

export const AlertList: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <Alert severity="success" message="This is a success alert." />
      <Alert severity="info" message="This is an info alert." />
      <Alert severity="warning" message="This is a warning alert." />
      <Alert severity="error" message="This is an error alert." />
    </div>
  );
};

export default Alert;
