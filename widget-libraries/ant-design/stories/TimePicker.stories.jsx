import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";

export default {
  title: "Ant Design/TimePicker",
  component: Antd.TimePicker,
  argTypes: {
    size: {
      description: "Size",
      type: "options",
      options: ["small", "middle", "large"],
    },
    placeholder: {
      description: "Placeholder",
      type: "string",
    },
    status: {
      description: "Status",
      type: "options",
      options: ["error", "default", "warning"],
    },
    disabled: {
      description: "Disabled",
      type: "boolean",
    },
    bordered: {
      description: "Bordered",
      type: "boolean",
    },
    showToday: {
      description: "Show today button",
      type: "boolean",
    },
    allowClear: {
      description: "Allow clear",
      type: "boolean",
    },
  },
};

const Template = (args) => (
  <Antd.TimePicker
    size={args.size}
    placeholder={args.placeholder}
    status={args.status}
    disabled={args.disabled}
    bordered={args.bordered}
    showToday={args.showToday}
    allowClear={args.allowClear}
  ></Antd.TimePicker>
);

export const Simple = Template.bind({});
Simple.args = {
  allowClear: true,
  size: "default",
  placeholder: "Select time",
  bordered: true,
  showToday: true,
};
