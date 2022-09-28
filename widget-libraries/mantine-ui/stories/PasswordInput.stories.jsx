import React from "react";
import * as Mantine from "@mantine/core";

export default {
  title: "Mantine/PasswordInput",
  component: Mantine.PasswordInput,
  parameters: {
    docs: {
      description: {
        component: "Password Input",
      },
    },
  },
  argTypes: {
    label: { description: "Label", type: "string" },
    placeholder: { description: "Placeholder", type: "string" },
    description: { description: "Description", type: "string" },
    error: { description: "Error", type: "string" },
    disabled: { description: "Disabled", type: "boolean" },
    required: { description: "Required", type: "boolean" },
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
    <Mantine.PasswordInput
      label={args.label}
      placeholder={args.placeholder}
      description={args.description}
      error={args.error}
      disabled={args.disabled}
      required={args.required}
      size={args.size}
      icon={args.icon}
      iconWidth={args.iconWidth}
      variant={args.variant}
    />
  );
};

export const SimplePasswordInput = Template.bind({});

SimplePasswordInput.args = {
  label: "Label",
  placeholder: "",
  description: "",
  error: "",
  disabled: false,
  required: false,
  size: "md",
  // icon: to do
  iconWidth: 20,
  variant: "default",
};

