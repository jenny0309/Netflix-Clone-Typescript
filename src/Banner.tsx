import React, { useEffect, useState } from 'react';
import './Banner.css';
import instance from './axios';
import requests from './requests';

const Banner = () => {
  const [movie, setMovie] = useState<any>([]);

  useEffect(() => {
    instance.get(requests.fetchTopRated).then((request: any) => {
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
    });
  }, []);

  //   useEffect(() => {
  //     console.log(movie);
  //   }, [movie]);

  function truncateString(str: string, num: number) {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  }

  return (
    <header
      className='banner'
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: 'center center',
      }}
    >
      <div className='banner__contents'>
        <h1 className='banner__title'>{movie?.original_title}</h1>
        <div className='banner__buttons'>
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My List</button>
        </div>
        <h1 className='banner__description'>{truncateString(movie?.overview, 150)}</h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
