import React from "react";
import { Link } from "react-router-dom";

const MovieResults = ({ movies, handleError }) => {
  return (
    <div className="flex flex-col w-full  ">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <Link
            to={`/movie/${movie.id}`}
            key={movie.id}
            className="flex flex-col items-center gap-3 w-full p-2 my-2 border-2 border-indigo-500 rounded-md md:flex-row"
          >
            <img
              src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`}
              alt={movie.title}
              className="w-24 h-36 rounded-md"
              onError={handleError}
            />
            <div className="flex flex-col justify-between ml-2">
              <h1 className="text-lg font-bold">{movie.title}</h1>
              <p className="text-sm">
                {movie.release_date ? movie.release_date.slice(0, 4) : "N/A"}
              </p>

              <p className="text-sm">{movie.overview}</p>
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

export default MovieResults;
