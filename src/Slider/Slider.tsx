import { FC, useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/utils";

const slider = cva("relative w-full flex items-center", {
  variants: {
    color: {
      blue: "bg-blue-300",
      green: "bg-green-300",
      red: "bg-red-300",
      gray: "bg-gray-300",
    },
    size: {
      sm: "h-1",  // Menor altura
      md: "h-2",  // Altura intermedia
      lg: "h-3",  // Mayor altura
    },
  },
  defaultVariants: {
    color: "blue",
    size: "md",
  },
});

export interface SliderProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color">,
    VariantProps<typeof slider> {
  min?: number;
  max?: number;
  step?: number;
  initialValue?: number;
  startLabel?: React.ReactNode;
  endLabel?: React.ReactNode;
}

export const Slider: FC<SliderProps> = ({
  min = 0,
  max = 100,
  step = 1,
  initialValue = 50,
  color = "blue",
  size = "md",
  startLabel,
  endLabel,
  className,
  ...props
}) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  return (
    <div className={cn("flex items-center gap-2 px-4", className)} {...props}>
      {startLabel && <div className="text-sm">{startLabel}</div>}
      <div className={cn(slider({ color, size }))}>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
          className={cn(
            "w-full appearance-none cursor-pointer rounded-full",
            size === "sm" && "h-1",  // Menor altura
            size === "md" && "h-2",  // Altura intermedia
            size === "lg" && "h-3",  // Mayor altura
            `bg-${color}-500`,
            "transition-all",
            "focus:outline-none",
            "hover:bg-opacity-70"
          )}
          style={{
            background: `linear-gradient(to right, ${color === "blue" ? "#60a5fa" : color === "green" ? "#4ade80" : color === "red" ? "#f87171" : "#d1d5db"} 0%, ${color === "blue" ? "#bfdbfe" : color === "green" ? "#bbf7d0" : color === "red" ? "#fecaca" : "#f3f4f6"} ${value}%, #f3f4f6 100%)`,
          }}
        />

      </div>
      {endLabel && <div className="text-sm">{endLabel}</div>}
    </div>
  );
};
