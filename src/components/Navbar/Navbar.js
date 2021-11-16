import {
  Nav,
  NavLink,
  NavMenu,
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
        <NavLink to="/blog">
          Blog
        </NavLink>
      </Nav>
    </>
  );
};

export default Navbar;