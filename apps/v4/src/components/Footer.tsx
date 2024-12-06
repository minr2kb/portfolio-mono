import { breakpoints } from '@/theme/breakpoints';
import { Box, HStack, Separator, Text } from '@chakra-ui/react';

function Footer() {
  return (
    <Box maxW={breakpoints} p={4} mx="auto">
      <HStack>
        <Text fontSize={'sm'} color={'slate.400'}>
          Portfolio V4
        </Text>
        <Separator flex="1" borderColor="slate.400" />
        <Text fontSize={'sm'} color={'slate.400'}>
          By. @minr2kb
        </Text>
      </HStack>
    </Box>
  );
}

export default Footer;
