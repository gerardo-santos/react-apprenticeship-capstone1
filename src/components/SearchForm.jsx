import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const SearchForm = ({ query, updateQuery, getSearch }) => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleClick = () => {
    getSearch(query);
    navigate('/');
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="d-flex m-2"
      style={{ maxWidth: '70%' }}
    >
      <FormControl
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        value={query}
        onChange={(e) => updateQuery(e.target.value)}
      />
      <Button variant="danger" onClick={handleClick}>
        Search
      </Button>
    </Form>
  );
};

SearchForm.propTypes = {
  query: PropTypes.string,
  updateQuery: PropTypes.func,
  getSearch: PropTypes.func,
};

export default SearchForm;
