import Head from "next/head";
import MovieList from "../sections/home/movie";
import { MovieItem, Pagination } from "../interfaces/movie";
import { useState } from "react";
import { getMoviePagination } from "../helpers/movie";

interface HomeProps {
  data: Pagination<MovieItem>
}
export default function Home(props: HomeProps) {
  const [data, setData] = useState(props.data);
  console.log('data', data)

  const getListPagination = async (page: number) => {
    const response = await fetch(`/api/movie?page=${page}`);
    const jsonData = (await response.json()) as Pagination<MovieItem>;
    setData(jsonData);
  };

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
          <MovieList data={data} onChangePage={getListPagination} />
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps({ params, query, ...props }) {
  const page = 1;
  const data = await getMoviePagination(page);

  return {
    props: {
      data,
    },
  };
}
