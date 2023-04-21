require("dotenv").config();

export const YOUTUBE_API_URL =
  "https://youtube.googleapis.com/youtube/v3/videos";
export const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
export const PAGE_LIMIT = 5;
