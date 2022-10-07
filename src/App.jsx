import Footer from "./components/Footer";

import Home from "./components/Home";
import { GlobalProvider } from "./context/GlobalContext";
import { Routes, Route } from "react-router-dom";
import Movies from "./pages/movies/Movies";
import TvShows from "./pages/tvshows/TvShows";
import People from "./pages/people/People";
import Trending from "./pages/trending/Trending";
import MovieDetails from "./pages/details/MovieDetails";
import TvShowDetails from "./pages/details/TvShowDetails";
import PeopleDetails from "./pages/details/PeopleDetails";

function App() {
  return (
    <GlobalProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/tv" element={<TvShows />} />
        <Route path="/tv/:id" element={<TvShowDetails />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/people" element={<People />} />
        <Route path="/people/:id" element={<PeopleDetails />} />
      </Routes>
      <Footer />
    </GlobalProvider>
  );
}

export default App;
