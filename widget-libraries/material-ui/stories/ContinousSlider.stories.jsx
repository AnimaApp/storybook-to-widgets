import React from "react";
import * as MuiMaterial from "@mui/material";

export default {
  title: "Material UI/Continous slider",
  component: MuiMaterial.Slider,
  parameters: {
    useFigmaLayers: true,
  },
  argTypes: {
    width: {
      description: "Width",
    },
    color: {
      description: "Color",
      control: { type: "select" },
      options: ["primary", "secondary"],
    },
    size: {
      description: "Size",
      control: { type: "select" },
      options: ["small", "medium"],
    },
    disabled: {
      description: "Disabled",
      type: "boolean",
    },
    defaultValue: {
      description: "Default value"
    },
    maxValue: {
      description: "Max value"
    },
    minValue: {
      description: "Min value"
    },
    valueLabelDisplay: {
      description: "Value label display",
      type: "options",
      options: ["auto", "on", "off"],
    }
  }
};

const ContinousSliderTemplate = (args) => {
  return (
    <MuiMaterial.Box width={args.width}>
      <MuiMaterial.Slider
        size={args.size}
        defaultValue={args.defaultValue}
        color={args.color}
        disabled={args.disabled}
        valueLabelDisplay={args.valueLabelDisplay}
        max={args.maxValue}
        min={args.minValue}
      />
    </MuiMaterial.Box>
  );
};

export const ContinuousSlider = ContinousSliderTemplate.bind({});
ContinuousSlider.args = {
  width: 200,
  color: "primary",
  size: "medium",
  defaultValue: 70,
  maxValue: 100,
  minValue: 0,
  valueLabelDisplay: "auto",
  disabled: false,
};
