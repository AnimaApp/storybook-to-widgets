import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";

export default {
  title: "Ant Design/Select",
  component: Antd.Select,
  parameters: {
    custom_css:
      '.${nodeClass} { font-family: "-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";}',
  },
  argTypes: {
    bordered: {
      description: "Bordered",
      type: "boolean",
    },
    showArrow: {
      description: "Show arrow",
      type: "boolean",
    },
    showClear: {
      description: "Show clear",
      type: "boolean",
    },
    size: {
      description: "Size",
      control: { type: "select" },
      options: ["small", "middle", "large"],
    },
    mode: {
      description: "Mode",
      control: { type: "select" },
      options: ["multiple", "tags"],
    },
    status: {
      description: "Status",
      control: { type: "select" },
      options: ["error", "default", "warning"],
    },
    items: {
      description: "Items",
      type: "array",
    },
    open: {
      description: "Open",
      type: "boolean",
    },
    selectedItem: {
      description: "Selected item",
    },
    disabled: {
      description: "Disabled",
      type: "boolean",
    },
  },
};

const Template = (args) => (
  <Antd.Select
    style={{ minWidth: "100px" }}
    bordered={args.bordered}
    checked={args.checked}
    showArrow={args.showArrow}
    allowClear={args.showClear}
    size={args.size}
    mode={args.mode}
    status={args.status}
    options={args.items || []}
    defaultValue={args.selectedItem}
    disabled={args.disabled}
  ></Antd.Select>
);

export const Simple = Template.bind({});
Simple.args = {
  checked: true,
  items: [{ value: "AnimaApp" }, { value: "Figma" }, { value: "Stroybook" }],
  selectedItem: ["AnimaApp", "Figma"],
  mode: "multiple",
  size: "middle",
  bordered: true,
  showClear: true,
  showArrow: false,
  disabled: false,
  status: "default",
};
