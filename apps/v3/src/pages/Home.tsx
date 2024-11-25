import useBrowserThemeColor from '@/hooks/useBrowserThemeColor';
import { Sections } from '@/types';
import { Box } from '@mui/material';
import AboutSection from '@/sections/AboutSection';
import ContactSection from '@/sections/ContactSection';
import EducationSection from '@/sections/EducationSection';
import ExperienceSection from '@/sections/ExperienceSection';
import HeroSection from '@/sections/HeroSection';
import ProjectSection from '@/sections/ProjectSection';
import TopNav from '@/sections/TopNav';
import { useRef } from 'react';

function Home() {
  const containerRef = useRef<HTMLDivElement>(null!);
  useBrowserThemeColor('#334155');

  return (
    <>
      <TopNav containerRef={containerRef} version="V3" />

      {/* Outer Container */}
      <Box
        ref={containerRef}
        sx={{
          height: '100vh',
          width: '100vw',
          overflowY: 'auto',
          overflowX: 'hidden',
        }}
      >
        <Box id={Sections.INTRO} sx={{ width: '100%' }}>
          <HeroSection />
        </Box>
        <Box component="main" sx={{ position: 'sticky', top: '0' }}>
          <Box sx={{ bgcolor: 'white', boxShadow: '0 10px 5px 7px rgba(0,0,0,0.1)', px: 3, pb: 15 }}>
            <Box sx={{ mx: 'auto', maxWidth: '1024px' }}>
              <AboutSection />
              <EducationSection />
              <ExperienceSection />
              <ProjectSection />
            </Box>
          </Box>
          <Box id={Sections.CONTACTS} />
          <Box
            sx={{
              bgcolor: '#334155',
              width: '100vw',
              position: 'sticky',
              bottom: 0,
              left: 0,
              zIndex: -1,
              px: 3,
              py: 10,
            }}
          >
            <Box sx={{ mx: 'auto', maxWidth: '1024px' }}>
              <ContactSection />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Home;
