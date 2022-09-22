import React from "react";
import * as MuiMaterial from "@mui/material";
import { SimpleMenuItem } from "./MenuItem.stories";

export default {
  title: "Material UI/Select",
  component: MuiMaterial.Select,
  parameters: {
    useFigmaLayers: true,
  },
  argTypes: {
    variant: {
      description: "Variant",
      control: { type: "select" },
      options: ["filled", "outlined", "standard"],
    },
    disabled: {
      description: "Disabled",
      type: "boolean",
    },
    label: {
      description: "Label",
      type: "string",
    },
    value: {
      description: "Default Value",
      type: "string",
    },
    width: {
      description: "Width",
      type: "string",
      defaultValue: "50%",
    },
    menuitem: {
      type: "story",
      description: "menuitem",
      storyInfo: SimpleMenuItem.storyInfo,
    },
    menuitem2: {
      type: "story",
      description: "menuitem",
      storyInfo: SimpleMenuItem.storyInfo,
    },
    menuitem3: {
      type: "story",
      description: "menuitem",
      storyInfo: SimpleMenuItem.storyInfo,
    },
  },
};

const Template = (args) => {
  const [state, setState] = React.useState("");

  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
    <MuiMaterial.FormControl fullWidth>
      <MuiMaterial.InputLabel id="select-label">
        {args.label}
      </MuiMaterial.InputLabel>
      <MuiMaterial.Select
        id="select"
        labelId="select-label"
        value={state}
        label={args.label}
        onChange={handleChange}
        variant={args.variant}
        disabled={args.disabled}
        sx={{ width: args.width }}
      >
        <MuiMaterial.MenuItem value={args.menuitem.value}>
          {args.menuitem.label}
        </MuiMaterial.MenuItem>
        <MuiMaterial.MenuItem value={args.menuitem2.value}>
          {args.menuitem2.label}
        </MuiMaterial.MenuItem>
        <MuiMaterial.MenuItem value={args.menuitem3.value}>
          {args.menuitem3.label}
        </MuiMaterial.MenuItem>
      </MuiMaterial.Select>
    </MuiMaterial.FormControl>
  );
};

export const SimpleSelect = Template.bind({});
SimpleSelect.args = {
  disabled: false,
  variant: "outlined",
  label: "Username",
  width: "250px",
  value: "1",
  menuitem: {
    value: "1",
    label: "User 1",
  },
  menuitem2: {
    value: "2",
    label: "User 2",
  },
  menuitem3: {
    value: "3",
    label: "User 3",
  },
};
