import React from "react";
import * as MantineCore from "@mantine/core";

export default {
  title: "Mantine UI/Chip",
  component: MantineCore.Chip,
  parameters: {
    docs: {
      description: {
        component: "Chip",
      },
    },
    titleArg: "label",
  },
  argTypes: {
    label: { description: "Label", type: "string" },
    size: {
      description: "Size",
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    required: { description: "Required", type: "boolean" },
    disabled: { description: "Disabled", type: "boolean" },
    variant: {
      description: "Variant",
      control: { type: "select" },
      options: ["outline", "filled"],
    },
    value: { description: "Value", type: "string" },
  },
};

const Template = (args) => {
  return (
    <MantineCore.Chip
      value={args.value}
      size={args.size}
      required={args.required}
      disabled={args.disabled}
      variant={args.variant}
    >
      {args.label}
    </MantineCore.Chip>
  );
};

export const SimpleChip = Template.bind({});

SimpleChip.args = {
  label: "Label",
  size: "md",
  required: false,
  disabled: false,
  variant: "outline",
  value: "",
};

SimpleChip.storyInfo = {
  name: "SimpleChip",
  kind: "Mantine UI/Chip",
};
