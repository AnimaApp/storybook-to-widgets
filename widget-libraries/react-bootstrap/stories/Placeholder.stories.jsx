import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  title: "React Bootstrap/Placeholder",
  component: ReactBootstrap.Placeholder,
  argTypes: {
    animation: {
      description: "Animation",
      type: "options",
      options: ["glow", "wave"],
    },
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
    size: {
      description: "Size",
      type: "options",
      options: ["xs", "sm", "lg"],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "400px", height: "200px" }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => {
  return (
    <ReactBootstrap.Placeholder
      animation={args.animation}
      bg={args.bg}
      size={args.size}
      xs={12}
    />
  );
};

export const SimplePlaceholder = Template.bind({});
SimplePlaceholder.args = {
  animation: "glow",
  bg: "primary",
  size: "sm",
};
