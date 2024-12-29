import type { Meta, StoryObj } from "@storybook/react";
import { Grid } from "./Grid";
import { ComponentProps } from "react";

interface GridComponentProps extends ComponentProps<typeof Grid> {
  childrenQuantity?: number;
}

const meta: Meta<GridComponentProps> = {
  title: "Layout/Grid",
  component: Grid,
  tags: ["autodocs"],
  argTypes: {
    gap: {
      type: "string",
      control: "select",
      options: [0, 1, 2, 4, 6, 8, 10],
      description: "Controls the gap between grid items.",
      defaultValue: 4
    },
    columns: {
      type: "string",
      control: "select",
      options: ["auto", 1, 2, 3, 4, 5, 6, 12],
      description: "Defines the number of columns in the grid.",
      defaultValue: "auto"
    },
    rows: {
      type: "string",
      control: "select",
      options: ["auto", 1, 2, 3, 4, 5],
      description: "Defines the number of rows in the grid.",
      defaultValue: "auto"
    },
    align: {
      type: "string",
      control: "select",
      options: ["start", "center", "end", "stretch"],
      description: "Aligns items along the vertical axis within the grid.",
      defaultValue: "stretch"
    },
    justify: {
      type: "string",
      control: "select",
      options: ["start", "center", "end", "stretch", "space-between", "space-around", "space-evenly"],
      description: "Aligns items along the horizontal axis within the grid.",
      defaultValue: "stretch"
    },
    childrenQuantity: {
      control: "number",
      description: "Specifies the number of child elements to render inside the grid.",
      defaultValue: 6
    },
    ref: {
      table: {
        disable: true
      }
    }
  }
};

export default meta;
type Story = StoryObj<GridComponentProps>;

const GridComponent: Story = {
  render: ({ childrenQuantity, ...props }) => (
    <Grid {...props}>
      {[...Array(childrenQuantity).keys()].map(n => (
        <div key={n} className="w-16 h-16 bg-blue-400/20 flex items-center justify-center text-xl font-bold">
          {n + 1}
        </div>
      ))}
    </Grid>
  )
};

export const Default: Story = {
  ...GridComponent,
  args: {
    gap: 4,
    columns: "auto",
    rows: "auto",
    align: "stretch",
    justify: "stretch",
    childrenQuantity: 6
  }
};
