import { FontWeightValues } from '@/types/styles';
import { type SkillItemType } from '@/types';
import { Box, Collapse, Divider, Grid, LinearProgress, Typography } from '@mui/material';
import CodeEditor from '@uiw/react-textarea-code-editor';
import React, { useRef, useState } from 'react';
import { skillsData } from '@/data/sectionData';
import useDeviceQuery from '@/hooks/useDeviceQuery';
import { getAssetsUrl } from '@packages/shared';

function SkillItem({
  skill,
  onClick,
  isSelected,
  open,
}: {
  skill: SkillItemType;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  isSelected: boolean;
  open: boolean;
}) {
  const itemRef = useRef<HTMLDivElement>(null);
  const { isMobile } = useDeviceQuery();

  return (
    <Grid
      ref={itemRef}
      item
      sm={2}
      xs={3}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        aspectRatio: '1 / 1',
        transition: `all ease-in-out 0.1s, transform ease-in-out ${isSelected ? '0.3s 0.1s' : '0.2s'}`,
        cursor: 'pointer',
        filter: isSelected ? 'grayscale(0)' : 'grayscale(0.6)',
        opacity: isSelected ? 1 : 0.4,
        ':hover': !open
          ? {
              filter: 'grayscale(0)',
              opacity: 1,
            }
          : {},
        transform: isSelected
          ? `translate(-${itemRef.current?.offsetLeft ?? 0}px, ${
              -(itemRef.current?.offsetTop ?? 0) + (isMobile ? 50 : 20)
            }px);`
          : 'none',
        zIndex: isSelected ? 1 : 0,
      }}
      onClick={onClick}
    >
      <img
        src={getAssetsUrl(skill.image)}
        alt={skill.name}
        width={isMobile ? 50 : 60}
        style={{
          filter: !isSelected && open ? 'blur(5px)' : 'none',
          transition: 'filter ease-in-out 0.2s',
        }}
      />
      <Box sx={{ position: 'absolute', left: '100%', pl: 2 }}>
        <Collapse in={isSelected && open} orientation="horizontal">
          <Typography sx={{ fontWeight: FontWeightValues.BOLD }}>{skill.name}</Typography>
          <Grid container width="100%" spacing={0.5} flexWrap="nowrap">
            {[...Array(5)].map((_, i) => (
              <Grid key={`${skill.name}-star-${i}`} item width="40px">
                <LinearProgress
                  variant="determinate"
                  value={skill.rating > i ? 100 : 0}
                  color={skill.rating > 3 ? 'primary' : 'warning'}
                  sx={{ mt: 1, height: 10, borderRadius: 0 }}
                />
              </Grid>
            ))}
          </Grid>
        </Collapse>
      </Box>
    </Grid>
  );
}

function SkillList({ skills }: { skills: SkillItemType[] }) {
  const { isMobile } = useDeviceQuery();
  const [selectedSkill, setSelectedSkill] = useState<SkillItemType>();
  const [open, setOpen] = useState(false);

  const handleSelectSkill = (skill: SkillItemType) => {
    setSelectedSkill(skill);
    setTimeout(() => {
      setOpen(true);
    }, 200);
  };

  const handleCloseSkill = () => {
    setOpen(false);
    setTimeout(() => {
      setSelectedSkill(undefined);
    }, 200);
  };

  return (
    <Box position="relative" onClick={open ? handleCloseSkill : undefined}>
      <Grid container spacing={2} sx={{ mt: 2, width: '100%', position: 'relative' }}>
        {skills.map((skill) => {
          const isSelected = selectedSkill?.name === skill.name;
          return (
            <SkillItem
              key={skill.name}
              skill={skill}
              isSelected={isSelected}
              open={open}
              onClick={() => {
                if (!open) handleSelectSkill(skill);
              }}
            />
          );
        })}
      </Grid>
      <Collapse in={open} sx={{ position: 'absolute', top: isMobile ? 180 : 150, width: '100%' }}>
        <CodeEditor
          value={`{\n  name: "${selectedSkill?.name}",\n  level: ${selectedSkill?.rating}, // out of 5\n  description: "${selectedSkill?.description}"\n}`}
          language="json"
          disabled
          padding={15}
          style={{
            fontSize: 12,
            borderRadius: 10,
            fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
          }}
        />
      </Collapse>
    </Box>
  );
}

function SkillSection() {
  return (
    <Box>
      <Typography variant="h2">Skills</Typography>
      <Divider />
      <Grid container>
        <Grid mb={5} item>
          <SkillList skills={skillsData} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default SkillSection;
