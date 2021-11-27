import React from 'react'
import {
  Nav,
  NavLink,
  ExternalLink
} from './NavbarStyles';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink to="/projects">
          Projects
        </NavLink>
        <NavLink to="/about">
          About
        </NavLink>
        <ExternalLink target="_blank" href="https://medium.com/@marklasagne">
          Blog
        </ExternalLink>
      </Nav>
    </>
  );
};

export default Navbar;