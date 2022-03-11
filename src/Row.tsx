import React, { useEffect, useState } from 'react';
import './Row.css';
import instance from './axios';
// import YouTube from 'react-youtube';
// import movieTrailer from 'movie-trailer'

// find the way to use movie-trailer in Typescript!

const baseImageUrl = 'https://image.tmdb.org/t/p/original/';
const exitTitles = [
  'Endless Night',
  'The Last Bus',
  'The Ultimatum: Marry or Move On',
  'Pálpito',
  'Wild Abandon',
  'Love, Life & Everything in Between',
  'Welcome To Eden',
  'Heartbreak High',
  '800 Meters',
];

interface RowProps {
  title: string;
  fetchUrl: string;
  isLargeRow: boolean;
}

interface RowPostersProps {
  id: string;
  poster_path: string;
  name: string;
  backdrop_path: string;
}

const Row = ({ title, fetchUrl, isLargeRow }: RowProps) => {
  const [movies, setMovies] = useState([]);
  // const [trailerUrl, setTrailerUrl] = useState<string | null>('');

  useEffect(() => {
    // if [], run once when the row loads, and don't run again
    instance.get(fetchUrl).then((request: any) => {
      //   console.log(request.data.results);
      setMovies(request.data.results);
    });
  }, [fetchUrl]);

  // const opts: object = {
  //   height: '390',
  //   width: '100%',
  //   playerVars: {
  //     autoplay: 1,
  //   },
  // };

  // const handleClick = (movie: RowPostersProps) => {
  //   if (trailerUrl) {
  //     setTrailerUrl('');
  //   } else {
  //     movieTrailer(movie?.name || '')
  //       .then((url: string) => {
  //         // https://www.youtube.com/watch?v=E1vwsDuCEGk <- get "E1vwsDuCEGk" part!
  //         const urlParams = new URLSearchParams(new URL(url).search);
  //         setTrailerUrl(urlParams.get('v'))
  //       })
  //       .catch((error: any) => console.log(error));
  //   }
  // };

  return (
    <div className='row'>
      <h2>{title}</h2>

      <div className='row__posters'>
        {movies.map(
          (movie: RowPostersProps) =>
            exitTitles.indexOf(movie.name) === -1 && (
              <img
                key={movie.id}
                // onClick={() => handleClick(movie)}
                className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                src={`${baseImageUrl}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
      {/* {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />} */}
    </div>
  );
};

export default Row;
