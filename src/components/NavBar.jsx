import { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import SearchForm from './SearchForm';

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  const { darkMode, isLoggedIn, dispatch } = useContext(GlobalContext);
  const navigate = useNavigate();

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
    toggleNavBar();
  };
  const handleSignOut = () => {
    dispatch({ type: 'SIGN_OUT' });
    navigate('/');
    toggleNavBar();
  };

  const toggleNavBar = () => {
    setExpanded(expanded ? false : 'expanded');
  };
  return (
    <Navbar expanded={expanded} expand={false} bg="success" variant="dark">
      <SearchForm />
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className="m-2"
        onClick={toggleNavBar}
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="d-flex m-2">
          <Nav.Link onClick={toggleTheme}>
            Activate {darkMode ? 'Light' : 'Dark'} Mode
          </Nav.Link>
          <Nav.Link as={Link} to="/" onClick={toggleNavBar}>
            Home
          </Nav.Link>
          {isLoggedIn ? (
            <>
              <Nav.Link as={Link} to="favorites" onClick={toggleNavBar}>
                Favorites
              </Nav.Link>
              <Nav.Link onClick={handleSignOut}>Sign out</Nav.Link>
            </>
          ) : (
            <Nav.Link as={Link} to="log-in" onClick={toggleNavBar}>
              Log in
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
