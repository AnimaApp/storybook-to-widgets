import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";
import * as AntDesignIcons from "@ant-design/icons/lib/icons";
import withIconMapped from "../decorators/withIconMapped";

const options = ["None", ...Object.keys(AntDesignIcons)];
const iconTransform =
  "<% if (param !== 'None') { %><AntDesignIcons.<%= param %> /><% } else { %> '' <% } %>";

export default {
  title: "Ant Design/Upload",
  component: Antd.Upload,
  parameters: {
    custom_css:
      '.${nodeClass} { font-family: "-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";}',
  },
  argTypes: {
    label: { description: "Label", type: "string" },
    iconName: {
      control: { type: "select" },
      options: options,
      description: "Icon",
      transform: iconTransform,
    },
    showUploadList: {
      description: "Show file list",
      type: "boolean",
    },
    disabled: {
      description: "Disabled",
      type: "boolean",
    },
  },
  decorators: [withIconMapped()],
};

const Template = (args) => (
  <Antd.Upload showUploadList={args.showUploadList}>
    <Antd.Button icon={args.iconName} disabled={args.disabled}>
      {args.label}
    </Antd.Button>
  </Antd.Upload>
);

export const SimpleUpload = Template.bind({});
SimpleUpload.args = {
  label: "Upload",
  disabled: false,
  showUploadList: true,
  iconName: "UploadOutlined",
};
