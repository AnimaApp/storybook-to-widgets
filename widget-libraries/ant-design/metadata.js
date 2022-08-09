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
  code_template: 'import React from \"react\";\r\nimport ReactDOM from \"react-dom\";\r\nimport * as AntDesignIcons from \"@ant-design\/icons\";\r\nimport * as Antd from \"antd\";\r\n<% if(typeof theme != \"undefined\") { %>\r\nimport { ConfigProvider } from \"antd\";\r\n\r\n\tConfigProvider.config({\r\n\t    theme: {\r\n\t        <% if(typeof theme[\"ant-primary-color\"] != \"undefined\") { %> primaryColor: \"<%-theme[\"ant-primary-color\"]%>\", <% } %>\r\n\t        <% if(typeof theme[\"ant-secondary-color\"] != \"undefined\") { %> secondaryColor: \"<%-theme[\"ant-secondary-color\"]%>\", <% } %>\r\n\t        <% if(typeof theme[\"ant-success-color\"] != \"undefined\") { %> successColor: \"<%-theme[\"ant-success-color\"]%>\", <% } %>\r\n\t        <% if(typeof theme[\"ant-warning-color\"] != \"undefined\") { %> warningColor: \"<%-theme[\"ant-warning-color\"]%>\", <% } %>\r\n\t        <% if(typeof theme[\"ant-error-color\"] != \"undefined\") { %> errorColor: \"<%-theme[\"ant-error-color\"]%>\", <% } %>\r\n\t        <% if(typeof theme[\"ant-font-size-base\"] != \"undefined\") { %> fontSizeBase: \"<%-theme[\"ant-font-size-base\"]%>\", <% } %>\r\n\t        <% if(typeof theme[\"ant-border-radius-base\"] != \"undefined\") { %> borderRadiusBase: \"<%-theme[\"ant-border-radius-base\"]%>\", <% } %>\r\n\t        <% if(typeof theme[\"ant-border-color-base\"] != \"undefined\") { %> borderColorBase: \"<%-theme[\"ant-border-color-base\"]%>\", <% } %>\r\n\t    }\r\n\t});\r\n<% } %>\r\n\r\nconst Main = args => {\r\n    return (\r\n    \t<% if(typeof theme != \"undefined\") { %><ConfigProvider><% } %>\r\n\t\t\t<Example {...args}>\r\n\t\t\t<\/Example>\r\n\t\t<% if(typeof theme != \"undefined\") { %><\/ConfigProvider><% } %>\r\n    );\r\n};\r\n\r\n${storyCode}\r\n\r\n\r\nconst args = <%-params%>;\r\n\r\n\r\nReactDOM.render(<Example {...args} \/>, document.querySelector(\".${nodeClass}\"));',   
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
      {
        name: "Typography",
        params: [
          {
            name: "Base font size",
            type: "css-length",
            default: 14,
            variable: "ant-font-size-base",
          },
        ],
      },
      {
        name: "Border",
        params: [
          {
            name: "Base radius",
            type: "css-length",
            default: 8,
            variable: "ant-border-radius-base",
          },
          {
            name: "Base color",
            type: "css-color",
            default: "#d9d9d9",
            variable: "ant-border-color-base",
          },
        ],
      },
    ],
  },
};
