import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import withSizesMapped from "../decorators/withSizesMapped";

const sizesTransform =
  "<% if (param === 'Extra Small') { %>'xs'<% }else if (param==='Small') { %>'sm'<% }  else if (param==='Large') { %>'lg'<% } else { %> '' <% } %>";

export default {
  title: "React Bootstrap/Button",
  component: ReactBootstrap.Button,
  argTypes: {
    disabled: { description: "Disabled", type: "boolean" },
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
  decorators: [withSizesMapped],
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
  size: "sm",
  variant: "primary",
  label: "Click me",
};
