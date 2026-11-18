import { useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import { Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';
import styles from '@/styles/agent.css?inline';

export const AppRoutes = () => {
  const [shadowRoot, setShadowRoot] = useState<ShadowRoot | null>(null);
  const attach = useCallback((element: HTMLDivElement | null) => {
    if (element)
      setShadowRoot(
        element.shadowRoot ?? element.attachShadow({ mode: 'open' }),
      );
  }, []);

  return (
    <div ref={attach}>
      {shadowRoot &&
        createPortal(
          <>
            <style>{styles}</style>
            <Routes>
              <Route index element={<Home />} />
            </Routes>
          </>,
          shadowRoot,
        )}
    </div>
  );
};

export default AppRoutes;
