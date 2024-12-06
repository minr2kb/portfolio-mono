import { Box, IconButton, Image } from '@chakra-ui/react';
import { getAssetsUrl } from '@packages/shared';
import CheckoutButton from '../../CheckoutButton';
import { ProjectItemType } from '@/types';
import { useSearchParams } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import { layoutsAtom } from '@/store/atoms';
import { useSetAtom } from 'jotai';
import { Layout } from 'react-grid-layout';
import ProjectDetail from './ProjectDetail';
import { CgClose } from 'react-icons/cg';

const ProjectsItem = ({ project }: { project: ProjectItemType }) => {
  const { id, title, image } = project;
  const [searchParams, setSearchParams] = useSearchParams();
  const pid = searchParams.get('pid');
  const setLayouts = useSetAtom(layoutsAtom);
  const isSelected = pid === id;

  const onSearchParamsChange = useCallback(
    (id: string | null) => {
      setLayouts((prev) =>
        Object.entries(prev).reduce(
          (acc, [key, layouts]) => {
            acc[key] = layouts.map((layout) => ({ ...layout, h: layout.i === `project-item-${id}` ? 2 : 1 }));
            return acc;
          },
          {} as Record<string, Layout[]>,
        ),
      );
    },
    [setLayouts],
  );

  const onClose = () => {
    setSearchParams(undefined);
  };

  useEffect(() => {
    onSearchParamsChange(pid);
  }, [pid]);

  return (
    <Box className="group" position={'relative'} w="full" h="full">
      <Image
        position={'absolute'}
        top={0}
        left={0}
        src={getAssetsUrl(image)}
        alt={title}
        w="full"
        h="full"
        objectFit={'cover'}
        filter={isSelected ? 'blur(10px) opacity(0.1)' : 'none'}
        transition={'filter 0.3s ease-in-out'}
      />

      {isSelected ? (
        <IconButton
          className="no-drag"
          variant="surface"
          size="sm"
          rounded="full"
          onClick={onClose}
          position={'absolute'}
          top={0}
          right={0}
          m={4}
        >
          <CgClose />
        </IconButton>
      ) : (
        <Box position={'absolute'} bottom={0} left={0} m={4}>
          <CheckoutButton to={`/projects?pid=${id}`} title={title} />
        </Box>
      )}

      {isSelected && <ProjectDetail project={project} />}
    </Box>
  );
};

export default ProjectsItem;
