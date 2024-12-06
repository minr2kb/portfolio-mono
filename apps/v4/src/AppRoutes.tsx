import { Route, Routes } from 'react-router-dom';
import MainPage from '@/pages/MainPage';
import { Provider as ChakraProvider } from '@/components/ui/provider';
import Fonts from '@/theme/Fonts';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const AppRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <ChakraProvider forcedTheme="light">
      <Fonts />
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/:categoryId" element={<MainPage />} />
      </Routes>
    </ChakraProvider>
  );
};

export default AppRoutes;
