export default {
  name: "React Bootstrap Theme",
  description: "The most popular front-end framework Rebuilt for React.",
  short_description: "Rebuilt with React",
  thumbnail_url: "https://animaapp.s3.amazonaws.com/widgets/bootstrap.svg",
  empty_thumb_url: "https://animaapp.s3.amazonaws.com/widgets/bootstrap.svg",
  sample_file_figma_url: "",
  styles_import: ["bootstrap/dist/css/bootstrap.min.css"],
  theme: {
    type: 'scss',
    styles_import: ['~bootstrap/scss/bootstrap.scss'],
    categories: [
      {
        
        name: "Colors",
        params: [
          {
            name: "Primary color",
            type: "css-color",
            default: "#0d6efd",
            variable: "primary",
          },
          {
            name: "Success color",
            type: "css-color",
            default: "#198754",
            variable: "success",
          },
          {
            name: "Info color",
            type: "css-color",
            default: "#0dcaf0",
            variable: "info",
          },
          {
            name: "Warning color",
            type: "css-color",
            default: "#ffc107",
            variable: "warning",
          },
          {
            name: "Danger color",
            type: "css-color",
            default: "#dc3545",
            variable: "danger",
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
            variable: "font-size-base",
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
            variable: "border-radius",
          },
          {
            name: "Base color",
            type: "css-color",
            default: "#dee2e6",
            variable: "border-color",
          },
        ],
      },
    ],
  },
};
