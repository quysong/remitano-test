import {
  generateYoutubeUrl,
  getYoutubeVideoId,
  isValidYoutubeUrl,
} from "../../utils/functions";
import "@testing-library/jest-dom";

// Tests isValidYoutubeUrl
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

// Tests getYoutubeUrl
describe("Test function getYoutubeVideoId", () => {
  it("Case able to get youtube video id with only id param", () => {
    const input = "https://youtube.com/watch?v=OeBVIsGkcrA";
    const actual = getYoutubeVideoId(input);
    const expected = "OeBVIsGkcrA";
    expect(actual).toEqual(expected);
  });

  it("Case able to get youtube video id with many params", () => {
    const input =
      "https://www.youtube.com/watch?v=xSXylCvquGY&ab_channel=%C4%90anNguy%C3%AAnFanClubVi%E1%BB%87tNam";
    const actual = getYoutubeVideoId(input);
    const expected = "xSXylCvquGY";
    expect(actual).toEqual(expected);
  });
});

// Tests generateYoutubeUrl
describe("Test function generateYoutubeUrl", () => {
  it("Case able to get youtube video id with only id param", () => {
    const input = "OeBVIsGkcrA";
    const actual = generateYoutubeUrl(input);
    const expected = "https://youtube.com/watch?v=OeBVIsGkcrA";
    expect(actual).toEqual(expected);
  });

  it("Case able to get youtube video id with many params", () => {
    const input = "xSXylCvquGY";
    const actual = generateYoutubeUrl(input);
    const expected = "https://youtube.com/watch?v=xSXylCvquGY";
    expect(actual).toEqual(expected);
  });
});
