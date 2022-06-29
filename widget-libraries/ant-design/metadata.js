export default {
  name: "Ant Design - Fathy",
  description:
    "Ant Design is a design language for the web and mobile apps, based on Ant Motion.",
  short_description:
    "Ant Design is a design language for the web and mobile apps.",
  thumbnail_url: "https://animaapp.s3.amazonaws.com/widgets/ant-design.svg",
  empty_thumb_url: "https://animaapp.s3.amazonaws.com/widgets/ant-design.svg",
  sample_file_figma_url: "",
  styles_import: ["antd/dist/antd.css", "antd/dist/antd.variable.css"],
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
