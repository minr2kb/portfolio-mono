import { Divider, Grid, Typography } from '@mui/material';
import EduExpItem from '@/components/ExperienceItem';
import { educationData } from '@/data/sectionData';

function EducationSection({ open = false }: { open?: boolean }) {
  return (
    <Grid position="relative">
      <Typography variant="h2">Education</Typography>
      <Divider sx={{ mb: 2 }} />

      <EduExpItem open={open} {...educationData} />
    </Grid>
  );
}

export default EducationSection;
