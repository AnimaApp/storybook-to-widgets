import React from "react";
import * as Mantine from "@mantine/dates";

export default {
  title: "Mantine/DatePicker",
  component: Mantine.DatePicker,
  parameters: {
    docs: {
      description: {
        component: "DatePicker",
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
    <Mantine.DatePicker
      label={args.label}
      placeholder={args.placeholder}
      description={args.description}
      error={args.error}
      disabled={args.disabled}
      required={args.required}
      multiline={args.multiline}
      size={args.size}
      //   icon={args.icon}
      iconWidth={args.iconWidth}
      variant={args.variant}
    />
  );
};

export const SimpleDatePicker = Template.bind({});

SimpleDatePicker.args = {
  label: "Label",
  placeholder: "",
  description: "",
  error: "",
  disabled: false,
  required: false,
  multiline: false,
  size: "md",
  // icon: to do
  iconWidth: 20,
  variant: "default",
};
