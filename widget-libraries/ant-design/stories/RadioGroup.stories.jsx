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
      type: "options",
      options: ["default", "button"],
    },
    buttonStyle: {
      description: "Button style",
      type: "options",
      options: ["outline", "solid"],
    },
    disabled: {
      description: "Disabled",
      type: "boolean",
    },
    size: {
      description: "Size",
      type: "options",
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
      <SimpleRadio {...args.item} />
      <SimpleRadio {...args.item2} />
      <SimpleRadio {...args.item3} />
    </Antd.Radio.Group>
  );
};
export const SimpleRadioGroup = Template.bind({});
SimpleRadioGroup.args = {
  optionType: "default",
  buttonStyle: "outline",
  disabled: false,
  size: "medium",
  item: {
    value: 1,
  },
  item2: {
    value: 2,
  },
  item3: {
    value: 3,
  },
};
