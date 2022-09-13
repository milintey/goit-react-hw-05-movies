import { Route, Routes, NavLink } from 'react-router-dom';
import { GlobalStyle } from '../components/GlobalStyle/GlobalStyle';
import { HomePage } from './page/HomePage';
import { MoviesPage } from './page/MoviesPage';
import { MovieDetailsPage } from './page/MovieDetailsPage';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { Link } from './App.styled';

export const App = () => {
  return (
    <div>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="movies">Movies</Link>
        </nav>
      </div>

      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </div>
      <GlobalStyle />
    </div>
  );
};
