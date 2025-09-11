import { Blockquote } from '@/components/ui/blockquote';
import { IntroductionItemType } from '@/types';
import { Flex, Heading, Stack, Text } from '@chakra-ui/react';

const IntroductionItem = ({ item }: { item: IntroductionItemType }) => {
  return (
    <Stack gap={2} p={4}>
      <Heading fontSize="xl">{item.title}</Heading>
      <Blockquote fontSize="sm" fontWeight={'medium'}>
        {item.subtitle}
      </Blockquote>
      <Stack gap={2}>
        {item.contents.map((content, index) => (
          <Flex key={index} gap={1}>
            <Text fontSize="sm" lineHeight={'1.3'}>
              -
            </Text>
            <Text fontSize="sm" lineHeight={'1.3'}>
              {content}
            </Text>
          </Flex>
        ))}
      </Stack>
    </Stack>
  );
};

export default IntroductionItem;
