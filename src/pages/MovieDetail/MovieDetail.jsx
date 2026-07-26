import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./MovieDetail.css";
import {
  MOVIE_TYPE,
  TV_TYPE,
  RELEASE_DATE_PREFIX,
  SYNOPSIS,
  NO_MATCHING_MOVIE_OR_TV,
  API_KEY_URL,
} from "../../constants/message";

const dummyApi =
  "https://api.themoviedb.org/3/movie/1061474?api_key=eb31ecd91caa563e9f848294609836f8&language=en-US";

function MovieDetail() {
  const [details, setDetails] = useState(null);
  const [type, setType] = useState("");
  const { id } = useParams();
  // console.log(id);

  async function fetchDetails(id) {
    let response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY_URL}&language=en-US`,
    );
    if (response.ok) {
      const data = await response.json();
      setType(MOVIE_TYPE);
      setDetails(data);
      console.log(details);
      return;
    }

    response = await fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY_URL}&language=en-US`,
    );
    if (response.ok) {
      const data = await response.json();
      setType(TV_TYPE);
      setDetails(data);
      console.log(details);
      return;
    }
    console.error(NO_MATCHING_MOVIE_OR_TV);
  }

  useEffect(() => {
    fetchDetails(id);
  }, [id]);

  return (
    <div className="movie">
      <div className="movie__intro">
        <img
          className="movie__backdrop"
          src={`https://image.tmdb.org/t/p/original${
            details ? details.backdrop_path : ""
          }`}
        />
      </div>
      <div className="movie__detail">
        <div className="movie__detailLeft">
          <div className="movie__posterBox">
            <img
              className="movie__poster"
              src={`https://image.tmdb.org/t/p/original${
                details ? details.poster_path : ""
              }`}
            />
          </div>
        </div>
        <div className="movie__detailRight">
          <div className="movie__detailRightTop">
            <div className="movie__name">
              {details ? details.original_title : ""}
            </div>
            <div className="movie__tagline">
              {details ? details.tagline : ""}
            </div>
            <div className="movie__rating">
              {details ? details.vote_average : ""}{" "}
              <i className="fas fa-star" />
              <span className="movie__voteCount">
                {details ? "(" + details.vote_count + ") votes" : ""}
              </span>
            </div>
            <div className="movie__runtime">
              {details ? details.runtime + " mins" : ""}
            </div>
            <div className="movie__releaseDate">
              {details ? `${RELEASE_DATE_PREFIX}${details.release_date}` : ""}
            </div>
            <div className="movie__genres">
              {details && details.genres
                ? details.genres.map((genre) => (
                    <>
                      <span className="movie__genre" id={genre.id}>
                        {genre.name}
                      </span>
                    </>
                  ))
                : ""}
            </div>
          </div>
          <div className="movie__detailRightBottom">
            <div className="synopsisText">{SYNOPSIS}</div>
            <div>{details ? details.overview : ""}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
