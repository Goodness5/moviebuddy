import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

const TrendingMoviesCarousel = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
   
    const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get('/movies/trending');
        setMovies(response.data.movies);
        console.log(movies)
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    fetchTrendingMovies();
  }, [movies]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {movies &&
          movies.map((movie) => (
            <Link to={`/moviedetails/${encodeURIComponent(movie?.name)}`} key={movie?.name}>
              <div>
                <img src={movie?.image} alt={movie?.name} />
              </div>
            </Link>
          ))}
      </Slider>
    </div>
  );
};

export default TrendingMoviesCarousel;
