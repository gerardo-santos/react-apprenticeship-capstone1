import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import SearchForm from './SearchForm';

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="false" bg="success" variant="dark">
      <SearchForm />
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className="m-2" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="d-flex m-2">
          <Nav.Link>Log In</Nav.Link>
          <Nav.Link className="d-flex">
            <span className="me-2">Dark Mode</span>
            <Form.Switch />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
