import { Box, Image } from '@chakra-ui/react';
import { getAssetsUrl } from '@packages/shared';

export const EducationLogoItem = ({ logoSrc }: { logoSrc: string }) => {
  return (
    <Box
      w="full"
      h="full"
      display={'flex'}
      flexDirection={'column'}
      gap={2}
      alignItems={'center'}
      justifyContent={'center'}
      bgColor="slate.200"
    >
      <Image src={getAssetsUrl(logoSrc)} alt={logoSrc} objectFit={'contain'} w={'60%'} />
    </Box>
  );
};

export default EducationLogoItem;
