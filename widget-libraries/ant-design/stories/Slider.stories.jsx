import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";

export default {
  title: "Ant Design/Slider",
  component: Antd.Slider,
  argTypes: {
    minValue: {
      description: "Min value",
      type: "number",
    },
    maxValue: {
      description: "Max value",
      type: "number",
    },
    defaultValue: {
      description: "Default value",
      type: "number",
    },
    step: {
      description: "Step",
      type: "number",
    },
    range: {
      description: "Range",
      type: "boolean",
    },
    tooltipVisible: {
      description: "Tooltip visible",
      type: "boolean",
    },
    disabled: {
      description: "Disabled",
      type: "boolean",
    },
    orientation: {
      description: "Orientation",
      type: "options",
      options: ["horizontal", "vertical"],
    },
  },
};

const Template = (args) => (
  <Antd.Slider
    min={args.minValue}
    max={args.maxValue}
    defaultValue={args.defaultValue}
    step={args.step}
    range={args.range}
    tooltipVisible={args.tooltipVisible}
    orientation={args.orientation}
    disabled={args.disabled}
  ></Antd.Slider>
);

export const Simple = Template.bind({});
Simple.args = {
  min: 0,
  max: 100,
  defaultValue: 50,
  step: 20,
  range: true,
  tooltipVisible: true,
  orientation: "horizontal",
  disabled: false,
};
