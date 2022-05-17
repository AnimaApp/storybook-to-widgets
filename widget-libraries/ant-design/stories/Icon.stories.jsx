import "antd/dist/antd.css";
import * as AntDesignIcons from "@ant-design/icons/lib/icons";
import React from "react";
import { iconOptions } from "./data";

export default {
  title: "Ant Design/Icon",
  component: AntDesignIcons,
  argTypes: {
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
      options: iconOptions,
      description: "Icon",
    },
    spin: {
      description: "Spin",
      type: "boolean",
    },
  },
};

const Template = (args) => {
  const AntDIconElement = AntDesignIcons[args.iconName];
  const style = {
    ...(args.color ? { color: args.color } : {}),
    ...(args.size ? { fontSize: args.size } : {}),
  };
  return (
    <AntDIconElement
      spin={args.spin}
      rotate={args.rotate}
      style={style}
    ></AntDIconElement>
  );
};

export const Simple = Template.bind({});
Simple.args = {
  iconName: "SearchOutlined",
  size: "12px",
  color: "blue",
  spin: false,
  rotate: 0,
};
