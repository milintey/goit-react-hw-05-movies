import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { searhMovies } from 'components/helpers/getMovies';

export const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get('name') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (query === '') {
      return;
    }
    searhMovies(query).then(res => setMovies(res));
  }, [query]);

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  const formSubmit = event => {
    event.preventDefault();
    setQuery(event.currentTarget.elements.query.value);
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
          value={productName}
          onChange={e => updateQueryString(e.target.value)}
        />

        <button type="submit">
          <span>Search</span>
        </button>
      </form>

      {movies && (
        <ul>
          {movies.map(movie => {
            return (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt="Film"
                    width="200px"
                  />
                  <h2>{movie.original_title}</h2>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
