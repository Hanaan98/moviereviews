import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Skeleton from "react-loading-skeleton";
import { SkeletonTheme } from "react-loading-skeleton";
function Movie() {
  const [movie, setMovie] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const Params = useParams();
  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true);
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${Params.id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
      );
      const data = await res.json();
      setMovie(data);
      const image = new Image();
      image.src = `https://image.tmdb.org/t/p/original${data.backdrop_path}`;
      image.onload = () => {
        setIsLoading(false);
      };
    };
    getMovies()
      .then(() => {})
      .catch((err) => console.log(err));
  }, [Params.id]);
  return (
    movie && (
      <div className="px-12 text-white relative">
        <div>
          {isLoading ? (
            <div className="min-w-full h-[400px] overflow-hidden rounded-lg ">
              <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <Skeleton height={400} duration={2} enableAnimation={true} />
              </SkeletonTheme>
            </div>
          ) : (
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              className="w-full h-[60vh] object-cover opacity-85 rounded-lg"
            />
          )}
        </div>
        <div className="flex absolute top-48 left-32 gap-10">
          {isLoading ? (
            <div className="min-w-[200px] h-[300px] overflow-hidden rounded-lg ">
              <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <Skeleton height={350} duration={2} enableAnimation={true} />
              </SkeletonTheme>
            </div>
          ) : (
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              className="w-[15vw] object-cover rounded-lg"
            />
          )}
          <div className="flex gap-2 flex-col">
            <h1 className="text-5xl font-bold selector">
              {movie.original_title}
            </h1>
            <p>{movie.tagline}</p>
            <div className="flex gap-10">
              <p>
                {movie.vote_average}
                &nbsp;
                <FontAwesomeIcon icon={faStar} color="white" />
              </p>
              <p>({movie.vote_count}) votes</p>
            </div>
            <p>Release Date: {movie.release_date} </p>
            <p className="selector">{movie.runtime} mins </p>
          </div>
        </div>
      </div>
    )
  );
}

export default Movie;
