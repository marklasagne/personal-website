import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavbarElements';


const Navbar = () => {
 
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
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
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;