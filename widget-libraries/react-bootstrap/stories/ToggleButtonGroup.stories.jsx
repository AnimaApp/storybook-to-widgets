import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { SimpleToggleButton } from "./ToggleButton.stories";

export default {
  title: "React Bootstrap/Toggle Button Group",
  component: ReactBootstrap.ToggleButtonGroup,
  argTypes: {
    size: {
      description: "Size",
      type: "options",
      options: ["Small", "Normal", "Large"],
      mapping: { Small: "sm", Normal: "", Large: "lg" },
    },
    type: {
      description: "Type",
      type: "options",
      options: ["checkbox", "radio"],
    },
    vertical: {
      description: "Vertical",
      type: "boolean",
    },

    item1: {
      type: "story",
      storyInfo: SimpleToggleButton.storyInfo,
    },
    item2: {
      type: "story",
      storyInfo: SimpleToggleButton.storyInfo,
    },
    item3: {
      type: "story",
      storyInfo: SimpleToggleButton.storyInfo,
    },
  },
};

const Template = (args) => {
  return (
    <ReactBootstrap.ToggleButtonGroup
      name="options"
      size={args.size}
      type={args.type}
      vertical={args.vertical}
    >
      <SimpleToggleButton {...args.item1} />
      <SimpleToggleButton {...args.item2} />
      <SimpleToggleButton {...args.item3} />
    </ReactBootstrap.ToggleButtonGroup>
  );
};

export const SimpleToggleButtonGroup = Template.bind({});
SimpleToggleButtonGroup.args = {
  size: "lg",
  type: "radio",
  vertical: false,
  item1: {
    label: "Label 1",
    checked: false,
    disabled: false,
  },
  item2: {
    label: "Label 2",
    checked: false,
    disabled: false,
  },
  item3: {
    label: "Label 3",
    checked: false,
    disabled: false,
  },
};
