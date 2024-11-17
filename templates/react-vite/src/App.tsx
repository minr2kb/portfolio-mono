import { BrowserRouter, Routes } from 'react-router-dom';
import { AppRoutes } from './AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <AppRoutes />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
