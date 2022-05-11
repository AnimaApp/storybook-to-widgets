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
      name: "Vertical menu",
      description:
        "An enterprise-class UI design language and React components implementation",
      short_description: "UI design language",
      thumbnail_url:
        "https://animaapp.s3.amazonaws.com/widgets/vertical-menu.svg",
      empty_thumb_url:
        "https://animaapp.s3.amazonaws.com/widgets/vertical-menu.svg",
      sample_file_figma_url:
        "",
      styles_import: ["antd/dist/antd.css","antd/dist/antd.variable.css"],
      excluded_packages: ["lodash.startcase", "@anima/story-code-parser"],
    },
  },
};
