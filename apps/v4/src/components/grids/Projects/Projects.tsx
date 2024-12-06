import { Box, Image, Text } from '@chakra-ui/react';
import { getAssetsUrl } from '@packages/shared';
import CheckoutButton from '../../CheckoutButton';
import { useParams } from 'react-router-dom';

const Projects = () => {
  const { categoryId } = useParams();
  return (
    <Box w="full" h="full" bgColor={'soft.100'}>
      <Image
        position={'absolute'}
        top={4}
        left={4}
        src={getAssetsUrl('/images/widget_projects.webp')}
        alt="projects"
        w="75%"
      />
      <Text position={'absolute'} bottom={0} right={0} fontSize={'2xl'} fontWeight={'bold'} color="slate.900" p={4}>
        프로젝트
      </Text>
      {!categoryId && <CheckoutButton position={'absolute'} bottom={0} left={0} m={4} to="/projects" />}
    </Box>
  );
};

export default Projects;
