import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";

export default {
  title: "Ant Design/Skeleton Input",
  component: Antd.Skeleton.Input,
  parameters: {
    custom_css:
      '.${nodeClass} { font-family: "-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";}',
    useFigmaLayers: true,
  },
  argTypes: {
    active: { description: "Active", type: "boolean" },
    size: {
      description: "Size",
      control: { type: "select" },
      options: ["small", "default", "large"],
    },
  },
};

const Template = (args) => (
  <Antd.Skeleton.Input active={args.active} size={args.size} />
);

export const SimpleSkeletonInput = Template.bind({});
SimpleSkeletonInput.args = {
  active: true,
  size: "default",
};
