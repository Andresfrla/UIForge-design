import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    as: {
      control: "text",
      description: "The HTML tag to render the text as (e.g., p, span, h1).",
    },
    children: {
      control: "text",
      description: "The content to be displayed inside the text component.",
    },
    emphasis: {
      control: { type: "radio" },
      options: ["low"],
      description: "The emphasis style of the text.",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "base", "lg", "xl", "2xl", "3xl"],
      description: "The size of the text.",
    },
    weight: {
      control: { type: "select" },
      options: ["thin", "normal", "medium", "semibold", "bold", "black"],
      description: "The font weight of the text.",
    },
    align: {
      control: { type: "radio" },
      options: ["left", "center", "right"],
      description: "The alignment of the text.",
    },
    italic: {
      control: "boolean",
      description: "Apply italic styling to the text.",
    },
    underline: {
      control: "boolean",
      description: "Apply underline styling to the text.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    as: "p",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem animi eveniet minima adipisci. Exercitationem corporis eum qui quisquam. Accusamus voluptatum voluptas nobis omnis autem tenetur rem suscipit reprehenderit enim facilis!",
    size: "base",
    align: "left",
    weight: "normal",
    italic: false,
    underline: false,
  },
};

export const EmphasisLow: Story = {
  args: {
    as: "p",
    children: "This is a paragraph with low emphasis styling.",
    emphasis: "low",
    size: "base",
    weight: "thin",
    align: "left",
  },
};

export const LargeBoldCentered: Story = {
  args: {
    as: "h1",
    children: "This is a large, bold, and centered heading.",
    size: "3xl",
    weight: "bold",
    align: "center",
    underline: true,
  },
};

export const ItalicUnderlined: Story = {
  args: {
    as: "p",
    children: "This text is italic and underlined.",
    size: "lg",
    weight: "medium",
    italic: true,
    underline: true,
  },
};

export const RightAlignedBlack: Story = {
  args: {
    as: "p",
    children: "This text is right-aligned and has the blackest weight.",
    size: "xl",
    weight: "black",
    align: "right",
  },
};
