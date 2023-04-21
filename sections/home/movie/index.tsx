import React from "react";
import { MovieItem } from "../../../interfaces/movie";
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
    <MovieWrapper>
      <Pagination active={2} total={6} />
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
      <Pagination active={2} total={6} />
    </MovieWrapper>
  );
};

interface MovieList {
  list: MovieItem[];
}
const MovieList = ({ list }: MovieList) => {
  return (
    <MovieListStyled>
      {list.length
        ? list.map((movie: MovieItem) => (
            <MovieBlock key={`movie-${movie.id}`} movie={movie} />
          ))
        : "There is no movie yet!"}
    </MovieListStyled>
  );
};

export default MovieList;
