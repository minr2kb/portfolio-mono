import { FontWeightValues } from '@/types/styles';
import { Divider, Grid, Typography } from '@mui/material';
import useDeviceQuery from '@/hooks/useDeviceQuery';

function Footer() {
  const { isMobile } = useDeviceQuery();
  return (
    <Grid>
      <Divider flexItem />
      <Grid
        container
        sx={{
          mt: 0.5,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: FontWeightValues.REGULAR,
          }}
        >
          © 2023 All rights reserved.
        </Typography>

        <Typography
          sx={{
            fontSize: 14,
            fontWeight: FontWeightValues.REGULAR,
          }}
        >
          {!isMobile && 'Developed by. '} @minr2_kb
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Footer;
