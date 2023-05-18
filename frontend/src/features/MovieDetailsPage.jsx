import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetailsPage = ({ movies }) => {
  const { movieName } = useParams();
  const movieDetails = movies.find(movie => movie.name === decodeURIComponent(movieName));
    console.log(movieDetails)
  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className='m-auto w-3/4 rounded-lg border border-red-700 bg-[#5a4747]'>
    <h1 className='text-white text-2xl'>{movieDetails.name}</h1>
    <img src={movieDetails.image} height={10} width={20} className='w-full' alt={movieDetails.name} />
    <p className='text-white'>Rating: {movieDetails.rating}</p>
    <p>Description: {movieDetails.plot}</p>
    <p>cast: {movieDetails.crew}</p>
    <a href={movieDetails.url} className='p-3 rounded-xl border border-[#f70404] bg-gray-50'>Watch on Netflix</a>
  </div>
  )
}  

export default MovieDetailsPage;
