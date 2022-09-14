import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieDetailsDiv = styled.div`
  display: flex;
  gap: 16px;
`;

export const LinkMoviesDetails = styled(NavLink)`
  text-decoration: none;
  color: ${p => p.theme.colors.black};
  font-weight: 500;

  :not(:last-child) {
    margin-right: 20px;
  }

  &.active {
    color: ${p => p.theme.colors.accent};
  }

  :hover {
    color: ${p => p.theme.colors.accent};
  }
`;

export const LinkDiv = styled.div`
  margin-bottom: 20px;
`;
