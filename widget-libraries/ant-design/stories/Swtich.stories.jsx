import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";

export default {
  title: "Ant Design/Switch",
  component: Antd.Switch,
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
      type: "options",
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
    {...(args.checked && { checked: args.checked })}
    disabled={args.disabled}
    size={args.size}
    checkedChildren={args.checkedLabel}
    unCheckedChildren={args.uncheckedLabel}
  ></Antd.Switch>
);

export const Simple = Template.bind({});
Simple.args = {
  disabled: false,
  size: "default",
  checkedLabel: "Yes",
  uncheckedLabel: "No",
};
