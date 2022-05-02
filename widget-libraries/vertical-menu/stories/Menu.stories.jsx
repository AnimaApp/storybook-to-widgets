import React from "react";
import * as Antd from "antd";
import "antd/dist/antd.css";
import { SimpleMenuItem } from "./MenuItem.stories";
import { SimpleMenuItemGroup } from "./MenuItemGroup.stories";
import withIconMapped from "../decorators/withIconMapped";

export default {
  title: "Vertical menu/Menu",
  component: Antd.Menu,
  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
    layout: "vertical",
    custom_css:
      '.${nodeClass} { font-family: "-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";} .ant-menu-dark .ant-menu-item-divider { border-color: #ffffff;} .ant-menu.ant-menu-dark {background: #151718;}',
  },
  argTypes: {
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
    menuitemgroup: {
      type: "story",
      description: "menuitemgroup",
      storyInfo: SimpleMenuItemGroup.storyInfo,
    },
    width: { description: "Width" },
    theme: {
      description: "Theme",
      type: "options",
      options: ["dark", "light"],
    },
  },
  decorators: [withIconMapped],
};

const Template = (args) => {
  return (
    <Antd.Menu
      style={{
        width: args.width,
      }}
      theme={args.theme}
    >
      <SimpleMenuItem {...args.menuitem} />
      <SimpleMenuItem {...args.menuitem2} />
      <SimpleMenuItem {...args.menuitem3} />
      <SimpleMenuItemGroup {...args.menuitemgroup} />
    </Antd.Menu>
  );
};

export const Menu = Template.bind({});
Menu.args = {
  width: 160,
  theme: "light",
  menuitem: {
    ...SimpleMenuItem.args,
    iconName: "HomeOutlined",
    itemTitle: "Home",
  },
  menuitem2: {
    ...SimpleMenuItem.args,
    iconName: "LineChartOutlined",
    itemTitle: "Analytics",
  },
  menuitem3: {
    ...SimpleMenuItem.args,
    iconName: "UserOutlined",
    itemTitle: "Account",
  },
  menuitemgroup: {
    ...SimpleMenuItemGroup.args,
    itemGroupTitle: "Customers",
    menuitem: {
      ...SimpleMenuItem.args,
      iconName: "TeamOutlined",
      itemTitle: "List",
      includeDivider: false,
    },
    menuitem2: {
      ...SimpleMenuItem.args,
      iconName: "DollarOutlined",
      itemTitle: "Purchases",
    },
  },
};
