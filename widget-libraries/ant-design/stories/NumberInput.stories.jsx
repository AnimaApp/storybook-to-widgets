import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";
import { iconNameOptions, iconStyleOptions } from "./data";
import { AntDIconElement } from "../components/AntDIconElement";

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
      options: iconNameOptions,
      description: "Prefix Icon Name",
    },
    prefixIconStyle: {
      type: "options",
      options: iconStyleOptions,
      description: "Prefix Icon Style",
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
    prefix={
      args.prefixIconName && (
        <AntDIconElement
          iconName={args.prefixIconName}
          iconStyle={args.prefixIconStyle}
        />
      )
    }
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
  prefixIconName: "User",
  status: "warning",
  disabled: false,
};
