import axios from "axios";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, FreeMode, Autoplay, A11y } from "swiper";
import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext";

const PeopleCredits = () => {
  const [movieCredits, setMovieCredits] = useState([]);
  const [tvCredits, setTvCredits] = useState([]);

  const { scrollToTop, swiperProps, loading } = useGlobalContext();
  const id = useParams();

  const peopleId = id.id;

  useEffect(() => {
    const fetchMovieCredits = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/person/${peopleId}/movie_credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      setMovieCredits(data.cast);
    };
    fetchMovieCredits();
  }, [peopleId, setMovieCredits]);

  useEffect(() => {
    const fetchTvCredits = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/person/${peopleId}/tv_credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      setTvCredits(data.cast);
    };
    fetchTvCredits();
  }, [peopleId, setTvCredits]);

  const replaceImage = (error) => {
    error.target.src =
      "https://via.placeholder.com/185x278/ffffff/000000.png?text=No+Image+Found";
  };

  return (
    <div>
      {loading ? (
        <div className="w-full mt-48 flex items-center justify-center space-x-2 animate-bounce">
          <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
          <div className="w-8 h-8 bg-green-400 rounded-full"></div>
          <div className="w-8 h-8 bg-black rounded-full"></div>
        </div>
      ) : (
        <Swiper
          {...swiperProps}
          modules={[Pagination, Navigation, A11y, FreeMode, Autoplay]}
        >
          {movieCredits.map((movie) => (
            <SwiperSlide key={movie.id}>
              <Link
                onClick={scrollToTop}
                className="flex flex-col items-center"
                to={`/movie/${movie.id}`}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                  alt={movie.title}
                  className="rounded-lg"
                  onError={replaceImage}
                />
                <p className="mt-4 text-center text-white">{movie.title}</p>
              </Link>
            </SwiperSlide>
          ))}
          {tvCredits.map((tv) => (
            <SwiperSlide key={tv.id}>
              <Link
                onClick={scrollToTop}
                className="flex flex-col items-center"
                to={`/tv/${tv.id}`}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w185${tv.poster_path}`}
                  alt={tv.name}
                  className="rounded-lg"
                  onError={replaceImage}
                />
                <p className="mt-4  text-white">{tv.name}</p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default PeopleCredits;
