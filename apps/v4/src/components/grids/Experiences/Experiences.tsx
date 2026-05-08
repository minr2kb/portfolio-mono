import { Box, Image, Text } from '@chakra-ui/react';
import { getAssetsUrl } from '@packages/utils';
import { useParams } from 'react-router-dom';
import CheckoutButton from '../../CheckoutButton';

const Experiences = () => {
  const { categoryId } = useParams();
  return (
    <Box w='full' h='full' p={4} bgColor='soft.100'>
      <Text
        fontSize={['xl', '2xl', '2xl', '3xl']}
        fontWeight={'bold'}
        color='slate.700'
        wordBreak={'keep-all'}
      >
        멈추지 않는 성장 곡선
      </Text>
      <Text fontSize={'sm'} fontWeight={'medium'} color='slate.600'>
        끊임없이 Comfort Zone을 벗어나는 여정
      </Text>
      <Image
        src={getAssetsUrl('/images/widget_career.png')}
        alt='experiences'
        position={'absolute'}
        bottom={0}
        right={0}
        w='90%'
      />
      {!categoryId && (
        <CheckoutButton
          position={'absolute'}
          top={0}
          right={0}
          m={4}
          to='experiences'
        />
      )}
    </Box>
  );
};

export default Experiences;
