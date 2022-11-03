import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const sizesTransform =
  "<% if (param === 'Extra Small') { %>'xs'<% }else if (param==='Small') { %>'sm'<% }  else if (param==='Large') { %>'lg'<% } else { %> '' <% } %>";

export default {
  title: "React Bootstrap/Button",
  component: ReactBootstrap.Button,
  parameters: {
    useFigmaLayers: true,
  },
  argTypes: {
    disabled: { description: "Disabled", type: "boolean" },
    size: {
      description: "Size",
      control: { type: "select" },
      options: ["Small", "Normal", "Large"],
      mapping: { Small: "sm", Normal: "", Large: "lg" },
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
        "dark",
        "light",
        "link",
      ],
    },
    label: {
      description: "Label",
      type: "string",
    },
  },
};

const Template = (args) => {
  return (
    <ReactBootstrap.Button
      disabled={args.disabled}
      size={args.size}
      variant={args.variant}
    >
      {args.label}
    </ReactBootstrap.Button>
  );
};

export const SimpleButton = Template.bind({});
SimpleButton.args = {
  disabled: false,
  size: "Normal",
  variant: "primary",
  label: "Click me",
};
