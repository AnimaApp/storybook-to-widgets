import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";

export default {
  title: "Ant Design/Slider",
  component: Antd.Slider,
  parameters: {
    custom_css:
      '.${nodeClass} { font-family: "-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";}',
  },
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
    reverse: {
      description: "Reversed",
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
      control: { type: "select" },
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
    disabled={args.disabled}
    reverse={args.reverse}
    vertical={args.orientation === "vertical"}
  ></Antd.Slider>
);

export const Simple = Template.bind({});
Simple.args = {
  minValue: 0,
  maxValue: 10,
  defaultValue: 3,
  step: 1,
  range: true,
  tooltipVisible: true,
  orientation: "horizontal",
  disabled: false,
  reverse: false,
};
