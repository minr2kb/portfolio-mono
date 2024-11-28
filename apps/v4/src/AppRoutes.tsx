import { Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';
import { Provider as ChakraProvider } from '@/components/ui/provider';
import '@fontsource/pretendard/index.css';

export const AppRoutes = () => {
  return (
    <ChakraProvider>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </ChakraProvider>
  );
};

export default AppRoutes;
