import { Movie } from "@prisma/client";
import { getMetadataVideo } from "./youtube";
import { MovieItem, Pagination } from "../interfaces/movie";
import { getYoutubeVideoId, generateYoutubeUrl } from "../utils/functions";
import { prisma } from "../utils/db";
import { PAGE_LIMIT } from "../constant/common";

export async function getMoviePagination(
  page: number
): Promise<Pagination<MovieItem>> {
  const limit = PAGE_LIMIT;
  // get metadata youtube movies
  let total = 0;
  let youtubeMovies = [] as MovieItem[],
    movies = [] as Movie[];
  try {
    movies = await prisma.movie.findMany({
      skip: (page - 1) * limit,
      take: limit,
      orderBy: {
        id: "desc",
      },
    });
    let count = await prisma.movie.count();
    console.log("count", count);
    total = Number(count);
  } catch (error) {
    console.log("get movies error", error.message);
  }

  if (movies?.length) {
    const urls = movies.map((movie) => getYoutubeVideoId(movie.url));
    try {
      const rs = await getMetadataVideo(urls);
      youtubeMovies = rs.items.map((item) => ({
        ...item,
        embeddedUrl: generateYoutubeUrl(item.id),
      }));
    } catch (error) {
      console.log("get metadata video error", error);
    }
  }

  const data = {
    page,
    limit,
    total,
    list: JSON.parse(JSON.stringify(youtubeMovies)),
  };

  console.log("data", data);

  return data;
}
