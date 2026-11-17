import {
  Badge,
  Box,
  Flex,
  Heading,
  IconButton,
  List,
  Stack,
  Text,
} from '@chakra-ui/react';
import { IoLink, IoLogoGithub } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { Tooltip } from '@/components/ui/tooltip';
import { ProjectItemType } from '@/types';

interface ProjectDetailProps {
  project: ProjectItemType;
}

const ProjectDetail = ({ project }: ProjectDetailProps) => {
  const { title, link, githubUrl, description, skills, details } = project;

  return (
    <Box
      p={6}
      h='full'
      overflow='auto'
      css={{
        '&::-webkit-scrollbar': {
          width: '4px',
        },
        '&::-webkit-scrollbar-track': {
          background: 'transparent',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'rgba(0,0,0,0.2)',
          borderRadius: '2px',
        },
      }}
    >
      <Stack gap={6}>
        <Box>
          <Flex alignItems={'center'}>
            <Heading size={'2xl'}>{title}</Heading>
            {link && (
              <Tooltip content={link}>
                <IconButton variant='ghost' rounded='full' asChild>
                  <Link
                    to={link}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={`${title} 서비스 보기`}
                    className='no-drag'
                  >
                    <IoLink />
                  </Link>
                </IconButton>
              </Tooltip>
            )}
            {githubUrl && (
              <Tooltip content={githubUrl}>
                <IconButton variant='ghost' rounded='full' asChild>
                  <Link
                    to={githubUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='no-drag'
                    aria-label={`${title} GitHub 보기`}
                  >
                    <IoLogoGithub />
                  </Link>
                </IconButton>
              </Tooltip>
            )}
          </Flex>
          <Text textStyle={'sm'} fontWeight={'medium'} color={'slate.600'}>
            {description}
          </Text>
        </Box>

        <Flex gap={2} flexWrap={'wrap'}>
          {skills.map((skill) => (
            <Badge key={skill} variant='outline'>
              {skill}
            </Badge>
          ))}
        </Flex>

        <List.Root gap={3} ps={4} listStyle={'outside'}>
          {details.map(({ content, children }) => (
            <List.Item
              key={content}
              fontSize={'sm'}
              css={{
                fontWeight: children ? 'semibold' : 'normal',
                color: children ? 'slate.800' : 'slate.600',
              }}
            >
              {content}
              {children && (
                <List.Root ps={3} gap={1} listStylePos={'outside'}>
                  {children.map(({ content }) => (
                    <List.Item
                      key={content}
                      fontSize={'sm'}
                      fontWeight={'normal'}
                      color={'slate.600'}
                      lineHeight={'1.7'}
                    >
                      {content}
                    </List.Item>
                  ))}
                </List.Root>
              )}
            </List.Item>
          ))}
        </List.Root>
      </Stack>
    </Box>
  );
};

export default ProjectDetail;
