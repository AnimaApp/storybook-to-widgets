import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";

export default {
  title: "Ant Design/Skeleton Avatar",
  component: Antd.Skeleton.Avatar,
  parameters: {
    custom_css:
      '.${nodeClass} { font-family: "-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";}',
    useFigmaLayers: true,
  },
  argTypes: {
    active: { description: "Active", type: "boolean" },
    shape: {
      description: "Shape",
      control: { type: "select" },
      options: ["circle", "square"],
    },
    size: {
      description: "Size",
      control: { type: "select" },
      options: ["small", "default", "large"],
    },
  },
};

const Template = (args) => (
  <Antd.Skeleton.Avatar
    active={args.active}
    shape={args.shape}
    size={args.size}
  />
);

export const SimpleSkeletonAvatar = Template.bind({});
SimpleSkeletonAvatar.args = {
  active: true,
  shape: "square",
  size: "default",
};
