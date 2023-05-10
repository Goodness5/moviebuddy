import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Genre from "./genre/[genre]";
import MovieList from "./features/movielist.jsx"

import Landingpage from './features/landingpage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/:genre" component={Genre} />
        <Route path="/movielist" element={<MovieList />} />
      </Routes>
    </BrowserRouter>
  );
}
