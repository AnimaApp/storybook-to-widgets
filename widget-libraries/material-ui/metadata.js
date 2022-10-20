module.exports = {
  name: "Material UI",
  description:
    "MUI offers a comprehensive suite of UI tools to help you ship new features faster. Start with Material UI, our fully-loaded component library, or bring your own design system to our production-ready components",
  short_description: "Move faster with intuitive React UI tools",
  thumbnail_url: "https://animaapp.s3.amazonaws.com/widgets/MUI.svg",
  empty_thumb_url: "https://animaapp.s3.amazonaws.com/widgets/MUI.svg",
  sample_file_figma_url: "",
  code_template:
    'import React from "react";\r\nimport ReactDOM from "react-dom";\r\n' +
    'import * as EmotionReact from "@emotion/react";\r\nimport * as EmotionStyled from "@emotion/styled";\r\n' +
    'import * as MuiIconsMaterial from "@mui/icons-material";\r\nimport * as MuiMaterial from "@mui/material";\r\n\r\n' +
    "<%-theme_template%>\r\n\r\nconst Main = args => {\r\n    <%-variableDeclarationCode%>\r\n    " +
    "return (\r\n    \t<%-theme_prefix%>\r\n\t\t<%-storyCode%>\r\n\t\t<%-theme_suffix%>\r\n    );\r\n};\r\n\r\n" +
    'const args = <%-params%>;\r\n\r\n\r\nReactDOM.render(<Main {...args} />, document.querySelector(".${nodeClass}"));',
  code_template_params: {
    theme_prefix: "<MuiMaterial.ThemeProvider theme={theme}>",
    theme_suffix: "</MuiMaterial.ThemeProvider>",
    dependencies: ["@mui/material"],
    theme_template:
      'const theme = MuiMaterial.createTheme({\r\n  palette: {\r\n    primary: {\r\n      main: "<%-theme["mui-primary-color"]%>",\r\n    },\r\n    ' +
      'secondary: {\r\n      main: "<%-theme["mui-secondary-color"]%>",\r\n    },\r\n    error: {\r\n      main: "<%-theme["mui-error-color"]%>",\r\n    },\r\n    ' +
      'warning: {\r\n      main: "<%-theme["mui-warning-color"]%>",\r\n    },\r\n    info: {\r\n      main: "<%-theme["mui-info-color"]%>",\r\n    },\r\n    ' +
      'success: {\r\n      main: "<%-theme["mui-success-color"]%>",\r\n    },\r\n    text: {\r\n      primary: "<%-theme["mui-text-color"]%>",\r\n    }\r\n  },\r\n  ' +
      'typography: {\r\n    fontSize: <%-theme["mui-font-size"]%>,\r\n  },\r\n  shape: {\r\n    borderRadius: <%-theme["mui-border-radius"]%>,\r\n  }\r\n});',
    theme_template_html:
      "const globalTheme = window.globalTheme;\r\n\r\nconst theme = MuiMaterial.createTheme(globalTheme);",
    theme_template_html_global:
      'window.globalTheme = {\r\n  palette: {\r\n    primary: {\r\n      main: "<%-theme["mui-primary-color"]%>",\r\n    },\r\n    secondary: {\r\n      ' +
      'main: "<%-theme["mui-secondary-color"]%>",\r\n    },\r\n    error: {\r\n      main: "<%-theme["mui-error-color"]%>",\r\n    },\r\n    ' +
      'warning: {\r\n      main: "<%-theme["mui-warning-color"]%>",\r\n    },\r\n    info: {\r\n      main: "<%-theme["mui-info-color"]%>",\r\n    },\r\n    ' +
      'success: {\r\n      main: "<%-theme["mui-success-color"]%>",\r\n    },\r\n    text: {\r\n      primary: "<%-theme["mui-text-color"]%>",\r\n    }\r\n  },\r\n  ' +
      'typography: {\r\n    fontSize: <%-theme["mui-font-size"]%>,\r\n  },\r\n  shape: {\r\n    borderRadius: <%-theme["mui-border-radius"]%>,\r\n  }\r\n};',
  },
  theme: {
    categories: [
      {
        name: "Colors",
        params: [
          {
            name: "Primary color",
            type: "css-color",
            default: "#1976d2",
            variable: "mui-primary-color",
          },
          {
            name: "Secondary color",
            type: "css-color",
            default: "#9c27b0",
            variable: "mui-secondary-color",
          },
          {
            name: "Success color",
            type: "css-color",
            default: "#2e7d32",
            variable: "mui-success-color",
          },
          {
            name: "Warning color",
            type: "css-color",
            default: "#ed6c02",
            variable: "mui-warning-color",
          },
          {
            name: "Error color",
            type: "css-color",
            default: "#d32f2f",
            variable: "mui-error-color",
          },
          {
            name: "Info color",
            type: "css-color",
            default: "#0288d1",
            variable: "mui-info-color",
          },
          {
            name: "Text color",
            type: "css-color",
            default: "rgba(0, 0, 0, 0.87)",
            variable: "mui-text-color",
          },
        ],
      },
      {
        name: "Typography",
        params: [
          {
            name: "Font size",
            type: "css-length",
            default: 14,
            variable: "mui-font-size",
          },
        ],
      },
      {
        name: "Border",
        params: [
          {
            name: "Base radius",
            type: "css-length",
            default: 4,
            variable: "mui-border-radius",
          },
        ],
      },
    ],
  },
};
