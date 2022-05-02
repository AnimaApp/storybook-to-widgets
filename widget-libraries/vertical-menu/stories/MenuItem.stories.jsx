import * as Antd from "antd";
import React from "react";
import * as AntDesignIcons from "@ant-design/icons/lib/icons";
import withIconMapped from "../decorators/withIconMapped";

const options = ["None", ...Object.keys(AntDesignIcons)];
const iconTransform = "<% if (param !== 'None') { %><AntDesignIcons.<%= param %> /><% } else { %> '' <% } %>";
const keyTransform = "<%- `\"${(Math.floor(Math.random() * 1000) + 1).toString()}\"` %>";

export default {
  title: "Vertical menu/MenuItem",
  component: Antd.Menu.Item,
  parameters: {
    docs: {
      description: {
        component: "Menu item",
      },
    },
    container: Antd.Menu,
    titleArg: "itemTitle"
  },
  argTypes: {
    iconName: {
      type: "options",
      options: options,
      description: "Icon",
      transform: iconTransform
    },
    itemTitle: {
      description: "Title",
    },
    itemKey: {
      description: "Key",
      hidden: true,
      transform: keyTransform
    },
    includeDivider: {
      description: "Divider",
    }
  },
  decorators: [withIconMapped],
};

const Template = (args) => {
  return (
    <>
      <Antd.Menu.Item key={args.itemKey} icon={args.iconName}>
        {args.itemTitle}
      </Antd.Menu.Item>
      {args.includeDivider && <Antd.Menu.Divider />}
    </>
  );
};
export const SimpleMenuItem = Template.bind({});
SimpleMenuItem.args = {
  itemTitle: "Item",
  includeDivider: true,
  iconName: "HomeOutlined",
  itemKey: "1",
};

SimpleMenuItem.storyInfo = {
  name: "SimpleMenuItem",
  kind: "MenuItem",
};
