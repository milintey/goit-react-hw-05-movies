import { useState, useEffect, Suspense } from 'react';
import { getMovie } from 'components/helpers/getMovies';
import { Loader } from 'components/Loader/Loader';
import { Outlet, useParams, useLocation, Link } from 'react-router-dom';
import {
  MovieDetailsDiv,
  LinkMoviesDetails,
  LinkDiv,
} from './MovieDetailsPage.styled';

export const MovieDetailsPage = () => {
  const location = useLocation();
  console.log(location);
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();

  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    getMovie(movieId).then(res => setMovie(res));
  }, [movieId]);

  if (!movie) {
    return;
  }

  return (
    <div>
      <Link to={backLinkHref}>Back to products</Link>

      <h1>{movie.original_title}</h1>
      <p>{movie.release_date}</p>
      <MovieDetailsDiv>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt="Film"
            width="300px"
          />
        </div>

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
          <h2>Overview</h2>
          <p>{movie.overview}</p>
        </div>
      </MovieDetailsDiv>

      <LinkDiv>
        <LinkMoviesDetails to="cast" state={{ from: location.state.from }}>
          Cast
        </LinkMoviesDetails>
        <LinkMoviesDetails to="reviews" state={{ from: location.state.from }}>
          Reviews
        </LinkMoviesDetails>
      </LinkDiv>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
