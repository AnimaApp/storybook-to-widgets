import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  title: "React Bootstrap/DropdownDivider",
  component: ReactBootstrap.Dropdown.Divider,
  parameters: {
    docs: {
      description: {
        component: "Divider",
      },
    },
    storyContainerMinWidth: 150,
  },
};

const Template = (args) => {
  return (
    <>
      <ReactBootstrap.Dropdown.Divider />
    </>
  );
};

export const SimpleDropdownDivider = Template.bind({});
SimpleDropdownDivider.args = {};
SimpleDropdownDivider.storyInfo = {
  name: "SimpleDropdownDivider",
  kind: "React Bootstrap/DropdownDivider",
};
