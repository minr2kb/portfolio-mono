import GridLayoutItem from '@/components/layout/GridLayoutItem';
import GridLayout from '@/components/layout/GridLayout';
import {
  defaultGridItems,
  educationsGridItems,
  experiencesGridItems,
  GridItem,
  introductionGridItems,
  projectsGridItems,
  skillsGridItems,
} from '@/consts/grid-items';
import { Container } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { layoutsAtom } from '@/store/atoms';
import { useSetAtom } from 'jotai';
import {
  defaultLayouts,
  educationsLayouts,
  experiencesLayouts,
  introductionLayouts,
  skillsLayouts,
  projectsLayouts,
} from '@/consts/layouts';

const MainPage = () => {
  const { categoryId } = useParams();
  const setLayouts = useSetAtom(layoutsAtom);
  const [gridItems, setGridItems] = useState<GridItem[]>([]);

  useEffect(() => {
    switch (categoryId) {
      case 'introduction':
        setGridItems(introductionGridItems);
        setLayouts(introductionLayouts);
        break;
      case 'experiences':
        setGridItems(experiencesGridItems);
        setLayouts(experiencesLayouts);
        break;
      case 'educations':
        setGridItems(educationsGridItems);
        setLayouts(educationsLayouts);
        break;
      case 'projects':
        setGridItems(projectsGridItems);
        setLayouts(projectsLayouts);
        break;
      case 'skills':
        setGridItems(skillsGridItems);
        setLayouts(skillsLayouts);
        break;
      default:
        setGridItems(defaultGridItems);
        setLayouts(defaultLayouts);
    }
  }, [categoryId]);

  return (
    <Container as="main" p={0} maxWidth={'100vw'}>
      <GridLayout>
        {gridItems.map((item) => (
          <GridLayoutItem key={item.i}>{item.component}</GridLayoutItem>
        ))}
      </GridLayout>
    </Container>
  );
};

export default MainPage;
