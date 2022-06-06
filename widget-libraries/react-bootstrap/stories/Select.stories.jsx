import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { SimpleSelectOption } from "./SelectItem.stories";

export default {
  title: "React Bootstrap/Select",
  component: ReactBootstrap.Form.Select,
  argTypes: {
    disabled: { description: "Disabled", type: "boolean" },
    size: {
      description: "Size",
      type: "options",
      options: ["sm", "lg"],
    },
    item1: {
      type: "story",
      storyInfo: SimpleSelectOption.storyInfo,
    },
    item2: {
      type: "story",
      storyInfo: SimpleSelectOption.storyInfo,
    },
    item3: {
      type: "story",
      storyInfo: SimpleSelectOption.storyInfo,
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 300 }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => {
  return (
    <ReactBootstrap.Form.Select disabled={args.disabled} size={args.size}>
      <SimpleSelectOption {...args.item1} />
      <SimpleSelectOption {...args.item2} />
      <SimpleSelectOption {...args.item3} />
    </ReactBootstrap.Form.Select>
  );
};

export const SimpleSelect = Template.bind({});
SimpleSelect.args = {
  disabled: false,
  size: "lg",
  item1: {
    label: "Option 1",
  },
  item2: {
    label: "Option 2",
  },
  divider: {},
  item3: {
    label: "Option 3",
  },
};
