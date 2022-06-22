import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";

export default {
  title: "Ant Design/Tab Pane",
  component: Antd.Tabs.TabPane,
  parameters: {
    docs: {
      description: {
        component: "Item",
      },
    },
    container: Antd.Tabs,
    titleArg: "tab",
    custom_css:
      '.${nodeClass} { font-family: "-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";}',
  },
  argTypes: {
    key: { description: "Key", type: "number" },
    body: { description: "Body", type: "string" },
    tab: { description: "Tab title", type: "string" },
  },
};

const Template = (args) => {
  return (
    <Antd.Tabs.TabPane
      key={args.key}
      tab={args.tab}
    >
      {args.body}
    </Antd.Tabs.TabPane>
  );
};
export const SimpleTabPane = Template.bind({});
SimpleTabPane.args = {
  key: "1",
  body: "Body content",
  tab: "Tab title",
};

SimpleTabPane.storyInfo = {
  name: "SimpleTabPane",
  kind: "Ant Design/Tab Pane",
};
