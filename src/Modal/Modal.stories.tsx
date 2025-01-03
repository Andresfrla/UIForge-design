import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
import { useState } from "react";

const meta: Meta<typeof Modal> = {
  title: "Components/Utils/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: {
      type: "string",
      description: "The title of the modal.",
    },
    description: {
      type: "string",
      description: "The description inside the modal.",
    },
    withActions: {
      type: "boolean",
      description: "Determines if the modal includes action buttons.",
      control: { type: "boolean" },
    },
    rounded: {
      type: "string",
      options: ["none", "sm", "md", "lg", "xl", "full"],
      control: "select",
      description: "Defines the border radius of the modal.",
    },
    onConfirm: {
      action: "confirm",
      description: "Function called when the confirm button is clicked.",
    },
    onCancel: {
      action: "cancel",
      description: "Function called when the cancel button is clicked.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

const ModalTemplate = ({ title, description, withActions, rounded }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Open Modal
      </button>
      <Modal
        isOpen={isOpen}
        title={title}
        description={description}
        withActions={withActions}
        rounded={rounded}
        onConfirm={() => {
          setIsOpen(false);
          console.log("Confirmed");
        }}
        onCancel={() => setIsOpen(false)}
      />
    </div>
  );
};

export const Default: Story = {
  args: {
    title: "Default Modal",
    description: "This is a default modal with no additional content.",
    withActions: true,
    rounded: "md",
  },
  render: (args) => <ModalTemplate {...args} />,
};

export const NoActions: Story = {
  args: {
    title: "Modal Without Actions",
    description: "This modal does not include any action buttons.",
    withActions: false,
    rounded: "lg",
  },
  render: (args) => <ModalTemplate {...args} />,
};

export const CustomRounded: Story = {
  args: {
    title: "Custom Rounded Modal",
    description: "This modal has a fully rounded border.",
    withActions: true,
    rounded: "full",
  },
  render: (args) => <ModalTemplate {...args} />,
};

export const WithLongContent: Story = {
  args: {
    title: "Modal With Long Content",
    description: "This modal demonstrates handling longer descriptions or additional child elements.",
    withActions: true,
    rounded: "md",
  },
  render: (args) => (
    <ModalTemplate {...args}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae tortor massa. Nullam quis nulla sed eros
        pharetra bibendum id sit amet felis. Curabitur elementum sapien non risus laoreet pretium.
      </p>
    </ModalTemplate>
  ),
};
