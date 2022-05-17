import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";

export default {
  title: "Ant Design/Checkbox",
  component: Antd.Checkbox,
  argTypes: {
    checked: {
      description: "Checked",
      type: "boolean",
    },
    disabled: {
      description: "Disabled",
      type: "boolean",
    },
    indeterminate: {
      description: "Indeterminate",
      type: "boolean",
    },
  },
};

const Template = (args) => (
  <Antd.Checkbox
    {...(args.checked && { checked: args.checked })}
    indeterminate={args.indeterminate}
    disabled={args.disabled}
  ></Antd.Checkbox>
);

export const Simple = Template.bind({});
Simple.args = {};
