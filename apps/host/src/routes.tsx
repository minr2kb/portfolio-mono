import { RouteObject } from 'react-router-dom';
import { routes as v1Routes } from 'v1/routes';
import { routes as v2Routes } from 'v2/routes';
import { routes as v3Routes } from 'v3/routes';

export const routes: RouteObject[] = [
  {
    path: '/',
    children: [
      {
        index: true,
        element: <div>Home</div>,
      },
      {
        path: 'v1',
        children: v1Routes,
      },
      {
        path: 'v2',
        children: v2Routes,
      },
      {
        path: 'v3',
        children: v3Routes,
      },
    ],
  },
];
