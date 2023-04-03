import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setmovies] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  async function fetchMoviesHandler() {
    setisLoading(true);
    const response = await fetch("https://swapi.dev/api/films");
    const data = await response.json();
    setmovies(data.results);
    setisLoading(false);
  }

  return (
    <React.Fragment>
      s
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && <MoviesList movies={movies} />}
        {!isLoading && movies.length ===0 && <p>Found No movies.</p>}
        {isLoading && <p>Loading...</p>}  
      </section>
    </React.Fragment>
  );
}

export default App;
