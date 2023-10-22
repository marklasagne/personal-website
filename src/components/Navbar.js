// Navbar.js
import React from 'react';
import styled from 'styled-components';

const Navbar = ({ isMobile, onNavLinkClick, isScrolledX, onScrollButtonClick }) => {
  const handleNavLinkClick = () => {
    onNavLinkClick(!isScrolledX);
    onScrollButtonClick(); // Invoke the provided callback for scroll button click
  };

  return (
    <Nav isMobile={isMobile}>
      <NavLink onClick={handleNavLinkClick} className={!isScrolledX ? 'active' : ''} to="/">
        About
      </NavLink>
      <NavLink onClick={handleNavLinkClick} className={isScrolledX ? 'active' : ''} to="/projects">
        Projects
      </NavLink>
      <NavLink target="_blank" href="https://medium.com/@marklasagne">
        Blog
      </NavLink>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: left;
  background: #fff;
  padding: 1rem;
  position: fixed;
  z-index: 1;
  width: ${props => (props.isMobile ? '100%' : 'auto')};
`;

const NavLink = styled.a`
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