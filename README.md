# Storybook to Widgets

> Internal storybook plugin to convert stories into widgets

<img width="1844" alt="Screenshot of both storybook and Figma, both showing the same component" src="https://user-images.githubusercontent.com/9501115/166421964-cfe62cc0-4b79-49fe-baba-e9283d40f0f5.png">

## How to create a new widget library

_[See the video "Walkthrough creating a widget using storybook"](https://www.loom.com/share/2716867f3f2f43079a92668cdadaa89e)_

A **widget library** is a colection of widgets. For example, `Vertical Menu` and `Ant Design` are widget libraries.

<center>
    <img width="325" alt="Screnshot of Anima plugin on Figma, showing the component library panel" src="https://user-images.githubusercontent.com/9501115/166422769-d072792c-dfa8-473d-ada6-c07f7318113f.png">
</center>

1. Clone this repository
```sh
git clone git@github.com:AnimaApp/storybook-addon-internal.git
```

2. Install the dependencies (requires NPM version >= 8.3.0)

```sh
npm install
```

3. Start the storybook server
```sh
npm start
```

4. All widget libraries are a project present in the folder [`./widget-libraries`](./widget-libraries). Let's create a new one:

```sh
mkdir widget-libraries/sample
```

```sh
echo "{
  \"name\": \"@animaapp/widgets-sample\",
  \"version\": \"1.0.0\",
  \"private\": true,
  \"scripts\": {},
  \"dependencies\": {},
  \"devDependencies\": {}
}" > widget-libraries/sample/package.json
```

```sh
echo "export default {
  name: \"Sample\",
  description: \"My sample widget library\",
  short_description: \"Sample widget library\",
  thumbnail_url: \"https://animaapp.s3.amazonaws.com/widgets/vertical-menu.svg\",
  empty_thumb_url: \"https://animaapp.s3.amazonaws.com/widgets/vertical-menu.svg\",
  sample_file_figma_url: \"\",
  styles_import: [],
  excluded_packages: [],
  theme: {},
};" > widget-libraries/sample/metadata.js
```

You can later add dependencies on `package.json`. For instance, if your story requires `antd`, you should add it on `./widget-libraries/sample/package.json`, **not** on `./package.json`.

The file `metadata.js` is used to configure how the widget library will be displayed and handled by Figma Plugin.

5. The storybook stories are the widgets component itself available on Figma Plugin. All stories should be present in the folder `./widget-libraries/{library-name}/stories`. Let's create our first story:

```sh
mkdir widget-libraries/sample/stories
```
```sh
echo "import React from \"react\";

export default {
  title: \"Sample/Hello\",
  component: \"p\",
};

const Template = () => (
  <p>Hello</p>
);

export const Simple = Template.bind({});" > widget-libraries/sample/stories/Hello.stories.jsx
```

Note that all stories should have the title following the pattern `{widget-library-name}/{widget-name}`. On this example, it's `Sample/Hello`.

## Widget template description

A widget can be configurable at Figma Plugin. For example, to add the following configuration:

<img width="300" alt="image" src="https://user-images.githubusercontent.com/9501115/166433611-94932ae6-eb4d-47d9-aaca-a13db3e6100e.png">

You should do the following changes:

```diff
 export default {
   title: "Sample/Hello",
   component: "p",
+  argTypes: {
+    username: { description: "Username to greet" },
+  },
 };
 
-const Template = () => (
-  <p>Hello</p>
+const Template = ({ username }) => (
+  <p>Hello {username}</p>
 );
 
 export const Simple = Template.bind({});
+Simple.args = {
+  username: "Foo",
+};
```

## Compound widget with sub stories

A **compound widget** is a story consists of sub-stories inside it.

For example, [`MenuItemGroup.stories`](./widget-libraries/vertical-menu/stories/MenuItemGroup.stories.jsx) is a compound widget, it uses [`SimpleMenuItem.stories`](./widget-libraries/vertical-menu/stories/MenuItem.stories.jsx) as a sub-story.

In order to create a compound widget, we should pay attention to the following areas:

### Sub-story

In our following example, we have 2 different sub-stories: `SimpleTestSubMenu` and `SimpleTestMenuItem`.

We should go to those stories and add a `storyInfo` property. The `storyInfo` will give the Anima add-on plugin the ability to understand which are the connected sub-stories and retrieve their data.

The `storyInfo` property is a dictionary which includes `name` and `kind` keys. The `name` should be the same as the sub-story name and the `kind` should be taken from the sub-story title. 
 
An example of the `SimpleTestMenuItem` sub-story:
 
 ```tsx
// TestMenuItem.stories 
const Template = (args) => (
  <TestMenuItem label={args.label}/>
);

export const SimpleTestMenuItem = Template.bind({});
SimpleTestMenuItem.args = {
  label: "A Menu Item",
};
SimpleTestMenuItem.storyInfo = {
  name: "SimpleTestMenuItem",
  kind: "Vertical menu/TestMenuItem",
};
```

### Parent story

#### Import

Import the relevant sub-stories 

```tsx
// TestMenu.stories
import { SimpleTestSubMenu } from "./TestSubMenu.stories";
import { SimpleTestMenuItem } from "./TestMenuItem.stories";
```

#### Args

Each arg pointing to a sub-story should be defined as follows: 

```tsx
// TestMenu.stories
export default {
  title: "TestMenu",
  component: TestMenu,
  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
  },
  argTypes: {
    submenu: {
      type: "story",
      description: "Simple Test Sub-Menu",
      storyInfo: SimpleTestSubMenu.storyInfo,
    },
    menuitem: {
      type: "story",
      description: "Simple Test Menu-Item",
      storyInfo: SimpleTestMenuItem.storyInfo,
    },
  },
};
```

### Story code

An example of the `TestMenu` parent story, which includes the `SimpleTestMenuItem` and `SimpleTestSubMenu` sub stories:

```tsx
// TestMenu.stories
const Template = (args) => (
  <TestMenu {...args}>
    <SimpleTestMenuItem {...args.menuitem} />
    <SimpleTestSubMenu {...args.submenu} />
  </TestMenu>
);

export const SimpleTestMenu = Template.bind({});
SimpleTestMenu.args = {
  title: "A Menu",
  submenu: { ...SimpleTestSubMenu.args },
  menuitem: { ...SimpleTestMenuItem.args },
};
```

## Custom decorators

### [`withStoryContainer`](./src/decorators/withStoryContainer.tsx)

Moving to sub-stories representation in Storybook, may bring issues when rendering child components as independent stories, since some of those components rely on their parent in order to be rendered properly.

In order to overcome this problem, we are using the custom decorator `withStoryContainer`.
We may define the parent container in the child story and the decorator will take care of wrapping the “orphan” story.

#### Example

In the following example, we are writing a story for a MenuItem, which must live inside a Menu. We will define a `container` key inside the `parameters` dictionary with the parent component.

```tsx
// MenuItem.stories.jsx
export default {
  title: "MenuItem",
  component: Antd.Menu.Item,
  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
    container: Antd.Menu
  },
};
```

### [`withArgsMapping`](./src/decorators/withArgsMapping.tsx)

There are cases where the arg exposed to the user is different than its corresponding value inside the story.
Let’s take the AntD menu icon as an example. We would like the user to select an icon by its name, but the real value will be an AntD icon component:

![image](https://user-images.githubusercontent.com/9501115/166436362-2438a79c-6e91-4d91-9465-b868e5654a59.png)

In this case we would use the `withArgsMapping` decorator to instruct Storybook that the arg should be transformed into a different type prior the rendering process.

```tsx
// widget-libraries/vertical-menu/decorators/withIconMapped.tsx
import React from 'react';
import * as AntDesignIcons from "@ant-design/icons/lib/icons";
import { withArgsMapping } from "../../../src/decorators";

const nameToIcon = (name: string) => {
  const Icon = AntDesignIcons[name];
  return Icon ? <Icon /> : <></>;
};

const argsMapping = { iconName: nameToIcon };
const withIconMapped = withArgsMapping(argsMapping);

export default withIconMapped;
```

```tsx
// widget-libraries/vertical-menu/stories/MenuItem.stories.jsx
import withIconMapped from "../decorators/withIconMapped";

export default {
  decorators: [withIconMapped],
};
```

#### User args transformation

In addition to `withArgsMapping` which covers the rendering aspect in the Storybook UI, we need to provide a transformation function that will be used by the Story code compiler.

A transformation function is a simple EJS template which relies on a single input param:

```tsx
// widget-libraries/vertical-menu/stories/MenuItem.stories.jsx
const iconTransform = "<% if (param !== 'None') { %><AntDesignIcons.<%= param %> /><% } else { %> '' <% } %>";

export default {
  argTypes: {
    iconName: {
      type: "options",
      options: options,
      description: "Icon",
      transform: iconTransform
    },
  },
};
```

In the above example, assuming the `iconName` param is `"HomeOutlined"`, the following code:

```jsx
<Antd.Menu.Item key={args.itemKey} icon={args.iconName}>
```

will be converted to:

```jsx
<Antd.Menu.Item key={args.itemKey} icon={<AntDesignIcons.HomeOutlined/>}>
```

Another example of generating a random id to the key attribute of menu items:

```jsx
const keyTransform = "<%- `\"${(Math.floor(Math.random() * 1000) + 1).toString()}\"` %>";

export default {
  argTypes: {
    itemKey: {
      description: "Key",
      hidden: true,
      transform: keyTransform
    },
  }
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
```
