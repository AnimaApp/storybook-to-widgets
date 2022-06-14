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
      type: "options",
      options: ["success", "exception", "normal", "active"],
    },
    gapDegree: { description: "Gap degree", type: "number" },
    gapPosition: {
      description: "Gap position",
      type: "options",
      options: ["top", "bottom", "left", "right"],
    },
    strokeColor: {
      description: "Stroke Color",
      control: "color",
    },
    strokeWidth: { description: "Stroke width", type: "number" },
    strokeStyle: {
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
    strokeColor={args.strokeColor}
    showInfo={args.showInfo}
    gapDegree={args.gapDegree}
    gapPosition={args.gapPosition}
    strokeStyle={args.strokeStyle}
    type="dashboard"
  />
);

export const SimpleProgressDashboard = Template.bind({});
SimpleProgressDashboard.args = {
  percent: 40,
  status: "normal",
  showInfo: true,
  gapDegree: 75,
  gapPosition: "bottom",
  strokeWidth: 10,
  strokeStyle: "square",
};
