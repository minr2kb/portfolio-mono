import { useMediaQuery } from '@mui/material';
import { mobileMaxWidthMediaQuery, tabletMaxWidthMediaQuery } from '@/styles/theme';

const useDeviceQuery = () => {
  const isMobile = useMediaQuery(mobileMaxWidthMediaQuery);
  const isTablet = useMediaQuery(tabletMaxWidthMediaQuery);
  return {
    isMobile,
    isTablet,
  };
};

export default useDeviceQuery;
