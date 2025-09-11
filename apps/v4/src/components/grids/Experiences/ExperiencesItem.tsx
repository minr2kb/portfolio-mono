import { ExperienceItemType } from '@/types';
import { Box, Flex, Image, Stack, Text, VStack } from '@chakra-ui/react';
import { getAssetsUrl } from '@packages/shared';

const ExperienceItem = ({ item }: { item: ExperienceItemType }) => {
  const { title, subtitle, logoSrc, descs } = item;
  return (
    <Stack gap={2} p={4}>
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
      <VStack alignItems={'flex-start'} gap={1}>
        {descs.map((desc, idx) => (
          <Text key={`desc-${idx}`} fontSize={'sm'} color="slate.500" whiteSpace={'pre-wrap'}>
            - {desc}
          </Text>
        ))}
      </VStack>
    </Stack>
  );
};

export default ExperienceItem;
