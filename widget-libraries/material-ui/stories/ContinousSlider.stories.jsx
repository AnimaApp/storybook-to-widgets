import React from "react";
import * as MuiMaterial from "@mui/material";

export default {
  title: "Material UI/Continous Slider",
  component: MuiMaterial.Slider,
  argTypes: {
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
    orientation: {
      description: "Orientation",
      control: { type: "select" },
      options: ["vertical", "horizontal"],
      defaultValue: "horizontal",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ marginTop: "2em", marginLeft: "1em" }}>
        <Story />
      </div>
    ),
  ],
};

const ContinousSliderTemplate = (args) => {
  return (
    <MuiMaterial.Slider
      sx={{
        '& input[type="range"]': {
          WebkitAppearance: "slider-vertical",
        },
      }}
      size={args.size}
      color={args.color}
      disabled={args.disabled}
      orientation={args.orientation}
    />
  );
};

export const ContinuousSlider = ContinousSliderTemplate.bind({});
ContinuousSlider.args = {
  color: "primary",
  size: "medium",
  disabled: false,
};
