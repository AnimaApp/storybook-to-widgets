import type { Story } from "@storybook/api";
import { mock } from "jest-mock-extended";
import getMetadataFromStory from "../src/utils/getMetadataFromStory";

describe(".getMetadataFromStory", () => {
  it("returns the metadata.js from the given story", async () => {
    // arrange
    jest.mock(
      "../../widget-libraries/dummy-library/metadata.js",
      () => 42,
      { virtual: true },
    );
    const mockStory = mock<Story>({
      parameters: {
        fileName: "dummy-library/stories/DummyWidget.stories.jsx",
      },
    });

    // act
    const result = await getMetadataFromStory(mockStory);

    // assert
    expect(result).toStrictEqual(42);
  });
});
