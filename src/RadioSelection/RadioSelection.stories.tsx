import type { Meta, StoryObj } from "@storybook/react";
import { RadioSelection } from "./RadioSelection";

const meta: Meta<typeof RadioSelection> = {
  title: "Components/Forms/RadioSelection",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  component: RadioSelection,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "accent"],
      description: "The visual style variant of the radio",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Size of the radio button",
    },
    layout: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "Layout direction of label and description",
    },
    label: {
      control: "text",
      description: "Label text for the radio button",
    },
    description: {
      control: "text",
      description: "Optional description text",
    },
    checked: {
      control: "boolean",
      description: "Whether the radio is checked",
    },
    disabled: {
      control: "boolean",
      description: "Whether the radio is disabled",
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioSelection>;

export const Default: Story = {
  args: {
    label: "Radio Option",
    variant: "default",
    size: "md",
  },
};

export const WithDescription: Story = {
  args: {
    label: "Radio Option",
    description: "This is a helpful description for the radio option",
    variant: "default",
    size: "md",
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <RadioSelection
        name="variant-demo"
        label="Default Variant"
        variant="default"
      />
      <RadioSelection
        name="variant-demo"
        label="Secondary Variant"
        variant="secondary"
      />
      <RadioSelection
        name="variant-demo"
        label="Accent Variant"
        variant="accent"
      />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <RadioSelection
        name="size-demo"
        label="Small Size"
        size="sm"
      />
      <RadioSelection
        name="size-demo"
        label="Medium Size"
        size="md"
      />
      <RadioSelection
        name="size-demo"
        label="Large Size"
        size="lg"
      />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <RadioSelection
        name="states-demo"
        label="Unchecked"
        checked={false}
      />
      <RadioSelection
        name="states-demo"
        label="Checked"
        checked={true}
      />
      <RadioSelection
        name="states-demo"
        label="Disabled"
        disabled
      />
      <RadioSelection
        name="states-demo"
        label="Checked & Disabled"
        checked
        disabled
      />
    </div>
  ),
};

export const RadioGroup: Story = {
  render: () => (
    <div className="space-y-2">
      <RadioSelection
        name="radio-group"
        label="Option 1"
        description="Description for option 1"
      />
      <RadioSelection
        name="radio-group"
        label="Option 2"
        description="Description for option 2"
      />
      <RadioSelection
        name="radio-group"
        label="Option 3"
        description="Description for option 3"
      />
    </div>
  ),
};