import React from "react";
import * as Mantine from "@mantine/dates";

export default {
  title: "Mantine/DateRangePicker",
  component: Mantine.DateRangePicker,
  parameters: {
    docs: {
      description: {
        component: "DateRangePicker",
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
    <Mantine.DateRangePicker
      label={args.label}
      placeholder={args.placeholder}
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

export const SimpleDateRangePicker = Template.bind({});

SimpleDateRangePicker.args = {
  label: "Label",
  placeholder: "Placeholder",
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


