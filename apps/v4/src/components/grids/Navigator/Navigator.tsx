import { layoutsAtom } from '@/store/atoms';
import { Box, Flex, IconButton } from '@chakra-ui/react';
import { Tooltip } from '../../ui/tooltip';
import { useResetAtom } from 'jotai/utils';
import { BiReset } from 'react-icons/bi';
import { useParams, useNavigate } from 'react-router-dom';
import { MdOutlineArrowBack } from 'react-icons/md';
import { BASE_ROUTE } from '@/consts/path';

const Navigator = () => {
  const { categoryId } = useParams();
  const resetLayouts = useResetAtom(layoutsAtom);
  const navigate = useNavigate();

  return (
    <Box w="full" h="full" p={4} position="relative" bgColor={'slate.700'}>
      <Flex position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" gap={4} alignItems="center">
        <Tooltip content={categoryId ? '뒤로가기' : '그리드 초기화'}>
          <IconButton
            className="no-drag"
            aria-label="Reset layout"
            onClick={categoryId ? () => navigate(BASE_ROUTE) : resetLayouts}
            variant="ghost"
            h="fit-content"
            _hover={{ bgColor: 'slate.700' }}
            _icon={{
              color: 'soft.100',
              boxSize: 16,
            }}
          >
            {categoryId ? <MdOutlineArrowBack /> : <BiReset />}
          </IconButton>
        </Tooltip>
      </Flex>
    </Box>
  );
};

export default Navigator;
