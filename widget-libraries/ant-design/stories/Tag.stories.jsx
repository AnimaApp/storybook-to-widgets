import React from "react";

import "antd/dist/antd.css";
import * as Antd from "antd";
import * as AntDesignIcons from "@ant-design/icons/lib/icons";
import withIconMapped from "../decorators/withIconMapped";

const options = ["None", ...Object.keys(AntDesignIcons)];
const iconTransform =
  "<% if (param !== 'None') { %><AntDesignIcons.<%= param %> /><% } else { %> '' <% } %>";

export default {
  title: "Ant Design/Tag",
  component: Antd.Tag,
  parameters: {
    custom_css:
      '.${nodeClass} { font-family: "-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";}',
  },
  argTypes: {
    color: {
      description: "Color",
      control: { type: "color" },
    },
    closable: { description: "Closable", type: "boolean" },
    label: { description: "Label", type: "string" },
    icon: {
      type: "options",
      options: options,
      description: "Icon",
      transform: iconTransform,
    },
  },
  decorators: [withIconMapped()],
};

const Template = (args) => {
  return (
    <Antd.Tag color={args.color} closable={args.closable} icon={args.icon}>
      {args.label}
    </Antd.Tag>
  );
};

export const SimpleTag = Template.bind({});
SimpleTag.args = {
  color: "blue",
  closable: false,
  label: "Tag 1",
};
