import { Box, Flex, Text } from '@chakra-ui/react';
import { getAssetsUrl } from '@packages/shared';
import CheckoutButton from '../../CheckoutButton';
import useBreakPoint from '@/hooks/useBreakPoint';
import { useParams } from 'react-router-dom';

const Chip = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box px={2} py={1} borderRadius={'full'} bg={'whiteAlpha.500'} backdropFilter={'blur(3px)'}>
      <Text fontSize={'sm'} fontWeight={'medium'} color="white">
        {children}
      </Text>
    </Box>
  );
};

const tags = ['빠른 속도', 'UI/UX', '스타트업', '디자인시스템', '프론트엔드', '호기심'];

const Introduction = () => {
  const { isMobile } = useBreakPoint();
  const { categoryId } = useParams();
  const showTags = !categoryId || !isMobile;

  return (
    <Box w="full" h="full" bgImage={`url(${getAssetsUrl('/images/me_back.webp')})`} bgSize="cover" bgPos="center">
      {!categoryId && <CheckoutButton position={'absolute'} top={0} right={0} m={4} to="/introduction" />}

      <Box position={'absolute'} top={0} left={0} p={4}>
        <Text fontSize="2xl" fontWeight="bold" color="white">
          민경배
        </Text>
        <Text fontSize="sm" color="white" fontWeight={'medium'}>
          2000.11.29
        </Text>
      </Box>
      {showTags && (
        <Flex flexWrap="wrap" gap={2} position={'absolute'} bottom={0} left={0} p={4}>
          {tags.map((tag) => (
            <Chip key={tag}># {tag}</Chip>
          ))}
        </Flex>
      )}
    </Box>
  );
};

export default Introduction;
