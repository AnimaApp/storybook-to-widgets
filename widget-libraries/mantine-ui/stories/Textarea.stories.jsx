import React from "react";
import * as Mantine from "@mantine/core";

export default {
  title: "Mantine/Textarea",
  component: Mantine.Textarea,
  parameters: {
    docs: {
      description: {
        component: "Textarea",
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
    autosize: { description: "Autosize", type: "boolean" },
    minRows: { description: "Min rows", type: "number" },
    maxRows: { description: "Max rows", type: "number" },
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
    <Mantine.Textarea
      label={args.label}
      placeholder={args.placeholder}
      description={args.description}
      error={args.error}
      disabled={args.disabled}
      required={args.required}
      autosize={args.autosize}
      minRows={args.minRows}
      maxRows={args.maxRows}
      size={args.size}
      icon={args.icon}
      iconWidth={args.iconWidth}
      variant={args.variant}
    />
  );
};

export const SimpleTextarea = Template.bind({});

SimpleTextarea.args = {
  label: "Label",
  placeholder: "",
  description: "",
  error: "",
  disabled: false,
  required: false,
  autosize: false,
  minRows: 10,
  maxRows: 20,
  size: "md",
  // icon: to do
  iconWidth: 20,
  variant: "default",
};

