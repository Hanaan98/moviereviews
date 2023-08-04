import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Types from "./pages/Types";
import Navbar from "./components/Navbar";
import Movie from "./pages/Movie";
import "react-loading-skeleton/dist/skeleton.css";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/movie/:id" element={<Movie />}></Route>
        <Route path="/movies/:type" element={<Types />}></Route>
        <Route path="*" element={<h1>Error</h1>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
