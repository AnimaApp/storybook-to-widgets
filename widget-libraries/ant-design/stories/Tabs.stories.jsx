import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";
import { SimpleTabPane } from "./TabPane.stories";

export default {
  title: "Ant Design/Tabs",
  component: Antd.Tabs,
  parameters: {
    custom_css:
      '.${nodeClass} { font-family: "-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";}',
  },
  argTypes: {
    defaultActiveKey: { description: "Active key", type: "string" },
    centered: { description: "Centered", type: "boolean" },
    size: {
      description: "Size",
      type: "options",
      options: ["large", "default", "small"],
    },
    tabPosition: {
      description: "Tab Position",
      type: "options",
      options: ["top", "right", "bottom", "left"],
    },
    type: {
      description: "Type",
      type: "options",
      options: ["line", "card"],
    },
    width: { description: "Width", type: "number" },
    item: {
      type: "story",
      description: "item",
      storyInfo: SimpleTabPane.storyInfo,
    },
    item2: {
      type: "story",
      description: "item",
      storyInfo: SimpleTabPane.storyInfo,
    },
    item3: {
      type: "story",
      description: "item",
      storyInfo: SimpleTabPane.storyInfo,
    },
  },
};

const Template = (args) => (
  <Antd.Tabs
    style={{ width: args.width }}
    defaultActiveKey={args.defaultActiveKey}
    centered={args.centered}
    size={args.size}
    tabPosition={args.tabPosition}
    type={args.type}
  >
    <SimpleTabPane {...args.item} />
    <SimpleTabPane {...args.item2} />
    <SimpleTabPane {...args.item3} />
  </Antd.Tabs>
);

export const SimpleTabs = Template.bind({});
SimpleTabs.args = {
  defaultActiveKey: "1",
  centered: false,
  size: "default",
  tabPosition: "top",
  type: "line",
  width: 260,
  item: {
    ...SimpleTabPane.args,
    key: "1",
    body: "Body content",
    tab: "Tab 1",
  },
  item2: {
    ...SimpleTabPane.args,
    key: "2",
    body: "Body content 2",
    tab: "Tab 2",
  },
  item3: {
    ...SimpleTabPane.args,
    key: "3",
    body: "Body content 3",
    tab: "Tab 3",
  },
};
