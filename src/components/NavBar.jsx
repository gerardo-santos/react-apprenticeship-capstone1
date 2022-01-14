import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import SearchForm from './SearchForm';

const NavBar = () => {
  const { darkMode, toggleTheme } = useContext(GlobalContext);
  const handleToggle = () => {
    toggleTheme();
  };

  return (
    <Navbar collapseOnSelect expand="false" bg="success" variant="dark">
      <SearchForm />
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className="m-2" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="d-flex m-2">
          <Nav.Link>Log In</Nav.Link>
          <Nav.Link onClick={handleToggle}>
            Activate {darkMode ? 'Light' : 'Dark'} Mode
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
