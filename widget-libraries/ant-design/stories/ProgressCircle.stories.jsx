import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";

export default {
  title: "Ant Design/Progress Circle",
  component: Antd.Progress,
  parameters: {
    custom_css:
      '.${nodeClass} { font-family: "-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";}',
  },
  argTypes: {
    percent: { description: "Percent", type: "number" },
    showInfo: { description: "Show value", type: "boolean" },
    status: {
      description: "Status",
      type: "options",
      options: ["success", "exception", "normal", "active"],
    },
    strokeColor: {
      description: "Stroke Color",
      control: "color",
    },
    strokeWidth: { description: "Stroke width", type: "number" },
    strokeLinecap: {
      description: "Stroke style",
      type: "options",
      options: ["round", "butt", "square"],
    },
    width: { description: "Width", type: "number" },
  },
};

const Template = (args) => (
  <Antd.Progress
    percent={args.percent}
    status={args.status}
    strokeWidth={args.strokeWidth}
    strokeLinecap={args.strokeLinecap}
    showInfo={args.showInfo}
    strokeColor={args.strokeColor}
    width={args.width}
    type="circle"
  />
);

export const SimpleProgressCircle = Template.bind({});
SimpleProgressCircle.args = {
  percent: 30,
  showInfo: true,
  status: "normal",
  strokeWidth: 10,
  strokeLinecap: "square",
  width: 100,
};
