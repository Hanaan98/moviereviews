import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Skeleton from "react-loading-skeleton";
import { SkeletonTheme } from "react-loading-skeleton";

function Card(props) {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const Params = useParams();
  const hoverHandler = () => {
    setShow(true);
  };
  const hoveRemoveHanlder = () => {
    setShow(false);
  };
  useEffect(() => {
    setIsLoading(true);
    const image = new Image();
    image.src = `https://image.tmdb.org/t/p/original${props.movies.poster_path}`;

    image.onload = () => {
      setIsLoading(false);
    };
  }, [props.movies.poster_path]);
  
  
  return isLoading ? (
    <div className="min-w-[160px] h-[240px] overflow-hidden rounded-md ">
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <Skeleton height={240} duration={2} enableAnimation={true} />
      </SkeletonTheme>
    </div>
  ) : (
    <Link to={`/movie/${props.movies.id}`}>
      <div
        className="relative hover:scale-x-125 hover:scale-y-125 hover:z-10 hover:transition-all hover:duration-500 hover:ease-in-out"
        onMouseOver={hoverHandler}
        onMouseLeave={hoveRemoveHanlder}
      >
        <img
          src={`https://image.tmdb.org/t/p/original${props.movies.poster_path}`}
          alt=""
          className="w-full h-60 transition-all duration-300 ease-in-out transform object-cover rounded-md"
        />
        {show && (
          <>
            <div className="bg-black bg-opacity-20 absolute top-0 left-0 w-full h-full"></div>
            <div className="text-white  flex text-left flex-col gap-2 absolute top-20 p-2 justify-center">
              <h1 className="text-xs font-bold ">
                {props.movies.original_title}
              </h1>
              <div className="flex gap-10 items-center">
                <h1 className="text-xs">{props.movies.release_date}</h1>
                <h1 className="text-xs flex items-center">
                  {props.movies.vote_average}
                  &nbsp;
                  <FontAwesomeIcon icon={faStar} color="white" />
                </h1>
              </div>
              <p className="text-[0.6rem] italic selector">
                {props.movies.overview.slice(0, 118) + "..."}
              </p>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}

export default Card;
