import { Box, Divider, Typography } from '@mui/material';
import EduExpItem from '@/components/ExperienceItem';
import ParallaxItem, {
  type ParallaxItemProps,
} from '@/components/ParallaxItem';
import { type EduExpItemType } from '@/types';

const experiences: EduExpItemType[] = [
  {
    title: '퍼블리',
    subtitle: 'PUBLY, 2023.07 - 현재',
    logoSrc: '/images/logo/publy.png',
    descs: [
      '개발자 커리어 플랫폼 "커리어리" 서비스 웹 및 앱 프론트 개발',
      '지표 단위 조직(Squad)으로 스프린트 업무 경험',
      '엔지니어 챕터 내의 정기적 스터디와 코드리뷰 경험',
      '디자인팀과의 협업을 통한 사내 디자인 시스템 작업 참여',
      '아틀라시안 제품 등의 Saas 활용 협업',
    ],
  },
  {
    title: '티엠알파운더스',
    subtitle: 'TMR Founders, 2022.07 - 2023.07',
    logoSrc: '/images/logo/tmrfounders.png',
    descs: [
      '원스톱 창업 플랫폼 “내일의창업” 웹 개발 및 런칭',
      'NFC 기반 스마트 오더 솔루션 “태그히어” 서비스 제작',
      '아이템 태거 등 주요 컴포넌트 패키지 제작',
      '스타트업 서비스의 초기 기획부터 배포까지의 사이클 경험',
    ],
  },
  {
    title: '제로클래스랩',
    subtitle: 'ZeroClassLab, 2021.07 - 2022.07',
    logoSrc: '/images/logo/zeroclasslab.png',
    descs: [
      'Computer vision 기반 물류 관리 시스템 관리자 대시보드 풀스텍 제작',
      '무인 계산 솔루션 "버키" 앱 개발 및 유지보수',
    ],
  },
];

const parallaxIcons: ParallaxItemProps[] = [
  {
    speed: 20,
    position: {
      top: '70%',
      left: '-30%',
    },

    rotate: [0, 40],
    fontSize: 150,
    blur: 0,
    icon: '📱',
  },
  {
    speed: 25,
    position: {
      top: '10%',
      left: '-50%',
    },

    rotate: [0, 40],
    fontSize: 200,
    blur: 3,
    icon: '⏱️',
  },
  {
    speed: 10,
    position: {
      top: 0,
      right: '-10%',
    },
    rotate: [-40, 0],
    fontSize: 110,
    blur: 0,
    icon: '💻',
  },
  {
    speed: 5,
    position: {
      top: '50%',
      left: '70%',
    },
    rotate: [0, 60],
    fontSize: 70,
    blur: 2,
    opacity: 0.8,
    icon: '🧑‍💻',
  },
  {
    speed: 50,
    position: {
      top: '50%',
      right: '-50%',
    },
    rotate: [-30, 0],
    fontSize: 400,
    blur: 7,

    icon: '⌨️',
  },
];

function ExperienceSection({
  open = true,
  parallax = false,
}: {
  open?: boolean;
  parallax?: boolean;
}) {
  return (
    <Box position='relative'>
      <Typography variant='h2'>Experience</Typography>
      <Divider sx={{ mb: 2 }} />
      {experiences.map((experience, idx) => (
        <EduExpItem key={`experience-${idx}`} open={open} {...experience} />
      ))}
      {parallax &&
        parallaxIcons.map((parallaxIcon, idx) => (
          <ParallaxItem key={`parallax-exp-${idx}`} {...parallaxIcon} />
        ))}
    </Box>
  );
}

export default ExperienceSection;
