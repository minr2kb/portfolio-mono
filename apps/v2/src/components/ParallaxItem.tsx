import { Box } from '@mui/material';
import { useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
import useDeviceQuery from '@/hooks/useDeviceQuery';

export interface ParallaxItemProps {
  speed: number;
  position: {
    top?: string | number;
    bottom?: string | number;
    left?: string | number;
    right?: string | number;
  };
  rotate: [number, number];
  fontSize: number;
  blur: number;
  opacity?: number;
  icon: string;
}

function ParallaxItem(props: ParallaxItemProps) {
  const { speed, position, rotate, fontSize, blur, opacity = 1, icon } = props;
  const { isMobile } = useDeviceQuery();
  const [isOpacityEnabled, setIsOpacityEnabled] = useState(false);

  return (
    <Parallax
      speed={speed}
      style={{
        position: 'absolute',
        ...position,
      }}
      rotate={rotate}
    >
      <Box
        sx={{
          fontSize: isMobile ? fontSize * 0.7 : fontSize,
          filter: `blur(${blur}px)`,
          cursor: 'pointer',
          opacity: isOpacityEnabled ? 0.1 : opacity ?? 1,
          transition: 'all ease-in-out 0.1s',
          ':hover': isMobile ? {} : { transform: 'scale(1.1)' },
        }}
        onClick={() => {
          setIsOpacityEnabled((prev) => !prev);
        }}
      >
        {icon}
      </Box>
    </Parallax>
  );
}

export default ParallaxItem;
