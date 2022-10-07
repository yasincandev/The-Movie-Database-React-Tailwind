import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Popular from "./Popular";
import Search from "./Search";

const Home = () => {
  return (
    <div className="flex flex-col gap-5">
      <Header />
      <Search />
      <Hero />
      <Popular />
    </div>
  );
};

export default Home;
