import React, { useState } from "react";
import * as Antd from "antd";
import { SimpleRadio } from "./Radio.stories";
import "antd/dist/antd.css";

export default {
  title: "Ant Design/Radio Group",
  component: Antd.Radio.Group,
  parameters: {
    custom_css:
      '.${nodeClass} { font-family: "-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";}',
  },
  argTypes: {
    optionType: {
      description: "Option Type",
      control: { type: "select" },
      options: ["default", "button"],
    },
    buttonStyle: {
      description: "Button style",
      control: { type: "select" },
      infotip: "Applicable only when 'Option Type' is button",
      options: ["outline", "solid"],
    },
    disabled: {
      description: "Disabled",
      type: "boolean",
    },
    direction: {
      description: "Direction",
      control: { type: "select" },
      options: ["horizontal", "vertical"],
    },
    size: {
      description: "Size",
      control: { type: "select" },
      infotip: "Applicable only when 'Option Type' is button",
      options: ["small", "medium", "large"],
    },
    item: {
      type: "story",
      description: "item",
      storyInfo: SimpleRadio.storyInfo,
    },
    item2: {
      type: "story",
      description: "item",
      storyInfo: SimpleRadio.storyInfo,
    },
    item3: {
      type: "story",
      description: "item",
      storyInfo: SimpleRadio.storyInfo,
    },
  },
};

const Template = (args) => {
  const [value, setValue] = React.useState(1);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Antd.Radio.Group
      onChange={onChange}
      value={value}
      optionType={args.optionType}
      buttonStyle={args.buttonStyle}
      disabled={args.disabled}
      size={args.size}
    >
      <Antd.Space direction={args.direction}>
        <SimpleRadio {...args.item} />
        <SimpleRadio {...args.item2} />
        <SimpleRadio {...args.item3} />
      </Antd.Space>
    </Antd.Radio.Group>
  );
};
export const SimpleRadioGroup = Template.bind({});
SimpleRadioGroup.args = {
  direction: "horizontal",
  optionType: "default",
  buttonStyle: "outline",
  disabled: false,
  size: "medium",
  item: {
    ...SimpleRadio.args,
    label: "Option 1",
    value: 1,
  },
  item2: {
    ...SimpleRadio.args,
    label: "Option 2",
    value: 2,
  },
  item3: {
    ...SimpleRadio.args,
    label: "Option 3",
    value: 3,
  },
};
