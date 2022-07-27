import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";
import withIconMapped from "../decorators/withIconMapped";
import { SimpleButton } from "./Button.stories";

export default {
  title: "Ant Design/Result",
  component: Antd.Result,
  parameters: {
    custom_css:
      '.${nodeClass} { font-family: "-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";}',
    useFigmaLayers: true,
  },
  argTypes: {
    status: {
      description: "Status",
      control: { type: "select" },
      options: ["success", "error", "info", "warning", "404", "403", "500"],
    },
    title: { description: "Title", type: "string" },
    subTitle: { description: "Sub title", type: "string" },
    button: {
      type: "story",
      description: "button",
      storyInfo: SimpleButton.storyInfo,
    },
  },
  decorators: [withIconMapped()],
};

const Template = (args) => (
  <Antd.Result
    status={args.status}
    title={args.title}
    subTitle={args.subTitle}
    extra={<SimpleButton {...args.button} />}
  />
);

export const SimpleResult = Template.bind({});
SimpleResult.args = {
  status: "info",
  title: "Title",
  subTitle: "This is the subtitle",
  button: {
    type: "primary",
    shape: "round",
    size: "large",
    label: "Back Home",
    disabled: false,
  },
};
