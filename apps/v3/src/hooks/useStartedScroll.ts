import { useScrollTrigger } from '@mui/material';
import { useEffect, useState } from 'react';

const useStartedScroll = (containerRef: React.MutableRefObject<HTMLElement>) => {
  const [scrollTarget, setScrollTarget] = useState<HTMLElement | undefined>(undefined);
  const trigger = useScrollTrigger({
    target: scrollTarget,
  });

  useEffect(() => {
    if (containerRef.current) setScrollTarget(containerRef.current);
  }, [containerRef.current]);

  return { startedScroll: trigger };
};

export default useStartedScroll;
