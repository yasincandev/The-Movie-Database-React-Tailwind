import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaImdb,
} from "react-icons/fa";
import PeopleCredits from "../people/PeopleCredits";
import DetailsNavbar from "./DetailsNavbar";

const PeopleDetails = () => {
  const [peopleDetails, setPeopleDetails] = useState([]);

  const [allExternalIds, setAllExternalIds] = useState([]);

  const id = useParams();

  const peopleId = id.id;

  useEffect(() => {
    const fetchPeopleDetails = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/person/${peopleId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      setPeopleDetails(data);
    };
    fetchPeopleDetails();
  }, [peopleId, setPeopleDetails]);

  useEffect(() => {
    const fetchAllExternalIds = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/person/${peopleId}/external_ids?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      setAllExternalIds(data);
    };
    fetchAllExternalIds();
  }, [peopleId, setAllExternalIds]);

  const replaceImage = (error) => {
    error.target.src =
      "https://via.placeholder.com/185x278/ffffff/000000.png?text=No+Image+Found";
  };

  const externalIdSwitch = (id) => {
    switch (id) {
      case "facebook_id":
        return (
          <a
            href={`https://www.facebook.com/${allExternalIds.facebook_id}`}
            target="_blank"
            rel="noreferrer"
            key={id}
          >
            <FaFacebookSquare className="text-3xl text-white" />
          </a>
        );
      case "instagram_id":
        return (
          <a
            href={`https://www.instagram.com/${allExternalIds.instagram_id}`}
            target="_blank"
            rel="noreferrer"
            key={id}
          >
            <FaInstagramSquare className="text-3xl text-white" />
          </a>
        );
      case "twitter_id":
        return (
          <a
            href={`https://www.twitter.com/${allExternalIds.twitter_id}`}
            target="_blank"
            rel="noreferrer"
            key={id}
          >
            <FaTwitterSquare className="text-3xl text-white" />
          </a>
        );
      case "imdb_id":
        return (
          <a
            href={`https://www.imdb.com/name/${allExternalIds.imdb_id}`}
            target="_blank"
            rel="noreferrer"
            key={id}
          >
            <FaImdb className="text-3xl text-white" />
          </a>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-slate-800">
      <div className=" bg-white mx-auto mb-16 p-10">
        <DetailsNavbar />
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row">
          <div className="flex-none">
            <img
              src={`https://image.tmdb.org/t/p/w300${peopleDetails.profile_path}`}
              alt="poster"
              onError={replaceImage}
              className="rounded-lg"
            />
          </div>
          <div className="md:ml-24">
            <h2 className="text-4xl font-bold mb-3 text-white">
              {peopleDetails.name}
            </h2>
            <div className="flex flex-wrap items-center text-gray-400 text-sm">
              <svg
                className="fill-current text-orange-500 w-4"
                viewBox="0 0 24 24"
              >
                <g data-name="Layer 2">
                  <path
                    d="M12 2a10 10 0 0 0-3.54.66 1 1 0 0 0-.76 1.1A8 8 0 0 1 2.05 9 1 1 0 0 0 3 10a1 1 0 0 0 .78-.38 6 6 0 0 0 9.44 0 1 1 0 0 0 .78.38 1 1 0 0 0 1-1 8 8 0 0 1-2.27-5.24 1 1 0 0 0-.76-1.1A10 10 0 0 0 12 2zm0 14a4 4 0 1 1 4-4 4 4 0 0 1-4 4z"
                    data-name="star"
                  />
                </g>
              </svg>
              <span className="ml-1">{peopleDetails.popularity}</span>
              <span className="mx-2">|</span>
              <span>{peopleDetails.birthday}</span>
              <span className="mx-2">|</span>
              <span>{peopleDetails.place_of_birth}</span>
            </div>
            <div>
              <p className="text-gray-300 text-lg mt-8 font-semibold max-w-2xl">
                {peopleDetails.biography}
              </p>
            </div>
            <div className="mt-12">
              <h4 className="text-white font-semibold">
                Social Media Profiles
              </h4>
              <div className="flex items-center mt-4 gap-4">
                {Object.keys(allExternalIds).map((id) => externalIdSwitch(id))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-semibold text-white">Known For:</h2>
        <div className="mt-8 container">
          <PeopleCredits />
        </div>
      </div>
    </div>
  );
};

export default PeopleDetails;
