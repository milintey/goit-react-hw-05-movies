import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 500;

  :not(:last-child) {
    margin-right: 20px;
  }

  &.active {
    color: ${p => p.theme.colors.primary};
  }
`;
