import { Link } from 'react-router-dom';
import { MovieListUl, MoviesTitle } from './MoviesList.styled';

export const MoviesList = ({ movies, location }) => {
  return (
    <MovieListUl>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt="Film"
                width="200px"
              />
              <MoviesTitle>{movie.original_title}</MoviesTitle>
            </Link>
          </li>
        );
      })}
    </MovieListUl>
  );
};
