import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import VideoDetails from '../pages/VideoDetails';
import PropTypes from 'prop-types';

const AppRouter = ({ loading, error, videoData }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home loading={loading} error={error} videoData={videoData} />}
      />
      <Route path="video-details/:id" element={<VideoDetails />} />
    </Routes>
  );
};

AppRouter.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.object,
  videoData: PropTypes.object,
};

export default AppRouter;
