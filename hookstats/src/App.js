import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { movies } from "./comp/Data";
import { useState } from "react";
import Movie from "./comp/Movie";
import Add from "./comp/Add";
import "./App.css";

function App() {
  //react states
  // const [filt, setfilt] = useState("");
  //input value
  /**const oks = (e) => {
    setfilt(e.target.value);
  };
  
  //search evant
  const search = (movies) => {
    return movies.filter(
      (elm) => elm.name.toLowerCase().includes(filt) || elm.rate.includes(filt)
    );
  };

  movies={search(movies)}
  */
  const [movie, setmovie] = useState(movies);
  console.log(movie);
  const mov = (x) => {
    setmovie([x,...movie]);
  };
  return (
    <div>
      <h1 className="header">ZaMovies</h1>
      <Add fatma={mov} />
      <div className="mov">
        {movie.map((el) => (
          <Movie movies={el} />
        ))}
      </div>
    </div>
  );
}

export default App;
