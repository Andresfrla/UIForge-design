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
    gapX: {
      0: "gap-x-0",
      1: "gap-x-1",
      2: "gap-x-2",
      4: "gap-x-4",
      6: "gap-x-6",
      8: "gap-x-8",
      10: "gap-x-10",
    },
    gapY: {
      0: "gap-y-0",
      1: "gap-y-1",
      2: "gap-y-2",
      4: "gap-y-4",
      6: "gap-y-6",
      8: "gap-y-8",
      10: "gap-y-10",
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
      none: "grid-cols-none",
    },
    columnsSm: {
      auto: "sm:grid-cols-auto",
      1: "sm:grid-cols-1",
      2: "sm:grid-cols-2",
      3: "sm:grid-cols-3",
      4: "sm:grid-cols-4",
      5: "sm:grid-cols-5",
      6: "sm:grid-cols-6",
      12: "sm:grid-cols-12",
      none: "sm:grid-cols-none",
    },
    columnsMd: {
      auto: "md:grid-cols-auto",
      1: "md:grid-cols-1",
      2: "md:grid-cols-2",
      3: "md:grid-cols-3",
      4: "md:grid-cols-4",
      5: "md:grid-cols-5",
      6: "md:grid-cols-6",
      12: "md:grid-cols-12",
      none: "md:grid-cols-none",
    },
    columnsLg: {
      auto: "lg:grid-cols-auto",
      1: "lg:grid-cols-1",
      2: "lg:grid-cols-2",
      3: "lg:grid-cols-3",
      4: "lg:grid-cols-4",
      5: "lg:grid-cols-5",
      6: "lg:grid-cols-6",
      12: "lg:grid-cols-12",
      none: "lg:grid-cols-none",
    },
    rows: {
      auto: "grid-rows-auto",
      1: "grid-rows-1",
      2: "grid-rows-2",
      3: "grid-rows-3",
      4: "grid-rows-4",
      5: "grid-rows-5",
      6: "grid-rows-6",
      none: "grid-rows-none",
    },
    flow: {
      row: "grid-flow-row",
      col: "grid-flow-col",
      dense: "grid-flow-dense",
      rowDense: "grid-flow-row-dense",
      colDense: "grid-flow-col-dense",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
      baseline: "items-baseline",
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      stretch: "justify-stretch",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
    },
    autoFit: {
      true: "grid-cols-[repeat(auto-fit,minmax(0,1fr))]",
      false: "",
    },
    autoFill: {
      true: "grid-cols-[repeat(auto-fill,minmax(0,1fr))]",
      false: "",
    },
  },
  defaultVariants: {
    gap: 4,
    columns: 1,
    rows: "auto",
    align: "stretch",
    justify: "stretch",
    flow: "row",
    autoFit: false,
    autoFill: false,
  },
});

export type GridProps<C extends ElementType = "div"> = PolymorphicComponentPropsWithRef<
  C,
  VariantProps<typeof gridStyles> & {
    minChildWidth?: string;
  }
>;

export type GridComponent = <C extends ElementType = "div">(
  props: GridProps<C>
) => ReactElement | null;

export const Grid: GridComponent = forwardRef(function Grid<C extends ElementType = "div">(
  {
    as,
    children,
    gap,
    gapX,
    gapY,
    columns,
    columnsSm,
    columnsMd,
    columnsLg,
    rows,
    flow,
    align,
    justify,
    autoFit,
    autoFill,
    minChildWidth,
    className,
    style,
    ...props
  }: GridProps<C>,
  ref: Ref<HTMLDivElement>
) {
  const Component = as || "div";

  const gridTemplateColumns = minChildWidth
    ? { gridTemplateColumns: `repeat(auto-fit, minmax(${minChildWidth}, 1fr))` }
    : {};

  return (
    <Component
      className={cn(
        gridStyles({
          gap,
          gapX,
          gapY,
          columns,
          columnsSm,
          columnsMd,
          columnsLg,
          rows,
          flow,
          align,
          justify,
          autoFit,
          autoFill,
        }),
        className
      )}
      style={{ ...gridTemplateColumns, ...style }}
      {...props}
      ref={ref}
    >
      {children}
    </Component>
  );
}) as GridComponent;