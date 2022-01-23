import React from 'react'
import { NavLink as Link } from 'react-router-dom';
//  https://styled-components.com/
import styled from 'styled-components';

const Navbar = () => {
  return (
    <>
      <Nav>
      <NavLink to="/">
          About
        </NavLink>
      <NavLink to="/projects">
        Projects
      </NavLink>
      <ExternalLink target="_blank" href="https://medium.com/@marklasagne">
        Blog
      </ExternalLink>
      </Nav>
    </>
  );
};

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin-bottom: 5rem;
  z-index: 1;
`;
  
const NavLink = styled(Link)`
  color: #808080;
  text-align: center;
  text-decoration: none;
  font-size: 1.5rem;
  padding: 10px;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
    border-bottom: 2px solid #000000;
  }
`;

const ExternalLink = styled.a`
  color: #808080;
  text-align: center;
  text-decoration: none;
  font-size: 1.5rem;
  padding: 10px;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
    border-bottom: 2px solid #000000;
  }
`;

export default Navbar;