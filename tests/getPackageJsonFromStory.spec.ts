import type { Story } from "@storybook/api";
import { mock } from "jest-mock-extended";
import getPackageJsonFromStory from "../src/utils/getPackageJsonFromStory";

describe(".getPackageJsonFromStory", () => {
  it("returns the package.json from the given story", async () => {
    // arrange
    jest.mock(
      "../../widget-libraries/dummy-library/package.json",
      () => 42,
      { virtual: true },
    );
    const mockStory = mock<Story>({
      parameters: {
        fileName: "dummy-library/stories/DummyWidget.stories.jsx",
      },
    });

    // act
    const result = await getPackageJsonFromStory(mockStory);

    // assert
    expect(result).toStrictEqual(42);
  });
});
