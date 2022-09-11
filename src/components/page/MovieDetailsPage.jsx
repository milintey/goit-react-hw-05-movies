import { useState, useEffect } from 'react';
import { getMovie } from 'components/helpers/getMovies';
import { useParams } from 'react-router-dom';

export const MovieDetailsPage = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovie(movieId).then(res => setMovie(res));
  }, [movieId]);

  if (!movie) {
    return;
  }

  return (
    <div>
      <h1>{movie.original_title}</h1>
      <p>{movie.release_date}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt="Film"
        width="200px"
      />

      <div>
        <h2>Genres</h2>
        <ul>
          {movie.genres &&
            movie.genres.map(genr => {
              return (
                <li key={genr.id}>
                  <p>{genr.name}</p>
                </li>
              );
            })}
        </ul>
      </div>
      <div>
        <h2>Overview</h2>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};
