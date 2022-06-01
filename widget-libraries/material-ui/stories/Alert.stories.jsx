import React from "react";
import * as MuiMaterial from "@mui/material";

export default {
  title: "Material UI/Alert",
  component: MuiMaterial.Alert,
  argTypes: {
    color: {
      description: "Color",
      type: "options",
      options: ["error", "info", "success", "warning"],
    },
    severity: {
      description: "Severity",
      type: "options",
      options: ["error", "info", "success", "warning"],
    },
    variant: {
      description: "Variant",
      type: "options",
      options: ["filled", "outlined", "standard"],
    },
  },
};

const Template = (args) => {
  return (
    <MuiMaterial.Alert
      color={args.color}
      severity={args.severity}
      variant={args.variant}
    >
      {args.children}
    </MuiMaterial.Alert>
  );
};

export const SimpleAlert = Template.bind({});
SimpleAlert.args = {
  color: "primary",
  severity: "success",
  variant: "outlined",
  children: "This is an alert",
};
