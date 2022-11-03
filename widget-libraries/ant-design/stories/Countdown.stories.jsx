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
    deadline: {
      description: "Deadline",
      type: "number",
    },
    title: { description: "Title", type: "string" },
  },
};

const Template = (args) => {
  return (
    <Antd.Statistic.Countdown
      value={Date.now() + args.deadline * 1000}
      title={args.title}
    />
  );
};

export const SimpleCountdown = Template.bind({});
SimpleCountdown.args = {
  title: "Countdown Title",
  deadline: 60,
};
