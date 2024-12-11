import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorPage from '@/pages/ErrorPage.tsx';
import LoadingPage from '@/pages/LoadingPage.tsx';
import { logger } from '@packages/shared';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary
      fallbackRender={({ error }) => <ErrorPage error={error} />}
      onError={(error, info) => {
        logger.error('ErrorBoundary caught an error', error, {
          componentStack: info.componentStack,
        });
      }}
    >
      <Suspense fallback={<LoadingPage />}>
        <App />
      </Suspense>
    </ErrorBoundary>
  </StrictMode>,
);
