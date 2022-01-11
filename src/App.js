import { useState } from 'react';
import useFetch from './hooks/useFetch';
import NavBar from './components/NavBar';
import Home from './pages/Home';

const App = () => {
  const [query, setQuery] = useState('sports');
  const [search, setSearch] = useState('');
  const { loading, error, videoData } = useFetch(
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
    <div>
      <NavBar query={query} updateQuery={updateQuery} getSearch={getSearch} />
      <Home loading={loading} error={error} videoData={videoData} />
    </div>
  );
};

export default App;
