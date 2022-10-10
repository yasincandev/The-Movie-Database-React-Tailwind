import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";

const Search = () => {
  const [query, setQuery] = useState("");
  const [multiSearch, setMultiSearch] = useState([]);
  const [loading, setLoading] = useState(false);
  const { scrollToTop } = useGlobalContext;

  const navigate = useNavigate();

  useEffect(() => {
    const fetchMultiSearch = async () => {
      setLoading(true);
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}&page=1`
      );
      setMultiSearch(data.results);
    };
    fetchMultiSearch();
    setLoading(false);
  }, [query]);

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  const handleError = (e) => {
    e.target.src = "https://via.placeholder.com/92x150";
  };

  return (
    <div className=" flex items-start">
      <div className="w-full flex-col flex justify-center items-center ">
        <input
          type="text"
          placeholder="Search for any movie or tv show"
          className="w-3/5 border-4 border-indigo-600 bg-white h-10 p-7 rounded-md text-sm md:text-xl focus:outline-none"
          onChange={handleQuery}
        />
        <div className="w-3/5 flex flex-wrap justify-center items-center">
          {loading ? (
            <div className="w-full mt-48 flex items-center justify-center space-x-2 animate-bounce">
              <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
              <div className="w-8 h-8 bg-green-400 rounded-full"></div>
              <div className="w-8 h-8 bg-black rounded-full"></div>
            </div>
          ) : (
            <>
              {query.length > 3 && (
                <div className=" w-full max-h-96  overflow-x-scroll top-16 flex flex-col items-center gap-3 text-black  p-3 rounded-md">
                  <h1 className="text-2xl font-bold">Search Results</h1>
                  <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {multiSearch.map((item) => (
                      <div className=" flex items-center flex-col">
                        <Link
                          onClick={scrollToTop}
                          to={`/${item.media_type}/${item.id}`}
                        >
                          <img
                            src={`https://image.tmdb.org/t/p/w154${item.poster_path}`}
                            alt="poster"
                            onError={handleError}
                          />
                        </Link>
                        <div className="flex flex-col gap-2 items-center">
                          <h1 className="text-lg text-center font-bold mt-2">
                            {item.original_title ||
                              item.original_name ||
                              item.name}
                          </h1>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
          {query.length > 3 && multiSearch.length === 0 && (
            <div className="w-full flex flex-col items-center justify-center">
              <h1 className="text-2xl font-bold">No Results Found</h1>
            </div>
          )}

          {query.length > 3 && (
            <button
              onClick={() => navigate(`/search/${query}`)}
              className="bg-indigo-600 w-full text-white p-4 rounded-md mt-5"
            >
              View All Results
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
