import React from "react";
import { Route, Routes } from "react-router";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Card from "./components/Card/Card";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<h1>Movie ID</h1>} />
        <Route path="/movie/:type" element={<Card />} />
      </Routes>
    </div>
  );
}

export default App;
