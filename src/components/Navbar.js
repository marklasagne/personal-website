// Personal website and portfolio //
// 2022                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

import React from 'react'
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { MainFont } from './PageComponents.js';


const Navbar = () => {
  return (
    <MainFont>
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
    </MainFont>
  );
}


const Nav = styled.nav`
  display: flex;
  justify-content: left;
  padding: 1rem;
  margin-bottom: 5rem;
  position: fixed;
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