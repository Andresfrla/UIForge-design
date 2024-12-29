import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./Slider";

const meta: Meta<typeof Slider> = {
  title: "Components/Inputs/Slider",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  component: Slider,
  argTypes: {
    min: {
      type: "number",
      description: "Minimum value of the slider",
    },
    max: {
      type: "number",
      description: "Maximum value of the slider",
    },
    step: {
      type: "number",
      description: "Step value for the slider",
    },
    initialValue: {
      type: "number",
      description: "Initial value of the slider",
    },
    color: {
      type: "string",
      options: ["blue", "green", "red", "gray"],
      control: "select",
      description: "Slider color variants",
    },
    size: {
      type: "string",
      options: ["sm", "md", "lg"],
      control: "radio",
      description: "Slider size",
    },
    startLabel: {
      type: "string",
      description: "Label or icon to display at the start of the slider",
    },
    endLabel: {
      type: "string",
      description: "Label or icon to display at the end of the slider",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    min: 0,
    max: 100,
    initialValue: 50,
    color: "blue",
    size: "md",
    startLabel: "Start",
    endLabel: "End",
  },
};

export const GreenSlider: Story = {
  args: {
    min: 0,
    max: 100,
    initialValue: 75,
    color: "green",
    size: "md",
    startLabel: "Low",
    endLabel: "High",
  },
};

export const LargeSlider: Story = {
  args: {
    min: 0,
    max: 100,
    initialValue: 30,
    color: "red",
    size: "lg",
    startLabel: "0",
    endLabel: "100",
  },
};

export const SmallSlider: Story = {
  args: {
    min: 0,
    max: 100,
    initialValue: 10,
    color: "gray",
    size: "sm",
    startLabel: "Min",
    endLabel: "Max",
  },
};

export const CustomLabels: Story = {
  args: {
    min: 0,
    max: 100,
    initialValue: 50,
    color: "blue",
    size: "md",
    startLabel: "Low Value",
    endLabel: "High Value",
  },
};
