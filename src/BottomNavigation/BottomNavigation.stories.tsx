import type { Meta, StoryObj } from "@storybook/react";
import BottomNavigation from "./BottomNavigation";
import { FaHome, FaHeart, FaMapMarkerAlt } from "react-icons/fa";

const meta: Meta<typeof BottomNavigation> = {
  title: "Components/Navigation/BottomNavigation",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  component: BottomNavigation,
  argTypes: {
    items: {
      control: { type: "object" },
      description: "Array of navigation items with label and icon",
    },
    size: {
      type: "string",
      options: ["small", "medium", "large"],
      control: "radio",
      description: "Size of the navigation buttons",
    },
    color: {
      type: "string",
      options: ["primary", "secondary", "danger"],
      control: "select",
      description: "Color theme for the navigation buttons",
    },
    onChange: {
      action: "changed",
      description: "Callback function triggered when a navigation item is selected",
    },
  },
};

export default meta;
type Story = StoryObj<typeof BottomNavigation>;

export const Default: Story = {
  args: {
    items: [
      { label: "Home", icon: <FaHome size={24} /> },
      { label: "Favorites", icon: <FaHeart size={24} /> },
      { label: "Nearby", icon: <FaMapMarkerAlt size={24} /> },
    ],
    size: "medium",
    color: "primary",
  },
};

export const LargeWithSecondaryColor: Story = {
  args: {
    items: [
      { label: "Home", icon: <FaHome size={24} /> },
      { label: "Favorites", icon: <FaHeart size={24} /> },
      { label: "Nearby", icon: <FaMapMarkerAlt size={24} /> },
    ],
    size: "large",
    color: "secondary",
  },
};

export const SmallWithDangerColor: Story = {
  args: {
    items: [
      { label: "Home", icon: <FaHome size={24} /> },
      { label: "Favorites", icon: <FaHeart size={24} /> },
      { label: "Nearby", icon: <FaMapMarkerAlt size={24} /> },
    ],
    size: "small",
    color: "danger",
  },
};
