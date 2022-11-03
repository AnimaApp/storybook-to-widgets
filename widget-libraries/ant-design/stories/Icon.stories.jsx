import "antd/dist/antd.css";
import * as AntDesignIcons from "@ant-design/icons/lib/icons";
import React from "react";

const iconOptions = [...Object.keys(AntDesignIcons)];

export default {
  title: "Ant Design/Icon",
  component: AntDesignIcons,
  parameters: {
    custom_css:
      '.${nodeClass} { font-family: "-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";}',
  },
  argTypes: {
    rotate: {
      description: "Rotate",
      type: "number",
    },
    color: {
      description: "Color",
      control: { type: "color" },
    },
    size: {
      description: "Size",
      type: "string",
    },
    iconName: {
      control: { type: "select" },
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
  const iconName = args.iconName || "SearchOutlined";
  const AntDIconElement = AntDesignIcons[iconName];
  const style = {
    ...(args.color ? { color: args.color } : {}),
    ...(args.size ? { fontSize: args.size } : {}),
  };
  return (
    <AntDIconElement
      defaultValue={iconName}
      spin={args.spin}
      rotate={args.rotate}
      style={style}
    ></AntDIconElement>
  );
};

export const Simple = Template.bind({});
Simple.args = {
  iconName: "SearchOutlined",
  size: "40px",
  color: "#0000ff",
  spin: false,
  rotate: 0,
};
