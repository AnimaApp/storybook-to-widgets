import React from "react";
import * as MuiMaterial from "@mui/material";
import { SimpleMenuItem } from "./MenuItem.stories";

export default {
  title: "Material UI/Menu",
  component: MuiMaterial.Menu,
  argTypes: {
    open: { description: "Open", type: "boolean" },
    autoFocus: { description: "Auto focus", type: "boolean" },
    disableAutoFocusItem: {
      description: "Disable auto focus",
      type: "boolean",
    },
    variant: {
      description: "Variant",
      type: "options",
      options: ["menu", "selectedMenu"],
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
  return (
    <MuiMaterial.Menu
      open={args.open}
      autoFocus={args.autoFocus}
      disableAutoFocusItem={args.disableAutoFocusItem}
    >
      <SimpleMenuItem {...args.menuitem} />
      <SimpleMenuItem {...args.menuitem2} />
      <SimpleMenuItem {...args.menuitem3} />
    </MuiMaterial.Menu>
  );
};

export const SimpleMenu = Template.bind({});

SimpleMenu.args = {
  open: true,
  autoFocus: true,
  disableAutoFocusItem: false,
  variant: "selectedMenu",
  menuitem: {
    label: "Profile",
  },
  menuitem2: {
    label: "Dashboard",
  },
  menuitem3: {
    label: "Tasks",
  },
};
