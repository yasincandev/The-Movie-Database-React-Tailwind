import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import DetailsNavbar from "./DetailsNavbar";

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [movieCast, setMovieCast] = useState([]);
  const [imdb, setImdb] = useState([]);

  const id = useParams();

  const movieId = id.id;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      setMovieDetails(data);
    };
    fetchMovieDetails();
  }, [movieId, setMovieDetails]);

  useEffect(() => {
    const fetchMovieCast = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      setMovieCast(data.cast);
    };
    fetchMovieCast();
  }, [movieId, setMovieCast]);

  useEffect(() => {
    const fetchImdb = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/external_ids?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      setImdb(data.imdb_id);
    };
    fetchImdb();
  }, [movieId, setImdb]);

  const replaceImage = (error) => {
    error.target.src =
      "https://via.placeholder.com/185x278/ffffff/000000.png?text=No+Image+Found";
  };

  const castInfoSlide = movieCast.map((cast) => {
    return (
      <SwiperSlide className="flex flex-col items-center " key={cast.id}>
        <Link to={`/people/${cast.id}`}>
          <img
            className="rounded-lg"
            src={`https://image.tmdb.org/t/p/w154${cast.profile_path}`}
            alt="movie"
            onError={replaceImage}
          />
          <p className="text-center font-bold mt-2">{cast.name}</p>
        </Link>
      </SwiperSlide>
    );
  });

  return (
    <div className="mb-10">
      <div className="container mx-auto mb-16 p-10">
        <DetailsNavbar />
      </div>
      <div>
        <div
          className="container mx-auto bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movieDetails.backdrop_path})`,
          }}
        >
          <div className="container mx-auto bg-black bg-opacity-70">
            <div className="container mx-auto px-12 py-16 flex flex-col md:flex-row md:gap-10 items-center">
              <div className="max-w-lg">
                <img
                  src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`}
                  alt={movieDetails.title}
                  className="rounded-lg shadow-2xl"
                  onError={replaceImage}
                />
              </div>
              <div className="max-w-2xl mx-auto md:mx-0 md:ml-8">
                <h2 className="text-4xl font-semibold text-white">
                  {movieDetails.title}
                </h2>
                <div className="flex items-center text-gray-400 text-sm mt-2">
                  <svg
                    className="fill-current text-yellow-500 w-4"
                    viewBox="0 0 24 24"
                  >
                    <g data-name="Layer 2">
                      <path
                        d="M12 21.35l-1.45-1.32A8 8 0 014 12a8 8 0 0113.55-5.2l.45.5.45-.5A8 8 0 0120 12a8 8 0 01-5.55 7.65z"
                        data-name="star"
                      ></path>
                    </g>
                  </svg>
                  <span className="ml-1">{movieDetails.vote_average}</span>
                  <span className="mx-2">|</span>
                  <span>{movieDetails.release_date}</span>
                  <span className="mx-2">|</span>
                  <span>
                    {movieDetails.genres &&
                      movieDetails.genres.map((genre) => genre.name + " ")}
                  </span>
                </div>
                <p className="text-gray-300 mt-8">{movieDetails.overview}</p>
                <div className="w-full flex items-center mt-12">
                  <div className=" flex flex-col gap-3 ">
                    <b className="text-white"> Production Companies: </b>
                    <h1 className="text-gray-300  ">
                      {movieDetails.production_companies &&
                        movieDetails.production_companies.map(
                          (company) => `"${company.name}", `
                        )}
                    </h1>
                  </div>
                </div>
                <div className="flex items-center mt-12">
                  <div className="flex items-center">
                    <a
                      href={`https://www.imdb.com/title/${imdb}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex ml-auto items-center bg-transparent  rounded-lg  p-2 hover:bg-gray-700"
                    >
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1920px-IMDB_Logo_2016.svg.png?20200406194337"
                        alt="imdb"
                        className="w-20 h-13"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-semibold">Cast</h2>
      </div>
      <Swiper
        slidesPerView={7}
        spaceBetween={10}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
      >
        {castInfoSlide}
      </Swiper>
    </div>
  );
};

export default MovieDetails;
