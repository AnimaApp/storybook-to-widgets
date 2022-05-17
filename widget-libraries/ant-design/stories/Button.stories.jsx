import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";
import { iconNameOptions, iconStyleOptions } from "./data";
import { AntDIconElement } from "../components/AntDIconElement";

export default {
  title: "Ant Design/Button",
  component: Antd.Button,
  argTypes: {
    type: {
      description: "Type",
      type: "options",
      options: [
        "primary",
        "default",
        "dashed",
        "text",
        "link",
        "ghost",
        "danger",
      ],
    },
    shape: {
      description: "Shape",
      type: "options",
      options: ["default", "circle", "round"],
    },
    size: {
      description: "Size",
      type: "options",
      options: ["small", "middle", "large"],
    },
    label: {
      description: "Label",
      type: "string",
    },
    iconName: {
      type: "options",
      options: iconNameOptions,
      description: "Icon Name",
    },
    iconStyle: {
      type: "options",
      options: iconStyleOptions,
      description: "Icon Style",
    },
    disabled: {
      description: "Disabled",
      type: "boolean",
    },
  },
};

const Template = (args) => (
  <Antd.Button
    type={args.type}
    shape={args.shape}
    size={args.size}
    disabled={args.disabled}
  >
    {args.iconName && (
      <AntDIconElement iconName={args.iconName} iconStyle={args.iconStyle} />
    )}
    {args.label}
  </Antd.Button>
);

export const Simple = Template.bind({});
Simple.args = {
  type: "primary",
  shape: "round",
  size: "large",
  label: "Search",
  iconName: "Search",
};
