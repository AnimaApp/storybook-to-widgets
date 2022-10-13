import React from "react";
import * as MantineCore from "@mantine/core";
import { iconOptions, iconTransform } from "../utils";
import withIconMapped from "../decorators/withIconMapped";

export default {
  title: "Mantine UI/Chip",
  component: MantineCore.Chip,
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
    iconName: {
      control: { type: "select" },
      options: iconOptions,
      description: "Icon",
      transform: iconTransform,
      required: false,
    },
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
    color: {
      description: "Color",
      control: { type: "color" },
    },
  },
  decorators: [withIconMapped],
};

const Template = (args) => {
  return (
    <MantineCore.Chip
      format={args.format}
      iconWidth={args.iconWidth}
      size={args.size}
      required={args.required}
      disabled={args.disabled}
      type={args.type}
      variant={args.variant}
      color={args.color}
    >
      {args.label}
      {args.iconName && args.iconName}
    </MantineCore.Chip>
  );
};

export const SimpleChip = Template.bind({});

SimpleChip.args = {
  label: "Label",
  format: "hex",
  iconWidth: 20,
  size: "md",
  required: false,
  disabled: false,
  type: "checkbox",
  variant: "filled",
  color: "#0000ff",
};

SimpleChip.storyInfo = {
  name: "SimpleChip",
  kind: "Mantine/Chip",
};
