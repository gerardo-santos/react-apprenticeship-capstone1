import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const SearchForm = () => {
  const { query, updateQuery, getSearch } = useContext(GlobalContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
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
      <Button type="submit" variant="danger">
        Search
      </Button>
    </Form>
  );
};

export default SearchForm;
