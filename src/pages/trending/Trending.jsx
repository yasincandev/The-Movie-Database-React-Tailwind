import React from "react";
import TrendingHeader from "./TrendingHeader";
import TrendMovies from "./TrendMovies";
import TrendTv from "./TrendTv";
import TrendPeople from "./TrendPeople";

const Trending = () => {
  return (
    <>
      <TrendingHeader />
      <TrendMovies />
      <TrendTv />
      <TrendPeople />
    </>
  );
};

export default Trending;
