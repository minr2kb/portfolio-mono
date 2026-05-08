import { logger } from '@packages/utils';
import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Provider as ChakraProvider } from '@/components/ui/provider';
import MainPage from '@/pages/MainPage';
import Fonts from '@/theme/Fonts';

export const AppRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  useEffect(() => {
    logger.info('Remote app initialized', {
      version: 'v4',
      environment: import.meta.env.MODE,
      timestamp: new Date().toISOString(),
    });
  }, []);

  return (
    <ChakraProvider forcedTheme='light'>
      <Fonts />
      <Routes>
        <Route index element={<MainPage />} />
        <Route path='/:categoryId' element={<MainPage />} />
      </Routes>
    </ChakraProvider>
  );
};

export default AppRoutes;
