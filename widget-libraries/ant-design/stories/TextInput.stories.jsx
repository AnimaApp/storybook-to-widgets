import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";
import * as AntDesignIcons from "@ant-design/icons/lib/icons";
import { iconOptions } from "./data";

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
      type: "options",
      options: iconOptions,
      description: "Prefix Icon Name",
    },
    suffixIconName: {
      type: "options",
      options: iconOptions,
      description: "Suffix Icon Name",
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
};

const Template = (args) => {
  const AntDIconElementPrefix = args.prefixIconName ? (
    AntDesignIcons[args.prefixIconName]
  ) : (
    <></>
  );
  const AntDIconElementSuffix = args.suffixIconName ? (
    AntDesignIcons[args.suffixIconName]
  ) : (
    <></>
  );
  return (
    <Antd.Input
      size={args.size}
      bordered={args.bordered}
      defaultValue={args.defaultValue}
      placeholder={args.placeholder}
      maxLength={args.maxChar}
      showCount={args.showCharCount}
      prefix={args.prefixIconName && <AntDIconElementPrefix />}
      suffix={args.suffixIconName && <AntDIconElementSuffix />}
      status={args.status}
      disabled={args.disabled}
    ></Antd.Input>
  );
};

export const Simple = Template.bind({});
Simple.args = {
  size: "middle",
  bordered: true,
  placeholder: "Please fill your username",
  maxLength: 40,
  showCount: true,
  prefixIconName: "UserOutlined",
  suffixIconName: "InfoOutlined",
  status: "error",
  disabled: false,
};
