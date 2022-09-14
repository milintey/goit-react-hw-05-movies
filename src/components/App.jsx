import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from '../components/GlobalStyle/GlobalStyle';

import { AppDiv } from './App.styled';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { SiteNav, Link } from './App.styled';

const HomePage = lazy(() => import('../components/page/HomePage'));
const MoviesPage = lazy(() => import('../components/page/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('../components/page/MovieDetailsPage')
);
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <div>
        <SiteNav>
          <Link to="/">Home</Link>
          <Link to="movies">Movies</Link>
        </SiteNav>
      </div>

      <AppDiv>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </AppDiv>
      <GlobalStyle />
    </div>
  );
};
