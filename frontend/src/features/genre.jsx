import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Genre = () => {
  const {genre} = useParams();


  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`/movies/movielist/${genre}`)
      .then(response => {
        if (response.statusText == 'OK') {
          console.log(response.data);
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
      
      <div className="text-black">welcome</div>
      <h1>{genre}</h1>
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
};

export default Genre;