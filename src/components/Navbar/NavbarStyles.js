import { NavLink as Link } from 'react-router-dom';
//  https://styled-components.com/
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  z-index: 1;
`;
  
export const NavLink = styled(Link)`
  color: #808080;
  text-align: center;
  text-decoration: none;
  padding: 10px;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
    border-bottom: 2px solid #000000;
  }
`;
  

  

