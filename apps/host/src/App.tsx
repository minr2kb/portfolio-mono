import { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routes';

function App() {
  const router = createBrowserRouter(routes);
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/v1">V1</a>
          </li>
          <li>
            <a href="/v2">V2</a>
          </li>
          <li>
            <a href="/v3">V3</a>
          </li>
        </ul>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} future={{ v7_startTransition: true }} />
      </Suspense>
    </div>
  );
}

export default App;
