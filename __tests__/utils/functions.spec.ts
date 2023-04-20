import { isValidYoutubeUrl } from "../../utils/functions";
import "@testing-library/jest-dom";

// Tests for randomInRange
describe("Test function isValidYoutubeUrl", () => {
  it("Case valid url 1", () => {
    const input = "https://youtube.com/watch?v=OeBVIsGkcrA";
    const actual = isValidYoutubeUrl(input);
    expect(actual).toEqual(true);
  });

  it("Case valid url 2", () => {
    const input = "https://www.youtube.com/watch?v=OeBVIsGkcrA";
    const actual = isValidYoutubeUrl(input);
    expect(actual).toEqual(true);
  });

  it("Case invalid url: not youtube domain", () => {
    const input = "https://www.google.com/";
    const actual = isValidYoutubeUrl(input);
    expect(actual).toEqual(false);
  });

  it("Case invalid url: not valid url", () => {
    const input = "https://www.google.com/";
    const actual = isValidYoutubeUrl(input);
    expect(actual).toEqual(false);
  });
});
