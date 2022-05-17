import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";
import * as AntDesignIcons from "@ant-design/icons/lib/icons";
import withIconMapped from "../decorators/withIconMapped";

const options = ["None", ...Object.keys(AntDesignIcons)];
const iconTransform =
  "<% if (param !== 'None') { %><AntDesignIcons.<%= param %> /><% } else { %> '' <% } %>";

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
    iconName: {
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
  <Antd.InputNumber
    controls={args.controls}
    size={args.size}
    bordered={args.bordered}
    defaultValue={args.defaultValue}
    placeholder={args.placeholder}
    min={args.minValue}
    max={args.maxValue}
    step={args.step}
    prefix={args.iconName}
    status={args.status}
    disabled={args.disabled}
  ></Antd.InputNumber>
);

export const Simple = Template.bind({});
Simple.args = {
  controls: true,
  size: "middle",
  bordered: true,
  placeholder: "Age",
  maxValue: 120,
  minValue: 18,
  iconName: "UserOutlined",
  iconName: "UserOutlined",
  status: "warning",
  disabled: false,
};
