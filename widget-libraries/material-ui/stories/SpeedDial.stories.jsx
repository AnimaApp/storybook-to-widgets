import React from "react";
import * as MuiMaterial from "@mui/material";

// SpeedDial
export default {
  title: "Material UI/SpeedDial",
  component: MuiMaterial.SpeedDial,
  argTypes: {
    direction: {
      description: "Direction",
      type: "options",
      options: ["down", "left", "right", "up"],
    },
    hidden: { description: "Hidden", type: "boolean" },
  },
};

const Template = (args) => {
  const actions = [
    { name: "Copy" },
    { name: "Save" },
    { name: "Print" },
    { name: "Share" },
  ];

  return (
    <MuiMaterial.SpeedDial
      ariaLabel="SpeedDial basic example"
      sx={{ position: "absolute", bottom: 16, right: 16 }}
      //   icon={<SpeedDialIcon />}
      orientation={args.orientation}
      hidden={args.hidden}
    >
      {actions.map((action) => (
        <MuiMaterial.SpeedDialAction
          key={action.name}
          tooltipTitle={action.name}
        />
      ))}
    </MuiMaterial.SpeedDial>
  );
};

export const SimpleSpeedDial = Template.bind({});
SimpleSpeedDial.args = {
  orientation: "horizontal",
  hidden: false,
};
