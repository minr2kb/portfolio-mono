import CheckoutButton from '@/components/CheckoutButton';
import { ContactItemType } from '@/types';
import { Box, Icon, Link, Stack, Text } from '@chakra-ui/react';

const ContactItem = ({ label, value, icon: ContactIcon, link }: ContactItemType) => {
  return (
    <Box w="full" h="full" p={6} position="relative">
      <Stack display="flex" flexDirection="column" justifyContent="center" h="full" gap={0}>
        <Icon boxSize={8} color="slate.600" mb={2}>
          <ContactIcon />
        </Icon>
        <Text fontSize="lg" fontWeight="bold" color="gray.700">
          {label}
        </Text>
        <Text fontSize="md" color="gray.600" lineClamp={2}>
          {value}
        </Text>
      </Stack>

      <Box position="absolute" top={4} right={4}>
        <Link href={link} target="_blank" rel="noopener noreferrer">
          <CheckoutButton />
        </Link>
      </Box>
    </Box>
  );
};

export default ContactItem;
