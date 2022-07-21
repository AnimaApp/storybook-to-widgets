import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";
import { SimpleListItem } from "./ListItem.stories";

export default {
  title: "Ant Design/List",
  component: Antd.List,
  parameters: {
    custom_css:
      '.${nodeClass} { font-family: "-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";}',
  },
  argTypes: {
    bordered: { description: "Bordered", type: "boolean" },

    itemLayout: {
      description: "Item layout",
      control: { type: "select" },
      options: ["horizontal", "vertical"],
    },
    loading: { description: "Loading", type: "boolean" },

    size: {
      description: "Size",
      control: { type: "select" },
      options: ["default", "large", "small"],
    },
    split: { description: "Split", type: "boolean" },
    width: { description: "Width", type: "number" },
    item: {
      type: "story",
      description: "item",
      storyInfo: SimpleListItem.storyInfo,
    },
    item2: {
      type: "story",
      description: "item",
      storyInfo: SimpleListItem.storyInfo,
    },
    item3: {
      type: "story",
      description: "item",
      storyInfo: SimpleListItem.storyInfo,
    },
  },
};

const Template = (args) => (
  <Antd.List
    bordered={args.bordered}
    itemLayout={args.itemLayout}
    loading={args.loading}
    size={args.size}
    split={args.split}
    style={{ width: args.width }}
  >
    <SimpleListItem {...args.item} />
    <SimpleListItem {...args.item2} />
    <SimpleListItem {...args.item3} />
  </Antd.List>
);

export const SimpleList = Template.bind({});
SimpleList.args = {
  bordered: true,
  itemLayout: "horizontal",
  loading: false,
  size: "default",
  split: true,
  width: 300,
  item: {
    label: "List Item",
  },
  item2: {
    label: "List Item 2",
  },
  item3: {
    label: "List Item 3",
  },
};
