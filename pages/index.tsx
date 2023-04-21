import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { prisma } from "../utils/db";

export default function Home(props) {
  console.log('props', props)
  return (
    <div>
      <Head>
        <title>Funny movies</title>
        <meta name="description" content="A place to upload your youtube funny movies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div></div>
      </main>
    </div>
  );
}

export async function getServerSideProps({ params, query, ...props }) {
  let page = 1,
    limit = 20;
  try {
    page = query.page ? Number(query.page) : 1;
    limit = query.limit ? Number(query.limit) : 100;
  } catch (error) {
    console.log("error", error);
    page = 1;
    limit = 20;
  }
  const movies = await prisma.movie.findMany({
    skip: page - 1,
    take: limit,
  });
  return {
    props: {
      movies: JSON.parse(JSON.stringify(movies)), //Date type issue
    },
  };
}
