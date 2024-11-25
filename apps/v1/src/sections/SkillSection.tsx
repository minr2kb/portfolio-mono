import { Lightbulb, LightbulbOutlined } from '@mui/icons-material';
import { Box, Divider, Grid, Rating, Typography } from '@mui/material';
import TagSphere from '@/components/TagSphere';

const devSkills = [
  {
    name: 'ReactJS',
    rating: 4.5,
  },
  {
    name: 'NextJS',
    rating: 4,
  },
  {
    name: 'TypeScript',
    rating: 4.5,
  },
  {
    name: 'JavaScript',
    rating: 4,
  },
  {
    name: 'NodeJS',
    rating: 4,
  },
  {
    name: 'MUI',
    rating: 4.5,
  },
  {
    name: 'ThreeJS',
    rating: 3,
  },
];

const toolSkills = [
  {
    name: 'Jira',
    rating: 3,
  },
  {
    name: 'Notion',
    rating: 4,
  },
  {
    name: 'Slack',
    rating: 3.5,
  },
  {
    name: 'Figma',
    rating: 3,
  },
];

const etcSkills = [
  {
    name: '악기연주',
    rating: 4,
  },
  {
    name: 'UI 디자인',
    rating: 2.5,
  },
  {
    name: '영어',
    rating: 3.5,
  },
];

function SkillList({
  skills,
}: {
  skills: Array<{
    name: string;
    rating: number;
  }>;
}) {
  return (
    <>
      {skills.map((skill) => (
        <Box key={`skill-${skill.name}`} display="flex" alignItems="center" mt={2}>
          <Typography color="text.secondary" variant="body1">
            {skill.name}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flex: 1,
              height: '50%',
              border: 'dashed 0.5px #CCC',
              mx: 2,
            }}
          />
          <Rating
            defaultValue={skill.rating}
            precision={0.5}
            icon={<Lightbulb fontSize="inherit" />}
            emptyIcon={<LightbulbOutlined fontSize="inherit" />}
            readOnly
          />
        </Box>
      ))}
    </>
  );
}

function SkillSection() {
  return (
    <Box>
      <Typography variant="h2">Skills</Typography>
      <Divider />
      <TagSphere />
      <Grid container columnSpacing={3}>
        <Grid item mb={5} xs={12} sm={4}>
          <Typography variant="h3">개발 스택</Typography>
          <SkillList skills={devSkills} />
        </Grid>
        <Grid item mb={5} xs={12} sm={4}>
          <Typography variant="h3">업무 협업 툴</Typography>
          <SkillList skills={toolSkills} />
        </Grid>
        <Grid item mb={5} xs={12} sm={4}>
          <Typography variant="h3">기타</Typography>
          <SkillList skills={etcSkills} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default SkillSection;
