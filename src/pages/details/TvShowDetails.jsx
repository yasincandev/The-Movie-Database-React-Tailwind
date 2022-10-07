import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import DetailsNavbar from "./DetailsNavbar";

const TvShowDetails = () => {
  const [tvShowDetails, setTvShowDetails] = useState([]);
  const [tvShowCast, setTvShowCast] = useState([]);

  const id = useParams();
  const navigate = useNavigate();
  const tvShowId = id.id;

  useEffect(() => {
    const fetchTvShowDetails = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/tv/${tvShowId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      setTvShowDetails(data);
    };
    fetchTvShowDetails();
  }, [tvShowId, setTvShowDetails]);

  useEffect(() => {
    const fetchTvShowCast = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/tv/${tvShowId}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      setTvShowCast(data.cast);
    };
    fetchTvShowCast();
  }, [tvShowId, setTvShowCast]);

  const replaceImage = (error) => {
    error.target.src =
      "https://via.placeholder.com/185x278/ffffff/000000.png?text=No+Image+Found";
  };

  const networkLogo = tvShowDetails.networks?.map((network) => {
    return (
      <img
        key={network.id}
        src={`https://image.tmdb.org/t/p/w45${network.logo_path}`}
        alt="movie"
        onError={replaceImage}
      />
    );
  });

  const castInfoSlide = tvShowCast.map((cast) => {
    return (
      <SwiperSlide className="flex flex-col items-center " key={cast.id}>
        <Link to={`/people/${cast.id}`}>
          <img
            className="rounded-lg"
            src={`https://image.tmdb.org/t/p/w154${cast.profile_path}`}
            alt="movie"
            onError={replaceImage}
          />

          <p className="text-center font-bold mt-2">{cast.name}</p>
        </Link>
      </SwiperSlide>
    );
  });
  return (
    <div className="mb-10">
      <div className="container mx-auto mb-16 p-10">
        <DetailsNavbar />
      </div>
      <div>
        <div
          className="container mx-auto bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${tvShowDetails.backdrop_path})`,
          }}
        >
          <div className="container mx-auto bg-black bg-opacity-70">
            <div className="container mx-auto px-12 py-16 flex flex-col md:flex-row md:gap-10 items-center">
              <div className="max-w-lg">
                <img
                  src={`https://image.tmdb.org/t/p/w300${tvShowDetails.poster_path}`}
                  alt={tvShowDetails.title}
                  className="rounded-lg shadow-2xl"
                  onError={replaceImage}
                />
              </div>
              <div className="max-w-2xl mx-auto md:mx-0 md:ml-8">
                <h2 className="text-4xl font-semibold text-white">
                  {tvShowDetails.title}
                </h2>
                <div className="flex items-center text-gray-400 text-sm mt-2">
                  <svg
                    className="fill-current text-yellow-500 w-4"
                    viewBox="0 0 24 24"
                  >
                    <g data-name="Layer 2">
                      <path
                        d="M12 21.35l-1.45-1.32A8 8 0 014 12a8 8 0 0113.55-5.2l.45.5.45-.5A8 8 0 0120 12a8 8 0 01-5.55 7.65z"
                        data-name="star"
                      ></path>
                    </g>
                  </svg>
                  <span className="ml-1">{tvShowDetails.vote_average}</span>
                  <span className="mx-2">|</span>
                  <span>{tvShowDetails.release_date}</span>
                  <span className="mx-2">|</span>
                  <span>
                    {tvShowDetails.genres &&
                      tvShowDetails.genres.map((genre) => genre.name + " ")}
                  </span>
                </div>
                <p className="text-gray-300 mt-8">{tvShowDetails.overview}</p>
                <div className="w-full flex items-center mt-12">
                  <div className=" flex flex-col gap-3 ">
                    <b className="text-white"> Production Companies: </b>
                    <h1 className="text-gray-300  ">
                      {tvShowDetails.production_companies &&
                        tvShowDetails.production_companies.map(
                          (company) => `"${company.name}", `
                        )}
                    </h1>
                  </div>
                </div>
                <div className="flex items-center mt-12">
                  <div className="flex items-center rounded-full bg-slate-300">
                    <a
                      href={tvShowDetails.homepage}
                      target="_blank"
                      rel="noreferrer"
                      className="flex ml-auto items-center rounded-lg  p-2"
                    >
                      {networkLogo}
                      <span className="ml-5 font-bold">WATCH NOW</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-semibold">Cast</h2>
      </div>
      <Swiper
        slidesPerView={7}
        spaceBetween={10}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
      >
        {castInfoSlide}
      </Swiper>
    </div>
  );
};

export default TvShowDetails;
