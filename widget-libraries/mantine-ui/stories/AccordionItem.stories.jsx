import React from "react";
import * as MantineCore from "@mantine/core";

export default {
  title: "Mantine UI/AccordionItem",
  component: MantineCore.Accordion.Item,
  parameters: {
    docs: {
      description: {
        component: "Item",
      },
    },
    container: MantineCore.Accordion,
  },
  argTypes: {
    value: { description: "Value", type: "string" },
    label: { description: "Label", type: "string" },
    title: { description: "Title", type: "string" },
    description: { description: "Description", type: "string" },
  },
};

const Template = (args) => {
  return (
    <MantineCore.Accordion.Item value={args.value}>
      <MantineCore.Accordion.Control>
        {args.title}
      </MantineCore.Accordion.Control>
      <MantineCore.Accordion.Panel>
        {args.description}
      </MantineCore.Accordion.Panel>
    </MantineCore.Accordion.Item>
  );
};

export const SimpleAccordionItem = Template.bind({});

SimpleAccordionItem.args = {
  value: "Value",
  label: "Label",
  title: "Title",
  description: "Description",
};

SimpleAccordionItem.storyInfo = {
  name: "SimpleAccordionItem",
  kind: "Mantine/AccordionItem",
};
