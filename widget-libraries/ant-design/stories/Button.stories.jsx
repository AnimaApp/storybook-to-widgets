import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";
import * as AntDesignIcons from "@ant-design/icons/lib/icons";
import { iconOptions } from "./data";

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
      options: iconOptions,
      description: "Icon Name",
    },
    disabled: {
      description: "Disabled",
      type: "boolean",
    },
  },
};

const Template = (args) => {
  const AntDIconElement = args.iconName ? AntDesignIcons[args.iconName] : <></>;
  return (
    <Antd.Button
      type={args.type}
      shape={args.shape}
      size={args.size}
      disabled={args.disabled}
    >
      <AntDIconElement />
      {args.label}
    </Antd.Button>
  );
};

export const Simple = Template.bind({});
Simple.args = {
  type: "primary",
  shape: "round",
  size: "large",
  label: "Search",
  iconName: "SearchOutlined",
};
