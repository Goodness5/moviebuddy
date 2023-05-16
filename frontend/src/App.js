import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import './App.css';
import Genre from "./features/genre";
import MovieList from "./features/movielist.jsx"
import MovieDetailsPage from "./features/MovieDetailsPage"
import axios from "axios";
import Landingpage from './features/landingpage';

export default function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('/movies/homepageview')
      .then(response => {
        if (response.statusText == 'OK') {
          // console.log(response.data);
          // return response.json();
          return response.data;
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then(data => {
        // console.log(data.recommendations);
        setMovies(data.recommendations);
      })
      .catch(error => console.error(error));
  }, []);
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Landingpage movies={movies} />} />
        <Route path="/movielist" element={<MovieList />} />
        <Route path="/movielist/:genre" element={<Genre />} />
        <Route path="/moviedetails/:movieName" element={<MovieDetailsPage movies={movies} />}  />
      </Routes>
    </BrowserRouter>
  );
}
