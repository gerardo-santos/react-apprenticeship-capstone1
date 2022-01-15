import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import VideoDetails from '../pages/VideoDetails';
import LogIn from '../pages/LogIn';
import Favorites from '../pages/private/Favorites';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="video-details/:id" element={<VideoDetails />} />
      <Route path="log-in" element={<LogIn />} />
      <Route path="favorites" element={<Favorites />} />
    </Routes>
  );
};

export default AppRouter;
