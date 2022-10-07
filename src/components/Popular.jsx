import React from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const Popular = () => {
  const {
    peopleImages,
    tvshowImages,
    loading,
    topRatedMovies,
    popularTv,
    people,
  } = useGlobalContext();

  const replaceImage = (error) => {
    error.target.src =
      "https://via.placeholder.com/185x278/ffffff/000000.png?text=No+Image+Found";
  };

  const topRatedMoviesImagesandLinks = topRatedMovies.map((movie) => {
    return (
      <SwiperSlide
        key={movie.id}
        className="p-2 border-double border-8 border-indigo-500 rounded-lg"
      >
        <Link to={`/movies/${movie.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
            alt={movie.title}
            className="rounded-lg"
            onError={replaceImage}
          />
        </Link>
      </SwiperSlide>
    );
  });

  const popularTvImagesandLinks = popularTv.map((tvshow) => {
    return (
      <SwiperSlide
        key={tvshow.id}
        className="p-2 border-double border-8 border-indigo-500 rounded-lg"
      >
        <Link to={`/tv/${tvshow.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w185${tvshow.poster_path}`}
            alt={tvshow.name}
            className="rounded-lg"
            onError={replaceImage}
          />
        </Link>
      </SwiperSlide>
    );
  });

  const peopleImagesandLinks = people.map((person) => {
    return (
      <SwiperSlide
        key={person.id}
        className="p-2 border-double border-8 border-indigo-500 rounded-lg"
      >
        <Link to={`/people/${person.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w185${person.profile_path}`}
            alt={person.name}
            className="rounded-lg"
            onError={replaceImage}
          />
        </Link>
      </SwiperSlide>
    );
  });

  return (
    <div className="px-4 py-16  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
      <div>
        <h3 className="mb-10 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl  underline underline-offset-3 decoration-10  decoration-blue-400 dark:decoration-blue-600">
          Movies
        </h3>
      </div>
      <Swiper
        slidesPerView={6}
        spaceBetween={5}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {topRatedMoviesImagesandLinks}
      </Swiper>
      <div className="mt-10">
        <h3 className="mb-10 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl  underline underline-offset-3 decoration-10 decoration-blue-400 dark:decoration-blue-600">
          Tv Shows
        </h3>
      </div>
      <Swiper
        slidesPerView={6}
        spaceBetween={5}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {popularTvImagesandLinks}
      </Swiper>
      <div className="mt-10">
        <h3 className="mb-10 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl  underline underline-offset-3 decoration-10 decoration-blue-400 dark:decoration-blue-600">
          People
        </h3>
      </div>
      <Swiper
        slidesPerView={6}
        spaceBetween={5}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {peopleImagesandLinks}
      </Swiper>
    </div>
  );
};

export default Popular;
