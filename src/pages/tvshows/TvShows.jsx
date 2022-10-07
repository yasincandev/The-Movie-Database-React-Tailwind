import React from "react";
import AirTvShow from "./AirTvShow";

import PopularSeries from "./PopularSeries";
import TopRatedSeries from "./TopRatedSeries";
import TvShowsHeader from "./TvShowsHeader";

const TvShows = () => {
  return (
    <>
      <TvShowsHeader />
      <PopularSeries />
      <TopRatedSeries />
      <AirTvShow />
    </>
  );
};

export default TvShows;
