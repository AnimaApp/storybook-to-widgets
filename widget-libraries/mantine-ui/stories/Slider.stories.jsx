import React from "react";
import * as MantineCore from "@mantine/core";

export default {
  title: "Mantine/Slider",
  component: MantineCore.Slider,
  parameters: {
    docs: {
      description: {
        component: "Slider",
      },
    },
  },
  argTypes: {
    label: { description: "Label", type: "string" },
    disabled: { description: "Disabled", type: "boolean" },
    labelAlwaysOn: { description: "Label Always On", type: "boolean" },
    showLabelOnHover: { description: "Show Label On Hover", type: "boolean" },
    precision: { description: "Precision", type: "number" },
    min: { description: "Min", type: "number" },
    max: { description: "Max", type: "number" },
    step: { description: "Step", type: "number" },
    thumbSize: { description: "Thumb size", type: "number" },
    size: {
      description: "Size",
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
  },
};

const Template = (args) => {
  return (
    <MantineCore.Slider
      label={args.label}
      disabled={args.disabled}
      labelAlwaysOn={args.labelAlwaysOn}
      showLabelOnHover={args.showLabelOnHover}
      precision={args.precision}
      min={args.min}
      max={args.max}
      step={args.step}
      thumbSize={args.thumbSize}
      size={args.size}
    />
  );
};

export const SimpleSlider = Template.bind({});

SimpleSlider.args = {
  label: "Label",
  disabled: false,
  labelAlwaysOn: false,
  showLabelOnHover: false,
  precision: 1,
  min: 1,
  max: 10,
  step: 1,
  thumbSize: 10,
  size: "md",
};
