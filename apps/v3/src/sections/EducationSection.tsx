import EduExpItem from '@/components/ExperienceItem';
import { Sections } from '@/types';
import { Box, Divider, Typography } from '@mui/material';
import { educationData } from '@/data/sectionData';

function EducationSection() {
  return (
    <Box id={Sections.EDUCATION} sx={{ width: '100%', pt: 10 }}>
      <Typography variant="h2">{Sections.EDUCATION}.</Typography>
      <Divider orientation="horizontal" sx={{ mt: 1, mb: 3 }} />

      <EduExpItem {...educationData} open />
    </Box>
  );
}

export default EducationSection;
