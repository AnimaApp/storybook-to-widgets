export default {
  name: "Ant Design",
  description:
    "Ant Design is a design language for the web and mobile apps, based on Ant Motion.",
  short_description:
    "Ant Design is a design language for the web and mobile apps.",
  thumbnail_url: "https://animaapp.s3.amazonaws.com/widgets/ant-design.svg",
  empty_thumb_url: "https://animaapp.s3.amazonaws.com/widgets/ant-design.svg",
  sample_file_figma_url: "",
  styles_import: ["antd/dist/antd.css", "antd/dist/antd.variable.css"],
  code_template: 'import React from \"react\";\r\nimport ReactDOM from \"react-dom\";\r\nimport * as AntDesignIcons from \"@ant-design/icons\";\r\nimport * as Antd from \"antd\";\r\n\r\n<%-theme_template%>\r\n\r\nconst Main = args => {\r\n    <%-variableDeclarationCode%>\r\n    return (\r\n    \t<%-theme_prefix%>\r\n\t<%-storyCode%>\r\n\t<%-theme_suffix%>\r\n    );\r\n};\r\n\r\nconst args = <%-params%>;\r\n\r\n\r\nReactDOM.render(<Main {...args} />, document.querySelector(\".${nodeClass}\"));',   
  code_template_params: {
    theme_prefix: "<Antd.ConfigProvider>",
    theme_suffix: "</Antd.ConfigProvider>",
    dependencies: ["antd"],
    theme_template: "Antd.ConfigProvider.config({\r\n      theme: {\r\n          primaryColor: \"<%-theme[\"ant-primary-color\"]%>\",\r\n          secondaryColor: \"<%-theme[\"ant-secondary-color\"]%>\",\r\n          successColor: \"<%-theme[\"ant-success-color\"]%>\",\r\n          warningColor: \"<%-theme[\"ant-warning-color\"]%>\",\r\n          errorColor: \"<%-theme[\"ant-error-color\"]%>\",\r\n          fontSizeBase: \"<%-theme[\"ant-font-size-base\"]%>\",\r\n          borderRadiusBase: \"<%-theme[\"ant-border-radius-base\"]%>\",\r\n          borderColorBase: \"<%-theme[\"ant-border-color-base\"]%>\",\r\n      }\r\n  });"
  },
  theme: {
    categories: [
      {
        name: "Colors",
        params: [
          {
            name: "Primary color",
            type: "css-color",
            default: "#1890ff",
            variable: "ant-primary-color",
          },
          {
            name: "Link color",
            type: "css-color",
            default: "#1890ff",
            variable: "ant-secondary-color",
          },
          {
            name: "Success color",
            type: "css-color",
            default: "#52c41a",
            variable: "ant-success-color",
          },
          {
            name: "Warning color",
            type: "css-color",
            default: "#faad14",
            variable: "ant-warning-color",
          },
          {
            name: "Error color",
            type: "css-color",
            default: "#f5222d",
            variable: "ant-error-color",
          },
        ],
      },
    ],
  },
};
