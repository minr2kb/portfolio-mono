import { CssBaseline, ThemeProvider } from '@mui/material';
import { logger } from '@packages/shared';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import useDeviceQuery from '@/hooks/useDeviceQuery';
import Home from '@/pages/Home';
import '@/styles/index.scss';
import { getTheme } from '@/styles/theme';

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
