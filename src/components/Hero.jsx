import React from "react";
import { MdLocalMovies } from "react-icons/md";

const Hero = () => {
  return (
    <div className="px-4 py-16  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl  mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-8 text-xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Welcome
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl  font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          The Best Way to Find Your Next Favorite Movie
        </h2>
        <p className="font-extrabold mt-10 text-black md:text-3xl">
          The TMDB Advantage
        </p>
      </div>
      <div className="grid gap-8 row-gap-10 lg:grid-cols-2">
        <div className="max-w-md sm:mx-auto sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <MdLocalMovies className="w-10 h-10 text-deep-purple-accent-400" />
          </div>
          <h6 className="mb-3 text-xl text-indigo-700 font-bold leading-5">
            Since 2008
          </h6>
          <p className="mb-3  text-gray-900">
            The number of contributions to our database has increased. With over
            400,000 developers and companies using our platform, TMDB has become
            a premiere source for metadata.
          </p>
          <span className="cursor-pointer inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
            Learn more
          </span>
        </div>
        <div className="max-w-md sm:mx-auto sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <MdLocalMovies className="w-10 h-10 text-deep-purple-accent-400" />
          </div>
          <h6 className="mb-3 text-xl font-bold leading-5 text-indigo-700 ">
            Metadata
          </h6>
          <p className="mb-3 text-sm text-gray-900">
            Along with extensive metadata for movies, TV shows and people, we
            also offer one of the best selections of high resolution posters and
            fanart. On average, over 1,000 images are added every single day.
          </p>
          <span className="cursor-pointer inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
            Learn more
          </span>
        </div>
        <div className="max-w-md sm:mx-auto sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <MdLocalMovies className="w-10 h-10 text-deep-purple-accent-400" />
          </div>
          <h6 className="mb-3 text-xl font-bold leading-5 text-indigo-700 ">
            Organically grow
          </h6>
          <p className="mb-3 text-sm text-gray-900">
            We're international. While we officially support 39 languages we
            also have extensive regional data. Every single day TMDB is used in
            over 180 countries.
          </p>
          <span className="cursor-pointer inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
            Learn more
          </span>
        </div>
        <div className="max-w-md sm:mx-auto sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <MdLocalMovies className="w-10 h-10 text-deep-purple-accent-400" />
          </div>
          <h6 className="mb-3 text-xl font-bold leading-5 text-indigo-700 ">
            Community
          </h6>
          <p className="mb-3 text-sm text-gray-900">
            Our community is second to none. Between our staff and community
            moderators, we're always here to help. We're passionate about making
            sure your experience on TMDB is nothing short of amazing.
          </p>
          <span className="cursor-pointer inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
            Learn more
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
