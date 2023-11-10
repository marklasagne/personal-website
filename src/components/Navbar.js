// Navbar.js
import React from 'react';
import styled from 'styled-components';
import { MainFont } from '../components/PageComponents.js';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = ({ isMobile }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
    <MainFont>
      <Nav isMobile={isMobile}>
        <NavLink onClick={() => navigate('/')} className={!location.pathname.includes('/projects') ? 'active' : ''} to="/">
          About
        </NavLink>
        <NavLink onClick={() => navigate('/projects', { state: { prevUrl: location.pathname } })} className={location.pathname.includes('/projects') ? 'active' : ''} to="/projects">
          Projects
        </NavLink>
        <NavLink target="_blank" href="https://medium.com/@marklasagne">
          Blog
        </NavLink>
      </Nav>
    </MainFont>
    </>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: left;
  background: ${props => (props.isMobile ? '#ffffff' : 'none')};;
  padding: 1rem;
  position: fixed;
  top: 0;
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