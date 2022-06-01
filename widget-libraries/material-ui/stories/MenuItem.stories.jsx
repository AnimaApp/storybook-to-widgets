import React from "react";
import * as MuiMaterial from "@mui/material";

export default {
  title: "Material UI/MenuItem",
  component: MuiMaterial.MenuItem,
  parameters: {
    docs: {
      description: {
        component: "Menu item",
      }
    },
    titleArg: "label",
  },
  argTypes: {
    label: {
      description: "Label",
      type: "string",
    },
    value: {
      description: "Value",
      type: "string",
    },
  },
};

const Template = (args) => {
  return (
    <MuiMaterial.MenuItem value={args.value}>{args.label}</MuiMaterial.MenuItem>
  );
};

export const SimpleMenuItem = Template.bind({});

SimpleMenuItem.args = {
  value: "1",
  label: "User 1",
};

SimpleMenuItem.storyInfo = {
  name: "SimpleMenuItem",
  kind: "Material UI/MenuItem",
};
