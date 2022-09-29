import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";

export default {
  title: "Ant Design/Tree",
  component: Antd.Tree,
  parameters: {
    custom_css:
      '.${nodeClass} { font-family: "-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";}',
  },
  argTypes: {
    multiple: { description: "Multiple", type: "boolean" },
    checkable: { description: "Checkable", type: "boolean" },
  },
};

const treeData = [
  {
    title: "parent 1",
    key: "0-0",
    children: [
      {
        title: "parent 1-0",
        key: "0-0-0",
        disabled: true,
        children: [
          {
            title: "leaf",
            key: "0-0-0-0",
            disableCheckbox: true,
          },
          {
            title: "leaf",
            key: "0-0-0-1",
          },
        ],
      },
      {
        title: "parent 1-1",
        key: "0-0-1",
        children: [
          {
            title: "sss",
            key: "0-0-1-0",
          },
        ],
      },
    ],
  },
];

const Template = (args) => {
  return (
    <Antd.Tree
      treeData={args.treeData}
      multiple={args.multiple}
      checkable={args.checkable}
    />
  );
};

export const SimpleTree = Template.bind({});
SimpleTree.args = {
  multiple: false,
  checkable: false,
  treeData,
};
