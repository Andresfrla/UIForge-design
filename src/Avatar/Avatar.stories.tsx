import type { Meta, StoryObj } from "@storybook/react";
import Avatar from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Display/Avatar",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  component: Avatar,
  argTypes: {
    size: {
      description: "Size of the avatar",
      type: "string",
      options: ["sm", "md", "lg", "xl"],
      control: "select",
    },
    border: {
      description: "Adds a border to the avatar",
      type: "boolean",
      control: "boolean",
    },
    src: {
      description: "URL of the avatar image",
      control: "text",
    },
    fallback: {
      description: "Fallback text if no image is provided",
      control: "text",
    },
    alt: {
      description: "Alt text for the avatar image",
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    size: "md",
    border: false,
    fallback: "AF",
    alt: "User Avatar",
  },
};

export const WithImage: Story = {
  args: {
    size: "lg",
    border: true,
    src: "https://via.placeholder.com/150",
    alt: "User Avatar",
  },
};

export const FallbackText: Story = {
  args: {
    size: "md",
    border: false,
    fallback: "AB",
  },
};

export const LargeAvatar: Story = {
  args: {
    size: "xl",
    border: true,
    fallback: "XL",
  },
};

export const SmallAvatar: Story = {
  args: {
    size: "sm",
    border: false,
    fallback: "SM",
  },
};
