import { useEffect } from 'react';

const useBrowserThemeColor = (color: string) => {
  useEffect(() => {
    let themeColorMeta = document.querySelector('meta[name="theme-color"]');

    if (!themeColorMeta) {
      themeColorMeta = document.createElement('meta');
      themeColorMeta.setAttribute('name', 'theme-color');
      document.head.appendChild(themeColorMeta);
    }

    themeColorMeta.setAttribute('content', color);
  }, [color]);
};

export default useBrowserThemeColor;
