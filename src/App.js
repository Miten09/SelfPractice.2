import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setmovies] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error,seterror]=useState(null)

  async function fetchMoviesHandler() {
    setisLoading(true);
    seterror(null)

    
    try{
      const response = await fetch("https://swapi.dev/api/films");
      if(!response.ok){
        throw new Error('something went wrong !!')
      }
      const data = await response.json();

   
      setmovies(data.results);
    
    }
   catch(error){
     seterror(error.message)
   }
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
        {!isLoading && movies.length ===0 && !error && <p>Found No movies.</p>}
        {isLoading && <p>Loading...</p>}  
        {!isLoading && error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
