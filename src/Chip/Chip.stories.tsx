import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "./Chip";

const meta: Meta<typeof Chip> = {
  title: "Components/Display/Chip",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  component: Chip,
  argTypes: {
    children: {
      description: "The chip label",
      control: "text",
    },
    variant: {
      type: "string",
      options: ["filled", "outline", "deletable", "avatarChip"],
      control: "select",
      description: "Chip Variants",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Filled: Story = {
  args: {
    children: "Filled Chip",
    variant: "filled",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline Chip",
    variant: "outline",
  },
};

export const Deletable: Story = {
  args: {
    children: "Deletable Chip",
    variant: "deletable",
  },
};

export const AvatarChip: Story = {
  args: {
    children: (
      <span className="flex items-center">
        <span className="inline-block h-6 w-6 rounded-full bg-gray-400 mr-2" />
        Avatar Chip
      </span>
    ),
    variant: "avatarChip",
  },
};
