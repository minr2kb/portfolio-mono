import { Box, Image, Text } from '@chakra-ui/react';
import { getAssetsUrl } from '@packages/shared';
import { useParams } from 'react-router-dom';
import CheckoutButton from '@/components/CheckoutButton';

const Contact = () => {
  const { categoryId } = useParams();
  return (
    <Box w='full' h='full' p={4} position='relative' bgColor='gray.50'>
      <Text
        fontSize={['xl', '2xl', '2xl', '3xl']}
        fontWeight='bold'
        color='slate.800'
      >
        연락처
      </Text>

      <Image
        src={getAssetsUrl('/images/widget_contact.webp')}
        alt='contact'
        position='absolute'
        bottom={0}
        right={0}
        w='full'
      />
      {!categoryId && (
        <CheckoutButton
          position={'absolute'}
          top={0}
          right={0}
          m={4}
          to='contact'
        />
      )}
    </Box>
  );
};

export default Contact;
