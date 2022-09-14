import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trendingMovies } from 'components/helpers/getMovies';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    trendingMovies()
      .then(res => setMovies(res))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>{movies && <MoviesList movies={movies} location={location} />}</div>
  );
};

export default HomePage;
