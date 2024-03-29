import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";
import * as AntDesignIcons from "@ant-design/icons/lib/icons";
import withIconMapped from "../decorators/withIconMapped";

const options = ["None", ...Object.keys(AntDesignIcons)];
const iconTransform =
  "<% if (param !== 'None') { %><AntDesignIcons.<%= param %> /><% } else { %> '' <% } %>";

export default {
  title: "Ant Design/Text Input",
  component: Antd.Input,
  parameters: {
    custom_css:
      '.${nodeClass} { font-family: "-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";}',
  },
  argTypes: {
    size: {
      description: "Size",
      control: { type: "select" },
      options: ["small", "middle", "large"],
    },
    bordered: {
      description: "Bordered",
      type: "boolean",
    },
    placeholder: {
      description: "Placeholder",
      type: "string",
    },
    defaultValue: {
      description: "Default value",
      type: "string",
    },
    maxChar: {
      description: "Max char",
      type: "number",
    },
    showCharCount: {
      description: "Show char count",
      type: "boolean",
    },
    prefixIconName: {
      control: { type: "select" },
      options: options,
      description: "Prefix Icon Name",
      transform: iconTransform,
    },
    suffixIconName: {
      control: { type: "select" },
      options: options,
      description: "Suffix Icon Name",
      transform: iconTransform,
    },
    status: {
      description: "Status",
      control: { type: "select" },
      options: ["default", "error", "warning"],
    },
    disabled: {
      description: "Disabled",
      type: "boolean",
    },
  },
  decorators: [withIconMapped(["prefixIconName", "suffixIconName"])],
};

const Template = (args) => (
  <Antd.Input
    size={args.size}
    bordered={args.bordered}
    defaultValue={args.defaultValue}
    placeholder={args.placeholder}
    maxLength={args.maxChar}
    showCount={args.showCharCount}
    prefix={args.prefixIconName}
    suffix={args.suffixIconName}
    status={args.status}
    disabled={args.disabled}
  ></Antd.Input>
);

export const Simple = Template.bind({});
Simple.args = {
  size: "middle",
  bordered: true,
  defaultValue: "",
  placeholder: "Please fill your username",
  maxChar: 40,
  showCharCount: true,
  prefixIconName: "UserOutlined",
  suffixIconName: "InfoOutlined",
  disabled: false,
  status: "default",
};
