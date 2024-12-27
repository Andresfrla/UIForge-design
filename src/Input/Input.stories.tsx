import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input"; 

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Dark Knight", year: 2008 },
  { label: "Pulp Fiction", year: 1994 },
  { label: "Forrest Gump", year: 1994 },
  { label: "Inception", year: 2010 },
  { label: "The Matrix", year: 1999 },
  { label: "Se7en", year: 1995 },
];

const meta: Meta<typeof Input> = {
  title: "Components/Inputs/Input",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  component: Input,
  argTypes: {
    variant: {
      type: "string",
      options: ["default", "dropdown", "placeholder"],
      control: "select",
      description: "Input Variants",
    },
    size: {
      type: "string",
      options: ["default", "sm", "md", "lg", "full"],
      control: { type: "radio" },
      description: "Input Size",
    },
    rounded: {
      type: "string",
      options: ["basic", "sm", "md", "lg", "full"],
      control: { type: "radio" },
      description: "Input Border Radius",
    },
    shadow: {
      type: "boolean",
      description: "Box Shadow",
      control: "boolean",
    },
    enabled: {
      type: "boolean",
      description: "Enable/Disable Input",
      control: "boolean",
    },
    options: {
      control: "object",
      description: "Options for dropdown",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    variant: "default", 
    size: "default",
    rounded: "md",
    shadow: true,
    enabled: true,
  },
};

export const Dropdown: Story = {
  args: {
    variant: "dropdown",
    size: "default",
    rounded: "md",
    shadow: true,
    enabled: true,
    options: top100Films, 
  },
};

export const Placeholder: Story = {
    args: {
      variant: "placeholder",
      size: "default",
      rounded: "md",
      shadow: true,
      enabled: true,
      placeholderText: "Escribe algo aquí...",
    },
  };
