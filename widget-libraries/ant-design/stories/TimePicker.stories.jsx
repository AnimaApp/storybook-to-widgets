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
      options: ["error", "warning"],
    },
    disabled: {
      description: "Disabled",
      type: "boolean",
    },
    bordered: {
      description: "Bordered",
      type: "boolean",
    },
    showNow: {
      description: "Show now button",
      type: "boolean",
    },
    use12Hours: {
      description: "Use 12 Hours format",
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
    showNow={args.showNow}
    use12Hours={args.use12Hours}
    allowClear={args.allowClear}
  ></Antd.TimePicker>
);

export const Simple = Template.bind({});
Simple.args = {
  allowClear: true,
  size: "default",
  placeholder: "Select time",
  bordered: true,
  showNow: true,
};
