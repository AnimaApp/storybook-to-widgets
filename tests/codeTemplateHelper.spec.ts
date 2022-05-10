import { createImports } from "../src/utils/codeTemplateHelper";

describe(".createImports", () => {
  describe("with an empty array", () => {
    it("returns an empty string", () => {
      // arrange
      const imports: string[] = [];

      // act
      const result = createImports(imports);

      // assert
      expect(result).toBe("");
    });
  });

  describe("with one package name", () => {
    it("returns the package import code", () => {
      // arrange
      const imports = ["@ant-design/icons"];

      // act
      const result = createImports(imports);

      // assert
      expect(result).toBe('import * as AntDesignIcons from "@ant-design/icons";');
    });
  });

  describe("with one css filename", () => {
    it("returns the css import code", () => {
      // arrange
      const imports = ["antd/dist/antd.css"];

      // act
      const result = createImports(imports);

      // assert
      expect(result).toBe('import "antd/dist/antd.css";');
    });
  });

  describe("with one package import and css filename", () => {
    it("returns the both imports", () => {
      // arrange
      const imports = ["@ant-design/icons", "antd/dist/antd.css"];

      // act
      const result = createImports(imports);

      // assert
      expect(result).toBe('import * as AntDesignIcons from "@ant-design/icons";\nimport "antd/dist/antd.css";');
    });
  });
});
