import { BrowserRouter, Routes } from 'react-router-dom';
import { AppRoutes } from './AppRoutes';
import { ThemeProvider } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { getTheme } from '@/styles/theme';
import { ThemeMode } from './types/styles';

function App() {
  const themeMode = ThemeMode.LIGHT;
  const theme = getTheme(themeMode);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <AppRoutes />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
