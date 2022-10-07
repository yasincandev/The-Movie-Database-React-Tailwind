import React from "react";
import Navbar from "../../components/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import { Pagination } from "swiper";
import { useGlobalContext } from "../../context/GlobalContext";

const PeopleHeader = () => {
  const { people } = useGlobalContext();

  console.log(people);

  const peoplePosterPath = people.map((person) => person.profile_path);

  const peopleImages = peoplePosterPath.map((image) => {
    return `https://image.tmdb.org/t/p/w300${image}`;
  });

  const handleError = (e) => {
    e.target.src =
      "https://via.placeholder.com/350x400/ffffff/000000.png?text=Person+Not+Found";
  };

  const slideImg = peopleImages
    .slice(0)
    .reverse()
    .map((image, index) => {
      return (
        <SwiperSlide key={index}>
          <img src={image} alt="movie" className=" " onError={handleError} />
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
                <span className="block text-indigo-600 xl:inline">People</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                Trending Movies, TV Shows and People of The Week
              </p>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 left-2/3 lg:w-3/5">
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              shadow: true,
              translate: [0, 0, -400],
            },
          }}
          className="mySwiper"
        >
          {slideImg}
        </Swiper>
      </div>
    </div>
  );
};

export default PeopleHeader;
