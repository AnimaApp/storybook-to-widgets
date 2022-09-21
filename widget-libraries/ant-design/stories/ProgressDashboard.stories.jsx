import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";

export default {
  title: "Ant Design/Progress Dashboard",
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
      control: { type: "select" },
      options: ["success", "exception", "normal", "active"],
    },
    gapDegree: { description: "Gap degree", type: "number" },
    gapPosition: {
      description: "Gap position",
      control: { type: "select" },
      options: ["top", "bottom", "left", "right"],
    },
    strokeWidth: { description: "Stroke width", type: "number" },
    strokeStyle: {
      description: "Stroke style",
      control: { type: "select" },
      options: ["round", "butt", "square"],
    },
  },
};

const Template = (args) => (
  <Antd.Progress
    percent={args.percent}
    status={args.status}
    strokeWidth={args.strokeWidth}
    showInfo={args.showInfo}
    gapDegree={args.gapDegree}
    gapPosition={args.gapPosition}
    strokeStyle={args.strokeStyle}
    type="dashboard"
  />
);

export const SimpleProgressDashboard = Template.bind({});
SimpleProgressDashboard.args = {
  percent: 77,
  status: "success",
  showInfo: true,
  gapDegree: 75,
  gapPosition: "bottom",
  strokeWidth: 7,
  strokeStyle: "square",
};
