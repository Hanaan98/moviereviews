import React from "react";
import logo from "../logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="section_padding bg-black flex justify-between items-center">
      <div className="flex gap-10 items-center">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <ul className="flex items-center gap-10">
          <Link to="/movies/popular">
            <li className="text-white hover:text-[#f5c518] ">Popular</li>
          </Link>
          <Link to="/movies/top_rated">
            <li className="text-white hover:text-[#f5c518]">Top Rated</li>
          </Link>
          <Link to="/movies/upcoming">
            <li className="text-white hover:text-[#f5c518]">Upcoming</li>
          </Link>
        </ul>
      </div>
      <div className="flex justify-center items-center rounded-full bg-white px-3 py-3 cursor-pointer hover:opacity-80 hover:transition-all hover:duration-300">
        <FontAwesomeIcon icon={faUser} color="black" size="1x" />
      </div>
    </div>
  );
}

export default Navbar;
