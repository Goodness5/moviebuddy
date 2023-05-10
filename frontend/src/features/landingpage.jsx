import React, { useEffect, useState } from 'react';
import topstar1 from '../images/topstar1.svg';
import topstar from '../images/topstar.svg';
import Deku from '../images/Deku.svg';

const Landingpage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch('/api/movies');
      const data = await res.json();
      setMovies(data.movies);
    };
    fetchMovies();
  }, []);

  return (
    <div className=" bg-[#ff3c0121]">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>books&amp;movies</title>

      <div className="">
        <div className=" mb-10 m-auto align-middle justify-center ">
          <img className="mx-auto" src={Deku} alt="" />
        </div>

        <div className="w-2/3 flex flex-col items-center justify-between text-left">
          <h1 className="text-6xl bg-slate-300 text-left font-bold mb-4">Books &amp; Movies</h1>
          <p>Recommends books and movies to you based on your personality and taste</p>
          <div className="flex flex-row justify-between w-2/4 m-auto mt-5">
            <div className="rounded-full flex border border-black justify-center p-1">
              <a href="/" className="flex items-center space-x-2 text-gray-800">
                <p>Recommend Books</p>
                <img className="arrow w-6 h-6" src={topstar} alt="" />
              </a>
            </div>

            <div className="rounded-full flex border border-black justify-center p-1">
              <a href="/" className="flex items-center space-x-2 text-gray-800">
                <p>Recommend Movies</p>
                <img className="arrow w-6 h-6" src={topstar1} alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="movies-container mt-6">
          <div className="line h-px bg-gray-700 flex-grow"></div>
          <div className="navigation flex items-center justify-between mt-4">
            <a href="/" className="text-gray-800">
              <p>Anime</p>
            </a>
            <a href="/" className="text-gray-800">
              <p>Comedy</p>
            </a>
            <a href="/" className="text-gray-800">
              <p>Korean Series</p>
            </a>
            <a href="/" className="text-gray-800">
              <p>Movies</p>
            </a>
            <a href="()" className="text-gray-800">
              <p>Horror</p>
            </a>
            <a href="()" className="text-gray-800">
              <p>Sci-Fi</p>
            </a>
            <a href="()" className="text-gray-800">
              <p>Romance</p>
            </a>
            <div className="line h-px bg-gray"></div>
          </div>
          <div className="line h-px bg-gray-700 flex-grow"></div>
        </div>

        <div className="flex flex-col">
          <div className="quest">

            
              <h1 className="text-3xl">Trending Films?</h1>
              <a href="/">Find them all here</a>
          </div>

          <div className="movieseg">
            <div className="movie1"></div>
            <div className="movie2"></div>
                    <p>Based on views and ratings, these movies are going to worth your time.</p>
                </div>
        
        
                <div className="quest2">
                    <span className="group">
                    <h1>Books</h1>
                    <a href="/">Find them all here</a>
                    </span>
                </div>
                <div className="movies-container mt-6">
          <div className="line h-px bg-gray-700 flex-grow"></div>
          <div className="navigation flex items-center justify-between mt-4">
            <a href="/" className="text-gray-800">
              <p>Anime</p>
            </a>
            <a href="/" className="text-gray-800">
              <p>Comedy</p>
            </a>
            <a href="/" className="text-gray-800">
              <p>Korean Series</p>
            </a>
            <a href="/" className="text-gray-800">
              <p>Movies</p>
            </a>
            <a href="/" className="text-gray-800">
              <p>Horror</p>
            </a>
            <a href="/" className="text-gray-800">
              <p>Sci-Fi</p>
            </a>
            <a href="/" className="text-gray-800">
              <p>Romance</p>
            </a>
            <div className="line h-px bg-gray"></div>
           
          </div>
            <div className="line h-px bg-gray-700 flex-grow"></div>
            </div>
            </div>
        
        </div>
        
        
        
        
    </div>
    );
}

export default Landingpage;
