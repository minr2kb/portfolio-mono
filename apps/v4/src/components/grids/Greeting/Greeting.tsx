import { Box, Image, Text } from '@chakra-ui/react';
import { getAssetsUrl } from '@packages/utils';
import HelloAnimation from '../../HelloAnimation';

const Greeting = () => {
  return (
    <Box w='full' h='full' position={'relative'}>
      <Box
        position={'absolute'}
        top={0}
        left={0}
        w='full'
        h='full'
        display={'flex'}
        justifyContent={'center'}
      >
        <HelloAnimation fill='none' color='#D3DDE7' strokeWidth='40px' />
      </Box>
      <Image
        position={'absolute'}
        bottom={0}
        left={'5%'}
        src={getAssetsUrl('/images/memoji-lg.webp')}
        alt='greeting'
        h='90%'
      />
      <Text
        position={'absolute'}
        bottom={0}
        right={0}
        p={4}
        fontSize={['xl', '2xl', '2xl', '3xl']}
        fontWeight={'bold'}
        color='slate.900'
        whiteSpace={'pre-wrap'}
        textAlign={'right'}
      >
        {'팀과 함께 성장하는\nFE 개발자, 민경배입니다.'}
      </Text>
    </Box>
  );
};

export default Greeting;
