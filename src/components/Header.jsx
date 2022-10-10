import Navbar from "./Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useGlobalContext } from "../context/GlobalContext";

const Header = () => {
  const { images, loading } = useGlobalContext();

  const navImg = images.map((image) => {
    return (
      <SwiperSlide key={image}>
        {loading ? (
          <div className="w-full mt-48 flex items-center justify-center space-x-2 animate-bounce">
            <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
            <div className="w-8 h-8 bg-green-400 rounded-full"></div>
            <div className="w-8 h-8 bg-black rounded-full"></div>
          </div>
        ) : (
          <img src={image} alt="" />
        )}
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
          <main className="mx-auto text-center mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">The </span>{" "}
                <span className="block text-indigo-600 xl:inline">
                  Movie Database
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                The Movie Database (TMDB) is a community built movie and TV
                database. Every piece of data has been added by our amazing
                community dating back to 2008. TMDBs strong international focus
                and breadth of data is largely unmatched and something we are
                incredibly proud of. Put simply, we live and breathe community
                and that is precisely what makes us different.
              </p>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          {navImg}
        </Swiper>
      </div>
    </div>
  );
};

export default Header;
