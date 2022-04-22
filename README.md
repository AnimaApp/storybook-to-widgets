# Storybook Anima Addon

- be able to add storybook components as widget in anima

### Creating a release

To create a release locally:

1. move all your changes to the "main" branch
2. bump the version (inside package.json)
3. create an ".env" file with GH_TOKEN (create github personal access token with repo scope: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
4. npm run release
5. you will then see it here: https://npm.animaapp.com/

### How to use storybook-addon-internal in external project?

loom: https://www.loom.com/share/bb31aae084174736a107ca5b2cdf77f0

1. npm install storybook-addon-anima-internal
2. add to main.js file under addons array: "storybook-addon-anima-internal"
3. add to `.env` file with:
```
STORYBOOK_HOST_URL={ANIMA HOST URL}
STORYBOOK_X_API_TOKEN={ANIMA TOKEN}
```
4. you should see the addon now
5. some modifications you have to do:
    a. in preview.js file expose the packageJson + add widget library data


    ```sh
    import packageJson from "../package.json";

    export const globalTypes = {
    packageJson: {
        name: "PackageJson",
        description: "Storybook package json",
        defaultValue: packageJson,
    },
    library: {
        name: "Library",
        description: "library",
        defaultValue: {
        name: "Charts",
        description:
            "Recharts makes it easy to integrate charts into your React application.",
        short_description: "Based on Recharts React library.",
        thumbnail_url:
            "https://animaapp.s3.amazonaws.com/widgets/charts-symbol.svg",
        empty_thumb_url:
            "https://animaapp.s3.amazonaws.com/widgets/charts-symbol.svg",
        sample_file_figma_url:
            "https://www.figma.com/community/file/1029805611065950381",
        },
    },
    };

    ```

    b. notice you use the components this way:
    ```sh 
    import * as Recharts from "recharts";
    <Recharts.BarChart {...args}>
    ```

    c. in order to support widget template description, add this to the params:
    docs: {
      description: {
        component:
          "combines the line chart and bar chart to show how one or more groups' numeric values change over the progression of a second variable, typically that of time.",
      },
    },

    d. in order to support different name for fields to show the user:
    argTypes: {
        fillColor: {
            description: "fill color",
            },
    },