import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import VideoDetails from '../pages/VideoDetails';
import LogIn from '../pages/LogIn';
import Favorites from '../pages/private/Favorites';
import FavoriteDetails from '../pages/private/FavoriteDetails';
import NotFound from '../pages/NotFound';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="video-details/:id" element={<VideoDetails />} />
      <Route path="log-in" element={<LogIn />} />
      <Route path="favorites" element={<Favorites />} />
      <Route path="favorite-details/:id" element={<FavoriteDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
