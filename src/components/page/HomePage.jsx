import { useState, useEffect } from 'react';
import { trendingMovies } from 'components/helpers/getMovies';
import { MoviesList } from 'components/MoviesList/MoviesList';
export const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    trendingMovies().then(res => setMovies(res));
  }, []);

  return (
    <div>
      <MoviesList movies={movies} />
    </div>
  );
};
