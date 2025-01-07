import { FC } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/utils";

const table = cva("table-auto border-collapse w-full", {
  variants: {
    variant: {
      default: "bg-white border border-gray-200",
      striped: "bg-white [&_tr:nth-child(odd)]:bg-gray-50",
      bordered: "border border-gray-300 [&_th]:border [&_td]:border",
      compact: "bg-white text-sm",
    },
    size: {
      sm: "text-sm [&_th]:py-2 [&_td]:py-1",
      md: "text-base [&_th]:py-3 [&_td]:py-2",
      lg: "text-lg [&_th]:py-4 [&_td]:py-3",
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
    shadow: "none",
  },
});

export interface TableProps
  extends React.TableHTMLAttributes<HTMLTableElement>,
    VariantProps<typeof table> {
  headers: string[];
  data: (string | number | JSX.Element)[][];
  footer?: string[];
}

export const Table: FC<TableProps> = ({
  variant,
  size,
  shadow,
  className,
  headers,
  data,
  footer,
  ...props
}) => {
  return (
    <div className={cn("overflow-x-auto", shadow && table({ shadow }))}>
      <table className={cn(table({ variant, size, className }))} {...props}>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-4 py-2 text-left text-gray-600 font-semibold"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-4 py-2 text-gray-800"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        {footer && (
          <tfoot>
            <tr>
              {footer.map((footerCell, index) => (
                <td
                  key={index}
                  className="px-4 py-2 text-gray-600 font-medium"
                >
                  {footerCell}
                </td>
              ))}
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  );
};
