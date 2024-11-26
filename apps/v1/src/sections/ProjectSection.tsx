import RatioBox from '@/components/RatioBox';
import { FontWeightValues } from '@/types/styles';
import { KeyboardArrowDown, KeyboardArrowUp, Link } from '@mui/icons-material';
import { Button, Chip, Collapse, Divider, Grid, IconButton, Tooltip, Typography } from '@mui/material';
import { useState } from 'react';
import { projectsData } from '@/data/sectionData';
import useDeviceQuery from '@/hooks/useDeviceQuery';
import { type ProjectItemType } from '@/types';
import { getAssetsUrl } from '@/utils';

function ProjectBlock({
  title,
  description,
  details,
  image,
  link = '',
  skills,
  cateTag = '',
  isMobile = false,
}: ProjectItemType) {
  return (
    <Grid py={5}>
      <RatioBox ratio={2.4}>
        <Grid
          sx={{
            overflow: 'hidden',
            width: '100%',
            height: '100%',
            borderRadius: '10px',
            '&:hover img': {
              transform: 'scale(1.05)',
            },
          }}
        >
          <img
            src={getAssetsUrl(image)}
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
        </Grid>
      </RatioBox>
      <Grid mt={2}>
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
      </Grid>
      <Grid container>
        {cateTag !== '' && (
          <Chip variant="outlined" label={cateTag} clickable size="small" color="secondary" sx={{ mr: 1, mt: 1 }} />
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
      </Grid>
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
      {details.map((detail, idx) => (
        <Grid container key={`${title}-detail-${idx}`}>
          <Typography variant="body2" color="text.secondary" sx={{ mx: 1, fontWeight: FontWeightValues.BLACK }}>
            ·
          </Typography>
          <Typography variant="body2" sx={{ flex: 1, my: 0.3 }} color="text.secondary">
            {detail.content}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
}

function ProjectSection() {
  const { isMobile } = useDeviceQuery();
  const [viewMore, setViewMore] = useState(false);
  return (
    <Grid>
      <Typography variant="h2">Projects</Typography>
      <Divider />
      {/* TODO: 필터 / 검색기능 */}
      {projectsData.slice(0, 3).map((project) => (
        <ProjectBlock
          key={project.title}
          title={project.title}
          description={project.description}
          details={project.details}
          image={project.image}
          skills={project.skills}
          link={project.link}
          cateTag={project.cateTag}
          isMobile={isMobile}
        />
      ))}

      <Collapse in={viewMore} unmountOnExit mountOnEnter timeout={{ enter: 1200, exit: 500 }}>
        {projectsData.slice(3).map((project) => (
          <ProjectBlock
            key={project.title}
            title={project.title}
            description={project.description}
            details={project.details}
            image={project.image}
            skills={project.skills}
            link={project.link}
            cateTag={project.cateTag}
            isMobile={isMobile}
          />
        ))}
      </Collapse>
      <Button
        fullWidth
        variant="outlined"
        onClick={() => {
          setViewMore(!viewMore);
        }}
      >
        {viewMore ? '접기' : `${projectsData.length - 3}개 더보기`}{' '}
        {viewMore ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
      </Button>
    </Grid>
  );
}

export default ProjectSection;
