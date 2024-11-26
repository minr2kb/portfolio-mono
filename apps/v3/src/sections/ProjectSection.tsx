import RatioBox from '@/components/RatioBox';
import TextWithDot from '@/components/TextWithDot';
import useDeviceQuery from '@/hooks/useDeviceQuery';
import { Sections, type ProjectItemType } from '@/types';
import { FontWeightValues } from '@/types/styles';
import { ArrowOutward, Link } from '@mui/icons-material';
import { Box, Chip, Collapse, Divider, Grid, IconButton, Tooltip, Typography, Zoom } from '@mui/material';
import { useEffect, useMemo, useRef, useState } from 'react';
import { projectsData } from '@/data/sectionData';

function ExpandedProjectItem({
  item,
  clientRect,
  open,
  onClose,
}: {
  item: ProjectItemType;
  clientRect?: DOMRect;
  open?: boolean;
  onClose?: () => void;
}) {
  const { title, description, details, image, link = '', skills, cateTag = '', isMobile = false } = item;
  const [openBG, setOpenBG] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);

  useEffect(() => {
    let timeout1: ReturnType<typeof setTimeout>;
    let timeout2: ReturnType<typeof setTimeout>;

    if (open) {
      setOpenBG(true);
      timeout1 = setTimeout(() => {
        setOpenInfo(true);
      }, 500);
    } else {
      setOpenInfo(false);
      timeout2 = setTimeout(() => {
        setOpenBG(false);
      }, 500);
    }

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [open]);

  if (!openBG && !openInfo) return null;
  return (
    <>
      <Zoom in={openBG} timeout={400}>
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
          onClick={onClose}
        />
      </Zoom>

      <Box
        sx={{
          position: 'fixed',
          width: clientRect?.width,
          top: openInfo ? '80px' : clientRect?.top,
          zIndex: 3,
          transition: 'all cubic-bezier(0, 0, 0.4, 1.0) 0.3s',
          ...(isMobile
            ? { left: clientRect?.left }
            : {
                left: openInfo ? '50vw' : clientRect?.left,
                transform: openInfo ? 'translateX(-50%)' : 'none',
              }),
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
            onClick={onClose}
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
        <Collapse in={openInfo}>
          <Box sx={{ py: 2 }}>
            <Box>
              <Typography variant="h3">
                {title}

                {link !== '' && (
                  <Tooltip arrow title={link}>
                    <Grid
                      sx={{
                        display: 'inline-flex',
                        ml: 0.5,
                      }}
                    >
                      <IconButton size="small" href={link} target="_blank">
                        <Link htmlColor="#999" fontSize={isMobile ? 'small' : 'medium'} />
                      </IconButton>
                    </Grid>
                  </Tooltip>
                )}
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{
                fontWeight: FontWeightValues.SEMI_BOLD,
              }}
              color="text.secondary"
            >
              {description}
            </Typography>
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

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                maxHeight: '40vh',
                overflow: 'auto',
                mt: 2,
                gap: 1,
                pb: 10,
              }}
            >
              {details.map((detail, idx) => {
                if (detail.type === 'text') {
                  return (
                    <TextWithDot key={`project-${title}-detail-${idx}`} variant="body2" color="text.secondary">
                      {detail.content}
                    </TextWithDot>
                  );
                }
                return (
                  <Typography
                    key={`project-${title}-detail-${idx}`}
                    variant="body2"
                    sx={{
                      fontWeight: FontWeightValues.BOLD,
                      my: 1,
                    }}
                    color="text.secondary"
                  >
                    {detail.content}
                  </Typography>
                );
              })}
            </Box>
          </Box>
        </Collapse>
      </Box>
    </>
  );
}

function ProjectItem(props: ProjectItemType) {
  const { title, image } = props;
  const [open, setOpen] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  const clientRect = itemRef.current?.getClientRects()[0];

  const handleSelect = () => setOpen(true);
  const handleDismiss = () => setOpen(false);

  return (
    <Grid item sm={6} xs={12} width="100%">
      <ExpandedProjectItem item={props} clientRect={clientRect} open={open} onClose={handleDismiss} />
      <Box ref={itemRef}>
        <RatioBox ratio={12 / 5}>
          <Box
            sx={{
              width: '100%',
              height: '100%',
              borderRadius: '10px',
              cursor: 'pointer',
              '&:hover img': {
                boxShadow: '0 0 10px 4px rgba(0,0,0,0.1)',
                filter: 'blur(2px)',
                opacity: 0.2,
              },
              '&:hover .overlay': {
                opacity: 1,
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
            <Box
              className="overlay"
              sx={{
                transition: 'opacity 0.2s ease-in-out',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                opacity: 0,
              }}
            >
              <Typography variant="h3">{title}</Typography>
              <ArrowOutward fontSize="large" />
            </Box>
          </Box>
        </RatioBox>
      </Box>
    </Grid>
  );
}

function ProjectSection() {
  const { isMobile } = useDeviceQuery();
  const [selectedTag, setSelectedTag] = useState<string>('전체');

  const cateTags = useMemo(() => {
    const tags = projectsData.map((project) => project.cateTag).filter((tag): tag is string => tag !== undefined);

    return Array.from(new Set(tags));
  }, [projectsData]);

  const filteredProjects = useMemo(() => {
    if (selectedTag === '전체') {
      return projectsData;
    }
    return projectsData.filter((project) => project.cateTag === selectedTag);
  }, [selectedTag, projectsData]);

  return (
    <Box id={Sections.PROJECTS} sx={{ pt: 10 }}>
      <Typography variant="h2">{Sections.PROJECTS}.</Typography>
      <Divider orientation="horizontal" sx={{ mt: 1, mb: 3 }} />
      {/* 필터 / 검색기능 */}
      <Box sx={{ display: 'flex', gap: 1, overflow: 'auto' }}>
        {['전체', ...cateTags].map((tag) => (
          <Chip
            key={`tag-${tag}`}
            variant={selectedTag === tag ? 'filled' : 'outlined'}
            label={tag}
            clickable
            color="secondary"
            onClick={() => setSelectedTag(tag)}
          />
        ))}
      </Box>
      <Grid container mt={2} spacing={2} alignItems="center">
        {filteredProjects.map((project) => (
          <ProjectItem key={project.title} isMobile={isMobile} {...project} />
        ))}
      </Grid>
    </Box>
  );
}

export default ProjectSection;
