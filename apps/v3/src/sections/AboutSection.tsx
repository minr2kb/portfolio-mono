import { Box, Divider, Typography } from '@mui/material';
import { introData } from '@packages/data';
import { Sections } from '@/types';
import { FontWeightValues } from '@/types/styles';

function AboutSection() {
  return (
    <Box id={Sections.ABOUT} sx={{ width: '100%', pt: 10 }}>
      <Typography variant='h2'>{Sections.ABOUT}.</Typography>
      <Divider orientation='horizontal' sx={{ mt: 1, mb: 3 }} />
      {introData.map((item) => (
        <Box
          key={item.title}
          sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 5 }}
        >
          <Typography variant='h4'>| {item.title}</Typography>
          <Typography
            variant='body1'
            fontWeight={FontWeightValues.BOLD}
            color={'text.secondary'}
          >
            {item.subtitle}
          </Typography>
          {item.contents.map((content, idx) => (
            <Typography key={idx} variant='body2'>
              - {content}
            </Typography>
          ))}
        </Box>
      ))}
    </Box>
  );
}

export default AboutSection;
