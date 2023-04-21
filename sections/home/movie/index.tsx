import React from "react";
import {
  MovieItem,
  Pagination as IPagination,
} from "../../../interfaces/movie";
import {
  MovieBlockStyled,
  MovieListStyled,
  MovieTitle,
  MovieWrapper,
  OverflowText,
  YoutubeFrame,
} from "./style";
import Pagination from "../../../components/pagination";

const MovieBlock = ({ movie }: { movie: MovieItem }) => {
  return (
    <MovieWrapper id="movie-block">
      <MovieBlockStyled className="movie-block" key={`movie-${movie.id}`}>
        <div>
          <YoutubeFrame
            src={movie.embeddedUrl}
            title="YouTube video player"
            frameBorder={0}
            allowFullScreen
          />
        </div>
        <div>
          <MovieTitle lines={1}>{movie.snippet.title}</MovieTitle>
          <OverflowText lines={3}>{movie.snippet.description}</OverflowText>
        </div>
      </MovieBlockStyled>
    </MovieWrapper>
  );
};

interface MovieList {
  data: IPagination<MovieItem>;
  onChangePage: (page: number) => void;
}
const MovieList = ({ data, onChangePage }: MovieList) => {
  const { list } = data;
  return (
    <MovieListStyled>
      {list.length ? (
        <>
          <Pagination
            onChangePage={onChangePage}
            total={Math.ceil(data.total / 5)}
          />
          {list.map((movie: MovieItem) => (
            <MovieBlock key={`movie-${movie.id}`} movie={movie} />
          ))}
        </>
      ) : (
        "There is no movie yet!"
      )}
    </MovieListStyled>
  );
};

export default MovieList;
