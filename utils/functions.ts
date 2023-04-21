export function isValidYoutubeUrl(url: string) {
  return /^(https?\:\/\/)?((www\.)?youtube\.com|youtu\.be)\/.+$/.test(url);
}

export function getYoutubeVideoId(url: string) {
  let videoId = url.split("v=")[1];
  const ampersandPosition = videoId.indexOf("&");
  if (ampersandPosition != -1) {
    videoId = videoId.substring(0, ampersandPosition);
  }
  return videoId;
}

export function generateYoutubeUrl(youtubeVideoId: string) {
  return `https://www.youtube.com/embed/${youtubeVideoId}`;
}
