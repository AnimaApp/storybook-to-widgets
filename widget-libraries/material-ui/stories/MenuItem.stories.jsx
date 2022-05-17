import React from "react";
import * as MuiMaterial from "@mui/material";

export default {
  title: "Material UI/MenuItem",
  component: MuiMaterial.MenuItem,
  argTypes: {
    autoFocus: {
      description: "Autofocus",
      type: "boolean",
      defaultValue: false,
    },
    dense: {
      description: "Dense",
      type: "boolean",
      defaultValue: false,
    },
    divider: {
      description: "Divider",
      type: "boolean",
      defaultValue: false,
    },
    disableGutters: {
      description: "Disable Gutters",
      type: "boolean",
      defaultValue: false,
    },
    value: {
      description: "Value",
      type: "string" | "number",
    },
  },
};

const Template = (args) => {
  return (
    <MuiMaterial.MenuItem key={args.itemKey} value={args.value}>
      {args.label}
    </MuiMaterial.MenuItem>
  );
};

export const SimpleMenuItem = Template.bind({});

SimpleMenuItem.args = {
  value: 1,
  label: "User 1",
  itemKey: "1",
};

SimpleMenuItem.storyInfo = {
  name: "SimpleMenuItem",
  kind: "Material UI/MenuItem",
};
