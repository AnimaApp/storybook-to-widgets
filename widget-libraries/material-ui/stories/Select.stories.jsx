import React from "react";
import * as MuiMaterial from "@mui/material";
import { SimpleMenuItem } from "./MenuItem.stories";

export default {
  title: "Material UI/Select",
  component: MuiMaterial.Select,
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
  const [state, setState] = React.useState("1");

  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
    <MuiMaterial.Select
      sx={{ width: args.width }}
      disabled={args.disabled}
      variant={args.variant}
      label={args.label}
      value={state}
      onChange={handleChange}
    >
      <SimpleMenuItem {...args.menuitem} />
      <SimpleMenuItem {...args.menuitem2} />
      <SimpleMenuItem {...args.menuitem3} />
    </MuiMaterial.Select>
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
    ...SimpleMenuItem.args,
    value: "1",
    label: "User1",
    itemKey: 1,
  },
  menuitem2: {
    ...SimpleMenuItem.args,
    value: "2",
    label: "User2",
    itemKey: 2,
  },
  menuitem3: {
    ...SimpleMenuItem.args,
    value: "3",
    label: "User3",
    itemKey: 3,
  },
};
