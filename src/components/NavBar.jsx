import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import SearchForm from './SearchForm';
import PropTypes from 'prop-types';

const NavBar = ({ query, updateQuery, getSearch }) => {
  return (
    <Navbar collapseOnSelect expand="false" bg="success" variant="dark">
      <SearchForm
        query={query}
        updateQuery={updateQuery}
        getSearch={getSearch}
      />
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

NavBar.propTypes = {
  query: PropTypes.string,
  updateQuery: PropTypes.func,
  getSearch: PropTypes.func,
};

export default NavBar;
