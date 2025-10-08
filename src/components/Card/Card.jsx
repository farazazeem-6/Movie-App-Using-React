import React from "react";
import "./Card.css";
import { Link } from "react-router";

function Card({ movie }) {
  return (
    <Link to={`/movies/${movie && movie.id}`}>
      <div className="card">
        <img
          className="cardImage"
          src={`https://image.tmdb.org/t/p/original${
            movie && movie.poster_path
          }`}
          alt=""
        />
        <div className="cardOverlay">
          <div className="cardTitle">
            {(movie && movie.original_title) || movie.original_name}
          </div>
          <div className="cardRuntime">
            {movie && movie.release_date}
            <span className="cardRating">
              {movie && movie.vote_average}
              <i className="fa-solid fa-star"></i>
            </span>
          </div>
          <div className="movieDescryptionCard">
            <p>{movie && movie.overview.slice(0,100)+ '...'}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
