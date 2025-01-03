import { FC } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/utils";
import { Chip } from "../Chip/Chip"; // Importa el componente de Chip que ya tienes

const breadcrumbs = cva("", {
  variants: {
    separator: {
      dash: "-",
      slash: "/",
      arrow: ">",
    },
  },
});

export interface BreadcrumbsProps extends VariantProps<typeof breadcrumbs> {
  items: {
    label: string;
    active?: boolean;
    icon?: React.ReactNode;
  }[];
  separator?: "dash" | "slash" | "arrow";
  onItemClick?: (index: number) => void;
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({
  items,
  separator = "slash",
  onItemClick,
}) => {
  const separatorSymbol = {
    dash: "-",
    slash: "/",
    arrow: ">",
  }[separator];

  return (
    <nav className="flex items-center space-x-2">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <Chip
            variant={item.active ? "filled" : "outline"}
            onClick={() => onItemClick?.(index)}
            className={cn(
              item.active && "font-bold underline",
              "flex items-center space-x-2"
            )}
          >
            {item.icon && <span className="mr-2">{item.icon}</span>}
            {item.label}
          </Chip>
          {index < items.length - 1 && (
            <span className="mx-2 text-gray-500">{separatorSymbol}</span>
          )}
        </div>
      ))}
    </nav>
  );
};
