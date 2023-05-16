import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
// import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('/movies/movielist')
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
    <div>
      <h1>All Movies</h1>
      {movies && movies?.message}
      <div className=''>
      {Array.isArray(movies) ? (
          movies.map((movie, i) => (
            <LazyLoadComponent key={i} effect="opacity">
              <Link to={`/moviedetails/${encodeURIComponent(movie?.name)}`}>
                <div className="w-full">
                  <img src={movie?.image} alt={movie?.name} className="h-26" />
                </div>
              </Link>
            </LazyLoadComponent>
          ))
        ) : (
          <div className="flex justify-center items-center">
            <CircularProgress /> {/* Add the loading animation component */}
          </div>
        )}
      </div>
    </div>
  );
        }  

        

export default MovieList;
