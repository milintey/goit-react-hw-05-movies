import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: ${p => p.theme.colors.white};
  font-weight: 500;

  :not(:last-child) {
    margin-right: 20px;
  }

  &.active {
    color: ${p => p.theme.colors.black};
    background-color: ${p => p.theme.colors.white};
  }

  :hover {
    color: ${p => p.theme.colors.black};
  }
`;

export const SiteNav = styled.nav`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-bottom: 30px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const AppDiv = styled.div`
  width: 1064px;
  margin-right: auto;
  margin-left: auto;
`;
