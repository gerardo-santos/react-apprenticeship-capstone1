import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import useFetch from './hooks/useFetch';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import VideoDetails from './pages/VideoDetails';

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
    <BrowserRouter>
      <div>
        <NavBar query={query} updateQuery={updateQuery} getSearch={getSearch} />
        <Routes>
          <Route
            path="/"
            element={
              <Home loading={loading} error={error} videoData={videoData} />
            }
          />
          <Route
            path="video-details/:id"
            element={
              <VideoDetails
                loading={loading}
                error={error}
                videoData={videoData}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
