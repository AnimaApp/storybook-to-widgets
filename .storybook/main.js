module.exports = {
  stories: [
    "../widget-libraries/**/stories/**/*.stories.mdx",
    "../widget-libraries/**/stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["../preset.js", "@storybook/addon-essentials"],
  managerWebpack: async (config) => {
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: "javascript/auto",
    })

    return config
  }
};
