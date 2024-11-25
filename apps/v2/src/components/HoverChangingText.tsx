import { Box, Typography, type SxProps } from '@mui/material';
import React from 'react';

export interface Props {
  fontSize: number;
  lineHeight?: number;
  text: string;
  alt?: string | React.ReactNode;
  sx?: SxProps;
  altSx?: SxProps;
}

function HoverChangingText(props: Props) {
  const { fontSize, lineHeight = 1.3, text, alt, sx = {}, altSx } = props;

  return (
    <Box sx={{ height: fontSize * lineHeight, width: 'fit-content', overflow: 'hidden' }}>
      <Box
        sx={{
          transition: 'all ease-in-out 150ms',
          ':hover': {
            transform: 'translateY(-50%)',
          },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize,
            whiteSpace: 'pre-wrap',
            ...sx,
          }}
        >
          {text}
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontSize,
            whiteSpace: 'pre-wrap',
            ...(altSx ?? sx),
          }}
        >
          {alt ?? text}
        </Typography>
      </Box>
    </Box>
  );
}

export default HoverChangingText;
