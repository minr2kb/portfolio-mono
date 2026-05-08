import { Box, Divider, Typography } from '@mui/material';
import EduExpItem from '@/components/ExperienceItem';
import ParallaxItem, {
  type ParallaxItemProps,
} from '@/components/ParallaxItem';
import { educationData } from '@/data/sectionData';

const parallaxIcons: ParallaxItemProps[] = [
  {
    speed: 30,
    position: {
      top: '40%',
      left: '-40%',
    },

    rotate: [0, 40],
    fontSize: 170,
    blur: 5,
    icon: '🎓',
  },
  {
    speed: 20,
    position: {
      top: '20%',
      right: '-40%',
    },
    rotate: [-60, -40],
    fontSize: 110,
    blur: 0,
    icon: '📚',
  },
  {
    speed: 10,
    position: {
      top: '-10%',
      left: '80%',
    },
    rotate: [0, 60],
    fontSize: 70,
    blur: 2,
    opacity: 0.9,
    icon: '🛹',
  },
];

function EducationSection({
  open = false,
  parallax = false,
}: {
  open?: boolean;
  parallax?: boolean;
}) {
  return (
    <Box position='relative'>
      <Typography variant='h2'>Education</Typography>
      <Divider sx={{ mb: 2 }} />

      <EduExpItem open={open} {...educationData} />

      {parallax &&
        parallaxIcons.map((parallaxIcon, idx) => (
          <ParallaxItem key={`parallax-edu-${idx}`} {...parallaxIcon} />
        ))}
    </Box>
  );
}

export default EducationSection;
