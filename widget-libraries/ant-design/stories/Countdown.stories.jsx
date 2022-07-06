import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";

export default {
  title: "Ant Design/Countdown",
  component: Antd.Statistic.Countdown,
  parameters: {
    custom_css:
      '.${nodeClass} { font-family: "-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";}',
  },
  argTypes: {
    deadline: { description: "Deadline", type: "number" },
    title: { description: "Title", type: "string" },
  },
};

const Template = (args) => (
  <Antd.Statistic.Countdown value={args.deadline} title={args.title} />
);

export const SimpleCountdown = Template.bind({});
SimpleCountdown.args = {
  title: "Countdown Title",
  deadline: Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 2,
};
