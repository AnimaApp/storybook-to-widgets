import React from "react";
import "antd/dist/antd.css";
import * as AntDesignIcons from "@ant-design/icons/lib/icons";

const options = [
  ...Object.keys(AntDesignIcons).map((key) =>
    key
      .replace(/Filled$/, "")
      .replace(/Outlined$/, "")
      .replace(/TwoTone$/, "")
  ),
];

export default {
  title: "Ant Design/Icon",
  component: AntDesignIcons,
  argTypes: {
    style: {
      description: "Style",
      type: "options",
      options: ["Filled", "Outlined", "TwoTone"],
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
      options: options,
      description: "Icon",
    },
    spin: {
      description: "Spin",
      type: "boolean",
    },
  },
};

const Template = (args) => {
  const AntDIconElement = AntDesignIcons[`${args.iconName ?? "Star"}${args.style ?? "Filled"}`];
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
  iconName: "Search",
  style: "Outlined",
  size: "12px",
  color: "blue",
  spin: false,
  rotate: 0,
};
