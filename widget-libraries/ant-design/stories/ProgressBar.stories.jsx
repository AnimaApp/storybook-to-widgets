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
  },
};

const Template = (args) => (
  <Antd.Progress
    percent={args.percent}
    status={args.status}
    strokeWidth={args.strokeWidth}
    strokeLinecap={args.strokeLinecap}
    strokeColor={args.strokeColor}
    showInfo={args.showInfo}
    steps={args.steps}
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
};
