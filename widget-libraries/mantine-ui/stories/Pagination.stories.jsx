import React from "react";
import * as MantineCore from "@mantine/core";

export default {
  title: "Mantine UI/Pagination",
  component: MantineCore.Pagination,
  parameters: {
    docs: {
      description: {
        component: "Pagination",
      },
    },
  },
  argTypes: {
    position: {
      description: "Position",
      control: { type: "select" },
      options: ["left", "right", "center", "apart"],
    },
    radius: {
      description: "Radius",
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    size: {
      description: "Size",
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    spacing: {
      description: "Spacing",
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    total: { description: "Total", type: "number" },
    withControls: { description: "With Controls", type: "boolean" },
    withEdges: { description: "With Edges", type: "boolean" },
    initialPage: { description: "Initial Page", type: "number" },
  },
};

const Template = (args) => {
  return (
    <MantineCore.Pagination
      position={args.position}
      radius={args.radius}
      size={args.size}
      spacing={args.spacing}
      total={args.total}
      withControls={args.withControls}
      withEdges={args.withEdges}
      initialPage={args.initialPage}
    />
  );
};

export const SimplePagination = Template.bind({});

SimplePagination.args = {
  position: "center",
  radius: "md",
  size: "md",
  spacing: "md",
  total: 10,
  withControls: false,
  withEdges: false,
  initialPage: 1,
};
