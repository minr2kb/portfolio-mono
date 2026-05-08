import { Container } from '@chakra-ui/react';
import { logger } from '@packages/shared';
import { useEffect } from 'react';
import Footer from '@/components/Footer';
import GridLayout from '@/components/layout/GridLayout';
import GridLayoutItem from '@/components/layout/GridLayoutItem';
import useBrowserThemeColor from '@/hooks/useBrowserThemeColor';
import useGridByRoute from '@/hooks/useGridByRoute';
import { system } from '@/theme';

const MainPage = () => {
  const { gridItems, categoryId } = useGridByRoute();
  const bgColor = system.token('colors.bg.subtle');

  useBrowserThemeColor(bgColor);

  useEffect(() => {
    logger.info('MainPage rendered', {
      version: 'v4',
      environment: import.meta.env.MODE,
      timestamp: new Date().toISOString(),
      categoryId,
    });
  }, [categoryId]);

  return (
    <Container as='main' p={0} maxWidth={'100vw'} minHeight={'100vh'}>
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
