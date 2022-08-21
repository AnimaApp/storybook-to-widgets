import React from "react";
import * as MuiMaterial from "@mui/material";

export default {
  title: "Material UI/Alert",
  component: MuiMaterial.Alert,
  argTypes: {
    color: {
      description: "Color",
      control: { type: "select" },
      options: ["error", "info", "success", "warning"],
    },
    severity: {
      description: "Severity",
      control: { type: "select" },
      options: ["error", "info", "success", "warning"],
    },
    variant: {
      description: "Variant",
      control: { type: "select" },
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
      <MuiMaterial.AlertTitle>{args.title}</MuiMaterial.AlertTitle>
    </MuiMaterial.Alert>
  );
};

export const SimpleAlert = Template.bind({});
SimpleAlert.args = {
  color: "primary",
  severity: "success",
  variant: "outlined",
  title: "This is an alert",
};
