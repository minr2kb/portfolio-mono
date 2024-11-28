import RatioBox from '@/components/RatioBox';
import { FontWeightValues } from '@/types/styles';
import { type ProjectItemType } from '@/types';
import { Link } from '@mui/icons-material';
import { Box, Chip, Collapse, Divider, Grid, IconButton, Typography, Zoom } from '@mui/material';
import { useRef, useState } from 'react';
import { projectsData } from '@/data/sectionData';
import useDeviceQuery from '@/hooks/useDeviceQuery';

function ProjectItem({
  title,
  description,
  details,
  image,
  link = '',
  skills,
  cateTag = '',
  isMobile = false,
}: ProjectItemType) {
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  const clientRect = itemRef.current?.getClientRects()[0];

  const handleSelect = () => {
    setExpanded((prev) => !prev);
    setTimeout(() => {
      setOpen(true);
    }, 500);
  };

  const handleDismiss = () => {
    setOpen(false);
    setTimeout(() => {
      setExpanded(false);
    }, 500);
  };

  return (
    <Grid item width="100%">
      {expanded && (
        <>
          <Zoom in={expanded} timeout={400}>
            <Box
              sx={{
                position: 'fixed',
                width: '100vw',
                height: '100vh',
                top: 0,
                left: 0,
                backdropFilter: 'blur(10px)',
                bgcolor: 'rgba(255,255,255,0.9)',
                zIndex: 2,
              }}
              onClick={handleDismiss}
            />
          </Zoom>
          <Box
            sx={{
              position: 'fixed',
              width: clientRect?.width,
              top: open ? '15%' : clientRect?.top,
              left: clientRect?.left,
              zIndex: 3,
              transition: 'all cubic-bezier(0, 0, 0.4, 1.0) 0.3s',
            }}
          >
            <RatioBox ratio={12 / 5}>
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  transform: 'scale(1.005)',
                  boxShadow: '0 0 10px 4px rgba(0,0,0,0.1)',
                }}
                onClick={handleDismiss}
              >
                <img
                  src={image}
                  alt="project"
                  loading="lazy"
                  style={{
                    transition: 'all 0.2s ease-in-out',
                    width: '100%',
                    height: '100%',
                    borderRadius: '10px',
                    objectFit: 'cover',
                    objectPosition: 'center center',
                  }}
                />
              </Box>
            </RatioBox>
            <Collapse in={open}>
              <Box sx={{ py: 2 }}>
                <Box display="flex" alignItems="center">
                  <Typography variant="h3">{title}</Typography>
                  {link !== '' && (
                    <IconButton size="small" href={link} target="_blank">
                      <Link htmlColor="#999" fontSize={isMobile ? 'small' : 'medium'} />
                    </IconButton>
                  )}
                </Box>
                <Box display="flex" flexWrap="wrap">
                  {cateTag !== '' && (
                    <Chip
                      variant="outlined"
                      label={cateTag}
                      clickable
                      size="small"
                      color="secondary"
                      sx={{ mr: 1, mt: 1 }}
                    />
                  )}
                  {skills.map((skill) => {
                    return (
                      <Chip
                        key={`${title}-${skill}`}
                        variant="outlined"
                        label={skill}
                        clickable
                        size="small"
                        color="primary"
                        sx={{ mr: 1, mt: 1 }}
                      />
                    );
                  })}
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    my: 2,
                    fontWeight: FontWeightValues.SEMI_BOLD,
                  }}
                  color="text.secondary"
                >
                  {description}
                </Typography>
                <Box sx={{ maxHeight: '30vh', overflow: 'auto' }}>
                  {details.map((detail, idx) => (
                    <Box display="flex" key={`${title}-detail-${idx}`}>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mx: 1, fontWeight: FontWeightValues.BLACK }}
                      >
                        ·
                      </Typography>
                      <Typography variant="body2" sx={{ flex: 1, my: 0.3 }} color="text.secondary">
                        {detail.content}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Collapse>
          </Box>
        </>
      )}
      <Box ref={itemRef}>
        <RatioBox ratio={12 / 5}>
          <Box
            sx={{
              width: '100%',
              height: '100%',
              borderRadius: '10px',
              cursor: 'pointer',
              '&:hover img': {
                transform: 'scale(1.005)',
                boxShadow: '0 0 10px 4px rgba(0,0,0,0.1)',
              },
            }}
            onClick={handleSelect}
          >
            <img
              src={image}
              alt="project"
              loading="lazy"
              style={{
                transition: 'all 0.2s ease-in-out',
                width: '100%',
                height: '100%',
                borderRadius: '10px',
                objectFit: 'cover',
                objectPosition: 'center center',
              }}
            />
          </Box>
        </RatioBox>
      </Box>
    </Grid>
  );
}

function ProjectSection() {
  const { isMobile } = useDeviceQuery();

  return (
    <Box>
      <Typography variant="h2">Projects</Typography>
      <Divider />
      {/* TODO: 필터 / 검색기능 */}
      <Grid container mt={2} spacing={2} alignItems="center">
        {projectsData.slice(0, 8).map((project) => (
          <ProjectItem key={project.title} isMobile={isMobile} {...project} />
        ))}
      </Grid>
    </Box>
  );
}

export default ProjectSection;
