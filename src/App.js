import { BrowserRouter } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalContext';
import NavBar from './components/NavBar';
import AppRouter from './components/AppRouter';

const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <div>
          <NavBar />
          <AppRouter />
        </div>
      </BrowserRouter>
    </GlobalProvider>
  );
};

export default App;
