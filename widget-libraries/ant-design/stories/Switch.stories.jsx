import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";

export default {
  title: "Ant Design/Switch",
  component: Antd.Switch,
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
    size: {
      description: "Size",
      control: { type: "select" },
      options: ["small", "default"],
    },
    checkedLabel: {
      description: "Checked label",
      type: "string",
    },
    uncheckedLabel: {
      description: "Unchecked label",
      type: "string",
    },
  },
};

const Template = (args) => (
  <Antd.Switch
    defaultChecked={args.checked}
    disabled={args.disabled}
    size={args.size}
    checkedChildren={args.checkedLabel}
    unCheckedChildren={args.uncheckedLabel}
  ></Antd.Switch>
);

export const Simple = Template.bind({});
Simple.args = {
  checked: false,
  disabled: false,
  size: "default",
  checkedLabel: "Yes",
  uncheckedLabel: "No",
};
