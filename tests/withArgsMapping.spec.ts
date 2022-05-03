import type { StoryContext } from '@storybook/addons';
import { mock } from 'jest-mock-extended';
import { withArgsMapping } from "../src/decorators/withArgsMapping";

describe(".withArgsMapping", () => {
  describe("when the args are not mapped", () => {
    it("returns the original args", () => {
      // arrange
      const storyMock = jest.fn();
      const contextMock = mock<StoryContext>({
        args: { notMapped: 0 },
      });

      const mapping = { mapped: (value: number) => value + 1 };
      const mapper = withArgsMapping(mapping);

      // act
      mapper(storyMock, contextMock);

      // assert
      expect(storyMock).toBeCalledWith(expect.objectContaining({
        args: { notMapped: 0 },
      }));
    });
  });

  describe("when the args are mapped", () => {
    it("returns the updated args", () => {
      // arrange
      const storyMock = jest.fn();
      const contextMock = mock<StoryContext>({
        args: { mapped: 0 },
      });

      const mapping = { mapped: (value: number) => value + 1 };
      const mapper = withArgsMapping(mapping);

      // act
      mapper(storyMock, contextMock);

      // assert
      expect(storyMock).toBeCalledWith(expect.objectContaining({
        args: { mapped: 1 },
      }));
    });
  });
});
