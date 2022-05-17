import "antd/dist/antd.css";
import * as AntDesignIcons from "@ant-design/icons/lib/icons";
import React from "react";
import { iconNameOptions, iconStyleOptions } from "./data";
import { AntDIconElement } from "../components/AntDIconElement";

export default {
  title: "Ant Design/Icon",
  component: AntDesignIcons,
  argTypes: {
    iconStyle: {
      description: "Style",
      type: "options",
      options: iconStyleOptions,
    },
    rotate: {
      description: "Rotate",
      type: "number",
    },
    size: {
      description: "Size",
      type: "string",
    },
    iconName: {
      type: "options",
      options: iconNameOptions,
      description: "Icon",
    },
    spin: {
      description: "Spin",
      type: "boolean",
    },
  },
};

const Template = (args) => {
  const style = {
    ...(args.color ? { color: args.color } : {}),
    ...(args.size ? { fontSize: args.size } : {}),
  };
  return (
    <AntDIconElement
      iconName={args.iconName}
      iconStyle={args.iconStyle}
      spin={args.spin}
      rotate={args.rotate}
      style={style}
    ></AntDIconElement>
  );
};

export const Simple = Template.bind({});
Simple.args = {
  iconName: "Search",
  iconStyle: "Outlined",
  size: "12px",
  color: "blue",
  spin: false,
  rotate: 0,
};
