import * as Antd from "antd";
import { SimpleMenuItem } from "./MenuItem.stories";

const keyTransform = "<%- `\"g${(Math.floor(Math.random() * 1000) + 1).toString()}\"` %>";

export default {
  title: "Vertical menu/MenuItemGroup",
  component: Antd.Menu.ItemGroup,
  parameters: {
    docs: {
      description: {
        component: "Group",
      },
    },
    container: Antd.Menu,
    titleArg: "itemGroupTitle"
  },
  argTypes: {
    includeDivider: { 
      description: "Divider"
    },
    itemGroupTitle: { 
      description: "Title"
    },
    groupKey: { 
      description: "Key",
      hidden: true,
      transform: keyTransform
    },
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
  },
};

const Template = (args) => {
  return (
    <>
      <Antd.Menu.ItemGroup key={args.groupKey} title={args.itemGroupTitle}>
        <SimpleMenuItem {...args.menuitem} />
        <SimpleMenuItem {...args.menuitem2} />
      </Antd.Menu.ItemGroup>
      {args.includeDivider && <Antd.Menu.Divider />}
    </>
  );
};

export const SimpleMenuItemGroup = Template.bind({});
SimpleMenuItemGroup.args = {
  itemGroupTitle: "Group",
  includeDivider: false,
  groupKey: "g1",
  menuitem: { ...SimpleMenuItem.args, itemTitle: "Item 1", includeDivider: false},
  menuitem2: { ...SimpleMenuItem.args, itemTitle: "Item 2", iconName:"NotificationOutlined"}
};
SimpleMenuItemGroup.storyInfo = {
  name: "SimpleMenuItemGroup",
  kind: "MenuItemGroup",
};
