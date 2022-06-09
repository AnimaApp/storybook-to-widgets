import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  title: "React Bootstrap/Placeholder",
  component: ReactBootstrap.Placeholder,
  argTypes: {
    // animation: {
    //   description: "Animation",
    //   type: "options",
    //   options: ["glow", "wave"],
    // },
    bg: {
      description: "Bg",
      type: "options",
      options: [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "dark",
        "light",
      ],
    },
    // size: {
    //   description: "Size",
    //   type: "options",
    //   options: ["xs", "sm", "lg"],
    // },
    width: { description: "Width", type: "string" },
    height: { description: "Height", type: "string" },
  },
};

const Template = (args) => {
  return (
    <ReactBootstrap.Placeholder
      bg={args.bg}
      style={{ width: args.width, height: args.height }}
    />
  );
};

export const SimplePlaceholder = Template.bind({});
SimplePlaceholder.args = {
  // animation: "wave",
  bg: "primary",
  // size: "sm",
  width: "300px",
  height: "90px",
};
