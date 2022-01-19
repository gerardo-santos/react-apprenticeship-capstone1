import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import PropTypes from 'prop-types';

const LoggedInOptions = ({ isLoggedIn, handleSignOut, toggleNavBar }) => {
  return (
    <>
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
    </>
  );
};

LoggedInOptions.propTypes = {
  isLoggedIn: PropTypes.bool,
  handleSignOut: PropTypes.func,
  toggleNavBar: PropTypes.func,
};

export default LoggedInOptions;
