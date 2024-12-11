import { Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { getTheme } from '@/styles/theme';
import useDeviceQuery from '@/hooks/useDeviceQuery';
import { useEffect } from 'react';
import { logger } from '@packages/shared';

export const AppRoutes = () => {
  const { isMobile } = useDeviceQuery();
  const theme = getTheme(isMobile);

  useEffect(() => {
    logger.info('Remote app initialized', {
      version: 'v2',
      environment: import.meta.env.MODE,
      timestamp: new Date().toISOString(),
    });
  }, []);

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
