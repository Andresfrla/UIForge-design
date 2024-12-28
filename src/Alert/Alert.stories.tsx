import type { Meta, StoryObj } from "@storybook/react";
import Alert from "./Alert";

const meta: Meta<typeof Alert> = {
  title: "Components/Feedback/Alert",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  component: Alert,
  argTypes: {
    severity: {
      type: "string",
      options: ["success", "info", "warning", "error"],
      control: "select",
      description: "The severity level of the alert.",
    },
    message: {
      type: "string",
      control: "text",
      description: "The text content of the alert.",
    },
    className: {
      type: "string",
      control: "text",
      description: "Additional CSS classes for custom styling.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Success: Story = {
  args: {
    severity: "success",
    message: "This is a success alert.",
  },
};

export const Info: Story = {
  args: {
    severity: "info",
    message: "This is an info alert.",
  },
};

export const Warning: Story = {
  args: {
    severity: "warning",
    message: "This is a warning alert.",
  },
};

export const Error: Story = {
  args: {
    severity: "error",
    message: "This is an error alert.",
  },
};
