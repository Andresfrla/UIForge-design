import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "./Container";

const meta: Meta<typeof Container> = {
  title: "Components/Containers/Container",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  component: Container,
  argTypes: {
    variant: {
      type: "string",
      options: ["fluid", "fixed"],
      control: "radio",
      description: "Container layout variants",
    },
    children: {
      type: "string",
      description: "Content to display inside the container",
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Fluid: Story = {
  args: {
    variant: "fluid",
    children: "This is a fluid container that adapts to the screen width.",
  },
};

export const Fixed: Story = {
  args: {
    variant: "fixed",
    children: "This is a fixed container with a maximum width.",
  },
};

export const WithCustomContent: Story = {
  args: {
    variant: "fixed",
    children: (
      <div>
        <h1 className="text-xl font-bold">Custom Content</h1>
        <p>This container can hold custom React components.</p>
      </div>
    ),
  },
};
