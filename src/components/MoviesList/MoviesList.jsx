import { Link } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
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
  );
};
