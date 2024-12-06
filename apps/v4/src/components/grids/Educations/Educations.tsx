import { Box, Text } from '@chakra-ui/react';
import { getAssetsUrl } from '@packages/shared';
import CheckoutButton from '../../CheckoutButton';
import { useParams } from 'react-router-dom';

const Educations = () => {
  const { categoryId } = useParams();
  return (
    <Box
      pos="relative"
      w="full"
      h="full"
      bgImage={`linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 30%, rgba(0,0,0,0) 50%), url(${getAssetsUrl('/images/me_grad.webp')})`}
      bgSize="cover"
      bgPos="center"
      p={4}
    >
      <Text fontSize={'2xl'} fontWeight={'bold'} color="white" lineHeight={[1, 1, 1, 1.2]}>
        Stony Brook Univ.
      </Text>
      <Text fontSize={'sm'} fontWeight={'medium'} color="white">
        응용수학통계학 / 컴퓨터과학
      </Text>
      {!categoryId && <CheckoutButton position={'absolute'} bottom={0} left={0} m={4} to="educations" />}
    </Box>
  );
};

export default Educations;
