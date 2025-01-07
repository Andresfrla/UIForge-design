import type { Meta, StoryObj } from "@storybook/react";
import { Grid } from "./Grid";
import { ComponentProps } from "react";
import { cn } from "../utils/utils";

interface GridComponentProps extends ComponentProps<typeof Grid> {
  childrenQuantity?: number;
}

const meta: Meta<GridComponentProps> = {
  title: "Layout/Grid",
  component: Grid,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    gap: {
      control: "select",
      options: [0, 1, 2, 4, 6, 8, 10],
      description: "Controls the gap between grid items",
    },
    gapX: {
      control: "select",
      options: [0, 1, 2, 4, 6, 8, 10],
      description: "Controls the horizontal gap between items",
    },
    gapY: {
      control: "select",
      options: [0, 1, 2, 4, 6, 8, 10],
      description: "Controls the vertical gap between items",
    },
    columns: {
      control: "select",
      options: ["auto", 1, 2, 3, 4, 5, 6, 12, "none"],
      description: "Number of columns in the grid",
    },
    columnsSm: {
      control: "select",
      options: ["auto", 1, 2, 3, 4, 5, 6, 12, "none"],
      description: "Number of columns at small breakpoint",
    },
    columnsMd: {
      control: "select",
      options: ["auto", 1, 2, 3, 4, 5, 6, 12, "none"],
      description: "Number of columns at medium breakpoint",
    },
    columnsLg: {
      control: "select",
      options: ["auto", 1, 2, 3, 4, 5, 6, 12, "none"],
      description: "Number of columns at large breakpoint",
    },
    rows: {
      control: "select",
      options: ["auto", 1, 2, 3, 4, 5, 6, "none"],
      description: "Number of rows in the grid",
    },
    flow: {
      control: "select",
      options: ["row", "col", "dense", "rowDense", "colDense"],
      description: "Direction of grid item placement",
    },
    align: {
      control: "select",
      options: ["start", "center", "end", "stretch", "baseline"],
      description: "Vertical alignment of grid items",
    },
    justify: {
      control: "select",
      options: ["start", "center", "end", "stretch", "between", "around", "evenly"],
      description: "Horizontal alignment of grid items",
    },
    autoFit: {
      control: "boolean",
      description: "Enable auto-fit grid columns",
    },
    autoFill: {
      control: "boolean",
      description: "Enable auto-fill grid columns",
    },
    minChildWidth: {
      control: "text",
      description: "Minimum width of child items (e.g., '200px')",
    },
    childrenQuantity: {
      control: "number",
      description: "Number of demo items to show",
      defaultValue: 6,
    },
  },
};

export default meta;
type Story = StoryObj<GridComponentProps>;

interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const GridItem = ({ children, className, ...props }: GridItemProps) => (
  <div 
    className={cn(
      "bg-blue-100 border border-blue-200 p-4 rounded-lg flex items-center justify-center font-medium",
      className
    )}
    {...props}
  >
    {children}
  </div>
);

export const Basic: Story = {
  render: ({ childrenQuantity = 6, ...props }) => (
    <Grid {...props}>
      {Array.from({ length: childrenQuantity }, (_, i) => (
        <GridItem key={i}>{i + 1}</GridItem>
      ))}
    </Grid>
  ),
  args: {
    gap: 4,
    columns: 3,
    childrenQuantity: 6,
  },
};

export const ResponsiveColumns: Story = {
  render: () => (
    <Grid
      columns={1}
      columnsSm={2}
      columnsMd={3}
      columnsLg={4}
      gap={4}
    >
      {Array.from({ length: 8 }, (_, i) => (
        <GridItem key={i}>Responsive {i + 1}</GridItem>
      ))}
    </Grid>
  ),
};

export const AutoFitGrid: Story = {
  render: () => (
    <Grid gap={4} autoFit minChildWidth="200px">
      {Array.from({ length: 5 }, (_, i) => (
        <GridItem key={i}>Auto-fit {i + 1}</GridItem>
      ))}
    </Grid>
  ),
};

export const DifferentGaps: Story = {
  render: () => (
    <Grid columns={3} gapX={8} gapY={4}>
      {Array.from({ length: 6 }, (_, i) => (
        <GridItem key={i}>Item {i + 1}</GridItem>
      ))}
    </Grid>
  ),
};

export const DenseFlow: Story = {
  render: () => (
    <Grid columns={3} gap={4} flow="dense">
      {Array.from({ length: 6 }, (_, i) => (
        <GridItem 
          key={i} 
          style={{ gridColumn: i === 3 ? "span 2" : undefined }}
        >
          {i === 3 ? "Wide Item" : `Item ${i + 1}`}
        </GridItem>
      ))}
    </Grid>
  ),
};

export const AlignmentExample: Story = {
  render: () => (
    <Grid columns={3} gap={4} align="center" justify="between" className="h-64">
      {Array.from({ length: 6 }, (_, i) => (
        <GridItem 
          key={i} 
          className={i % 2 === 0 ? "h-20" : "h-32"}
        >
          Item {i + 1}
        </GridItem>
      ))}
    </Grid>
  ),
};