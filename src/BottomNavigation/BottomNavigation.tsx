import React, { useState } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../utils/utils";
import { FaHome, FaHeart, FaMapMarkerAlt } from "react-icons/fa";

const navigationStyles = cva("flex justify-around items-center w-full py-2 rounded-md", {
  variants: {
    size: {
      small: "text-sm",
      medium: "text-base",
      large: "text-lg",
    },
    color: {
      primary: "text-blue-600",
      secondary: "text-gray-600",
      danger: "text-red-600",
    },
  },
  defaultVariants: {
    size: "medium",
    color: "primary",
  },
});

export interface BottomNavigationProps
  extends VariantProps<typeof navigationStyles> {
  items: { label: string; icon: JSX.Element }[];
  onChange?: (index: number) => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({
  items,
  size,
  color,
  onChange,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = (index: number) => {
    setSelectedIndex(index);
    if (onChange) onChange(index);
  };

  return (
    <div className={cn(navigationStyles({ size, color }))}>
      {items.map((item, index) => (
        <button
          key={index}
          onClick={() => handleClick(index)}
          className={cn(
            "flex flex-col items-center gap-1 px-4 py-2", 
            index === selectedIndex && "font-bold underline"
          )}
        >
          {item.icon}
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export const ExampleBottomNavigation: React.FC = () => {
  const items = [
    { label: "Home", icon: <FaHome size={24} /> },
    { label: "Favorites", icon: <FaHeart size={24} /> },
    { label: "Nearby", icon: <FaMapMarkerAlt size={24} /> },
  ];

  return (
    <BottomNavigation
      items={items}
      size="medium"
      color="primary"
      onChange={(index) => console.log("Selected index:", index)}
    />
  );
};

export default BottomNavigation;
