import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import VideoDetails from '../pages/VideoDetails';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="video-details/:id" element={<VideoDetails />} />
    </Routes>
  );
};

export default AppRouter;
