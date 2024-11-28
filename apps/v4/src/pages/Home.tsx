import GridLayoutItem from '@/components/layout/GridLayoutItem';
import GridLayout from '@/components/layout/GridLayout';
import { gridItems } from '@/consts/grid-items';
import { lgLayout, mdLayout, smLayout } from '@/consts/layouts';
import { Container } from '@chakra-ui/react';
import { ColorModeButton } from '@/components/ui/color-mode';

export interface GridItem {
  i: string;
  component: React.ReactNode;
}

const Home = () => {
  return (
    <Container as="main" p={0} bgColor={'bg.subtle'}>
      <ColorModeButton />
      <GridLayout lgLayout={lgLayout} mdLayout={mdLayout} smLayout={smLayout}>
        {gridItems.map((item) => (
          <GridLayoutItem key={item.i}>{item.i}</GridLayoutItem>
        ))}
      </GridLayout>
    </Container>
  );
};

export default Home;
