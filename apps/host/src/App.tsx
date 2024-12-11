import React, { Suspense } from 'react';
import { Navigate, Route, Routes, BrowserRouter } from 'react-router-dom';
import LoadingPage from '@/pages/LoadingPage';
import ErrorPage from '@/pages/ErrorPage';
import { logger } from '@packages/shared';
const LazyRouteLoader = (remoteImport: () => Promise<{ default: React.FC }>) => {
  const LazyComponent = React.lazy(() =>
    remoteImport().catch((err) => {
      logger.error('Remote app loading failed', err, {
        remoteUrl: remoteImport.toString(),
      });
      return {
        default: () => <ErrorPage error={err} />,
      };
    }),
  );

  return (
    <Suspense fallback={<LoadingPage />}>
      <LazyComponent />
    </Suspense>
  );
};

function App() {
  const v1Routes = LazyRouteLoader(() => import('v1/AppRoutes'));
  const v2Routes = LazyRouteLoader(() => import('v2/AppRoutes'));
  const v3Routes = LazyRouteLoader(() => import('v3/AppRoutes'));
  const v4Routes = LazyRouteLoader(() => import('v4/AppRoutes'));
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route index element={<Navigate to="v4" replace />} />
        <Route path="/v1/*" element={v1Routes} />
        <Route path="/v2/*" element={v2Routes} />
        <Route path="/v3/*" element={v3Routes} />
        <Route path="/v4/*" element={v4Routes} />
        <Route path="*" element={<ErrorPage error={new Error('404 | Page Not Found')} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
