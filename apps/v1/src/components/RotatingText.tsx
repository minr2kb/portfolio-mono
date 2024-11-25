import { Box, type SxProps } from '@mui/material';
import { useEffect, useState } from 'react';

import TextTransition, { presets } from 'react-text-transition';

function RotatingText({ texts, textSx }: { texts: string[]; textSx?: SxProps }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => {
        setIndex(index => index + 1);
      },
      3000, // every 3 seconds
    );
    return () => {
      clearTimeout(intervalId);
    };
  }, []);

  return (
    <TextTransition
      springConfig={presets.wobbly}
      style={{
        margin: '0 4px',
      }}
      inline
    >
      <Box
        sx={{
          ...textSx,
        }}
      >
        {texts[index % texts.length]}
      </Box>
    </TextTransition>
  );
}

export default RotatingText;
