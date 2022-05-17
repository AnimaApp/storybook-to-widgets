import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";
import * as AntDesignIcons from "@ant-design/icons/lib/icons";
import { iconOptions } from "./data";

export default {
  title: "Ant Design/Rate",
  component: Antd.Rate,
  argTypes: {
    iconName: {
      type: "options",
      options: iconOptions,
      description: "Icon Name",
    },
    color: {
      description: "Icon color",
      type: "string",
    },
    count: {
      description: "Count",
      type: "number",
    },
    defaultValue: {
      description: "Default value",
      type: "number",
    },
    allowClear: {
      description: "Allow clear={args.allowHalf}",
      type: "boolean",
    },
    allowHalf: {
      description: "Allow half",
      type: "boolean",
    },
    readOnly: {
      description: "Read only",
      type: "boolean",
    },
  },
};

const Template = (args) => {
  const AntDIconElement = args.iconName ? AntDesignIcons[args.iconName] : <></>;
  const style = {
    ...(args.color ? { color: args.color } : {}),
  };
  return (
    <Antd.Rate
      character={args.iconName && <AntDIconElement />}
      style={style}
      count={args.count}
      defaultValue={args.defaultValue}
      allowClear={args.allowClear}
      allowHalf={args.allowHalf}
      disabled={args.readOnly}
    ></Antd.Rate>
  );
};

export const Simple = Template.bind({});
Simple.args = {
  count: 5,
  iconName: 'StarFilled',
  defaultValue: 3.5,
  allowClear: true,
  allowHalf: true,
};
