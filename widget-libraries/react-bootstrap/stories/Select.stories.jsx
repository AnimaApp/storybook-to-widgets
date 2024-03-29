import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { SimpleSelectOption } from "./SelectItem.stories";

const sizesTransform =
  "<% if (param === 'Extra Small') { %>'xs'<% }else if (param==='Small') { %>'sm'<% }  else if (param==='Large') { %>'lg'<% } else { %> '' <% } %>";

export default {
  title: "React Bootstrap/Select",
  component: ReactBootstrap.Form.Select,
  argTypes: {
    disabled: { description: "Disabled", type: "boolean" },
    size: {
      description: "Size",
      control: { type: "select" },
      options: ["Small", "Normal", "Large"],
      mapping: { Small: "sm", Normal: "", Large: "lg" },
      transform: sizesTransform,
    },
    item1: {
      type: "story",
      storyInfo: SimpleSelectOption.storyInfo,
    },
    item2: {
      type: "story",
      storyInfo: SimpleSelectOption.storyInfo,
    },
    item3: {
      type: "story",
      storyInfo: SimpleSelectOption.storyInfo,
    },
  },
};

const Template = (args) => {
  return (
    <ReactBootstrap.Form.Select disabled={args.disabled} size={args.size}>
      <SimpleSelectOption {...args.item1} />
      <SimpleSelectOption {...args.item2} />
      <SimpleSelectOption {...args.item3} />
    </ReactBootstrap.Form.Select>
  );
};

export const SimpleSelect = Template.bind({});
SimpleSelect.args = {
  disabled: false,
  size: "Normal",
  item1: {
    label: "Option 1",
  },
  item2: {
    label: "Option 2",
  },
  item3: {
    label: "Option 3",
  },
};
