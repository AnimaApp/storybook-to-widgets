import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";
import * as AntDesignIcons from "@ant-design/icons/lib/icons";
import withIconMapped from "../decorators/withIconMapped";

const options = ["None", ...Object.keys(AntDesignIcons)];
const iconTransform =
  "<% if (param !== 'None') { %><AntDesignIcons.<%= param %> /><% } else { %> '' <% } %>";

export default {
  title: "Ant Design/Rate",
  component: Antd.Rate,
  argTypes: {
    iconName: {
      type: "options",
      options: options,
      description: "Icon",
      transform: iconTransform,
    },
    color: {
      description: "Icon color",
      control: { type: "color" },
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
      description: "Allow clear",
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
  decorators: [withIconMapped()],
};

const Template = (args) => {
  const style = {
    ...(args.color ? { color: args.color } : {}),
  };
  return (
    <Antd.Rate
      {...(args.iconName && { character: args.iconName })}
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
  color: '#fadb14',
  iconName: "StarFilled",
  defaultValue: 3.5,
  allowClear: true,
  allowHalf: true,
};
