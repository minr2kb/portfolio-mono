import { Card } from '@chakra-ui/react';
import React, { forwardRef } from 'react';

type GridLayoutItemProps = {
  children: React.ReactNode;
};

const GridLayoutItem = forwardRef<HTMLDivElement, GridLayoutItemProps>(({ children, ...props }, ref) => {
  return (
    <Card.Root
      css={{
        p: 4,
        border: 'none',
        borderRadius: '2xl',
        bgColor: 'bg.panel',
        pointerEvents: 'auto',
        cursor: 'grab',
        userSelect: 'none',
        _hover: {
          shadow: 'md',
        },
        _active: {
          cursor: 'grabbing',
        },
      }}
      ref={ref}
      {...props}
    >
      {children}
    </Card.Root>
  );
});

export default GridLayoutItem;
