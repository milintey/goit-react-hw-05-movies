import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieListUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const MoviesTitle = styled.h2`
  width: 200px;
`;

export const LinkMovie = styled(Link)`
  text-decoration: none;
  color: ${p => p.theme.colors.black};
  font-size: ${p => p.theme.fontSizes.m};
`;
