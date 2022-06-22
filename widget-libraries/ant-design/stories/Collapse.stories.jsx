import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";
import { SimpleCollapsePanel } from "./CollapsePanel.stories";

export default {
  title: "Ant Design/Collapse",
  component: Antd.Collapse,
  parameters: {
    custom_css:
      '.${nodeClass} { font-family: "-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";}',
  },
  argTypes: {
    accordion: { description: "Accordion", type: "boolean" },
    bordered: { description: "Bordered", type: "boolean" },
    ghost: { description: "Ghost", type: "boolean" },
    activeKey: { description: "Active Key" },
    width: { description: "Width", type: "number" },
    collapsible: {
      description: "Collapsible",
      type: "options",
      options: ["header", "disabled"],
    },
    item: {
      type: "story",
      description: "item",
      storyInfo: SimpleCollapsePanel.storyInfo,
    },
    item2: {
      type: "story",
      description: "item",
      storyInfo: SimpleCollapsePanel.storyInfo,
    },
    item3: {
      type: "story",
      description: "item",
      storyInfo: SimpleCollapsePanel.storyInfo,
    },
  },
};

const Template = (args) => (
  <Antd.Collapse
    style={{ width: args.width }}
    accordion={args.accordion}
    collapsible={args.collapsible}
    defaultActiveKey={args.activeKey}
    bordered={args.bordered}
    ghost={args.ghost}
  >
    <SimpleCollapsePanel {...args.item} />
    <SimpleCollapsePanel {...args.item2} />
    <SimpleCollapsePanel {...args.item3} />
  </Antd.Collapse>
);

export const SimpleCollapse = Template.bind({});
SimpleCollapse.args = {
  width: 400,
  accordion: true,
  activeKey: ["1"],
  bordered: true,
  ghost: false,
  collapsible: "header",
  item: {
    ...SimpleCollapsePanel.args,
    collapsible: "Collapsible",
    header: "Panel Title",
    key: "1",
    showArrow: true,
    body: "Body content",
  },
  item2: {
    ...SimpleCollapsePanel.args,
    collapsible: "Collapsible",
    header: "Panel Title 2",
    key: "2",
    showArrow: true,
    body: "Body content 2",
  },
  item3: {
    ...SimpleCollapsePanel.args,
    collapsible: "Collapsible",
    header: "Panel Title 3",
    key: "3",
    showArrow: true,
    body: "Body content 3",
  },
};
