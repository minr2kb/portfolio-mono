import { Box, Divider, Typography } from '@mui/material';
import { experiencesData } from '@packages/data';
import EduExpItem from '@/components/ExperienceItem';
import useDeviceQuery from '@/hooks/useDeviceQuery';
import { Sections } from '@/types';

function ExperienceSection() {
  const { isMobile } = useDeviceQuery();
  return (
    <Box id={Sections.EXPERIENCE} sx={{ pt: 10 }}>
      <Typography variant='h2'>{Sections.EXPERIENCE}.</Typography>
      <Divider orientation='horizontal' sx={{ mt: 1, mb: 3 }} />

      {experiencesData.map((experience, i) => (
        <EduExpItem
          key={`experience-${i}`}
          open
          {...experience}
          horizontal={!isMobile}
        />
      ))}
    </Box>
  );
}

export default ExperienceSection;
