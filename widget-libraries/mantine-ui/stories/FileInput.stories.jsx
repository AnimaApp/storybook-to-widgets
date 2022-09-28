import React from "react";
import * as Mantine from "@mantine/core";

export default {
  title: "Mantine/FileInput",
  component: Mantine.FileInput,
  parameters: {
    docs: {
      description: {
        component: "File Input",
      },
    },
  },
  argTypes: {
    label: { description: "Label", type: "string" },
    description: { description: "Description", type: "string" },
    error: { description: "Error", type: "string" },
    disabled: { description: "Disabled", type: "boolean" },
    required: { description: "Required", type: "boolean" },
    multiple: { description: "Multiple", type: "boolean" },
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
    <Mantine.FileInput
      label={args.label}
      description={args.description}
      error={args.error}
      disabled={args.disabled}
      required={args.required}
      multiple={args.multiple}
      size={args.size}
      icon={args.icon}
      iconWidth={args.iconWidth}
      variant={args.variant}
    />
  );
};

export const SimpleFileInput = Template.bind({});

SimpleFileInput.args = {
  label: "Label",
  description: "",
  error: "",
  disabled: false,
  required: false,
  multiple: false,
  size: "md",
  // icon: to do
  iconWidth: 20,
  variant: "default",
};

