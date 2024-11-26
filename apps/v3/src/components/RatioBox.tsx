import { Box, type BoxProps } from '@mui/material';
import { type ReactNode } from 'react';

export interface Props {
  /**
   * 가로/세로 비율
   * ex) 1/1, 16/9, ...
   */
  ratio?: number;
  children?: ReactNode;
}

function RatioBox({ ratio = 1, children, ...boxProps }: Props & BoxProps) {
  return (
    <Box
      {...boxProps}
      sx={{
        position: 'relative',
        width: '100%',
        pt: `calc(100% / (${ratio}))`,
        '> *': {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        },
        ...boxProps.sx,
      }}
    >
      {children}
    </Box>
  );
}

export default RatioBox;
