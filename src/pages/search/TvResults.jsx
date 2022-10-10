import React from "react";
import { Link } from "react-router-dom";

const TvResults = ({ tvShows, handleError }) => {
  return (
    <div className="flex flex-col w-full">
      {tvShows.length > 0 ? (
        tvShows.map((tvShow) => (
          <Link
            to={`/tv/${tvShow.id}`}
            key={tvShow.id}
            className="flex w-full p-2 my-2 rounded-md border-2 border-indigo-500"
          >
            <img
              src={`https://image.tmdb.org/t/p/w154${tvShow.poster_path}`}
              alt={tvShow.name}
              className="w-24 h-36 rounded-md"
              onError={handleError}
            />
            <div className="flex flex-col justify-between ml-2">
              <h1 className="text-lg font-bold">{tvShow.name}</h1>
              <p className="text-sm">
                {tvShow.first_air_date
                  ? tvShow.first_air_date.slice(0, 4)
                  : "N/A"}
              </p>

              <p className="text-sm">{tvShow.overview}</p>
            </div>
          </Link>
        ))
      ) : (
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-lg font-bold">No Results Found</h1>
        </div>
      )}
    </div>
  );
};

export default TvResults;
