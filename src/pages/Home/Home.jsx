import React, { useEffect, useState } from "react";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router";

const API_KEY = "eb31ecd91caa563e9f848294609836f8";

function Home() {
  const [posterData, setPosterData] = useState([]);
  function fetchData() {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`
    )
      .then((resolve) => resolve.json())
      .then((data) => setPosterData(data.results));
  }
  useEffect(() => {
    fetchData();
    console.log(posterData);
  }, []);
  return (
    <div className="poster">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
      >
        {posterData.map((movie, index) => (
          <Link key={movie.id} to={`movies/${movie.id}`}>
            <div
              // style={{
              //   backgroundImage: `url(https://image.tmdb.org/t/p/original${
              //     movie && movie.backdrop_path
              //   })`,
              // }}
              className="posterImage"
            >
              <img
                src={`https://image.tmdb.org/t/p/original${
                  movie && movie.backdrop_path
                }`}
                alt={movie.original_title}
                style={{
                  width: "100%",
                  height: "700px",
                  objectFit: "cover",
                  objectPosition: "center 30%", // Adjust this to control cropping
                }}
              />
              <div className="posterImage_overlay">
                <div className="movieTitle">
                  {movie && movie.original_title}
                </div>
                <div className="movieRuntime">
                  {movie && movie.release_date}
                  <span>
                    {movie && movie.vote_average}{" "}
                    <i class="fa-solid fa-star"></i>
                  </span>
                </div>
                <div className="movieDescryption">
                  <p>{movie && movie.overview}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
}

export default Home;
