import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";

const Footer = () => {
  const { navigation, scrollToTop } = useGlobalContext();
  return (
    <div className="  left-0 right-0 bottom-0">
      <section>
        <div className="max-w-lg  px-4 pt-24 py-8 mx-auto text-left md:max-w-none md:text-center">
          <h1 className="text-3xl font-extrabold leading-10 tracking-tight flex flex-col  text-center sm:leading-none md:text-6xl  lg:text-7xl">
            <span className="inline md:block">Our Newsletter</span>
            <span className=" mt-2 bg-clip-text text-transparent bg-gradient-to-r from-black via-indigo-500 to-black md:inline-block">
              {" "}
              Keep
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-black via-indigo-500 to-black">
                {" "}
                In Touch
              </span>{" "}
            </span>
          </h1>
          <div className="flex flex-col md:flex-row  gap-5 w-full mx-auto rounded-lg font-black mt-5  md:mt-12 md:max-w-lg text-center lg:text-lg">
            <input
              className=" text-xl px-5  placeholder-gray-500 border  border-indigo-600 rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300  "
              placeholder="email"
            />

            <button className="cursor-pointer border  border-indigo-600 text-sm  py-3 px-7 rounded-full">
              Join TMDB
            </button>
          </div>
        </div>
      </section>

      <hr className="text-white mx-5" />
      <footer className="bg-indigo-600 pb-5">
        <div className="max-w-screen-xl px-4 pt-8 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-col md:flex-row">
            <div className="flex justify-center text-teal-300 sm:justify-start">
              <a href="/">
                <img
                  alt="Your Company"
                  className="h-8 w-auto sm:h-10"
                  src="https://seeklogo.com/images/B/Batman_Begins-logo-7DA14B4C4D-seeklogo.com.png"
                />
              </a>
            </div>

            <p className="mt-4 text-md font-semibold text-center flex gap-4 text-black lg:text-right lg:mt-0">
              <Link to="/">Home</Link>
              <Link to="/movies">Movies</Link>
              <Link to="/tv">TV Shows</Link>
              <Link to="/trending">Trending</Link>
              <Link to="/people">People</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
