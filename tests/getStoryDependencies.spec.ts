import type { Story } from "@storybook/api";
import { mock } from "jest-mock-extended";
import getStoryDependencies from "../src/utils/getStoryDependencies";

describe(".getStoryDependencies", () => {
  describe("when no package is excluded", () => {
    it("returns all dependencies", async () => {
      // arrange
      const dependencies = {
        foo: "1.0.0",
        bar: "4.3.2",
      };

      jest.mock(
        "../../widget-libraries/dummy-library-1/package.json",
        () => ({
          dependencies,
        }),
        { virtual: true }
      );
      jest.mock(
        "../../widget-libraries/dummy-library-1/metadata.js",
        () => ({
          excluded_packages: [],
        }),
        { virtual: true }
      );

      const mockStory = mock<Story>({
        parameters: {
          fileName: "dummy-library-1/stories/DummyWidget.stories.jsx",
        },
      });

      // act
      const result = await getStoryDependencies(mockStory);

      // assert
      expect(result).toStrictEqual(dependencies);
    });
  });

  describe("when one package is excluded", () => {
    it("returns all the dependencies except this one", async () => {
      // arrange
      jest.mock(
        "../../widget-libraries/dummy-library-2/package.json",
        () => ({
          dependencies: {
            foo: "1.0.0",
            bar: "4.3.2",
          },
        }),
        { virtual: true }
      );
      jest.mock(
        "../../widget-libraries/dummy-library-2/metadata.js",
        () => ({
          excluded_packages: ["foo"],
        }),
        { virtual: true }
      );

      const mockStory = mock<Story>({
        parameters: {
          fileName: "dummy-library-2/stories/DummyWidget.stories.jsx",
        },
      });

      // act
      const result = await getStoryDependencies(mockStory);

      // assert
      expect(result).toStrictEqual({
        bar: "4.3.2",
      });
    });
  });
});
