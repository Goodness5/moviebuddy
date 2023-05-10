import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Genre from "./genre";

import Landingpage from './features/landingpage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />}>
        <Route path="/:genre" component={Genre} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
