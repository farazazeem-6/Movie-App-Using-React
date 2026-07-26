import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Card from "../Card/Card";
import "./MovieList.css";
import { API_KEY_URL, MOVIE_TYPE, DEFAULT_MOVIES_TITLE } from "../../constants/message";

function MovieList() {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  function fetchData() {
    fetch(
      `https://api.themoviedb.org/3/discover/${
        type ? type : MOVIE_TYPE
      }?api_key=${API_KEY_URL}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
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
      <h2 className="listTitle">{(type ? type : DEFAULT_MOVIES_TITLE).toUpperCase()}</h2>
      <div className="listCards">
        {movieList.map((movie, index) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
export default MovieList;
