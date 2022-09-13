import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trendingMovies } from 'components/helpers/getMovies';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    trendingMovies().then(res => setMovies(res));
  }, []);

  return (
    <div>
      <MoviesList movies={movies} location={location} />
    </div>
  );
};
