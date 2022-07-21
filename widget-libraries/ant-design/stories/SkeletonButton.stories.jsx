import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";

export default {
  title: "Ant Design/Skeleton Button",
  component: Antd.Skeleton.Button,
  parameters: {
    custom_css:
      '.${nodeClass} { font-family: "-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";}',
  },
  argTypes: {
    active: { description: "Active", type: "boolean" },
    shape: {
      description: "Shape",
      control: { type: "select" },
      options: ["circle", "round", "default"],
    },
    size: {
      description: "Size",
      control: { type: "select" },
      options: ["small", "default", "large"],
    },
  },
};

const Template = (args) => (
  <Antd.Skeleton.Button
    active={args.active}
    shape={args.shape}
    size={args.size}
  />
);

export const SimpleSkeletonButton = Template.bind({});
SimpleSkeletonButton.args = {
  active: true,
  shape: "square",
  size: "default",
};
