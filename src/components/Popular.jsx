import React from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, FreeMode, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "../index.css";
import { Link } from "react-router-dom";

const Popular = () => {
  const {
    peopleImages,
    tvshowImages,
    loading,
    topRatedMovies,
    popularTv,
    people,
    scrollToTop,
    swiperProps,
  } = useGlobalContext();

  const replaceImage = (error) => {
    error.target.src =
      "https://via.placeholder.com/185x278/ffffff/000000.png?text=No+Image+Found";
  };

  const topRatedImagesSlide = topRatedMovies.map((movie) => {
    return (
      <SwiperSlide key={movie.id}>
        <Link onClick={scrollToTop} to={`/movie/${movie.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
            alt={movie.title}
            onError={replaceImage}
          />
        </Link>
      </SwiperSlide>
    );
  });

  const popularTvImagesandLinks = popularTv.map((tvshow) => {
    return (
      <SwiperSlide key={tvshow.id}>
        <Link onClick={scrollToTop} to={`/tv/${tvshow.id}`}>
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
      <SwiperSlide key={person.id}>
        <Link onClick={scrollToTop} to={`/people/${person.id}`}>
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
    <div className="flex flex-col gap-7 w-11/12 px-5">
      <>
        <a href="/movies">
          <h3 className="mb-10 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl  underline underline-offset-3 decoration-10  decoration-blue-400 dark:decoration-blue-600">
            Movies
          </h3>
        </a>
        <Swiper
          {...swiperProps}
          modules={[Pagination, Navigation, A11y, FreeMode, Autoplay]}
        >
          {topRatedImagesSlide}
        </Swiper>
      </>
      <a href="/tv">
        <h3 className="mb-10 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl  underline underline-offset-3 decoration-10 decoration-blue-400 dark:decoration-blue-600">
          Tv Shows
        </h3>
      </a>
      <div className=" w-full h-full">
        <Swiper
          {...swiperProps}
          modules={[Pagination, Navigation, A11y, FreeMode, Autoplay]}
        >
          {popularTvImagesandLinks}
        </Swiper>
      </div>
      <a href="/people">
        <h3 className="mb-10 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl  underline underline-offset-3 decoration-10 decoration-blue-400 dark:decoration-blue-600">
          People
        </h3>
      </a>
      <div className=" w-full h-full">
        <Swiper
          {...swiperProps}
          modules={[Pagination, Navigation, A11y, FreeMode, Autoplay]}
        >
          {peopleImagesandLinks}
        </Swiper>
      </div>
    </div>
  );
};

export default Popular;
