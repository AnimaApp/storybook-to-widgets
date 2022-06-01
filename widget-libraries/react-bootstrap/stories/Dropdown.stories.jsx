import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  title: "React Bootstrap/Dropdown",
  component: ReactBootstrap.Dropdown,
  argTypes: {
    autoClose: {
      description: "Autoclose",
      type: "options",
      options: [true, "outside", "inside", false],
    },
    drop: {
      description: "Drop",
      type: "options",
      options: ["up", "start", "end", "down"],
    },
    focusFirstItemOnShow: {
      description: "Focus First Item On Show",
      type: "options",
      options: [false, true, "keyboard"],
    },
  },
};

const Template = (args) => {
  return (
    <ReactBootstrap.Dropdown
      autoClose={args.autoClose}
      drop={args.drop}
      focusFirstItemOnShow={args.focusFirstItemOnShow}
    >
      <ReactBootstrap.Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </ReactBootstrap.Dropdown.Toggle>

      <ReactBootstrap.Dropdown.Menu>
        <ReactBootstrap.Dropdown.Item href="#/action-1">
          Action
        </ReactBootstrap.Dropdown.Item>
        <ReactBootstrap.Dropdown.Item href="#/action-2">
          Another action
        </ReactBootstrap.Dropdown.Item>
        <ReactBootstrap.Dropdown.Item href="#/action-3">
          Something else
        </ReactBootstrap.Dropdown.Item>
      </ReactBootstrap.Dropdown.Menu>
    </ReactBootstrap.Dropdown>
  );
};

export const SimpleDropdown = Template.bind({});
SimpleDropdown.args = {
  autoClose: true,
  drop: "up",
  focusFirstItemOnShow: false,
};
