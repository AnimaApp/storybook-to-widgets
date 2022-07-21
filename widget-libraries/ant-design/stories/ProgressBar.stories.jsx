import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";

export default {
  title: "Ant Design/Progress Bar",
  component: Antd.Progress,
  parameters: {
    custom_css:
      '.${nodeClass} { font-family: "-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";}',
  },
  argTypes: {
    percent: { description: "Percent", type: "number" },
    steps: { description: "Steps", type: "number" },
    showInfo: { description: "Show value", type: "boolean" },
    status: {
      description: "Status",
      control: { type: "select" },
      options: ["success", "exception", "normal", "active"],
    },
    strokeWidth: { description: "Stroke width", type: "number" },
    strokeLinecap: {
      description: "Stroke style",
      control: { type: "select" },
      options: ["round", "butt", "square"],
    },
    size: {
      description: "Size",
      control: { type: "select" },
      options: ["small", "middle", "large"],
    },
  },
};

const Template = (args) => (
  <Antd.Progress
    percent={args.percent}
    status={args.status}
    strokeWidth={args.strokeWidth}
    strokeLinecap={args.strokeLinecap}
    showInfo={args.showInfo}
    steps={args.steps}
    size={args.size}
    type="line"
  />
);

export const SimpleProgressBar = Template.bind({});
SimpleProgressBar.args = {
  percent: 30,
  showInfo: true,
  status: "normal",
  strokeWidth: 10,
  strokeLinecap: "square",
  size: "large",
};
