import { Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Home from '@/pages/Home';
import useDeviceQuery from '@/hooks/useDeviceQuery';
import { getTheme } from '@/styles/theme';

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
