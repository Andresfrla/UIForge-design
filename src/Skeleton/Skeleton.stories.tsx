import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Feedback/Skeleton",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  component: Skeleton,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "circular", "rectangular"],
      description: "The shape of the skeleton",
    },
    animation: {
      control: "select",
      options: ["pulse", "wave", "none"],
      description: "Animation type",
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "full"],
      description: "Predefined sizes",
    },
    width: {
      control: "text",
      description: "Custom width (overrides size)",
    },
    height: {
      control: "text",
      description: "Custom height (overrides size)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

// Basic examples
export const Default: Story = {
  args: {
    variant: "default",
    animation: "pulse",
    size: "md",
  },
};

export const Shapes: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Skeleton variant="default" size="md" />
      <Skeleton variant="circular" size="md" />
      <Skeleton variant="rectangular" size="md" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-end">
      <Skeleton size="xs" />
      <Skeleton size="sm" />
      <Skeleton size="md" />
      <Skeleton size="lg" />
      <Skeleton size="xl" />
    </div>
  ),
};

export const Animations: Story = {
  render: () => (
    <div className="flex gap-4">
      <Skeleton animation="pulse" size="md" />
      <Skeleton animation="wave" size="md" />
      <Skeleton animation="none" size="md" />
    </div>
  ),
};

// Common use cases
export const TextContent: Story = {
  render: () => (
    <div className="space-y-4 w-[300px]">
      <Skeleton variant="rectangular" height={24} width="60%" />
      <div className="space-y-2">
        <Skeleton variant="rectangular" height={10} />
        <Skeleton variant="rectangular" height={10} />
        <Skeleton variant="rectangular" height={10} width="80%" />
      </div>
    </div>
  ),
};

export const CardContent: Story = {
  render: () => (
    <div className="w-[300px] space-y-4 p-4 border rounded-lg">
      <Skeleton variant="rectangular" height={200} />
      <div className="space-y-2">
        <Skeleton variant="rectangular" height={20} width="80%" />
        <Skeleton variant="rectangular" height={10} />
        <Skeleton variant="rectangular" height={10} />
      </div>
      <div className="flex gap-2">
        <Skeleton variant="circular" size="sm" />
        <div className="flex-1">
          <Skeleton variant="rectangular" height={10} />
        </div>
      </div>
    </div>
  ),
};

export const ProfileCard: Story = {
  render: () => (
    <div className="flex gap-4 items-center p-4 border rounded-lg">
      <Skeleton variant="circular" size="lg" />
      <div className="space-y-2">
        <Skeleton variant="rectangular" height={20} width={120} />
        <Skeleton variant="rectangular" height={10} width={200} />
      </div>
    </div>
  ),
};

export const CustomSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Skeleton width={150} height={30} />
      <Skeleton width="200px" height="50px" />
      <Skeleton width="75%" height={40} />
    </div>
  ),
};