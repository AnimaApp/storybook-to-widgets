import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const sizesTransform =
  "<% if (param === 'Extra Small') { %>'xs'<% }else if (param==='Small') { %>'sm'<% }  else if (param==='Large') { %>'lg'<% } else { %> '' <% } %>";

export default {
  title: "React Bootstrap/Spinner",
  component: ReactBootstrap.Spinner,
  parameters: {
    useFigmaLayers: true,
  },
  argTypes: {
    animation: {
      description: "Animation",
      control: { type: "select" },
      options: ["border", "grow"],
    },
    size: {
      description: "Size",
      control: { type: "select" },
      options: ["Small", "Large"],
      mapping: { Small: "sm", Large: "lg" },
      transform: sizesTransform,
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
        "light",
        "dark",
      ],
    },
  },
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
  size: "Large",
  variant: "primary",
};
