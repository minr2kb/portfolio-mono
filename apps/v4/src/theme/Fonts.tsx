import { css, Global } from '@emotion/react';

const fontFaces = css`
  /* Pretendard */

  /* pretendard-latin-100-normal */
  @font-face {
    font-family: 'Pretendard';
    font-style: normal;
    font-display: auto;
    font-weight: 100;
    src: url(https://cdn.jsdelivr.net/fontsource/fonts/pretendard@latest/latin-100-normal.woff2) format('woff2');
  }

  /* pretendard-latin-200-normal */
  @font-face {
    font-family: 'Pretendard';
    font-style: normal;
    font-display: auto;
    font-weight: 200;
    src: url(https://cdn.jsdelivr.net/fontsource/fonts/pretendard@latest/latin-200-normal.woff2) format('woff2');
  }

  /* pretendard-latin-300-normal */
  @font-face {
    font-family: 'Pretendard';
    font-style: normal;
    font-display: auto;
    font-weight: 300;
    src: url(https://cdn.jsdelivr.net/fontsource/fonts/pretendard@latest/latin-300-normal.woff2) format('woff2');
  }

  /* pretendard-latin-400-normal */
  @font-face {
    font-family: 'Pretendard';
    font-style: normal;
    font-display: auto;
    font-weight: 400;
    src: url(https://cdn.jsdelivr.net/fontsource/fonts/pretendard@latest/latin-400-normal.woff2) format('woff2');
  }

  /* pretendard-latin-500-normal */
  @font-face {
    font-family: 'Pretendard';
    font-style: normal;
    font-display: auto;
    font-weight: 500;
    src: url(https://cdn.jsdelivr.net/fontsource/fonts/pretendard@latest/latin-500-normal.woff2) format('woff2');
  }

  /* pretendard-latin-600-normal */
  @font-face {
    font-family: 'Pretendard';
    font-style: normal;
    font-display: auto;
    font-weight: 600;
    src: url(https://cdn.jsdelivr.net/fontsource/fonts/pretendard@latest/latin-600-normal.woff2) format('woff2');
  }

  /* pretendard-latin-700-normal */
  @font-face {
    font-family: 'Pretendard';
    font-style: normal;
    font-display: auto;
    font-weight: 700;
    src: url(https://cdn.jsdelivr.net/fontsource/fonts/pretendard@latest/latin-700-normal.woff2) format('woff2');
  }

  /* pretendard-latin-800-normal */
  @font-face {
    font-family: 'Pretendard';
    font-style: normal;
    font-display: auto;
    font-weight: 800;
    src: url(https://cdn.jsdelivr.net/fontsource/fonts/pretendard@latest/latin-800-normal.woff2) format('woff2');
  }

  /* pretendard-latin-900-normal */
  @font-face {
    font-family: 'Pretendard';
    font-style: normal;
    font-display: auto;
    font-weight: 900;
    src: url(https://cdn.jsdelivr.net/fontsource/fonts/pretendard@latest/latin-900-normal.woff2) format('woff2');
  }
`;

const Fonts = () => (
  <Global
    styles={`
      ${fontFaces.styles}
    `}
  />
);

export default Fonts;
