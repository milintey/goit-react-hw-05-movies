import { Route, Routes, NavLink } from 'react-router-dom';
import { GlobalStyle } from '../components/GlobalStyle/GlobalStyle';
import { HomePage } from './page/HomePage';
import { MoviesPage } from './page/MoviesPage';
import { MovieDetailsPage } from './page/MovieDetailsPage';

export const App = () => {
  return (
    <div>
      <div>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="movies">Movies</NavLink>
        </nav>
      </div>

      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        </Routes>
      </div>
      <GlobalStyle />
    </div>
  );
};
