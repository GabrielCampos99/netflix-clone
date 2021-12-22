import * as C from "./index.styles";
import React from "react";

const Movies = ({ title, movies }) => {
  return (
    <C.MoviesContainer>
      <C.MoviesTitle>{title}</C.MoviesTitle>

      <C.MoviesRow>
        {movies.map((movie) => (
          <C.MoviesPoster
            key={movie.id}
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </C.MoviesRow>
    </C.MoviesContainer>
  );
};

export default Movies;
