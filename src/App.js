import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import useFetch from './hooks/useFetch';
import NavBar from './components/NavBar';
import AppRouter from './components/AppRouter';


const App = () => {
  const [query, setQuery] = useState('sports');
  const [search, setSearch] = useState('');
  const { loading, error, data } = useFetch(
    // eslint-disable-next-line no-undef
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&q=${query}&key=${process.env.REACT_APP_API_KEY}`,
    {},
    search
  );

  const updateQuery = (newQuery) => {
    setQuery(newQuery);
  };

  const getSearch = (newSearch) => {
    setSearch(newSearch);
  };

  return (
    <BrowserRouter>
      <div>
        <NavBar query={query} updateQuery={updateQuery} getSearch={getSearch} />
        <AppRouter loading={loading} error={error} videoData={data} />
      </div>
    </BrowserRouter>
  );
};

export default App;
