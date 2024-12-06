import { Box, Image, Text } from '@chakra-ui/react';
import { getAssetsUrl } from '@packages/shared';
import { SkillItemType } from '@/types';
import { Rating } from '../../ui/rating';

export const SkillItem = ({ skill }: { skill: SkillItemType }) => {
  const { name, image, rating } = skill;
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      gap={2}
      h="full"
      p={4}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Image src={getAssetsUrl(image)} w={14} h={14} objectFit={'contain'} objectPosition={'center'} alt={name} />
      <Text fontSize={'xl'} fontWeight={'bold'} color="slate.600">
        {name}
      </Text>
      <Rating readOnly defaultValue={rating} colorPalette="yellow" count={5} />
    </Box>
  );
};

export default SkillItem;
