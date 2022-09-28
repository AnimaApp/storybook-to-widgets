import React from "react";
import * as Mantine from "@mantine/core";

export default {
  title: "Mantine/TextInput",
  component: Mantine.TextInput,
  parameters: {
    docs: {
      description: {
        component: "Text Input",
      },
    },
  },
  argTypes: {
    label: { description: "Label", type: "string" },
    description: { description: "Description", type: "string" },
    error: { description: "Error", type: "string" },
    disabled: { description: "Disabled", type: "boolean" },
    required: { description: "Required", type: "boolean" },
    multiline: { description: "Multiline", type: "boolean" },
    size: {
      description: "Size",
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    // icon: to do
    iconWidth: { description: "Icon width", type: "number" },
    variant: {
      description: "Variant",
      control: { type: "select" },
      options: ["unstyled", "filled", "default"],
    },
  },
};

const Template = (args) => {
  return (
    <Mantine.TextInput
      label={args.label}
      description={args.description}
      error={args.error}
      disabled={args.disabled}
      required={args.required}
      multiline={args.multiline}
      size={args.size}
      icon={args.icon}
      iconWidth={args.iconWidth}
      variant={args.variant}
    />
  );
};

export const SimpleTextInput = Template.bind({});

SimpleTextInput.args = {
  label: "Label",
  description: "Description",
  error: "Error",
  disabled: false,
  required: false,
  multiline: false,
  size: "md",
  // icon: to do
  iconWidth: 20,
  variant: "filled",
};

