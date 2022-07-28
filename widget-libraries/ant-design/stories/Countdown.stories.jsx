import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";
import withSecondsMapped from "../decorators/withSecondsMapped";

const deadlineTransform = "<%= Date.now() + param * 1000 %>";

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
      transform: deadlineTransform,
    },
    title: { description: "Title", type: "string" },
  },
  decorators: [withSecondsMapped()],
};

const Template = (args) => {
  return <Antd.Statistic.Countdown value={args.deadline} title={args.title} />;
};

export const SimpleCountdown = Template.bind({});
SimpleCountdown.args = {
  title: "Countdown Title",
  deadline: 60,
};
