import React from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { A11y, Autoplay, FreeMode, Navigation, Pagination } from "swiper";
import { Link } from "react-router-dom";

const TrendPeople = () => {
  const { trendPeople, loading, scrollToTop, swiperProps } = useGlobalContext();

  const handleNullError = (person) => {
    if (person.profile_path === null) {
      return "https://via.placeholder.com/185x278/ffffff/000000.png?text=No+Image+Found";
    } else {
      return `https://image.tmdb.org/t/p/w185${person.profile_path}`;
    }
  };

  return (
    <div className="w-full  flex flex-col gap-8 ">
      <div className="w-full bg-slate-100 rounded-lg shadow-md p-10">
        <h1 className="mb-10 text-xl font-extrabold tracking-tight leading-none text-gray-900 md:text-2xl  underline underline-offset-3 decoration-10  decoration-blue-400 dark:decoration-blue-600  ">
          Trending Celebs of The Week
        </h1>
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
            {trendPeople.map((people) => {
              return (
                <SwiperSlide key={people.id}>
                  <Link
                    onClick={scrollToTop}
                    to={`/people/${people.id}`}
                    className=" flex flex-col gap-2"
                    id={people.id}
                  >
                    <div className="">
                      <img
                        className="rounded-lg"
                        src={handleNullError(people)}
                        alt="people"
                      />
                    </div>
                    <div className="mt-10">
                      <h1 className="text-sm lg:text-lg font-bold mt-4">
                        {people.name}
                      </h1>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </div>
    </div>
  );
};
export default TrendPeople;
