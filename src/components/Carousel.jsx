import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as Car } from "react-responsive-carousel";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
function Carousel(props) {
  return (
    <Car
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      autoPlay={true}
      transitionTime={3}
    >
      {props.movies.map((item) => (
        <Link to={`/movie/${item.id}`}>
          <div className="relative">
            <img
              src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
              alt=""
              className="w-full h-[83vh] object-cover relative opacity-80"
            />
            <div className="text-white  flex text-left flex-col gap-2 absolute top-44 left-36 right-36 ">
              <h1 className="text-6xl font-bold">{item.original_title}</h1>
              <div className="flex gap-10 items-center">
                <h1 className="text-lg">{item.release_date}</h1>
                <h1 className="text-lg flex items-center">
                  {item.vote_average}
                  &nbsp;
                  <FontAwesomeIcon icon={faStar} color="white" />
                </h1>
              </div>
              <p className="text-sm italic w-1/2">{item.overview}</p>
            </div>
          </div>
        </Link>
      ))}
    </Car>
  );
}

export default Carousel;
