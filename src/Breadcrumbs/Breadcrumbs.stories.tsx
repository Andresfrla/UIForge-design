import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumbs } from "./Breadcrumbs";
import { FaHome, FaFolder, FaFile } from "react-icons/fa";

const meta: Meta<typeof Breadcrumbs> = {
  title: "Components/Navigation/Breadcrumbs",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  component: Breadcrumbs,
  argTypes: {
    separator: {
      type: "string",
      options: ["dash", "slash", "arrow"],
      control: "select",
      description: "Separator style between breadcrumb items",
    },
    onItemClick: {
      action: "clicked",
      description: "Handler for breadcrumb item clicks",
    },
    items: {
      description: "Array of breadcrumb items",
      control: { type: "object" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  args: {
    items: [
      { label: "Home", icon: <FaHome /> },
      { label: "Projects", icon: <FaFolder /> },
      { label: "Current", active: true, icon: <FaFile /> },
    ],
    separator: "slash",
  },
};

export const WithIcons: Story = {
  args: {
    items: [
      { label: "Home", icon: <FaHome /> },
      { label: "Documents", icon: <FaFolder /> },
      { label: "File", active: true, icon: <FaFile /> },
    ],
    separator: "arrow",
  },
};

export const WithoutIcons: Story = {
  args: {
    items: [
      { label: "Home" },
      { label: "Category" },
      { label: "Page", active: true },
    ],
    separator: "dash",
  },
};

export const LongBreadcrumbs: Story = {
  args: {
    items: [
      { label: "Home", icon: <FaHome /> },
      { label: "Category" },
      { label: "Subcategory" },
      { label: "Current Page", active: true },
    ],
    separator: "arrow",
  },
};

export const Clickable: Story = {
  args: {
    items: [
      { label: "Home", icon: <FaHome /> },
      { label: "Projects", icon: <FaFolder /> },
      { label: "Current", active: true },
    ],
    separator: "slash",
  },
};
