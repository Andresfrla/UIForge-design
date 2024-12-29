import type { Meta, StoryObj } from "@storybook/react";
import { Stack } from "./Stack";
import { ComponentProps } from "react";

interface StackComponentProps extends ComponentProps<typeof Stack> {
  childrenQuantity?: number;
}

const meta: Meta<StackComponentProps> = {
  title: "Layout/Stack",
  component: Stack,
  tags: ["autodocs"],
  argTypes: {
    as: {
      description: "By default renders a 'div' but be free to change the element by whatever you want"
    },
    gap: {
      type: "string",
      control: "select",
      options: [0, 1, 2, 4, 6, 8, 10],
      description: "Controls the gap between child elements.",
      defaultValue: 4
    },
    direction: {
      control: "select",
      type: "string",
      options: ["row", "row-reverse", "column", "column-reverse"],
      description: "Defines the flex direction of the Stack.",
      defaultValue: "row"
    },
    align: {
      type: "string",
      control: "select",
      options: ["start", "center", "end", "stretch", "baseline"],
      description: "Aligns items on the cross axis. Remember to use this you have to set a heigh for the cross axis",
      defaultValue: "stretch"
    },
    alignContent: {
      type: "string",
      control: "select",
      options: ["start", "center", "end", "stretch", "space-between", "space-around", "space-evenly"],
      description: "Aligns a flex container's lines within it when there is extra space in the cross-axis.",
      defaultValue: "stretch"
    },
    childrenQuantity: {
      control: "number",
      description: "Specifies the number of child elements to render.",
      defaultValue: 3
    },
    className: {
      description: "Prefer tailwind Classes, but custom classes also can be used"
    },
    ref: {
      table: {
        disable: true
      }
    }
  }
};

export default meta;
type Story = StoryObj<StackComponentProps>;

const StackComponent: Story = {
  render: ({ childrenQuantity, ...props }) => (
    <Stack {...props}>
      {[...Array(childrenQuantity).keys()].map(n => (
        <div key={n} className="w-32 h-10 bg-blue-400/20 flex items-center justify-center text-3xl font-bold">
          {n + 1}
        </div>
      ))}
    </Stack>
  )
};

export const Default: Story = {
  ...StackComponent,
  args: {
    gap: 4,
    direction: "row",
    align: "stretch",
    alignContent: "stretch",
    childrenQuantity: 3
  }
};