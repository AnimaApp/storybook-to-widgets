module.exports = {
  stories: [
    "../widget-libraries/**/stories/**/*.stories.mdx",
    "../widget-libraries/**/stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["../preset.js", "@storybook/addon-essentials"],
};
