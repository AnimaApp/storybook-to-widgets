import React from "react";
import * as Mantine from "@mantine/core";

export default {
  title: "Mantine/Button",
  component: Mantine.Button,
  parameters: {
    docs: {
      description: {
        component: "Button",
      },
    },
  },
  argTypes: {
    variant: {
      description: "Variant",
      control: { type: "select" },
      options: [
        "outline",
        "white",
        "light",
        "default",
        "filled",
        "subtle",
        "gradient",
      ],
    },
    label: { description: "Label", type: "string" },
    size: {
      description: "Size",
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    type: {
      description: "Type",
      control: { type: "select" },
      options: ["button", "reset", "submit"],
    },
    uppercase: { description: "Uppercase", type: "boolean" },
    loading: { description: "Loading", type: "boolean" },
    loaderPosition: {
      description: "Loader Position",
      control: { type: "select" },
      options: ["left", "right"],
    },
    // leftIcon : to do
    // rightIcon: to do
    compact: { description: "Compact", type: "boolean" },
    disabled: { description: "Disabled", type: "boolean" },
  },
};

const Template = (args) => {
  return (
    <Mantine.Button
      variant={args.variant}
      size={args.size}
      type={args.type}
      uppercase={args.uppercase}
      loading={args.loading}
      loaderPosition={args.loaderPosition}
      // leftIcon={args.leftIcon}
      // rightIcon={args.rightIcon}
      compact={args.compact}
      disabled={args.disabled}
    >
      {args.label}
    </Mantine.Button>
  );
};

export const SimpleButton = Template.bind({});

SimpleButton.args = {
  variant: "default",
  label: "Label",
  size: "md",
  type: "button",
  uppercase: false,
  loading: false,
  loaderPosition: "left",
  // leftIcon : to do
  // rightIcon: to do
  compact: false,
  disabled: false,
};

SimpleButton.storyInfo = {
  name: "SimpleButton",
  kind: "Mantine/Button",
};
