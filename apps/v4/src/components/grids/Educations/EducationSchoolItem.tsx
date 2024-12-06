import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react';
import { getAssetsUrl } from '@packages/shared';

const EducationSchoolItem = ({ title, subtitle, logoSrc }: { title: string; subtitle: string; logoSrc: string }) => {
  return (
    <Box p={4} h="full">
      <VStack h="full" gap={2} justify={'center'}>
        <HStack>
          <Image src={getAssetsUrl(logoSrc)} alt={logoSrc} objectFit={'contain'} w={8} h={8} />
          <Text fontSize={['xl', 'xl', 'xl', '2xl']} fontWeight={'bold'} color="slate.600">
            {title}
          </Text>
        </HStack>
        <Text fontSize={'md'} fontWeight={'medium'} color="slate.600">
          {subtitle}
        </Text>
      </VStack>
    </Box>
  );
};

export default EducationSchoolItem;
