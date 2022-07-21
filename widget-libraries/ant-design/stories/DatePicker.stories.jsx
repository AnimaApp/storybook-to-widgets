import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";

export default {
  title: "Ant Design/DatePicker",
  component: Antd.DatePicker,
  parameters: {
    custom_css:
      '.${nodeClass} { font-family: "-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";}',
  },
  argTypes: {
    type: {
      description: "Type",
      control: { type: "select" },
      options: ["date", "month", "week", "year", "quarter"],
    },
    format: {
      description: "Format",
      control: { type: "select" },
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
      control: { type: "select" },
      options: ["small", "middle", "large"],
    },
    placeholder: {
      description: "Placeholder",
      type: "string",
    },
    status: {
      description: "Status",
      control: { type: "select" },
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
    picker={args.type}
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
  type: "date",
  status: "default",
  size: "middle",
  format: "MM/DD/YY",
  bordered: true,
  showToday: true,
  disabled: false,
};
