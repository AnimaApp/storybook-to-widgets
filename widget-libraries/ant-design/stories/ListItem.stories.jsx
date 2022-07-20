import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";

export default {
  title: "Ant Design/List Item",
  component: Antd.List.Item,
  parameters: {
    docs: {
      description: {
        component: "Item",
      },
    },
    container: Antd.List,
    custom_css:
      '.${nodeClass} { font-family: "-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";}',
  },
  argTypes: {
    label: { description: "Label", type: "string" },
  },
};

const Template = (args) => <Antd.List.Item>{args.label}</Antd.List.Item>;

export const SimpleListItem = Template.bind({});
SimpleListItem.args = {
  label: "Label",
};

SimpleListItem.storyInfo = {
  name: "SimpleListItem",
  kind: "Ant Design/List Item",
};
