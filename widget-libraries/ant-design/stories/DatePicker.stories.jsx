import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";

export default {
  title: "Ant Design/DatePicker",
  component: Antd.DatePicker,
  argTypes: {
    type: {
      description: "Type",
      type: "options",
      options: ["date", "month", "week", "year", "quarter"],
    },
    format: {
      description: "Format",
      type: "options",
      options: [
        "MM/DD/YY",
        "DD/MM/YY",
        "YY/MM/DD",
        "Month D, Yr",
        "M/D/YY",
        "D/M/YY",
        "YY/M/D",
        "bM/bD/YY",
        "bD/bM/YY",
        "YY/bM/bD",
        "MMDDYY",
        "DDMMYY",
        "YYMMDD",
        "MonDDYY",
        "DDMonYY",
        "YYMonDD",
        "day/YY",
        "YY/day",
        "D Month, Yr",
        "Yr, Month D",
        "Mon-DD-YYYY",
        "DD-Mon-YYYY",
        "YYYYY-Mon-DD",
        "Mon DD, YYYY",
        "DD Mon, YYYY",
        "YYYY, Mon DD",
      ],
    },
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
  <Antd.DatePicker
    type={args.type}
    size={args.size}
    placeholder={args.placeholder}
    status={args.status}
    disabled={args.disabled}
    bordered={args.bordered}
    showToday={args.showToday}
    format={args.format}
    allowClear={args.allowClear}
  ></Antd.DatePicker>
);

export const Simple = Template.bind({});
Simple.args = {
  allowClear: true,
  placeholder: "Select date",
  size: "default",
  bordered: true,
  showToday: true,
};
