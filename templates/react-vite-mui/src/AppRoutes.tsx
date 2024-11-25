import { Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { getTheme } from '@/styles/theme';
import useDeviceQuery from '@/hooks/useDeviceQuery';

export const AppRoutes = () => {
  const { isMobile } = useDeviceQuery();
  const theme = getTheme(isMobile);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
};

export default AppRoutes;
