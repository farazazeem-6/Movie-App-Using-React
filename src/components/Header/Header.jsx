import React from "react";
import "./Header.css";
import { Link } from "react-router";

function Header() {
  return (
    <div className="header">
      <div className="logo-left">
        <Link to={"/"}>
          <img
            className="logo-img"
            src="https://cdn-icons-png.flaticon.com/128/3773/3773370.png"
            alt=""
          />
        </Link>
        <Link to={"/movie/movie"}>Top Movies</Link>
        <Link to={"/movie/tv"}>Top TV Serials</Link>
      </div>
    </div>
  );
}

export default Header;
