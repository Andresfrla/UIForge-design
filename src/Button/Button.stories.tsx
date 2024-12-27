import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Inputs/Button",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  component: Button,
  argTypes: {
    children: {
      description: "The button label",
      control: "text",
    },
    variant: {
      type: "string",
      options: ["default", "primary", "success", "warning", "danger", "ghost"],
      control: "select",
      description: "Colors Variants",
    },
    outline: {
      type: "boolean",
      description: "Button Outline",
      control: "boolean",
    },
    size: {
      type: "string",
      options: ["sm", "md", "lg", "full"],
      control: { type: "radio" },
      description: "Button Size",
    },
    rounded: {
      type: "string",
      options: ["basic", "sm", "md", "lg", "full"],
      control: { type: "radio" },
      description: "Button Border Radius",
    },
    shadow: {
      type: "boolean",
      description: "Box Shadow",
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Default Button",
    variant: "default",
    size: "md",
    rounded: "md",
    outline: false,
    shadow: false,
  },
};

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
    size: "md",
    rounded: "md",
    outline: false,
    shadow: true,
  },
};

export const Success: Story = {
  args: {
    children: "Success Button",
    variant: "success",
    size: "md",
    rounded: "md",
    outline: false,
    shadow: true,
  },
};

export const Warming: Story = {
  args: {
    children: "Warning Button",
    variant: "warning",
    size: "md",
    rounded: "md",
    outline: false,
    shadow: true,
  },
};

export const Danger: Story = {
  args: {
    children: "Danger Button",
    variant: "danger",
    size: "md",
    rounded: "md",
    outline: false,
    shadow: true,
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost Button",
    variant: "ghost",
    size: "md",
    rounded: "md",
    outline: false,
    shadow: true,
  },
};
