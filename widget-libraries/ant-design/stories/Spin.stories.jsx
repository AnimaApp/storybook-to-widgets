import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";

export default {
  title: "Ant Design/Spin",
  component: Antd.Spin,
  parameters: {
    custom_css:
      '.${nodeClass} { font-family: "-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";}',
  },
  argTypes: {
    delay: { description: "Delay", type: "number" },
    size: {
      description: "Size",
      control: { type: "select" },
      options: ["small", "default", "large"],
    },
  },
};

const Template = (args) => <Antd.Spin delay={args.delay} size={args.size} />;

export const SimpleSpin = Template.bind({});
SimpleSpin.args = {
  delay: 0,
  size: "default",
};
