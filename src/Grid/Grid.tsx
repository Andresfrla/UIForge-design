import { VariantProps, cva } from "class-variance-authority";
import { ElementType, forwardRef, ReactElement, Ref } from "react";
import { cn } from "../utils/utils";
import { PolymorphicComponentPropsWithRef } from "../utils/polmorphicsTypes";

const gridStyles = cva("grid w-full", {
  variants: {
    gap: {
      0: "gap-0",
      1: "gap-1",
      2: "gap-2",
      4: "gap-4",
      6: "gap-6",
      8: "gap-8",
      10: "gap-10",
    },
    columns: {
      auto: "grid-cols-auto",
      1: "grid-cols-1",
      2: "grid-cols-2",
      3: "grid-cols-3",
      4: "grid-cols-4",
      5: "grid-cols-5",
      6: "grid-cols-6",
      12: "grid-cols-12",
    },
    rows: {
      auto: "grid-rows-auto",
      1: "grid-rows-1",
      2: "grid-rows-2",
      3: "grid-rows-3",
      4: "grid-rows-4",
      5: "grid-rows-5",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      stretch: "justify-stretch",
      "space-between": "justify-between",
      "space-around": "justify-around",
      "space-evenly": "justify-evenly",
    },
  },
  defaultVariants: {
    gap: 4,
    columns: "auto",
    rows: "auto",
    align: "stretch",
    justify: "stretch",
  },
});

export type GridProps<C extends ElementType = "div"> = PolymorphicComponentPropsWithRef<
  C,
  VariantProps<typeof gridStyles>
>;

export type GridComponent = <C extends ElementType = "div">(props: GridProps<C>) => ReactElement | null;

export const Grid: GridComponent = forwardRef(function Grid<C extends ElementType = "div">(
  { as, children, gap, columns, rows, align, justify, className, ...props }: GridProps<C>,
  ref: Ref<HTMLDivElement>
) {
  const Component = as || "div";

  return (
    <Component
      className={cn(
        gridStyles({
          gap,
          columns,
          rows,
          align,
          justify,
        }),
        className
      )}
      {...props}
      ref={ref}
    >
      {children}
    </Component>
  );
}) as GridComponent;
