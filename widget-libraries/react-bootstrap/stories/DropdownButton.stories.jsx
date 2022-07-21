import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { SimpleDropdownItem } from "./DropdownItem.stories";
import { SimpleDropdownDivider } from "./DropdownDivider.stories";

export default {
  title: "React Bootstrap/Dropdown button",
  component: ReactBootstrap.DropdownButton,
  parameters: {
    custom_css: ".${nodeClass} a { display: inherit; }",
  },
  argTypes: {
    title: {
      description: "Title",
      type: "string",
    },
    variant: {
      description: "Variant",
      control: { type: "select" },
      options: [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "dark",
        "light",
        "link",
      ],
    },
    drop: {
      description: "Dropdown direction",
      control: { type: "select" },
      options: ["up", "start", "end", "down"],
    },
    item1: {
      type: "story",
      storyInfo: SimpleDropdownItem.storyInfo,
    },
    item2: {
      type: "story",
      storyInfo: SimpleDropdownItem.storyInfo,
    },
    item3: {
      type: "story",
      storyInfo: SimpleDropdownItem.storyInfo,
    },
    divider: {
      type: "story",
      storyInfo: SimpleDropdownDivider.storyInfo,
    },
  },
};

const Template = (args) => {
  return (
    <ReactBootstrap.DropdownButton
      drop={args.drop}
      variant={args.variant}
      title={args.title}
    >
      <SimpleDropdownItem {...args.item1} />
      <SimpleDropdownItem {...args.item2} />
      <SimpleDropdownDivider {...args.divider} />
      <SimpleDropdownItem {...args.item3} />
    </ReactBootstrap.DropdownButton>
  );
};

export const SimpleDropdownButton = Template.bind({});
SimpleDropdownButton.args = {
  title: "Dropdown button",
  drop: "down",
  variant: "primary",
  item1: {
    label: "Action 1",
    link: "#/action-1",
  },
  item2: {
    label: "Action 2",
    link: "#/action-2",
  },
  divider: {},
  item3: {
    label: "Action 3",
    link: "#/action-3",
  },
};
