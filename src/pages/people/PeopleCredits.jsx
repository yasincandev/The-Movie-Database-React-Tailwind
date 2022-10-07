import axios from "axios";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, FreeMode } from "swiper";
import { Link, useParams } from "react-router-dom";

const PeopleCredits = () => {
  const [movieCredits, setMovieCredits] = useState([]);
  const [tvCredits, setTvCredits] = useState([]);

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
  }, [setMovieCredits]);

  useEffect(() => {
    const fetchTvCredits = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/person/${peopleId}/tv_credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      setTvCredits(data.cast);
    };
    fetchTvCredits();
  }, [setTvCredits]);

  const replaceImage = (error) => {
    error.target.src =
      "https://via.placeholder.com/185x278/ffffff/000000.png?text=No+Image+Found";
  };

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, FreeMode]}
        slidesPerView={6}
        navigation={true}
        freeMode={true}
        className="mySwiper"
      >
        {movieCredits.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Link
              className="flex flex-col items-center"
              to={`/movies/${movie.id}`}
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
            <Link className="flex flex-col items-center" to={`/tv/${tv.id}`}>
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
    </div>
  );
};

export default PeopleCredits;
