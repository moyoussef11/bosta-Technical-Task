import { BrowserRouter } from 'react-router-dom';
import RoutesConfig from './routes/routes';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />

      <RoutesConfig />
    </BrowserRouter>
  );
}

export default App;
