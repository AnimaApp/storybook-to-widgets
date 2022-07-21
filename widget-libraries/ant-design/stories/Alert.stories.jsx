import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";
import * as AntDesignIcons from "@ant-design/icons/lib/icons";
import withIconMapped from "../decorators/withIconMapped";

const options = ["None", ...Object.keys(AntDesignIcons)];
const iconTransform =
  "<% if (param !== 'None') { %><AntDesignIcons.<%= param %> /><% } else { %> '' <% } %>";

export default {
  title: "Ant Design/Alert",
  component: Antd.Alert,
  parameters: {
    custom_css:
      '.${nodeClass} { font-family: "-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";}',
  },
  argTypes: {
    type: {
      description: "Type",
      control: { type: "select" },
      options: ["success", "info", "warning", "error"],
    },
    message: { description: "Message", type: "string" },
    description: { description: "Description", type: "string" },
    showIcon: { description: "Show Icon", type: "boolean" },
    iconName: {
      control: { type: "select" },
      options: options,
      description: "Icon",
      transform: iconTransform,
    },
    closable: { description: "Closable", type: "boolean" },
    banner: { description: "Banner", type: "boolean" },
    width: { description: "Width", type: "string" },
  },
  decorators: [withIconMapped()],
};

const Template = (args) => (
  <Antd.Alert
    type={args.type}
    message={args.message}
    description={args.description}
    showIcon={args.showIcon}
    closable={args.closable}
    banner={args.banner}
    icon={args.iconName}
    style={{ width: args.width }}
  />
);

export const SimpleAlert = Template.bind({});
SimpleAlert.args = {
  type: "info",
  message: "This is the alert message",
  description: "This is the alert description",
  showIcon: false,
  closable: false,
  banner: false,
  iconName: "SearchOutlined",
  width: "280px",
};
