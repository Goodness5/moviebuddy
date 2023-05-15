import React, { useEffect, useState } from 'react';
// import topstar1 from '../images/topstar1.svg';
// import topstar from '../images/topstar.svg';
import topstar1 from '../images/book.svg';
import topstar from '../images/video.svg';
import Deku from '../images/Deku.svg';
import { FaSearch, FaMoon } from 'react-icons/fa';
import axios from "axios";
import { Link } from 'react-router-dom';

const Landingpage = () => {
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
    <div className=" bg-[#000000] text-white overflow-clip">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     
      <title>books&amp;movies</title>







      <div className="body">

        <div className="">
          <img className="mx-auto" src={Deku} alt="" />
        </div>

        <div className="nav flex  items-center flex-row justify-between text-center">     
<div className='w-full text-left'>moviebuddy</div>
<div className="items-center bg-black w-full flex flex-row">
  <form action="" className=' p-0 flex flex-row items-center'>
    <input type="search" name="" className='p-1 m-0 text-black ' id="search" placeholder="search for anything" />
    <label htmlFor="search"><FaSearch className='w-5 h-16 p-0 bg-black' /></label>
  </form>
  <div className="toggle ml-auto"><FaMoon /></div>
</div>
</div>




    <div className='flex flex-row justify-between'>
        <div className="w-2/5 justify-between flex flex-col border border-blue-600 align-middle">
          <h1 className="text-6xl text-left font-bold mb-4">Books &amp; Movies</h1>
          <p>Moviebuddy employs AI to recommend books and movies to you based on your mood and prefrences</p>
          <div className="flex flex-row justify-between w-full mt-5">
            <div className="rounded-full flex border  border-[#242b02] p-1">
              <a href="/" className="flex  items-center p-4 space-x-2 text-white">
                Recommend Books
                <img className="arrow w-6 h-6 text-white " src={topstar1} alt="" />
              </a>
            </div>

            <div className="rounded-full flex border border-[#242b02] justify-center p-1">
              <a href="/" className="flex p-4 items-center space-x-2 text-white">
                Recommend Movies
                <img className="arrow w-6 h-6" src={topstar} alt="" />
              </a>
            </div>
          </div>

<div>
          {Array.isArray(movies) && movies?.map((movie, i) => (
  <Link to={`/moviedetails/${encodeURIComponent(movie?.name)}`} key={i}>
    <div className='flex flex-col gap-8 m-0 p-3 border'>
      <h2>{movie?.name}</h2>
      <img src={movie?.image} alt={movie?.name} className='h-10 w-10' />
      <p>Rating: {movie?.rating}</p>
      <a href={movie?.url}>Watch on Netflix</a>
    </div>
  </Link>
))}
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
