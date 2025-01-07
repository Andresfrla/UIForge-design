import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Forms/Checkbox",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  component: Checkbox,
  argTypes: {
    variant: {
      type: "string",
      options: ["default", "primary", "success", "warning", "danger"],
      control: "select",
      description: "Checkbox style variants",
    },
    size: {
      type: "string",
      options: ["sm", "md", "lg"],
      control: "radio",
      description: "Checkbox size",
    },
    label: {
      type: "string",
      description: "Label text for the checkbox",
    },
    checked: {
      type: "boolean",
      description: "Checked state of the checkbox (for controlled usage)",
      control: { type: "boolean" },
    },
    disabled: {
      type: "boolean",
      description: "Disabled state of the checkbox",
      control: { type: "boolean" },
    },
    indeterminate: {
      type: "boolean",
      description: "Indeterminate state of the checkbox",
      control: { type: "boolean" },
    },
    onChange: {
      action: "changed",
      description: "Callback function when checkbox state changes",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

// Simple uncontrolled example
export const Default: Story = {
  args: {
    label: "Click me to toggle",
    variant: "default",
    size: "md",
  },
};

// Controlled example with internal state
export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Checkbox
        label={`Controlled checkbox (${checked ? 'checked' : 'unchecked'})`}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    );
  },
};

// Multiple checkboxes example
export const MultipleCheckboxes: Story = {
  render: () => {
    const [checks, setChecks] = useState({
      option1: false,
      option2: false,
      option3: false,
    });

    return (
      <div className="flex flex-col gap-4">
        <Checkbox
          label="Option 1"
          checked={checks.option1}
          onChange={(e) => setChecks(prev => ({ ...prev, option1: e.target.checked }))}
        />
        <Checkbox
          label="Option 2"
          checked={checks.option2}
          onChange={(e) => setChecks(prev => ({ ...prev, option2: e.target.checked }))}
        />
        <Checkbox
          label="Option 3"
          checked={checks.option3}
          onChange={(e) => setChecks(prev => ({ ...prev, option3: e.target.checked }))}
        />
        <div className="text-sm text-gray-600 mt-2">
          Selected: {Object.entries(checks)
            .filter(([_, value]) => value)
            .map(([key]) => key)
            .join(', ') || 'None'}
        </div>
      </div>
    );
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox variant="default" label="Default Variant" />
      <Checkbox variant="primary" label="Primary Variant" />
      <Checkbox variant="success" label="Success Variant" />
      <Checkbox variant="warning" label="Warning Variant" />
      <Checkbox variant="danger" label="Danger Variant" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox size="sm" label="Small Checkbox" />
      <Checkbox size="md" label="Medium Checkbox" />
      <Checkbox size="lg" label="Large Checkbox" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox label="Unchecked (clickable)" />
      <Checkbox label="Pre-checked (clickable)" checked />
      <Checkbox label="Indeterminate" indeterminate />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Checked & Disabled" checked disabled />
    </div>
  ),
};