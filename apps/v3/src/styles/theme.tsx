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
        'Pretendard',
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
        wordBreak: 'keep-all',
      },
      h4: {
        fontSize: isMobile ? 20 : 24,
        fontWeight: FontWeightValues.BOLD,
        lineHeight: 1.3,
        wordBreak: 'keep-all',
      },
      body1: {
        fontSize: 16,
        fontWeight: FontWeightValues.MEDIUM,
        wordBreak: 'keep-all',
      },
      body2: {
        fontSize: 15,
        fontWeight: FontWeightValues.MEDIUM,
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

export default getTheme;
