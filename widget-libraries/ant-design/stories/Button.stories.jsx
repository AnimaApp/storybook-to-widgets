import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";
import * as AntDesignIcons from "@ant-design/icons/lib/icons";
import withIconMapped from "../decorators/withIconMapped";

const options = ["None", ...Object.keys(AntDesignIcons)];
const iconTransform =
  "<% if (param !== 'None') { %><AntDesignIcons.<%= param %> /><% } else { %> '' <% } %>";

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
      options: options,
      description: "Icon",
      transform: iconTransform,
    },
    disabled: {
      description: "Disabled",
      type: "boolean",
    },
  },
  decorators: [withIconMapped],
};

const Template = (args) => (
  <Antd.Button
    type={args.type}
    shape={args.shape}
    size={args.size}
    disabled={args.disabled}
  >
    {args.iconName}
    {args.label}
  </Antd.Button>
);

export const Simple = Template.bind({});
Simple.args = {
  type: "primary",
  shape: "round",
  size: "large",
  label: "Search",
  iconName: "SearchOutlined",
};
