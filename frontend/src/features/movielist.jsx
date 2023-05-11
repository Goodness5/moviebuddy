import React, { useState, useEffect } from 'react';
import axios from "axios";

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
      <div className='grid grid-cols-3 m-0 p-8'>
        {Array.isArray(movies) && movies?.map((movie, i) => (
          <div key={i} className='flex flex-col gap-8 m-0 p-3 border'>
            <h2>{movie?.name}</h2>
            <img src={movie?.image} alt={movie?.name} />
            <p>{movie?.plot}</p>
            <p>Rating: {movie?.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
        }  

export default MovieList;
