import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import SearchForm from './SearchForm';

const NavBar = () => {
  const { darkMode, isLoggedIn, dispatch } = useContext(GlobalContext);
  const navigate = useNavigate();
  const handleToggle = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };
  const handleSignOut = () => {
    dispatch({ type: 'SIGN_OUT' });
    navigate('/');
  };
  return (
    <Navbar collapseOnSelect expand="false" bg="success" variant="dark">
      <SearchForm />
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className="m-2" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="d-flex m-2">
          <Nav.Link onClick={handleToggle}>
            Activate {darkMode ? 'Light' : 'Dark'} Mode
          </Nav.Link>
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          {isLoggedIn ? (
            <>
              <Nav.Link as={Link} to="favorites">
                Favorites
              </Nav.Link>
              <Nav.Link onClick={handleSignOut}>Sign out</Nav.Link>
            </>
          ) : (
            <Nav.Link as={Link} to="log-in">
              Log in
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
