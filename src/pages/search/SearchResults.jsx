import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import MovieResults from "./MovieResults";
import PeopleResults from "./PeopleResults";
import TvResults from "./TvResults";

const SearchResults = () => {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [people, setPeople] = useState([]);

  const [showMovies, setShowMovies] = useState(true);
  const [showTvShows, setShowTvShows] = useState(false);
  const [showPeople, setShowPeople] = useState(false);

  const [loading, setLoading] = useState(true);

  const { query } = useParams();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
        );
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, [query]);

  useEffect(() => {
    const fetchTvShows = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
        );
        setTvShows(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTvShows();
  }, [query]);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/search/person?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
        );
        setPeople(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPeople();
  }, [query]);

  useEffect(() => {
    if (movies.length === 0 && tvShows.length === 0 && people.length === 0) {
      setLoading(false);
      window.scrollTo(0, 0);
    }
  }, [movies, tvShows, people]);

  const handleMovieShow = () => {
    setShowMovies(!showMovies);
    setShowTvShows(true);
    setShowPeople(true);
  };

  const handleTvShow = () => {
    setShowTvShows(!showTvShows);
    setShowMovies(false);
    setShowPeople(true);
  };

  const handlePeopleShow = () => {
    setShowPeople(!showPeople);
    setShowMovies(false);
    setShowTvShows(false);
  };

  const handleError = (e) => {
    e.target.src = "https://via.placeholder.com/154x231";
  };

  /* Navbar, Sidebar with movies, tv and people with their lenghts. Show them with click  */
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="w-full mt-48 flex items-center justify-center space-x-2 animate-bounce">
            <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
            <div className="w-8 h-8 bg-green-400 rounded-full"></div>
            <div className="w-8 h-8 bg-black rounded-full"></div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col">
          <div>
            <Navbar />
          </div>
          <div className="flex flex-col items-center md:items-start md:flex-row justify-center gap-10">
            <div className="flex flex-col w-full md:w-1/4 p-2 mt-32">
              <div className="flex flex-col items-center w-full p-2 my-2 rounded-md border-2 border-indigo-500">
                <h1 className="text-lg font-bold">Search Results</h1>
              </div>
              <div className="flex  flex-col  p-2 my-2 rounded-md border-2 border-indigo-500">
                <ul className="flex md:flex-col gap-2 ">
                  <li
                    onClick={handleMovieShow}
                    className="cursor-pointer  rounded-md p-2 border-2 border-black flex items-center gap-3 justify-between"
                  >
                    <h1 className="text-sm font-bold">Movies</h1>
                    <button
                      className=" text-sm font-bold"
                      onClick={handleMovieShow}
                    >
                      {movies.length}
                    </button>
                  </li>
                  <li
                    onClick={handleTvShow}
                    className="cursor-pointer  rounded-md p-2  border-2 border-black flex items-center gap-3 justify-between"
                  >
                    <h1 className="text-sm font-bold">Tv Shows</h1>
                    <button
                      className="  text-sm font-bold"
                      onClick={handleTvShow}
                    >
                      {tvShows.length}
                    </button>
                  </li>{" "}
                  <li
                    onClick={handlePeopleShow}
                    className="cursor-pointer  rounded-md p-2 border-2 border-black flex items-center gap-3 justify-between"
                  >
                    <h1 className="text-sm font-bold">People</h1>
                    <button
                      className="  text-sm font-bold"
                      onClick={handlePeopleShow}
                    >
                      {people.length}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col w-11/12 md:w-3/5  ">
              <div className="flex flex-col w-full  my-2 rounded-md  ">
                {showMovies && (
                  <>
                    <div className="flex flex-col items-center p-2 my-2 rounded-md ">
                      <h1 className="text-lg font-bold">Movies</h1>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <MovieResults movies={movies} handleError={handleError} />
                    </div>
                  </>
                )}
              </div>
              <div className="flex flex-col w-full  my-2 rounded-md  ">
                {showTvShows && (
                  <>
                    <div className="flex flex-col items-center p-2 my-2 rounded-md ">
                      <h1 className="text-lg font-bold">Tv Shows</h1>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <TvResults tvShows={tvShows} handleError={handleError} />
                    </div>
                  </>
                )}
              </div>
              <div className="flex flex-col w-full  my-2 rounded-md  ">
                {showPeople && (
                  <>
                    <div className="flex flex-col items-center p-2 my-2 rounded-md ">
                      <h1 className="text-lg font-bold">People</h1>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <PeopleResults
                        people={people}
                        handleError={handleError}
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchResults;
