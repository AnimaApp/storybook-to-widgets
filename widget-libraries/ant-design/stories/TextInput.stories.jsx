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
  argTypes: {
    size: {
      description: "Size",
      type: "options",
      options: ["small", "middle", "large"],
    },
    bordered: {
      description: "Bordered",
      type: "boolean",
    },
    placeholder: {
      description: "Placceholder",
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
      type: "options",
      options: options,
      description: "Icon",
      transform: iconTransform,
    },
    status: {
      description: "Status",
      type: "options",
      options: ["default", "error", "warning"],
    },
    disabled: {
      description: "Disabled",
      type: "boolean",
    },
  },
  decorators: [withIconMapped],
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
    status={args.status}
    disabled={args.disabled}
  ></Antd.Input>
);

export const Simple = Template.bind({});
Simple.args = {
  size: "middle",
  bordered: true,
  placeholder: "Please fill your username",
  maxLength: 40,
  showCount: true,
  iconName: "UserOutlined",
  prefixIconName: "UserOutlined",
  status: "error",
  disabled: false,
};
