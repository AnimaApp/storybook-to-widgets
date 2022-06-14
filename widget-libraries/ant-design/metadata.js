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
  theme: {
    categories: {
      Colors: {
        params: {
          "Primary color": {
            type: "css-color",
            name: "ant-primary-color",
            default: "#1890ff",
          },
          "Link color": {
            type: "css-color",
            name: "ant-secondary-color",
            default: "#1890ff",
          },
          "Success color": {
            type: "css-color",
            name: "ant-secondary-color",
            default: "#1890ff",
          },
          "Warning color": {
            type: "css-color",
            name: "ant-secondary-color",
            default: "#1890ff",
          },
          "Error color": {
            type: "css-color",
            name: "ant-error-color",
            default: "#f5222d",
          },
        },
      },
      Typography: {
        params: {
          "Base font size": {
            type: "css-length",
            name: "ant-font-size-base",
            default: 14,
          },
        },
      },
      Border: {
        params: {
          "Base radius": {
            type: "css-length",
            name: "ant-border-radius-base",
            default: 8,
          },
          "Base color": {
            type: "css-length",
            name: "ant-border-color-base",
            default: "#d9d9d9",
          },
        },
      },
      Shadows: {
        params: {
          "Base shadow": {
            type: "css-shadow",
            name: "ant-box-shadow-base",
            default: "0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)",
          },
        },
      },
    },
  },
};
