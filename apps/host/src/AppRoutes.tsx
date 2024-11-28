import React, { useState, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoadingPage from '@/pages/LoadingPage';
import ErrorPage from '@/pages/ErrorPage';

const LazyRouteLoader = (remoteImport: () => Promise<{ default: React.FC }>) => {
  const [Component, setComponent] = useState<React.FC | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    remoteImport()
      .then((module) => {
        if (isMounted) setComponent(() => module.default);
      })
      .catch((err) => {
        if (isMounted) setError(err);
      });

    return () => {
      isMounted = false;
    };
  }, [remoteImport]);

  if (error) throw error;

  if (!Component) {
    return <LoadingPage />;
  }

  return <Component />;
};

export const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Navigate to="v3" replace />} />
      <Route path="/v1/*" element={LazyRouteLoader(() => import('v1/AppRoutes'))} />
      <Route path="/v2/*" element={LazyRouteLoader(() => import('v2/AppRoutes'))} />
      <Route path="/v3/*" element={LazyRouteLoader(() => import('v3/AppRoutes'))} />
      {/* <Route path="/v4/*" element={LazyRouteLoader(() => import('v4/AppRoutes'))} /> */}
      <Route path="*" element={<ErrorPage error={new Error('404 | Page Not Found')} />} />
    </Routes>
  );
};

export default AppRoutes;
