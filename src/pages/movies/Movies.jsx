import React from "react";
import MoviesHeader from "./MoviesHeader";
import PopularMovies from "./PopularMovies";
import TopRatedMovies from "./TopRatedMovies";
import UpComingMovies from "./UpComingMovies";

const Movies = () => {
  return (
    <>
      <MoviesHeader />
      <PopularMovies />
      <TopRatedMovies />
      <UpComingMovies />
    </>
  );
};

export default Movies;
