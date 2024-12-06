import { Box, Text } from '@chakra-ui/react';

const EducationItem = ({ title, content }: { title: string; content: string }) => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      gap={2}
      h="full"
      p={4}
      justifyContent={'center'}
      textAlign={'center'}
    >
      <Text fontSize={'xl'} fontWeight={'bold'} color="slate.600">
        {title}
      </Text>
      <Text fontSize={'md'} color="slate.600" wordBreak={'keep-all'} whiteSpace={'pre-wrap'}>
        {content}
      </Text>
    </Box>
  );
};

export default EducationItem;
