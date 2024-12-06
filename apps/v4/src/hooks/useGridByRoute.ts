import { useEffect, useState } from 'react';

import { layoutsAtom } from '@/store/atoms';
import { useParams } from 'react-router-dom';
import { useSetAtom } from 'jotai';
import {
  contactLayouts,
  defaultLayouts,
  educationsLayouts,
  experiencesLayouts,
  introductionLayouts,
  projectsLayouts,
  skillsLayouts,
} from '@/consts/layouts';

import {
  experiencesGridItems,
  introductionGridItems,
  skillsGridItems,
  defaultGridItems,
  educationsGridItems,
  projectsGridItems,
  contactGridItems,
} from '@/consts/grid-items';
import { GridItem } from '@/types';

const useGridByRoute = () => {
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
      case 'contact':
        setGridItems(contactGridItems);
        setLayouts(contactLayouts);
        break;
      default:
        setGridItems(defaultGridItems);
        setLayouts(defaultLayouts);
    }
  }, [categoryId]);

  return { gridItems };
};

export default useGridByRoute;
