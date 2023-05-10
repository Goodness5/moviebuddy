import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Landingpage from './features/landingpage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
