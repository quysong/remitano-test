import Head from "next/head";
import { prisma } from "../utils/db";
import MovieList from "../sections/home/movie";
import { Movie } from "@prisma/client";
import { getMetadataVideo } from "../api/youtube";
import { generateYoutubeUrl, getYoutubeVideoId } from "../utils/functions";
import { MovieItem } from "../interfaces/movie";

interface HomeProps {
  movies: MovieItem[];
}
export default function Home(props: HomeProps) {
  console.log("props", props);
  return (
    <div>
      <Head>
        <title>Funny movies</title>
        <meta
          name="description"
          content="A place to upload your youtube funny movies"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <MovieList list={props.movies} />
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps({ params, query, ...props }) {
  let page = 1,
    limit = 20;
  // get pagination
  try {
    page = query.page ? Number(query.page) : 1;
    limit = query.limit ? Number(query.limit) : 100;
  } catch (error) {
    console.log("error", error);
    page = 1;
    limit = 20;
  }

  // get metadata youtube movies
  let youtubeMovies = [] as MovieItem[],
    movies = [] as Movie[];
  try {
    movies = await prisma.movie.findMany({
      skip: page - 1,
      take: limit,
    });
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

  console.log('youtubeMovies', youtubeMovies)
  return {
    props: {
      movies: JSON.parse(JSON.stringify(youtubeMovies)), //Date type issue
    },
  };
}
