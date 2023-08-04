import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import Popular from "../components/Popular";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
      );
      const data = await res.json();
      setMovies(data.results);
    };
    getMovies()
      .then(() => {})
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Carousel movies={movies} />
      <Popular movies={movies} text="Latest" />
    </div>
  );
}

export default Home;
