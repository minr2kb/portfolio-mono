import { Divider, Grid, Typography } from '@mui/material';
import { educationData } from '@packages/data';
import EduExpItem from '@/components/ExperienceItem';

function EducationSection({ open = false }: { open?: boolean }) {
  return (
    <Grid position='relative'>
      <Typography variant='h2'>Education</Typography>
      <Divider sx={{ mb: 2 }} />

      <EduExpItem
        open={open}
        title={educationData.title}
        subtitle={educationData.subtitle}
        logoSrc={educationData.logoSrc}
        descs={[
          'Bachelor of Science',
          `전공: ${educationData.major}`,
          `부전공: ${educationData.minor}`,
          `CGPA: ${educationData.gpa}`,
        ]}
      />
    </Grid>
  );
}

export default EducationSection;
