import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const API_KEY = "eb31ecd91caa563e9f848294609836f8";
const dummyApi =
  "https://api.themoviedb.org/3/movie/1061474?api_key=eb31ecd91caa563e9f848294609836f8&language=en-US";

function MovieDetail() {
  const [details, setDetails] = useState([]);
  const [type, setType] = useState("");
  const { id } = useParams();
  console.log(id);

  async function fetchDetails(id) {
    let response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    if (response.ok) {
      const data = await response.json();
      setType("movie");
      setDetails(data);
      console.log(details);
      return;
    }

    response = await fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=en-US`
    );
    if (response.ok) {
      const data = await response.json();
      setType("tv");
      setDetails(data);
      console.log(details);
      return;
    }
    console.error("No matching movie or TV show found");
  }

  useEffect(() => {
    fetchDetails(id);
  }, [id]);

  return (
    <div className="movie">
      <div className="movieIntro">detail page</div>
    </div>
  );
}

export default MovieDetail;
