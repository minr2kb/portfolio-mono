import { Blockquote } from '@/components/ui/blockquote';
import { IntroductionItemType } from '@/types';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';

const IntroductionItem = ({ item }: { item: IntroductionItemType }) => {
  return (
    <Box p={4}>
      <VStack gap={2} align={'flex-start'}>
        <Heading fontSize="xl">{item.title}</Heading>
        <Blockquote fontSize="sm" fontWeight={'medium'}>
          {item.subtitle}
        </Blockquote>
        <Text fontSize="sm" whiteSpace={'pre-line'}>
          {item.content}
        </Text>
      </VStack>
    </Box>
  );
};

export default IntroductionItem;
