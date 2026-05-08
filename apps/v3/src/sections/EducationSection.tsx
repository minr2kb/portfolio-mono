import { Box, Divider, Typography } from '@mui/material';
import { educationData } from '@packages/data';
import EduExpItem from '@/components/ExperienceItem';
import { Sections } from '@/types';

function EducationSection() {
  return (
    <Box id={Sections.EDUCATION} sx={{ width: '100%', pt: 10 }}>
      <Typography variant='h2'>{Sections.EDUCATION}.</Typography>
      <Divider orientation='horizontal' sx={{ mt: 1, mb: 3 }} />

      <EduExpItem
        open
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
    </Box>
  );
}

export default EducationSection;
