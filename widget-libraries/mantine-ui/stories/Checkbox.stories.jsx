import React from "react";
import * as MantineCore from "@mantine/core";

export default {
  title: "Mantine/Checkbox",
  component: MantineCore.Checkbox,
  parameters: {
    docs: {
      description: {
        component: "Checkbox",
      },
    },
  },
  argTypes: {
    label: { description: "Label", type: "string" },
    indeterminate: { description: "Indeterminate", type: "boolean" },
    size: {
      description: "Size",
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    disabled: { description: "Disabled", type: "boolean" },
  },
};

const Template = (args) => {
  return (
    <MantineCore.Checkbox
      label={args.label}
      indeterminate={args.indeterminate}
      size={args.size}
      disabled={args.disabled}
    />
  );
};

export const SimpleCheckbox = Template.bind({});

SimpleCheckbox.args = {
  label: "Label",
  indeterminate: false,
  size: "md",
  disabled: false,
};

SimpleCheckbox.storyInfo = {
  name: "SimpleCheckbox",
  kind: "Mantine/Checkbox",
};
