import { createTheme } from '@mui/material/styles';
import { FontWeightValues, ThemeModeType, ThemeMode } from '@/types/styles';

export const MOBILE_WIDTH = 700;
export const TABLET_WIDTH = 960;

export const mobileMaxWidthMediaQuery = `@media (max-width:${MOBILE_WIDTH}px)`;
export const tabletMaxWidthMediaQuery = `@media (max-width:${TABLET_WIDTH}px)`;

// A custom theme for this app
export const getTheme = (themeMode: ThemeModeType = ThemeMode.LIGHT) => {
  return createTheme({
    colorSchemes: {
      dark: themeMode === ThemeMode.DARK,
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: MOBILE_WIDTH,
        md: TABLET_WIDTH,
        lg: 1200,
        xl: 1600,
      },
    },
    palette: {
      primary: {
        main: '#334155',
        light: '#E7EFF6',
        contrastText: '#F9F9F9',
      },
      secondary: {
        main: '#44698C',
        light: '#CBD5E1',
      },
      text: {
        primary: '#334155',
        secondary: '#44698C',
        disabled: '#D7DEE5',
      },
    },
    typography: {
      fontFamily: [
        'Pretendard-Regular',
        'Noto Sans KR',
        'AppleSDGothicNeo',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),

      h1: {
        fontSize: 32,
        fontWeight: FontWeightValues.BOLD,
        letterSpacing: '0.02em',
        lineHeight: 1.3,
      },
      h2: {
        fontSize: 30,
        fontWeight: FontWeightValues.BOLD,
        letterSpacing: '0.02em',
        lineHeight: 1.5,
        wordBreak: 'keep-all',
      },
      h3: {
        fontSize: 24,
        fontWeight: FontWeightValues.BOLD,
        lineHeight: 1.5,
        letterSpacing: '0.015em',
        wordBreak: 'keep-all',
      },
      h4: {
        fontSize: 18,
        fontWeight: FontWeightValues.BOLD,
        lineHeight: 1.3,
        letterSpacing: '0.015em',
        wordBreak: 'keep-all',
      },
      body1: {
        fontSize: 16,
        fontWeight: FontWeightValues.REGULAR,
        wordBreak: 'keep-all',
      },
      body2: {
        fontSize: 15,
        fontWeight: FontWeightValues.REGULAR,
      },
    },

    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '5px',
            boxShadow: 'none',
            textTransform: 'none',
            '&:hover': {
              boxShadow: 'none',
            },
            fontWeight: FontWeightValues.SEMI_BOLD,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            boxShadow: 'none',
            border: 'solid 1px #E5E8EB',
            borderRadius: '5px',
          },
        },
      },
    },
  });
};
