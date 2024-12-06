import { Box, BoxProps, Image, Text } from '@chakra-ui/react';
import { getAssetsUrl } from '@packages/shared';
import { skillsData } from '@/consts/sectionData';
import { keyframes } from '@emotion/react';
import CheckoutButton from '../../CheckoutButton';
import { useParams } from 'react-router-dom';

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const rotateCounterAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
`;

const animDuration = '60s';

const SkillCircle = ({
  radius,
  logoSize = 14,
  reverse = false,
  ...props
}: { radius: number; logoSize?: number; reverse?: boolean } & BoxProps) => {
  const data = reverse ? [...skillsData].reverse() : skillsData;
  return (
    <Box display="flex" alignItems="center" justifyContent="center" position="relative" w="full" h="full" {...props}>
      {data.map((skill, index) => {
        const angle = (360 / data.length) * index; // 각도를 계산
        const x = radius * Math.cos((angle * Math.PI) / 180); // X 좌표
        const y = radius * Math.sin((angle * Math.PI) / 180); // Y 좌표

        return (
          <Image
            key={skill.name}
            src={getAssetsUrl(skill.image)}
            w={logoSize}
            h={logoSize}
            objectFit={'contain'}
            objectPosition={'center'}
            alt={skill.name}
            position="absolute"
            css={{
              borderRadius: 'md',
              transform: `translate(${x}px, ${y}px) rotate(${angle + 90}deg)`,
            }}
          />
        );
      })}
    </Box>
  );
};

const Skills = () => {
  const { categoryId } = useParams();
  return (
    <Box bgColor={'slate.200'} w="full" h="full" position="relative">
      <SkillCircle
        reverse
        radius={300}
        logoSize={16}
        position="absolute"
        top={0}
        left={'80%'}
        animation={`${rotateCounterAnimation} ${animDuration} linear infinite`}
      />
      <SkillCircle
        radius={200}
        logoSize={12}
        position="absolute"
        top={0}
        left={'80%'}
        animation={`${rotateAnimation} ${animDuration} linear infinite`}
      />
      <SkillCircle
        reverse
        radius={120}
        logoSize={6}
        position="absolute"
        top={0}
        left={'80%'}
        animation={`${rotateCounterAnimation} ${animDuration} linear infinite`}
      />
      <Box
        position="absolute"
        bottom={0}
        left={0}
        w="full"
        h={20}
        bg="linear-gradient(to top, rgba(255, 255, 255, 0.8), transparent)"
      />
      <Text position="absolute" bottom={0} left={0} w="full" p={4} fontSize="2xl" fontWeight="bold" color="slate.700">
        기술 스택
      </Text>
      {!categoryId && <CheckoutButton position={'absolute'} bottom={0} right={0} m={4} to="skills" />}
    </Box>
  );
};

export default Skills;
