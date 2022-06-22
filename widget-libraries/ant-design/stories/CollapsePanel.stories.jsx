import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";

export default {
  title: "Ant Design/Collapse Panel",
  component: Antd.Collapse.Panel,
  parameters: {
    docs: {
      description: {
        component: "Item",
      },
    },
    titleArg: "header",
    custom_css:
      '.${nodeClass} { font-family: "-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";}',
  },
  argTypes: {
    header: { description: "Header", type: "string" },
    key: { description: "Key", type: "string" },
    showArrow: { description: "Show Arrow", type: "boolean" },
    body: { description: "Body", type: "string" },
  },
};

const Template = (args) => {
  return (
    <Antd.Collapse.Panel
      key={args.key}
      header={args.header}
      showArrow={args.showArrow}
    >
      {args.body}
    </Antd.Collapse.Panel>
  );
};
export const SimpleCollapsePanel = Template.bind({});
SimpleCollapsePanel.args = {
  header: "Title",
  key: "1",
  showArrow: true,
  body: "Body content",
};

SimpleCollapsePanel.storyInfo = {
  name: "SimpleCollapsePanel",
  kind: "Ant Design/Collapse Panel",
};
