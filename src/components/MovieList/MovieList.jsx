import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Card from "../Card/Card";
import './MovieList.css'

const API_KEY = "eb31ecd91caa563e9f848294609836f8";

function MovieList() {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  function fetchData() {
    fetch(
      `https://api.themoviedb.org/3/discover/${
        type ? type : "movie"
      }?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`
    )
      .then((resolve) => resolve.json())
      .then((data) => setMovieList(data.results));
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [type]);

  return (
    <div className="movieList">
      <h2 className="listTitle">{(type ? type : "MOVIES").toUpperCase()}</h2>
      <div className="listCards">
        {movieList.map((movie, index) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
