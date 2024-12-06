import { ExperienceItemType } from '@/types';
import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react';
import { getAssetsUrl } from '@packages/shared';

const ExperienceItem = ({ item }: { item: ExperienceItemType }) => {
  const { title, subtitle, logoSrc, descs } = item;
  return (
    <Box p={4} borderRadius={'lg'} bgColor="whiteAlpha.500" backdropFilter={'blur(3px)'}>
      <VStack alignItems={'flex-start'} gap={2}>
        <Flex alignItems={'center'} gap={2}>
          <Image src={getAssetsUrl(logoSrc)} alt={title} objectFit={'contain'} w={10} h={10} />
          <Text fontSize={'xl'} fontWeight={'bold'} color="slate.600">
            {title}
          </Text>
        </Flex>
        <Box>
          <Text fontSize={'sm'} fontWeight={'medium'} color="slate.600">
            {subtitle}
          </Text>
        </Box>
        <Text fontSize={'sm'} color="slate.500" whiteSpace={'pre-wrap'}>
          {descs.map((desc) => `- ${desc}\n`).join('')}
        </Text>
      </VStack>
    </Box>
  );
};

export default ExperienceItem;
