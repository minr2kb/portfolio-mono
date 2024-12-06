import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorPage from '@/pages/ErrorPage.tsx';
import LoadingPage from '@/pages/LoadingPage.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary fallbackRender={({ error }) => <ErrorPage error={error} />}>
      <Suspense fallback={<LoadingPage />}>
        <App />
      </Suspense>
    </ErrorBoundary>
  </StrictMode>,
);
