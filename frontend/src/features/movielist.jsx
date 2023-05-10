import React, { useState, useEffect } from 'react';

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('/movies/movielist')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then(data => {
        console.log(data);
        setMovies(data);
      })
      .catch(error => console.error(error));
  }, []);
return (
    <div>
      <h1>All Movies</h1>
      <ul>
        {Array.isArray(movies) && movies.map(movie => (
          <li key={movie.title}>
            <h2>{movie.title}</h2>
            <img src={movie.image} alt={movie.title} />
            <p>{movie.plot}</p>
            <p>Rating: {movie.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
        }  

export default MovieList;
