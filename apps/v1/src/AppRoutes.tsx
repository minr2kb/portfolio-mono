import { Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Home from '@/pages/Home';
import useDeviceQuery from '@/hooks/useDeviceQuery';
import { getTheme } from '@/styles/theme';
import { logger } from '@packages/shared';
import { useEffect } from 'react';

export const AppRoutes = () => {
  const { isMobile } = useDeviceQuery();
  const theme = getTheme(isMobile);

  useEffect(() => {
    logger.info('Remote app initialized', {
      version: 'v1',
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
