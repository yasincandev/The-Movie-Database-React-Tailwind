import React from "react";
import Navbar from "../../components/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useGlobalContext } from "../../context/GlobalContext";

const MoviesHeader = () => {
  const { topRatedMovies } = useGlobalContext();

  const moviePosterPath = topRatedMovies.map((movie) => movie.backdrop_path);

  const topRatedImages = moviePosterPath.map((image) => {
    return `https://image.tmdb.org/t/p/original${image}`;
  });

  const slideImg = topRatedImages.map((image, index) => {
    return (
      <SwiperSlide key={index}>
        <img src={image} alt="movie" />
      </SwiperSlide>
    );
  });

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          <Navbar />
          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block text-indigo-600 xl:inline">Movies</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                Discover with your taste
              </p>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          {slideImg}
        </Swiper>
      </div>
    </div>
  );
};

export default MoviesHeader;
