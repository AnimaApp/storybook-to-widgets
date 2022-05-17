import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";

export default {
  title: "Ant Design/Radio",
  component: Antd.Radio,
  argTypes: {
    checked: {
      description: "Checked",
      type: "boolean",
    },
    disabled: {
      description: "Disabled",
      type: "boolean",
    },
  },
};

const Template = (args) => (
  <Antd.Radio checked={args.checked} disabled={args.disabled}></Antd.Radio>
);

export const Simple = Template.bind({});
Simple.args = {};
