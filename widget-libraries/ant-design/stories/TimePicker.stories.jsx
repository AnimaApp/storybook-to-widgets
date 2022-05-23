import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";

export default {
  title: "Ant Design/TimePicker",
  component: Antd.TimePicker,
  parameters: {
    custom_css:
      '.${nodeClass} { font-family: "-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";}',
  },
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
  size: "middle",
  placeholder: "Select time",
  bordered: true,
  showNow: true,
  disabled: false,
  use12Hours: false,
  status: "default",
};
