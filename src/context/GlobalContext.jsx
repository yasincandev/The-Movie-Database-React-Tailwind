import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upComingMovies, setUpComingMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState([]);
  const [people, setPeople] = useState([]);
  const [popularTv, setPopularTv] = useState([]);
  const [topRatedTv, setTopRatedTv] = useState([]);
  const [airTv, setAirTv] = useState([]);
  const [trendMovies, setTrendMovies] = useState([]);
  const [trendTv, setTrendTv] = useState([]);
  const [trendPeople, setTrendPeople] = useState([]);
  const [allTrend, setAllTrend] = useState([]);

  const [loading, setLoading] = useState(false);
  const [dates, setDates] = useState([]);

  /* MOVIE FETCH AREA */

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      );
      setPopularMovies(data.results);
    };
    fetchMovies();
  }, []);

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      );
      setTopRatedMovies(data.results);
    };
    fetchTopRatedMovies();
  }, []);

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      );
      setUpComingMovies(data.results);
      setDates(data.dates);
    };
    fetchUpcomingMovies();
  }, []);

  /* TV SHOW FETCH AREA */

  useEffect(() => {
    const fetchPopularTv = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      );
      setPopularTv(data.results);
    };
    fetchPopularTv();
  }, []);

  useEffect(() => {
    const fetchTopRatedTv = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      );
      setTopRatedTv(data.results);
    };
    fetchTopRatedTv();
  }, []);

  useEffect(() => {
    const fetchOnAirTv = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      );
      setAirTv(data.results);
    };
    fetchOnAirTv();
  }, []);

  /* PEOPLE FETCH AREA */

  useEffect(() => {
    const fetchPeople = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      );
      setPeople(data.results);
    };
    fetchPeople();
  }, []);

  /* TRENDING FETCH AREA */

  useEffect(() => {
    const fetchAllTrend = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
      );
      setAllTrend(data.results);
    };
    fetchAllTrend();
  }, []);

  useEffect(() => {
    const fetchTrendMovies = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`
      );
      setTrendMovies(data.results);
    };
    fetchTrendMovies();
  }, []);

  useEffect(() => {
    const fetchTrendTv = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.REACT_APP_API_KEY}`
      );
      setTrendTv(data.results);
    };
    fetchTrendTv();
  }, []);

  useEffect(() => {
    const fetchTrendPeople = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/person/week?api_key=${process.env.REACT_APP_API_KEY}`
      );
      setTrendPeople(data.results);
    };
    fetchTrendPeople();
  }, []);

  /* SEARCH AREA */

  const backdropPath = popularMovies.map((movie) => movie.backdrop_path);

  const images = backdropPath.map((image) => {
    return `https://image.tmdb.org/t/p/original${image}`;
  });

  const tvshowPosterPath = popularTv.map((tvshow) => tvshow.poster_path);

  const tvshowImages = tvshowPosterPath.map((image) => {
    return `https://image.tmdb.org/t/p/w185${image}`;
  });

  const peopleProfilePath = people.map((person) => person.profile_path);

  const peopleImages = peopleProfilePath.map((image) => {
    return `https://image.tmdb.org/t/p/w185${image}`;
  });

  const swiperProps = {
    spaceBetween: 30,
    slidesPerView: 5,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      180: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      280: {
        slidesPerView: 1,
        spaceBetween: 10,
      },

      320: {
        slidesPerView: 2,
        spaceBetween: 5,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
      1280: {
        slidesPerView: 6,
        spaceBetween: 60,
      },
      1440: {
        slidesPerView: 6,
        spaceBetween: 70,
      },
    },
    freeMode: true,
    a11y: {
      prevSlideMessage: "Previous slide",
      nextSlideMessage: "Next slide",
      firstSlideMessage: "This is the first slide",
      lastSlideMessage: "This is the last slide",
      paginationBulletMessage: "Go to slide {{index}}",
    },
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <GlobalContext.Provider
      value={{
        scrollToTop,
        people,
        movieDetails,
        setMovieDetails,
        popularMovies,
        topRatedMovies,
        upComingMovies,
        trendMovies,
        trendTv,
        trendPeople,
        allTrend,
        dates,
        popularTv,
        topRatedTv,
        airTv,

        loading,
        images,

        tvshowImages,
        peopleImages,
        swiperProps,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
