import { Divider, Grid, Typography } from '@mui/material';
import { experiencesData } from '@packages/data';
import EduExpItem from '@/components/ExperienceItem';

function ExperienceSection({ open = true }: { open?: boolean }) {
  return (
    <Grid position='relative'>
      <Typography variant='h2'>Experience</Typography>
      <Divider sx={{ mb: 2 }} />
      {experiencesData.map((experience, idx) => (
        <EduExpItem key={`experience-${idx}`} open={open} {...experience} />
      ))}
    </Grid>
  );
}

export default ExperienceSection;
