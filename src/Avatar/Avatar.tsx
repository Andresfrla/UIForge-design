import React, { forwardRef, Ref } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../utils/utils";

const avatarStyles = cva(
  "inline-flex items-center justify-center rounded-full overflow-hidden bg-gray-200 text-sm font-medium text-gray-800 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      size: {
        sm: "h-8 w-8 text-xs",
        md: "h-10 w-10 text-sm",
        lg: "h-12 w-12 text-base",
        xl: "h-16 w-16 text-lg",
      },
      border: {
        true: "ring-2 ring-gray-300",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      border: false,
    },
  }
);

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarStyles> {
  src?: string;
  alt?: string;
  fallback?: string; // Fallback text (e.g., initials)
}

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  (
    { size, border, src, alt, fallback, className, ...props },
    ref: Ref<HTMLDivElement>
  ) => {
    return (
      <div
        className={cn(avatarStyles({ size, border }), className)}
        ref={ref}
        {...props}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover"
          />
        ) : (
          <span>{fallback || "?"}</span>
        )}
      </div>
    );
  }
);

Avatar.displayName = "Avatar";

export default Avatar;
