import { Flex, FlexProps, IconButton, Text } from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

type CheckoutButtonProps = FlexProps & {
  to?: string;
  title?: string;
  onClick?: () => void;
};

const CheckoutButton = ({ to, title, onClick, ...props }: CheckoutButtonProps) => {
  const navigate = useNavigate();

  return (
    <Flex
      className="no-drag group"
      {...props}
      css={{
        alignItems: 'center',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        rounded: 'full',
        bgColor: 'whiteAlpha.600',
        backdropFilter: 'blur(5px)',
        transition: 'all 0.3s ease-in-out',
        w: 'var(--chakra-sizes-9)',
        _groupHover: {
          w: 'full',
        },
        ...props.css,
      }}
    >
      <IconButton
        variant="surface"
        size="sm"
        transform="rotate(-45deg)"
        rounded="full"
        css={{
          display: 'inline-flex',
          transition: 'all 0.3s ease-in-out',
        }}
        _groupHover={{
          transform: 'rotate(0deg)',
        }}
        onClick={onClick || (() => navigate(to ?? ''))}
      >
        <FaArrowRight />
      </IconButton>
      {title && (
        <Text
          css={{
            fontSize: 'md',
            fontWeight: 'medium',
            display: 'inline',
            whiteSpace: 'nowrap',
            opacity: 0,
            transition: 'all 0.3s ease-in',
            ml: 2,
            mr: 3,
            _groupHover: {
              opacity: 1,
              transform: 'translateX(0)',
            },
          }}
        >
          {title}
        </Text>
      )}
    </Flex>
  );
};

export default CheckoutButton;
