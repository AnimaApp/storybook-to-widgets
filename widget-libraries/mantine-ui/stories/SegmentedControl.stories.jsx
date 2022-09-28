import React from "react";
import * as Mantine from "@mantine/core";

export default {
  title: "Mantine/SegmentedControl",
  component: Mantine.SegmentedControl,
  parameters: {
    docs: {
      description: {
        component: "SegmentedControl",
      },
    },
  },
  argTypes: {
    disabled: { description: "Disabled", type: "boolean" },
    orientation: {
      description: "Orientation",
      control: { type: "select" },
      options: ["horizontal", "vertical"],
    },
    size: {
      description: "Size",
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    // data: to do
  },
};

const data = [
  { label: 'React', value: 'react' },
  { label: 'Angular', value: 'ng' },
  { label: 'Vue', value: 'vue' },
  { label: 'Svelte', value: 'svelte' },
]

const Template = (args) => {
  return (
    <Mantine.SegmentedControl
      disabled={args.disabled}
      orientation={args.orientation}
      size={args.size}
      data={args.data}
    />
  );
};

export const SimpleSegmentedControl = Template.bind({});

SimpleSegmentedControl.args = {
  disabled: false,
  orientation: "horizontal",
  size: "md",
  data: data,
};

