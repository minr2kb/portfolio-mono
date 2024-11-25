import { createTheme } from '@mui/material/styles';
import { FontWeightValues } from '@/types/styles';

export const MOBILE_WIDTH = 700;
export const TABLET_WIDTH = 960;

export const mobileMaxWidthMediaQuery = `@media (max-width:${MOBILE_WIDTH}px)`;
export const tabletMaxWidthMediaQuery = `@media (max-width:${TABLET_WIDTH}px)`;

// A custom theme for this app
export const getTheme = (isMobile: boolean = false) => {
  return createTheme({
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
        main: '#5CC792',
        light: '#c084fc',
        contrastText: '#FFF',
      },
      secondary: {
        main: '#666',
      },
      text: {
        primary: '#333',
        secondary: '#666',
        disabled: '#CCC',
      },
    },
    typography: {
      fontFamily: [
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
        fontSize: isMobile ? 32 : 50,
        fontWeight: FontWeightValues.BOLD,
        letterSpacing: '0.02em',
        lineHeight: 1.3,
      },
      h2: {
        fontSize: isMobile ? 30 : 44,
        fontWeight: FontWeightValues.BOLD,
        letterSpacing: '0.02em',
        lineHeight: 1.5,
        wordBreak: 'keep-all',
      },
      h3: {
        fontSize: isMobile ? 24 : 30,
        fontWeight: FontWeightValues.BOLD,
        lineHeight: 1.5,
        letterSpacing: '0.015em',
        wordBreak: 'keep-all',
      },
      h4: {
        fontSize: isMobile ? 18 : 20,
        fontWeight: FontWeightValues.BOLD,
        lineHeight: 1.3,
        letterSpacing: '0.015em',
        wordBreak: 'keep-all',
      },
      body1: {
        fontSize: isMobile ? 16 : 18,
        fontWeight: FontWeightValues.REGULAR,
        wordBreak: 'keep-all',
      },
      body2: {
        fontSize: isMobile ? 15 : 17,
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
