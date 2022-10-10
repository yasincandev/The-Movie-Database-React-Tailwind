import React from "react";
import { Link } from "react-router-dom";

const PeopleResults = ({ people, handleError }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center w-full ">
      {people.length > 0 ? (
        people.map((person) => (
          <Link
            to={`/people/${person.id}`}
            key={person.id}
            className="flex flex-col items-center p-2 my-2 rounded-md gap-4 "
          >
            <img
              src={`https://image.tmdb.org/t/p/w154${person.profile_path}`}
              alt={person.title}
              className="w-24 h-36 rounded-md"
              onError={handleError}
            />
            <div className="flex flex-col justify-between ml-2">
              <h1 className="text-lg font-bold">{person.name}</h1>
            </div>
          </Link>
        ))
      ) : (
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-lg font-bold">No Results Found</h1>
        </div>
      )}
    </div>
  );
};

export default PeopleResults;
