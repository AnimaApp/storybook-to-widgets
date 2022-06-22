import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";
import { SimpleTimelineItem } from "./TimelineItem.stories";

export default {
  title: "Ant Design/Timeline",
  component: Antd.Timeline,
  parameters: {
    custom_css:
      '.${nodeClass} { font-family: "-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";}',
  },
  argTypes: {
    mode: {
      description: "Mode",
      type: "options",
      options: ["left", "alternate", "right"],
    },
    reverse: { description: "Reverse", type: "boolean" },
    item: {
      type: "story",
      description: "item",
      storyInfo: SimpleTimelineItem.storyInfo,
    },
    item2: {
      type: "story",
      description: "item",
      storyInfo: SimpleTimelineItem.storyInfo,
    },
    item3: {
      type: "story",
      description: "item",
      storyInfo: SimpleTimelineItem.storyInfo,
    },
    width: { description: "Width", type: "number" },
  },
};

const Template = (args) => (
  <Antd.Timeline
    mode={args.mode}
    reverse={args.reverse}
    style={{ width: args.width }}
  >
    <SimpleTimelineItem {...args.item} />
    <SimpleTimelineItem {...args.item2} />
    <SimpleTimelineItem {...args.item3} />
  </Antd.Timeline>
);

export const SimpleTimeline = Template.bind({});
SimpleTimeline.args = {
  mode: "left",
  reverse: false,
  width: 300,
  item: {
    label: "Label",
  },
  item2: {
    label: "Label 2",
  },
  item3: {
    label: "Label 3",
  },
};
