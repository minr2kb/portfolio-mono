import { useEffect } from 'react';

const useBrowserThemeColor = (color: string) => {
  useEffect(() => {
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', color);
  }, []);
};

export default useBrowserThemeColor;
