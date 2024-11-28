import TextWithDot from '@/components/TextWithDot';
import { EduExpItemType } from '@/types';
import { Box, Grid, Typography } from '@mui/material';
import { getAssetsUrl } from '@packages/shared';

function EduExpItem(
  props: EduExpItemType & {
    open: boolean;
    horizontal?: boolean;
  },
) {
  const { open, title, subtitle, logoSrc, descs, horizontal = false } = props;
  return (
    <Grid
      container={horizontal}
      sx={{
        mb: 5,
      }}
    >
      <Grid item xs={4} mb={2}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img
            src={getAssetsUrl(logoSrc)}
            alt={title}
            style={{
              transition: 'all 0.3s ease-in-out',
              width: open ? '30px' : 0,
              marginRight: open ? '8px' : 0,
            }}
          />
          <Typography
            variant="h3"
            sx={{
              flex: 1,
            }}
          >
            {title}
          </Typography>
        </Box>
        <Typography color="text.secondary" variant="body1">
          {subtitle}
        </Typography>
      </Grid>
      <Grid item xs={8}>
        {descs.map((desc, idx) => (
          <TextWithDot key={`${title}-desc-${idx}`} variant="body1" lineHeight={2}>
            {desc}
          </TextWithDot>
        ))}
      </Grid>
    </Grid>
  );
}

export default EduExpItem;
