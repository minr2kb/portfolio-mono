import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { getTheme } from '@/styles/theme';
import { ThemeMode } from './types/styles';
import { routes } from './routes';

function App() {
  const router = createBrowserRouter(routes);
  const themeMode = ThemeMode.LIGHT;
  const theme = getTheme(themeMode);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </ThemeProvider>
  );
}

export default App;
