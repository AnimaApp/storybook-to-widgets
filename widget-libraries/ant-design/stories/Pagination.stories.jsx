import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";

export default {
  title: "Ant Design/Pagination",
  component: Antd.Pagination,
  itemTitle: {
    description: "Title",
  },
  parameters: {
    custom_css:
      '.${nodeClass} { font-family: "-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";}',
  },
  argTypes: {
    total: {
      description: "Total elements",
    },
    pageSize: {
      description: "Element per page",
    },
    size: {
      description: "Size",
      control: { type: "select" },
      options: ["default", "small"],
    },
    showSizeChanger: {
      description: "Size changer",
      infotip:
        "Would be displayed only on screens larger than 576px, insert to view",
    },
    current: {
      description: "Current",
    },
    disabled: {
      description: "Disabled",
    },
  },
};

const Template = (args) => (
  <Antd.Pagination
    pageSize={args.pageSize}
    current={args.current}
    total={args.total}
    size={args.size}
    showSizeChanger={args.showSizeChanger}
    disabled={args.disabled}
  />
);

export const Simple = Template.bind({});
Simple.args = {
  showSizeChanger: true,
  current: 3,
  total: 50,
  pageSize: 10,
  disabled: false,
  size: "default",
};
