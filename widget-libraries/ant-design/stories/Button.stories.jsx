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
  parameters: {
    docs: {
      description: {
        component: "Button",
      },
    },
    custom_css:
      '.${nodeClass} { font-family: "-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";}',
  },
  argTypes: {
    type: {
      description: "Type",
      control: { type: "select" },
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
      control: { type: "select" },
      options: ["default", "circle", "round"],
    },
    size: {
      description: "Size",
      control: { type: "select" },
      options: ["small", "middle", "large"],
    },
    label: {
      description: "Label",
      type: "string",
    },
    iconName: {
      control: { type: "select" },
      options: options,
      description: "Icon",
      transform: iconTransform,
    },
    disabled: {
      description: "Disabled",
      type: "boolean",
    },
  },
  decorators: [withIconMapped()],
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

export const SimpleButton = Template.bind({});
SimpleButton.args = {
  type: "primary",
  shape: "round",
  size: "large",
  label: "Search",
  iconName: "SearchOutlined",
  disabled: false,
};

SimpleButton.storyInfo = {
  name: "SimpleButton",
  kind: "Ant Design/Button",
};
