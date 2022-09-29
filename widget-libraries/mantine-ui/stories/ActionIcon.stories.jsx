import React from "react";
import * as MantineCore from "@mantine/core";

export default {
  title: "Mantine/ActionIcon",
  component: MantineCore.ActionIcon,
  parameters: {
    docs: {
      description: {
        component: "Action Icon",
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
    //    icon : todo
    iconSize: { description: "Icon size", type: "number" },
    size: {
      description: "Size",
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    loading: { description: "Loading", type: "boolean" },
    disabled: { description: "Disabled", type: "boolean" },
  },
};

const Template = (args) => {
  return (
    <MantineCore.ActionIcon
      variant={args.variant}
      icon={args.icon}
      iconSize={args.iconSize}
      size={args.size}
      loading={args.loading}
      disabled={args.disabled}
    />
  );
};

export const SimpleActionIcon = Template.bind({});

SimpleActionIcon.args = {
  variant: "default",
  //  icon: to do
  iconSize: 20,
  size: "md",
  loading: false,
  disabled: false,
};

SimpleActionIcon.storyInfo = {
  name: "SimpleActionIcon",
  kind: "Mantine/ActionButton",
};
