import React from "react";
import * as MuiMaterial from "@mui/material";
import withIconMapped from "../decorators/withIconMapped";
import { iconOptions, iconTransform } from "../utils";

export default {
  title: "Material UI/ButtonInGroup",
  component: MuiMaterial.Button,
  parameters: {
    docs: {
      description: {
        component: "Button",
      }
    },
    titleArg: "label",
  },
  argTypes: {
    startIcon: {
      type: "options",
      options: iconOptions,
      description: "Start Icon",
      transform: iconTransform,
    },
    endIcon: {
      type: "options",
      options: iconOptions,
      description: "End Icon",
      transform: iconTransform,
    },
    label: {
      description: "Label",
      type: "string",
    }
  },
  decorators: [withIconMapped],
};

const Template = (args) => {
  return (
    <MuiMaterial.Button
      startIcon={args.startIcon}
      endIcon={args.endIcon}
    >
      {args.label}
    </MuiMaterial.Button>
  );
};

export const SimpleButtonInGroup =  Template.bind({});
SimpleButtonInGroup.args = {
  label: "Button 1",
  startIcon: "None",
  endIcon: "None"
};

SimpleButtonInGroup.storyInfo = {
  name: "SimpleButtonInGroup",
  kind: "Material UI/ButtonInGroup",
};