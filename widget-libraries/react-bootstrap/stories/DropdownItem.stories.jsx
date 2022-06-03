import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  title: "React Bootstrap/DropdownItem",
  component: ReactBootstrap.Dropdown.Item,
  parameters: {
    docs: {
      description: {
        component: "Item",
      },
    },
    titleArg: "label",
  },
  argTypes: {
    link: { description: "Link", type: "string" },
    label: { description: "Label", type: "string" },
  },
};

const Template = (args) => {
  return (
    <>
      <ReactBootstrap.Dropdown.Item href={args.link}>
        {args.label}
      </ReactBootstrap.Dropdown.Item>
    </>
  );
};

export const SimpleDropdownItem = Template.bind({});
SimpleDropdownItem.args = {
  label: "Label",
  link: "#/action-1"
};
SimpleDropdownItem.storyInfo = {
  name: "SimpleDropdownItem",
  kind: "React Bootstrap/DropdownItem",
}
