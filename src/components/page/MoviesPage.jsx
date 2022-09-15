import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { searhMovies } from 'components/helpers/getMovies';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const param = searchParams.get('query');

    if (param?.trim()) {
      searhMovies(param)
        .then(res => setMovies(res))
        .catch(error => console.log(error));
    }
  }, [searchParams]);

  const formSubmit = event => {
    event.preventDefault();
    setSearchParams({ query: event.currentTarget.elements.query.value });
  };

  return (
    <div>
      <form onSubmit={formSubmit}>
        <input
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />

        <button type="submit">
          <span>Search</span>
        </button>
      </form>

      <div>{movies && <MoviesList movies={movies} location={location} />}</div>
    </div>
  );
};

export default MoviesPage;
