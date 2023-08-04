import React, { useState, useEffect } from "react";
import Popular from "../components/Popular";
import { useParams } from "react-router-dom";

function Types() {
  const [movies, setMovies] = useState();
  const movie = useParams();
  useEffect(() => {
    const getMovies = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movie.type}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
      );
      const data = await res.json();
      setMovies(data.results);
    };
    getMovies()
      .then(() => {})
      .catch((err) => console.log(err));
  }, [movie.type]);
  return <Popular movies={movies} type={movie.type} text={movie.type} />;
}

export default Types;
