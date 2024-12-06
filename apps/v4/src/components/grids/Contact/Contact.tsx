import { Box, Flex, Grid, Link } from '@chakra-ui/react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import { Button } from '../../ui/button';
import { Tooltip } from '../../ui/tooltip';
import { contactsData } from '@/consts/sectionData';

const Contact = () => {
  const contacts = [
    {
      icon: IoMail,
      color: 'slate.400',
      href: `mailto:${contactsData.email}`,
      label: 'Email',
    },
    {
      icon: FaGithub,
      color: 'gray.700',
      href: contactsData.github,
      label: 'Github',
    },
    {
      icon: FaInstagram,
      color: 'pink.600',
      href: contactsData.instagram,
      label: 'Instagram',
    },
    {
      icon: FaLinkedin,
      color: 'blue.600',
      href: contactsData.linkedIn,
      label: 'LinkedIn',
    },
  ];

  return (
    <Box w="full" h="full" p={4}>
      <Grid templateColumns="repeat(2, 1fr)" templateRows="repeat(2, 1fr)" gap={4} h="full">
        {contacts.map(({ icon: ContactIcon, color, href, label }) => (
          <Link key={label} href={href} target="_blank" rel="noopener noreferrer" className="no-drag">
            <Tooltip content={label}>
              <Button w="full" h="full" variant="surface" borderRadius="xl">
                <Flex
                  direction="column"
                  align="center"
                  justify="center"
                  bg={`${color}10`}
                  borderRadius="xl"
                  w="full"
                  h="full"
                  transition="all 0.2s"
                  _hover={{
                    bg: `${color}20`,
                    transform: 'scale(1.02)',
                  }}
                  _icon={{
                    color: color,
                    boxSize: 7,
                  }}
                >
                  <ContactIcon />
                </Flex>
              </Button>
            </Tooltip>
          </Link>
        ))}
      </Grid>
    </Box>
  );
};

export default Contact;
