import React from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { A11y, Autoplay, FreeMode, Navigation, Pagination } from "swiper";
import { Link } from "react-router-dom";

const AirTvShow = () => {
  const { airTv, loading, scrollToTop, swiperProps } = useGlobalContext();

  return (
    <div className="w-full  flex flex-col gap-8 ">
      <div className="w-full bg-slate-100 rounded-lg shadow-md p-10">
        <h1 className="mb-10 text-xl font-extrabold tracking-tight leading-none text-gray-900 md:text-2xl  underline underline-offset-3 decoration-10  decoration-blue-400 dark:decoration-blue-600  ">
          On Air Tv Shows
        </h1>

        <Swiper
          {...swiperProps}
          modules={[Pagination, Navigation, A11y, FreeMode, Autoplay]}
        >
          {airTv.map((tv) => {
            return (
              <SwiperSlide key={tv.id}>
                <Link
                  onClick={scrollToTop}
                  to={`/tv/${tv.id}`}
                  className=" flex flex-col gap-2"
                  id={tv.id}
                >
                  <div className="relative">
                    <img
                      className="rounded-lg"
                      src={`https://image.tmdb.org/t/p/w185${tv.poster_path}`}
                      alt="tv"
                    />

                    <span className="absolute right-0 bottom-0 left-0 bg-yellow-400 rounded-full w-2 h-2 flex items-center justify-center p-4 ">
                      {tv.vote_average}
                    </span>
                  </div>
                  <div className="mt-10">
                    <h1 className="text-sm lg:text-lg font-bold mt-4">
                      {tv.name}
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

export default AirTvShow;
