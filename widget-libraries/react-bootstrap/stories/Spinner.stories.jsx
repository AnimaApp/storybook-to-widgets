import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import withSizesMapped from "../decorators/withSizesMapped";

const sizesTransform =
  "<% if (param === 'Extra Small') { %>'xs'<% }else if (param==='Small') { %>'sm'<% }  else if (param==='Large') { %>'lg'<% } else { %> '' <% } %>";

export default {
  title: "React Bootstrap/Spinner",
  component: ReactBootstrap.Spinner,
  argTypes: {
    animation: {
      description: "Animation",
      type: "options",
      options: ["border", "grow"],
    },
    size: {
      description: "Size",
      type: "options",
      options: ["Small", "Normal", "Large"],
      mapping: { Small: "sm", Normal: "", Large: "lg" },
      transform: sizesTransform,
    },
    variant: {
      description: "Variant",
      type: "options",
      options: [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
      ],
    },
  },
  decorators: [withSizesMapped],
};

const Template = (args) => {
  return (
    <ReactBootstrap.Spinner
      animation={args.animation}
      size={args.size}
      variant={args.variant}
    />
  );
};

export const SimpleSpinner = Template.bind({});
SimpleSpinner.args = {
  animation: "border",
  size: "lg",
  variant: "primary",
};
