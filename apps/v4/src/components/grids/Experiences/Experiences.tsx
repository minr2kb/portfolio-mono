import { Box, Image, Text } from '@chakra-ui/react';
import { getAssetsUrl } from '@packages/shared';
import CheckoutButton from '../../CheckoutButton';
import { useParams } from 'react-router-dom';

const Experiences = () => {
  const { categoryId } = useParams();
  return (
    <Box w="full" h="full" p={4} bgColor="soft.100">
      <Text fontSize={'2xl'} fontWeight={'bold'} color="slate.700" wordBreak={'keep-all'}>
        3년의 경험을 통한 성장
      </Text>
      <Text fontSize={'sm'} fontWeight={'medium'} color="slate.600">
        스타트업의 시작부터 마지막까지
      </Text>
      <Image
        src={getAssetsUrl('/images/widget_career.webp')}
        alt="experiences"
        position={'absolute'}
        bottom={0}
        right={0}
        w="90%"
      />
      {!categoryId && <CheckoutButton position={'absolute'} top={0} right={0} m={4} to="/experiences" />}
    </Box>
  );
};

export default Experiences;
