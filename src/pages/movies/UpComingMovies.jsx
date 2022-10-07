import React from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";

const UpComingMovies = () => {
  const { upComingMovies, dates, loading } = useGlobalContext();

  return (
    <div className="w-full  flex flex-col gap-8 mt-10 ">
      <div className="w-full bg-slate-100 rounded-lg shadow-md p-10">
        <div className="flex gap-10 items-center mb-10">
          <h1 className=" text-xl font-extrabold tracking-tight leading-none text-gray-900 md:text-2xl  underline underline-offset-3 decoration-10  decoration-blue-400 dark:decoration-blue-600  ">
            Upcoming Movies
          </h1>
          <h2 className=" text-black font-bold text-lg mt-1 bg-teal-200 p-4 rounded-full">
            {dates.minimum} - {dates.maximum}
          </h2>
        </div>

        <Swiper
          slidesPerView={6}
          slidesPerGroup={5}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {upComingMovies.map((movie) => {
            return (
              <SwiperSlide key={movie.id}>
                <Link
                  to={`/movies/${movie.id}`}
                  className=" flex flex-col gap-2"
                  id={movie.id}
                >
                  <div className="relative">
                    <img
                      className="rounded-lg"
                      src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                      alt="movie"
                    />

                    <div className="absolute right-0 bottom-0 left-0 bg-yellow-400 rounded-full w-5 h-5 flex items-center justify-center p-4 ">
                      <span className="text-black text-md font-bold ">
                        {movie.vote_average}
                      </span>
                    </div>
                  </div>
                  <div className="">
                    <h1 className="text-lg font-bold mt-4">
                      {movie.title.length > 20
                        ? movie.title.substring(0, 20) + "..."
                        : movie.title}
                    </h1>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default UpComingMovies;
