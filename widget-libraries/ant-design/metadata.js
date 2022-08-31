import dedent from "dedent";

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
  code_template: dedent(`import React from "react";
  import ReactDOM from "react-dom";
  import * as AntDesignIcons from "@ant-design/icons";
  import * as Antd from "antd";
  
  <%-theme_template%>
  
  const Main = args => {
      <%-variableDeclarationCode%>
      return (
        <%-theme_prefix%>
    <%-storyCode%>
    <%-theme_suffix%>
      );
  };
  
  const args = <%-params%>;
  
  
  ReactDOM.render(<Main {...args} />, document.querySelector(".${nodeClass}"));`),

  code_template_params: {
    theme_prefix: "<Antd.ConfigProvider>",
    theme_suffix: "</Antd.ConfigProvider>",
    dependencies: ["antd"],
    theme_template: dedent(`Antd.ConfigProvider.config({
      theme: {
          primaryColor: "<%-theme["ant-primary-color"]%>",
          secondaryColor: "<%-theme["ant-secondary-color"]%>",
          successColor: "<%-theme["ant-success-color"]%>",
          warningColor: "<%-theme["ant-warning-color"]%>",
          errorColor: "<%-theme["ant-error-color"]%>",
      }
  });`),
    theme_template_html: dedent(`const theme = window.theme;

    Antd.ConfigProvider.config({
      theme
    });`),
    theme_template_html_global: dedent(`window.theme = {
      primaryColor: "<%-theme["ant-primary-color"]%>",
      secondaryColor: "<%-theme["ant-secondary-color"]%>",
      successColor: "<%-theme["ant-success-color"]%>",
      warningColor: "<%-theme["ant-warning-color"]%>",
      errorColor: "<%-theme["ant-error-color"]%>",
};`),
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
