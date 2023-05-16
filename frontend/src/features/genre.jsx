import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

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
      <div className='grid grid-cols-3 text-white'>
        {Array.isArray(movies) && movies?.map((movie, i) => (
          <LazyLoadComponent effect="opacity">
          <Link to={`/moviedetails/${encodeURIComponent(movie?.name)}`}>
          <div key={i} className='flex flex-col gap-8 m-6 p-3 border text-white'>
            <h2>{movie?.name}</h2>
            <img src={movie?.image} alt={movie?.name} />
            <p >Rating: {movie?.rating}</p>
          </div>
          </Link>
    </LazyLoadComponent>
        ))}: (
          <div className="flex justify-center items-center">
            <CircularProgress /> 
          </div>
        )
        
      </div>

</div>
  );
};

export default Genre;