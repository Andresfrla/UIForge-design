import type { Meta, StoryObj } from "@storybook/react";
import { Loader } from "./Loader";

const meta: Meta<typeof Loader> = {
  title: "Components/Feedback/Loader",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  component: Loader,
  argTypes: {
    variant: {
      type: "string",
      options: ["default", "primary", "success", "warning", "danger"],
      control: "select",
      description: "Loader color variants",
    },
    size: {
      type: "string",
      options: ["sm", "md", "lg", "xl"],
      control: { type: "radio" },
      description: "Loader size",
    },
    shape: {
      type: "string",
      options: ["circle", "square", "rounded"],
      control: { type: "radio" },
      description: "Loader shape",
    },
    borderStyle: {
      type: "string",
      options: ["solid", "dashed", "dotted"],
      control: { type: "select" },
      description: "Loader border style",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Default: Story = {
  args: {
    variant: "default",
    size: "md",
    shape: "circle",
    borderStyle: "solid",
  },
};

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "md",
    shape: "circle",
    borderStyle: "solid",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    size: "md",
    shape: "circle",
    borderStyle: "solid",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    size: "md",
    shape: "circle",
    borderStyle: "solid",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    size: "md",
    shape: "circle",
    borderStyle: "solid",
  },
};

export const CustomSizeAndShape: Story = {
  args: {
    variant: "primary",
    size: "lg",
    shape: "rounded",
    borderStyle: "dashed",
  },
};
