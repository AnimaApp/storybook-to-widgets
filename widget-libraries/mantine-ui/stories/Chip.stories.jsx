import React from "react";
import * as MantineCore from "@mantine/core";
import { iconOptions, iconTransform } from "../utils";
import withIconMapped from "../decorators/withIconMapped";

export default {
  title: "Mantine/Chip",
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
    withPicker: { description: "With Picker ", type: "boolean" },
    withPreview: { description: "With Preview ", type: "boolean" },
    withinPortal: { description: "Within Portal ", type: "boolean" },
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
      withPicker={args.withPicker}
      withPreview={args.withPreview}
      withinPortal={args.withinPortal}
      icon={args.iconName}
      //nese eshte si prop icona e shton keshtu
      // emriIPropitPerIkoneSicEshteTekMantine={args.iconName}
    >
      {args.label}
      {/* nese eshte si children e shton keshtu */}
      {args.iconName && args.iconName}
    </MantineCore.Chip>
  );
};

export const SimpleChip = Template.bind({});

SimpleChip.args = {
  label: "Label",
  format: "hex",
  iconName: "Icon2fa",
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
