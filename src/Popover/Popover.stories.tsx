import type { Meta, StoryObj } from "@storybook/react";
import { Popover } from "./Popover";

const meta: Meta<typeof Popover> = {
  title: "Components/Utils/Popover",
  tags: ["autodocs"],
  component: Popover,
  argTypes: {
    position: {
      type: "string",
      options: ["top", "bottom", "left", "right"],
      control: "select",
      description: "Popover position relative to the trigger",
    },
    variant: {
      type: "string",
      options: ["light", "dark", "primary"],
      control: "select",
      description: "Popover background and text color",
    },
    rounded: {
      type: "string",
      options: ["none", "sm", "md", "lg", "full"],
      control: "select",
      description: "Popover border radius",
    },
    trigger: {
      type: "string",
      description: "Content that triggers the popover",
    },
    isOpen: {
      type: "boolean",
      description: "Controls whether the popover is open",
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  args: {
    trigger: <button className="px-4 py-2 bg-blue-500 text-white rounded">Click Me</button>,
    position: "top",
    variant: "light",
    rounded: "md",
    isOpen: true,
    children: <p>This is a simple popover!</p>,
  },
  render: (args) => (
    <div className="h-[50vh] flex justify-center items-center">
      <Popover {...args} />
    </div>
  ),
};

export const DarkVariant: Story = {
  args: {
    trigger: <button className="px-4 py-2 bg-gray-700 text-white rounded">Click Me</button>,
    position: "bottom",
    variant: "dark",
    rounded: "lg",
    isOpen: true,
    children: <p>This is a dark-themed popover!</p>,
  },
  render: (args) => (
    <div className="h-[50vh] flex justify-center items-center">
      <Popover {...args} />
    </div>
  ),
};

export const PrimaryVariant: Story = {
  args: {
    trigger: <button className="px-4 py-2 bg-blue-600 text-white rounded">Click Me</button>,
    position: "left",
    variant: "primary",
    rounded: "full",
    isOpen: true,
    children: <p>This is a primary-colored popover!</p>,
  },
  render: (args) => (
    <div className="h-[50vh] flex justify-center items-center">
      <Popover {...args} />
    </div>
  ),
};

export const NoRadius: Story = {
  args: {
    trigger: <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded">Click Me</button>,
    position: "right",
    variant: "light",
    rounded: "none",
    isOpen: true,
    children: <p>This popover has no rounded corners!</p>,
  },
  render: (args) => (
    <div className="h-[50vh] flex justify-center items-center">
      <Popover {...args} />
    </div>
  ),
};

export const CustomTrigger: Story = {
  args: {
    trigger: <div className="flex items-center space-x-2 cursor-pointer"><span className="font-bold">Hover Me</span><span className="text-sm text-gray-500">To show popover</span></div>,
    position: "top",
    variant: "primary",
    rounded: "sm",
    isOpen: true,
    children: <p>This popover uses a custom trigger!</p>,
  },
  render: (args) => (
    <div className="h-[50vh] flex justify-center items-center">
      <Popover {...args} />
    </div>
  ),
};
