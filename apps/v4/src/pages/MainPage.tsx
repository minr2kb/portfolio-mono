import GridLayoutItem from '@/components/layout/GridLayoutItem';
import GridLayout from '@/components/layout/GridLayout';
import { Container } from '@chakra-ui/react';
import useGridByRoute from '@/hooks/useGridByRoute';

const MainPage = () => {
  const { gridItems } = useGridByRoute();
  return (
    <Container as="main" p={0} maxWidth={'100vw'} minHeight={'100vh'}>
      <GridLayout>
        {gridItems.map((item) => (
          <GridLayoutItem key={item.i}>{item.component}</GridLayoutItem>
        ))}
      </GridLayout>
    </Container>
  );
};

export default MainPage;
