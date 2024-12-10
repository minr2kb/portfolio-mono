import { Badge, Box, Flex, Heading, IconButton, List, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { IoLink } from 'react-icons/io5';
import { Tooltip } from '@/components/ui/tooltip';
import { ProjectItemType } from '@/types';

interface ProjectDetailProps {
  project: ProjectItemType;
}

const ProjectDetail = ({ project }: ProjectDetailProps) => {
  const { title, link, description, skills, details } = project;

  return (
    <Box
      p={6}
      h="full"
      overflow="auto"
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
      <Flex direction={'column'} gap={4}>
        <Box>
          <Flex alignItems={'center'}>
            <Heading size={'2xl'}>{title}</Heading>
            {link && (
              <Tooltip content={link}>
                <Link to={link} target="_blank" rel="noopener noreferrer" className="no-drag">
                  <IconButton variant="ghost" rounded="full">
                    <IoLink />
                  </IconButton>
                </Link>
              </Tooltip>
            )}
          </Flex>
          <Text fontSize={'sm'} color={'slate.600'}>
            {description}
          </Text>
        </Box>

        <Box>
          <Text fontSize={'sm'} fontWeight={'bold'} mb={2} color={'slate.600'}>
            Skills
          </Text>
          <Flex gap={2} flexWrap={'wrap'}>
            {skills.map((skill) => (
              <Badge key={skill} variant="surface">
                {skill}
              </Badge>
            ))}
          </Flex>
        </Box>

        <Box>
          <Text fontSize={'sm'} fontWeight={'bold'} mb={2} color={'slate.600'}>
            Details
          </Text>
          <List.Root gap={2}>
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
                  <List.Root ps={5} gap={1}>
                    {children.map(({ content }) => (
                      <List.Item key={content} fontSize={'sm'} fontWeight={'normal'} color={'slate.600'}>
                        {content}
                      </List.Item>
                    ))}
                  </List.Root>
                )}
              </List.Item>
            ))}
          </List.Root>
        </Box>
      </Flex>
    </Box>
  );
};

export default ProjectDetail;
