import { YOUTUBE_API_KEY, YOUTUBE_API_URL } from "../../constant/common";
import { MetadataVideo } from "../../interfaces/movie";

export async function getMetadataVideo(
  videoIds: string[]
): Promise<MetadataVideo> {
  const ids = videoIds.map((id) => `id=${id}`).join("&");
  const url = `${YOUTUBE_API_URL}?key=${YOUTUBE_API_KEY}&part=snippet&${ids}`;
  const data = await fetch(url);
  return await data.json();
}
