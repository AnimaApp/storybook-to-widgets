import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";

export default {
  title: "Ant Design/Cascader",
  component: Antd.Cascader,
  parameters: {
    custom_css:
      '.${nodeClass} { font-family: "-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";}',
  },
  argTypes: {
    autoFocus: { description: "Auto focus", type: "boolean" },
    bordered: { description: "Bordered", type: "boolean" },
    disabled: { description: "Disabled", type: "boolean" },
    placeholder: { description: "Placeholder", type: "string" },
    placement: {
      description: "Placement",
      type: "options",
      options: ["bottomLeft", "bottomRight", "topLeft", "topRight"],
    },
    size: {
      description: "Size",
      type: "options",
      options: ["large", "middle", "small"],
    },
    status: {
      description: "Status",
      type: "options",
      options: ["error", "warning"],
    },
  },
};

const CascaderData = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake",
          },
        ],
      },
    ],
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men",
          },
        ],
      },
    ],
  },
];

const Template = (args) => {
  return (
    <Antd.Cascader
      bordered={args.bordered}
      disabled={args.disabled}
      options={args.options}
      placeholder={args.placeholder}
      placement={args.placement}
      size={args.size}
      status={args.status}
    />
  );
};

export const SimpleCascader = Template.bind({});
SimpleCascader.args = {
  options: CascaderData,
  autoFocus: false,
  bordered: true,
  disabled: false,
  placeholder: "Placeholder",
  placement: "bottomLeft",
  size: "middle",
  status: null,
};
