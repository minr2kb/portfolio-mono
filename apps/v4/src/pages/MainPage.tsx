import GridLayoutItem from '@/components/layout/GridLayoutItem';
import GridLayout from '@/components/layout/GridLayout';
import { Container } from '@chakra-ui/react';
import useGridByRoute from '@/hooks/useGridByRoute';
import Footer from '@/components/Footer';
import useBrowserThemeColor from '@/hooks/useBrowserThemeColor';
import { system } from '@/theme';

const MainPage = () => {
  const { gridItems } = useGridByRoute();
  const bgColor = system.token('colors.bg.subtle');
  useBrowserThemeColor(bgColor);
  return (
    <Container as="main" p={0} maxWidth={'100vw'} minHeight={'100vh'}>
      <GridLayout>
        {gridItems.map((item) => (
          <GridLayoutItem key={item.i}>{item.component}</GridLayoutItem>
        ))}
      </GridLayout>
      <Footer />
    </Container>
  );
};

export default MainPage;
