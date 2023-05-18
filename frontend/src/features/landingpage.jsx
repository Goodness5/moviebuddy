import React, { useEffect, useState, useRef } from 'react';
// import topstar1 from '../images/topstar1.svg';
// import topstar from '../images/topstar.svg';
import topstar1 from '../images/book.svg';
import topstar from '../images/video.svg';
import Deku from '../images/Deku.svg';
import { FaSearch, FaMoon } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
// import '../mine.css'
// import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const Landingpage = () => {
  const [movies, setMovies] = useState([]);
  const [books, setBooks] = useState([]);
  const [slidemovies, setSlideMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const carouselRef = useRef(null);
  
  useEffect(() => {
    fetch('/movies/homepageview')
      .then(response => {
        if (response.ok) {
          setLoading(false);
          return response.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then(data => {
        console.log("Fetched movies:", data);
        setMovies(data.recommendations);
      })
      .catch(error => console.error(error));
  }, []);
  
  useEffect(() => {
    fetch('/books/bookshomepageview/')
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.books);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);
  
  
  useEffect(() => {
    fetch('/movies/trending')
      .then(response => {
        if (response.ok) {
          setLoading(false);
          return response.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then(data => {
        console.log("Fetched trending movies:", data);
        setSlideMovies(data.movies);
      })
      .catch(error => console.error(error));
  }, []);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (carouselRef.current) {
        carouselRef.current.next();
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  console.log("slidemovies:", slidemovies);
  console.log("books:", books);
  

  // if (loading) {
  //   return (
  //     <div className="flex justify-center items-center h-screen">
  //       <CircularProgress />
  //     </div>
  //   );
  // }



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




    <div className='mine flex flex-row justify-between'>
        <div className="w-2/4 justify-between flex flex-col align-middle">
          <h1 className="text-6xl text-left font-bold mb-4">Books &amp; Movies</h1>
          <p>Moviebuddy employs AI to recommend books and movies to you based on your mood and prefrences</p>
          <div className="flex flex-row justify-between w-full mt-5">
            <div className="rounded-full flex border  border-[#242b02] p-1">
              <a href="/booklist" className="flex  items-center p-4 space-x-2 text-white">
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
          </div>


          <div className="grid grid-cols-3 p-6">
          {Array.isArray(movies) ? (
  movies.map((movie, i) => (
    <LazyLoadComponent key={i} effect="opacity">
      <Link to={`/moviedetails/${encodeURIComponent(movie?.name)}`}>
        <div className="w-full">
          <img src={movie?.image} alt={movie?.name} className="" />
        </div>
      </Link>
    </LazyLoadComponent>
  ))
) : (
  <div className="flex justify-center items-center">
    <CircularProgress /> 
  </div>
)}

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
              <div className="trending">

              <div className='flex flex-col w-9/12 h-2/6 p-4 bg-white'>
      {Array.isArray(movies) ? (
        <Carousel showThumbs={false} interval={4000} ref={carouselRef}>
          {movies.map((movie, i) => (
            <div key={i}>
              <Link to={`/moviedetails/${encodeURIComponent(movie?.name)}`}>
                <img src={movie?.image} alt={movie?.name} className="w-full h-2/6" />
              </Link>
            </div>
          ))}
        </Carousel>
      ) : (
        <div className="flex justify-center items-center">
          <CircularProgress />
        </div>
      )}
    </div>
              </div>
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


                <h1>All Books</h1>
      <div className="grid grid-cols-3 mt-6 rounded-lg">
        {Array.isArray(books) ? (
          books.map((book, i) => (
            <LazyLoadComponent key={i} effect="opacity">
              <Link to={`/bookdetails/${encodeURIComponent(book?.title)}`}>
                <div className="rounded-2xl p-2 m-12 bg-blue-200 flex flex-col">
                  <img src={book?.cover} alt={book?.title} className="" />
                  <p>{book?.title}</p>
                </div>
              </Link>
            </LazyLoadComponent>
          ))
        ) : (
          <div className="flex justify-center items-center">
            <CircularProgress />
          </div>
        )}
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
