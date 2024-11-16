import { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routes';

function App() {
  const router = createBrowserRouter(routes);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </Suspense>
  );
}

export default App;
