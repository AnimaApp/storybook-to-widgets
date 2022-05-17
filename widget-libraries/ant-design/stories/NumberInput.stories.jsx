import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";
import * as AntDesignIcons from "@ant-design/icons/lib/icons";
import { iconOptions } from "./data";

export default {
  title: "Ant Design/Number Input",
  component: Antd.InputNumber,
  argTypes: {
    controls: {
      description: "Controls",
      type: "boolean",
    },
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
      type: "number",
    },
    minValue: {
      description: "min value",
      type: "number",
    },
    maxValue: {
      description: "Max value",
      type: "number",
    },
    step: {
      description: "Step",
      type: "number",
    },
    prefixIconName: {
      type: "options",
      options: iconOptions,
      description: "Prefix Icon Name",
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
  const AntDIconElement = args.prefixIconName ? (
    AntDesignIcons[args.prefixIconName]
  ) : (
    <></>
  );
  return (
    <Antd.InputNumber
      controls={args.controls}
      size={args.size}
      bordered={args.bordered}
      defaultValue={args.defaultValue}
      placeholder={args.placeholder}
      min={args.minValue}
      max={args.maxValue}
      step={args.step}
      prefix={<AntDIconElement />}
      status={args.status}
      disabled={args.disabled}
    ></Antd.InputNumber>
  );
};

export const Simple = Template.bind({});
Simple.args = {
  controls: true,
  size: "middle",
  bordered: true,
  placeholder: "Age",
  maxValue: 120,
  minValue: 18,
  prefixIconName: "UserOutlined",
  status: "warning",
  disabled: false,
};
