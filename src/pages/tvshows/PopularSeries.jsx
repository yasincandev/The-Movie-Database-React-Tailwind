import React from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";

const PopularSeries = () => {
  const { popularTv, loading } = useGlobalContext();

  return (
    <div className="w-full  flex flex-col gap-8 ">
      <div className="w-full bg-slate-100 rounded-lg shadow-md p-10">
        <h1 className="mb-10 text-xl font-extrabold tracking-tight leading-none text-gray-900 md:text-2xl  underline underline-offset-3 decoration-10  decoration-blue-400 dark:decoration-blue-600  ">
          Popular Tv Shows
        </h1>
        <Swiper
          slidesPerView={6}
          slidesPerGroup={5}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {popularTv.map((tv) => {
            return (
              <SwiperSlide key={tv.id}>
                <Link
                  to={`/tv/${tv.id}`}
                  className=" flex flex-col gap-5"
                  id={tv.id}
                >
                  <div className="relative">
                    <img
                      className="rounded-lg"
                      src={`https://image.tmdb.org/t/p/w185${tv.poster_path}`}
                      alt="tv"
                    />

                    <div className="absolute right-0 bottom-0 left-0 bg-yellow-400 rounded-full w-5 h-5 flex items-center justify-center p-4 ">
                      <span className="text-black text-md font-bold ">
                        {tv.vote_average}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-lg font-bold mt-4 text-black">
                      {tv.title}
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

export default PopularSeries;
