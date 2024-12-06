import { useBreakpoint } from '@chakra-ui/react';

import { breakpoints } from '@/theme/breakpoints';

const useBreakPoint = (): { isMobile: boolean; breakpoint: keyof typeof breakpoints } => {
  const breakpoint = useBreakpoint({
    breakpoints: Object.keys(breakpoints),
  });

  const isMobile = !['md', 'lg'].includes(breakpoint);

  if (breakpoint === 'base') {
    return { isMobile, breakpoint: 'xs' };
  }

  return { isMobile, breakpoint: breakpoint as keyof typeof breakpoints };
};

export default useBreakPoint;
