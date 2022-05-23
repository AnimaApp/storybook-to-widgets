import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";

export default {
  title: "Ant Design/Checkbox",
  component: Antd.Checkbox,
  parameters: {
    custom_css:
      '.${nodeClass} { font-family: "-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";}',
  },
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
    defaultChecked={args.checked}
    indeterminate={args.indeterminate}
    disabled={args.disabled}
  ></Antd.Checkbox>
);

export const Simple = Template.bind({});
Simple.args = {
  checked: false,
  indeterminate: false,
  disabled: false,
};
