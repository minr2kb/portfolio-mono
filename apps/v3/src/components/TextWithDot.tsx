import { Box, Typography, type TypographyProps } from '@mui/material';

function TextWithDot({ ...typoProps }: TypographyProps) {
  return (
    <Box display="flex">
      <Typography {...typoProps}>•</Typography>
      <Typography {...typoProps} sx={{ flex: 1, ml: 1, ...typoProps.sx }}>
        {typoProps.children}
      </Typography>
    </Box>
  );
}

export default TextWithDot;
