import React, { useEffect, useState } from 'react';
// import topstar1 from '../images/topstar1.svg';
// import topstar from '../images/topstar.svg';
import topstar1 from '../images/book.svg';
import topstar from '../images/video.svg';
import Deku from '../images/Deku.svg';
import { FaSearch, FaMoon } from 'react-icons/fa';

const Landingpage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch('/movies/movielist');
      const data = await res.json();
      setMovies(data.movies);
    };
    fetchMovies();
  }, []);

  return (
    <div className=" bg-[#000000] text-white overflow-clip">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     
      <title>books&amp;movies</title>







      <div className="body">

        <div className="">
          <img className="mx-auto" src={Deku} alt="" />
        </div>

        <div className="nav flex flex-row justify-between text-center">     
  <div className='w-full text-left'>moviebuddy</div>
  <div className="flex flex-row items-center">
    <form action="">
      search for anything
      <label htmlFor="search"> <FaSearch /></label>
      <input type="search" name="" className='hidden' id="search" />
    </form>
  </div>
  <div className="toggle ml-auto"><FaMoon /></div>
</div>






        <div className="w-2/3 flex flex-col items-center justify-between text-left">
          <h1 className="text-6xl text-left font-bold mb-4">Books &amp; Movies</h1>
          <p>Recommends books and movies to you based on your personality and taste</p>
          <div className="flex flex-row justify-between w-2/4 m-auto mt-5">
            <div className="rounded-full flex border border-black justify-center p-1">
              <a href="/" className="flex items-center space-x-2 text-white">
                <p>Recommend Books</p>
                <img className="arrow w-6 h-6 text-white " src={topstar1} alt="" />
              </a>
            </div>

            <div className="rounded-full flex border border-black justify-center p-1">
              <a href="/" className="flex items-center space-x-2 text-white">
                <p>Recommend Movies</p>
                <img className="arrow w-6 h-6" src={topstar} alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="movies-container mt-6">
          <div className="line h-px bg-gray-700 flex-grow"></div>
          <div className="navigation flex items-center justify-between mt-4">
  <a href="/movielist/anime" className="text-white">
    <p>Anime</p>
  </a>
  <a href="/movielist/comedy" className="text-white">
    <p>Comedy</p>
  </a>
  <a href="/movielist/korean-series" className="text-white">
    <p>Korean Series</p>
  </a>
  <a href="/movielist" className="text-white">
    <p>Movies</p>
  </a>
  <a href="/movielist/horror" className="text-white">
    <p>Horror</p>
  </a>
  <a href="/movielist/sci-fi" className="text-white">
    <p>Sci-Fi</p>
  </a>
  <a href="/movielist/romance" className="text-white">
    <p>Romance</p>
  </a>
</div>
  <div className="line h-px bg-gray-700 flex-grow"></div>
</div>

        <div className="flex flex-col">
          <div className="quest">

            
              <h1 className="text-3xl">Trending Films?</h1>
              <a href="/">Find them all here</a>
          </div>

          <div className="movieseg h-8 bg-black">
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
            <a href="/movielist/anime" className="text-white">
              <p>Anime</p>
            </a>
            <a href="/movielist/comedy" className="text-white">
              <p>Comedy</p>
            </a>
            <a href="/movielist/korean-series" className="text-white">
              <p>Korean Series</p>
            </a>
            <a href="/movielist" className="text-white">
              <p>Movies</p>
            </a>
            <a href="/movielist/horror" className="text-white">
              <p>Horror</p>
            </a>
            <a href="/movielist/sci-fi" className="text-white">
              <p>Sci-Fi</p>
            </a>
            <a href="/movielist/romance" className="text-white">
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
