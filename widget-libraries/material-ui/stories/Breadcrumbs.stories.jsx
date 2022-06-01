import React from "react";
import * as MuiMaterial from "@mui/material";

export default {
  title: "Material UI/Breadcrumbs",
  component: MuiMaterial.Breadcrumbs,
  argTypes: {
    separator: {
      thickness: "Custom Separator",
      type: "string",
    },
    expandText: {
      thickness: "Expand Text",
      type: "string",
    },
    itemsAfterCollapse: {
      description: "Items after collapse",
      type: "number",
    },
    itemsBeforeCollapse: {
      description: "Items before collapse",
      type: "number",
    },
  },
};

const Template = (args) => {
  return (
    <MuiMaterial.Breadcrumbs
      separator={args.separator}
      expandText={args.expandText}
      itemsAfterCollapse={args.itemsAfterCollapse}
      itemsBeforeCollapse={args.itemsBeforeCollapse}
    >
      <MuiMaterial.Link underline="hover" color="inherit" href="/">
        MUI
      </MuiMaterial.Link>
      <MuiMaterial.Link
        underline="hover"
        color="inherit"
        href="/material-ui/getting-started/installation/"
      >
        Core
      </MuiMaterial.Link>
      <MuiMaterial.Typography color="text.primary">
        Breadcrumbs
      </MuiMaterial.Typography>
    </MuiMaterial.Breadcrumbs>
  );
};

export const SimpleBreadcrumbs = Template.bind({});
SimpleBreadcrumbs.args = {
  separator: "/",
  expandText: "Show path",
  itemsAfterCollapse: 1,
  itemsBeforeCollapse: 1,
};
