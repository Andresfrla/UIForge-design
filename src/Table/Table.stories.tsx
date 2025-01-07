import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "./Table";

const meta: Meta<typeof Table> = {
  title: "Components/Containers/Table",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  component: Table,
  argTypes: {
    variant: {
      type: { name: "string" },
      options: ["default", "striped", "bordered", "compact"],
      control: { type: "select" },
      description: "Table style variants",
    },
    size: {
      type: { name: "string" },
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
      description: "Table size",
    },
    shadow: {
      type: { name: "string" },
      options: ["none", "sm", "md", "lg"],
      control: { type: "radio" },
      description: "Shadow intensity",
    },
    headers: {
      control: { type: "object" },
      description: "Column headers for the table",
    },
    data: {
      control: { type: "object" },
      description: "Table content, as a 2D array",
    },
    footer: {
      control: { type: "object" },
      description: "Footer content for the table",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    variant: "default",
    headers: ["Name", "Age", "Occupation"],
    data: [
      ["Alice", 30, "Engineer"],
      ["Bob", 25, "Designer"],
      ["Charlie", 35, "Teacher"],
    ],
    footer: ["Total", "", "3 entries"],
  },
};

export const Striped: Story = {
  args: {
    variant: "striped",
    headers: ["Product", "Price", "Stock"],
    data: [
      ["Laptop", "$1200", "In Stock"],
      ["Phone", "$800", "Out of Stock"],
      ["Tablet", "$600", "In Stock"],
    ],
    footer: ["", "", "End of list"],
  },
};

export const Bordered: Story = {
  args: {
    variant: "bordered",
    size: "lg",
    headers: ["Task", "Priority", "Status"],
    data: [
      ["Fix bug #123", "High", "In Progress"],
      ["Update docs", "Medium", "Completed"],
      ["Plan sprint", "Low", "Pending"],
    ],
  },
};

export const Compact: Story = {
  args: {
    variant: "compact",
    size: "sm",
    headers: ["ID", "Description", "Date"],
    data: [
      ["001", "Setup project", "2025-01-01"],
      ["002", "Create components", "2025-01-02"],
      ["003", "Write tests", "2025-01-03"],
    ],
  },
};
