import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Containers/Card",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  component: Card,
  argTypes: {
    variant: {
      type: "string",
      options: ["default", "primary", "success", "warning", "danger", "elevated", "outlined", "flat"],
      control: "select",
      description: "Card style variants",
    },
    size: {
      type: "string",
      options: ["sm", "md", "lg"],
      control: "radio",
      description: "Card size",
    },
    shadow: {
      type: "string",
      options: ["none", "sm", "md", "lg"],
      control: "radio",
      description: "Shadow intensity",
    },
    header: {
      type: "string",
      description: "Header text for the card",
    },
    content: {
      type: "string",
      description: "Main content of the card",
    },
    footer: {
      type: "string",
      description: "Footer content for the card",
    },
    withActions: {
      type: "boolean",
      description: "Include action buttons in the footer",
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Elevated: Story = {
  args: {
    variant: "elevated",
    header: "Elevated Card",
    content: "This is an elevated card with a subtle shadow.",
    footer: "Footer content",
    withActions: true,
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    header: "Outlined Card",
    content: "This card has a border for emphasis.",
    footer: "Footer content",
    withActions: true,
  },
};

export const Flat: Story = {
  args: {
    variant: "flat",
    header: "Flat Card",
    content: "This is a flat card without elevation or borders.",
    footer: "Footer content",
    withActions: false,
  },
};

export const WithCustomContent: Story = {
  args: {
    variant: "elevated",
    header: "Custom Card",
    content: "You can customize this card's content to fit your needs.",
    footer: "Custom footer",
    withActions: true,
  },
};
