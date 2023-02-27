import React, { Component } from 'react';
import './css/App.css';
import  Home  from "./home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    );
  }
}

export default App;
