import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const SearchForm = () => {
  return (
    <Form className="d-flex m-2" style={{ maxWidth: '70%' }}>
      <FormControl
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
      />
      <Button variant="danger">Search</Button>
    </Form>
  );
};

export default SearchForm;
