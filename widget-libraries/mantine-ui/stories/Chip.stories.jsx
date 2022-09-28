import React from "react";
import * as Mantine from "@mantine/core";

export default {
  title: "Mantine/Chip",
  component: Mantine.Chip,
  parameters: {
    docs: {
      description: {
        component: "Chip",
      },
    },
  },
  argTypes: {
    label: { description: "Label", type: "string" },
    format: {
      description: "Format",
      control: { type: "select" },
      options: ["hex", "rgba", "rgb", "hsl", "hsla"],
    },
    //    icon:  to do
    iconWidth: { description: "Icon width", type: "number" },
    size: {
      description: "Size",
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    required: { description: "Required", type: "boolean" },
    disabled: { description: "Disabled", type: "boolean" },
    type: {
      description: "Type",
      control: { type: "select" },
      options: ["checkbox", "radio"],
    },
    variant: {
      description: "Variant",
      control: { type: "select" },
      options: ["unstyled", "default", "filled"],
    },
    withPicker: { description: "With Picker ", type: "boolean" },
    withPreview: { description: "With Preview ", type: "boolean" },
    withinPortal: { description: "Within Portal ", type: "boolean" },
  },
};

const Template = (args) => {
  return (
    <Mantine.Chip
      format={args.format}
      icon={args.icon}
      iconWidth={args.iconWidth}
      size={args.size}
      required={args.required}
      disabled={args.disabled}
      type={args.type}
      variant={args.variant}
      withPicker={args.withPicker}
      withPreview={args.withPreview}
      withinPortal={args.withinPortal}
    >
      {args.label}
    </Mantine.Chip>
  );
};

export const SimpleChip = Template.bind({});

SimpleChip.args = {
  label: "Label",
  format: "hex",
  //  icon: to do
  iconWidth: 20,
  size: "md",
  required: false,
  disabled: false,
  type: "checkbox",
  variant: "default",
  withPicker: false,
  withPreview: false,
  withinPortal: false,
};

SimpleChip.storyInfo = {
  name: "SimpleChip",
  kind: "Mantine/Chip",
};
