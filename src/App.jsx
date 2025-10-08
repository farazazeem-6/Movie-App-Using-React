import React from "react";
import { Route, Routes } from "react-router";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import MovieList from "./components/MovieList/MovieList";
import MovieDetail from "./pages/MovieDetail/MovieDetail";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<MovieDetail/>} />
        <Route path="/movie/:type" element={<MovieList />} />
      </Routes>
    </div>
  );
}

export default App;
