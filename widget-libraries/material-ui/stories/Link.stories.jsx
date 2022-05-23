import React from "react";
import * as MuiMaterial from "@mui/material";

export default {
  title: "Material UI/Link",
  component: MuiMaterial.Link,
  argTypes: {
    color: {
      description: "Color",
      type: "options",
      options: ["primary", "secondary", "error", "info", "success", "warning"],
    },
    underline: {
      description: "Underline",
      type: "options",
      options: ["always", "hover", "none"],
    },
    label: {
      description: "Label",
      type: "string",
    },
  },
};

const Template = (args) => {
  return (
    <MuiMaterial.Link color={args.color} underline={args.underline}>
      {args.label}
    </MuiMaterial.Link>
  );
};

export const SimpleLink = Template.bind({});
SimpleLink.args = {
  color: "primary",
  underline: "always",
  label: "Link",
};
