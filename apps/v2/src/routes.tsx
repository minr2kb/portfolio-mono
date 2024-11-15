import { RouteObject } from 'react-router-dom';
import Home from '@/pages/Home';

export const routes: RouteObject[] = [
  {
    index: true,
    element: <Home />,
  },
];
