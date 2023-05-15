import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetailsPage = ({ movies }) => {
  const { movieName } = useParams();

  const movieDetails = movies.find(movie => movie.name === movieName);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{movieDetails.name}</h1>
      <img src={movieDetails.image} alt={movieDetails.name} />
      <p>Rating: {movieDetails.rating}</p>
      <p>Plot: {movieDetails.plot}</p>
    </div>
  );
};

export default MovieDetailsPage;
