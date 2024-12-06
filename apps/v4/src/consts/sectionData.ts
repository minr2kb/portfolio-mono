import {
  EducationItemType,
  IntroductionItemType,
  type ExperienceItemType,
  type ProjectItemType,
  type SkillItemType,
} from '@/types';

export const introData: IntroductionItemType[] = [
  {
    title: '빠른 개발과 실험에 자신있습니다',
    subtitle: '6개월의 개발로 MAU 20만↑ 프로덕트의 기반을 만들었습니다.',
    content:
      '- 빠른 프로토타이핑을 통해 PMF를 확보하고, 1년만에 2개의 프로덕트를 성공적으로 런칭해본 경험이 있습니다.\n- 데이터 기반의 애자일한 실험 방식에도 익숙하며, 주도적으로 참여하여 새로운 피처를 논의하고, UX적인 개선점 찾기를 즐깁니다.\n- 비즈니스 요구 사항에 맞추어 3D, NFC, 시리얼 통신 등 도메인을 가리지 않고 엔지니어링적 문제를 해결합니다.',
  },
  {
    title: '효율적이고 자동화된 개발 환경을 추구합니다',
    subtitle: '디자인시스템 완전 자동화 파이프라인을 구축했습니다.',
    content:
      '- 초기 스타트업에서 경험한 시행착오들을 기반으로 스스로 더 나은 협업 체계를 고민하고 배워나가고 있습니다.\n- 빠른 확장성에 따라 떨어진 컴포넌트 재사용성을 위해 아토믹 디자인 패턴을 도입하여 모듈 수를 56% 가량 감소시켰습니다.\n- 디자인시스템에 아이콘 자동화 파이프라인, 유틸 개발을 통해 디자이너가 직접 코드 추가가 가능하도록 작업 효율을 높였습니다.',
  },
  {
    title: '개발을 제대로 즐기는 사람입니다',
    subtitle: '사소한 아이디어, 기술 트렌드 한 줄을 모두 연료 삼아 움직입니다.',
    content:
      '- 슬랙봇부터 회식 장소를 정하기 위한 월드컵 사이트 등, 재미있는 아이디어를 새로운 기술과 함께 구현하기를 즐깁니다.\n- 새로운 지식 습득 자체를 즐겨 악기 등 다양한 취미를 가지고 있으며, 적절한 컨텍스트 스위칭을 통해 번아웃 없이 지속적으로 도전 가능한 환경을 만들고 있습니다.\n- 현재 포트폴리오를 모노레포로 옮기며 module-federation기반 MFE에 대한 다양한 고민들을 시도해보고 있습니다.',
  },
];

export const educationData: EducationItemType = {
  title: 'Stony Brook University',
  subtitle: '한국뉴욕주립대, 2019 Spring - 2022 Fall',
  logoSrc: '/images/logo/sbu.png',
  major: 'Applied Mathematics and Statistics (응용 수학 통계학)',
  minor: 'Computer Science (컴퓨터 공학)',
  gpa: '3.98/4.0',
};

export const experiencesData: ExperienceItemType[] = [
  {
    title: '퍼블리',
    subtitle: '경영악화로 퇴사, 2023.07 - 2024.04',
    logoSrc: '/images/logo/publy.png',
    descs: [
      '개발자 커리어 플랫폼 "커리어리" 서비스 웹 및 앱 프론트 개발',
      '지표 단위 조직(Squad)으로 3주 단위 스프린트 업무 진행',
      '엔지니어 챕터 내의 정기적 스터디와 코드리뷰 경험',
      '디자인팀과의 협업을 통한 사내 디자인 시스템 작업',
      '아틀라시안 제품 등의 Saas 활용 협업',
    ],
  },
  {
    title: '티엠알파운더스',
    subtitle: '전 제로클래스랩, 2022.07 - 2023.07',
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
    subtitle: '피봇팅 이전 법인, 2021.07 - 2022.07',
    logoSrc: '/images/logo/zeroclasslab.png',
    descs: [
      'Computer vision 기반 물류 관리 시스템 관리자 대시보드 풀스텍 제작',
      '무인 계산 솔루션 "버키" 앱 개발 및 유지보수',
      '풀스택 업무를 통한 프로젝트 전반적인 이해',
    ],
  },
];

export const skillsData: SkillItemType[] = [
  {
    name: 'ReactJS',
    rating: 5,
    image: '/images/stackIcon/ReactJS.webp',
  },

  {
    name: 'NextJS',
    rating: 4,
    image: '/images/stackIcon/NextJS.webp',
  },

  {
    name: 'TypeScript',
    rating: 4,
    image: '/images/stackIcon/TypeScript.webp',
  },
  {
    name: 'JavaScript',
    rating: 5,
    image: '/images/stackIcon/JavaScript.webp',
  },
  {
    name: 'ReactNative',
    rating: 3,
    image: '/images/stackIcon/ReactNative.webp',
  },
  {
    name: 'Tanstack-Query',
    rating: 4,
    image: '/images/stackIcon/ReactQuery.webp',
  },
  {
    name: 'Material UI',
    rating: 5,
    image: '/images/stackIcon/MUI.webp',
  },
  {
    name: 'Tailwind CSS',
    rating: 4,
    image: '/images/stackIcon/Tailwind.webp',
  },
  {
    name: 'ThreeJS',
    rating: 3,
    image: '/images/stackIcon/ThreeJS.webp',
  },
  {
    name: 'Yarn Berry',
    rating: 3,
    image: '/images/stackIcon/Yarn.webp',
  },
  {
    name: 'Nx',
    rating: 3,
    image: '/images/stackIcon/NX.webp',
  },
  {
    name: 'Recoil',
    rating: 4,
    image: '/images/stackIcon/Recoil.webp',
  },
  {
    name: 'Jotai',
    rating: 5,
    image: '/images/stackIcon/Jotai.webp',
  },
  {
    name: 'Redux',
    rating: 3,
    image: '/images/stackIcon/Redux.webp',
  },
  {
    name: 'Github Action',
    rating: 3,
    image: '/images/stackIcon/Github.webp',
  },
  {
    name: 'Vite',
    rating: 4,
    image: '/images/stackIcon/Vite.webp',
  },
  {
    name: 'Webpack',
    rating: 3,
    image: '/images/stackIcon/Webpack.webp',
  },
  {
    name: 'EC2',
    rating: 2,
    image: '/images/stackIcon/EC2.webp',
  },
  {
    name: 'NodeJS',
    rating: 4,
    image: '/images/stackIcon/NodeJS.webp',
  },
  {
    name: 'Firebase',
    rating: 4,
    image: '/images/stackIcon/Firebase.webp',
  },
  {
    name: 'Pnpm',
    rating: 3,
    image: '/images/stackIcon/Pnpm.webp',
  },
  {
    name: 'Chakra UI',
    rating: 4,
    image: '/images/stackIcon/ChakraUI.webp',
  },
  {
    name: 'Turborepo',
    rating: 3,
    image: '/images/stackIcon/Turborepo.webp',
  },
  {
    name: 'Supabase',
    rating: 3,
    image: '/images/stackIcon/Supabase.webp',
  },
];

export const projectsData: ProjectItemType[] = [
  {
    id: 'careerly',
    title: '커리어리',
    description: `개발자 커뮤니티-채용 플랫폼`,
    details: [
      {
        content: '주도적 디자인 시스템 개발',
        children: [
          {
            content: '웹과 앱의 디자인 시스템이 분리되어 높아진 유지보수 비용에 대한 문제를 제기, 자동화를 제안',
          },
          {
            content:
              '피그마 플러그인, Bitbucket Pipelines를 사용하여 피그마 내의 아이콘 및 디자인 토큰이 코드에 자동 반영 가능하도록 파이프라인을 구축',
          },
          {
            content:
              '웹과 앱 컴포넌트 컨벤션 통일을 위해 ThemeProvider와 유틸을 개발하고, 스타일링 템플릿화를 통해 개발 시간을 30% 단축',
          },
        ],
      },

      {
        content: '다양한 접근법을 통한 프로덕트 개선',
        children: [
          {
            content:
              '앱 마이페이지 SectionList 성능을 개선하기 위해 lazy load와 useTransition을 모방한 timeout 적용으로 탭 컴포넌트의 블로킹 타임을 최대 4초 가량 개선',
          },
          {
            content:
              '채팅 서비스의 기능 중심 설계된 컴포넌트를 UI와 비즈니스 로직으로 분리해 20개 컴포넌트를 6개 공통 로직으로 축소',
          },
          {
            content:
              '광고 성과 측정을 개선하기 위해 이미지 prefetch, onLoad 핸들러, 스크롤 디바운싱을 적용해 20%의 비정상 이벤트를 제거.',
          },
        ],
      },
      {
        content: '스쿼드 단위의 협업 경험',
        children: [
          {
            content:
              '엔지니어링 문서를 통해 스프린트 작업 컨텍스트와 범위를 사전 논의하고, 이벤트 데이터 기반 유저 실험을 구현',
          },
          {
            content: 'tl;dv와 같은 Saas 도구를 직접 제안, 도입하여 회의록 작성 시간 75% 단축 ',
          },
          {
            content: 'MSA-gateway 아키텍쳐의 백엔드 작업을 함께 수행',
          },
        ],
      },
    ],
    image: '/images/projects/careerly.webp',
    link: 'https://careerly.co.kr',
    skills: ['ReactJS', 'NextJS', 'ReactNative', 'TypeScript', 'TailwindCSS', 'Recoil', 'Tanstack-Query', 'Redux'],
    cateTag: 'PUBLY',
  },
  {
    id: 'taghere',
    title: '태그히어',
    description: `NFC를 활용한 스마트 테이블 오더 서비스`,
    details: [
      {
        content: '프로젝트 개선에 대한 지속적 고민',
        children: [
          {
            content:
              '적은 인원간의 빠른 개발을 위해 NX 모노레포에 Nest 백엔드와 프론트 코드를 함께 구성 후 내부 유틸 패키지를 통해 타입 인터페이스를 공유',
          },
          {
            content:
              '초기 로드 속도 개선을 위한 라이프사이클 최적화, 코드 스플리팅, 이미지 로더 작업으로 TBT 400ms에서 40ms로 감소',
          },
          {
            content: '불필요한 useEffect를 비즈니스 로직 기반 핸들러로 및 훅으로 분리시켜 유지보수성, 생산성을 향상',
          },
        ],
      },
      {
        content: '다양한 웹 기술 적용 경험',
        children: [
          {
            content:
              '소켓을 통한 공유 장바구니 기능을 구현하였으며, 재연결 및 장바구니 동기화 로직을 통해 연결 안정성 확보',
          },
          {
            content: '주문 워크 보안을 위한 위치 검증, NFC 태그의 토큰 기반 접근 제어 방식 고안',
          },
          {
            content: 'Serial API를 활용하여 프린터 웹 출력 기능을 일주일 개발 끝에 출시하여 실제 고객 20% 추가 전환',
          },
        ],
      },
      {
        content: '비즈니스 협력 적극 참여',
        children: [
          {
            content:
              '메뉴 및 주문 관리를 위한 대시보드를 개발하여 컴퓨터에 익숙치 않은 유저들을 위한 DnD, 포스기를 고려한 터치 인터페이스 등, 피드백 기반 UI 실험 진행',
          },
          {
            content: '프린터 연동, 후불 결제 프로세스 프로토타입의 제작 및 비즈니스 우선순위 논의에 적극 기여',
          },
        ],
      },
    ],
    image: '/images/projects/taghere.webp',
    link: 'https://tag-here.info',
    skills: ['ReactJS', 'TypeScript', 'MUI', 'Jotai', 'NX', 'Jira', 'SocketIO'],
    cateTag: 'TMR Founders',
  },
  {
    id: 'tmr-founders',
    title: '내일의창업',
    description: `개인 자영업자 원스톱 창업 플랫폼`,
    details: [
      {
        content: '프로젝트 초기 구성',
        children: [
          {
            content:
              '초반 프로젝트 환경 세팅에 참여하였으며, 서비스가 늘어나는 시점에 yarn3 모노레포 환경을 선택하여 적은 인원이 유지 가능하도록 구성',
          },
          {
            content:
              'NextJS의 서버 배포를 위해 AWS와 Vercel에 관한 비교 분석, Github Action을 이용하여 배포 파이프라인을 구축',
          },
        ],
      },
      {
        content: '디자인시스템 아키텍처 개선',
        children: [
          {
            content:
              'Madge를 통해 모듈 디펜던시를 점검하여 컴포넌트의 재활용성이 떨어지는 것을 확인 후, 아토믹 디자인을 채택하여 모듈의 갯수 56% 가량 감소',
          },
          {
            content:
              'Material UI를 채택하여 디자인시스템으로 사용했으며, 디자이너와 협업하여 자주 사용하는 스타일을 템플릿화하여 개발 속도를 크게 향상',
          },
        ],
      },
    ],
    image: '/images/projects/tmr-founders.webp',
    link: 'https://tmr-founders.com/virtual-store',
    skills: [
      'ReactJS',
      'TypeScript',
      'Vite',
      'MUI',
      'Recoil',
      'NextJS',
      'Yarn Berry',
      'EC2',
      'Vercel',
      'Github Action',
      'SWR',
    ],
    cateTag: 'TMR Founders',
  },
  {
    id: 'portfolio-mono',
    title: '포트폴리오 MFE',
    description: `포트폴리오 버전관리를 위한 MFE 모노레포`,
    details: [
      {
        content: 'PNPM + Turborepo를 통해 모노레포 환경 구축 및 템플릿+스크립트를 통해 프로젝트 스캐폴딩 구현',
      },
      {
        content: 'module-federation을 통해 각 버전의 앱을 독립적으로 배포',
      },
      {
        content: 'type-build-utils 패키지를 제작하여 host앱에서 remote 모듈의 타입 정의를 사용할 수 있도록 구성',
      },
      {
        content: 'Cache-control을 통해 리모트 변경 사항이 바로 반영되도록 구성',
      },
    ],
    image: '/images/projects/portfolio-mono.webp',
    link: 'https://github.com/minr2kb/portfolio-mono',
    skills: ['ReactJS', 'TypeScript', 'Vite', 'MUI', 'ChakraUI', 'PNPM', 'Turborepo', 'Firebase'],
    cateTag: '사이드',
  },

  {
    id: 'tradeforce',
    title: '트레이드포스',
    description: `수출입 전문가 매칭 플랫폼, ‘트레이드포스’ 외주 개발`,
    details: [
      {
        content: '서비스 의뢰 페이지 부터, 의뢰를 관리하는 어드민 페이지 내부 퍼널을 구성하기 위한 고민들을 경험',
      },
      {
        content:
          '소수의 인원과 초기 프로젝트 구축부터 단기간의 빠른 개발을 위한 효율적인 스택 디자인을 구상하고 백엔드와의 긴밀한 협업을 통해 작업',
      },
      {
        content: '디자이너와 Figma로 협력하여 MUI를 활용한 간단한 타이포 위계 및 컴포넌트 디자인 시스템을 구축',
      },
    ],
    image: '/images/projects/tradeforce.webp',
    link: 'https://tradeforce.co.kr',
    skills: ['ReactJS', 'TypeScript', 'Recoil', 'MUI'],
    cateTag: '외주',
  },
  {
    id: 'recruit-crawler',
    title: '채용공고 스크래퍼',
    description: `구직 웹사이트 채용공고들을 한번에 모아보기 위한 데스크톱 스크래핑 앱`,
    details: [
      {
        content: 'Koa로 구성된 크롤링 서버를 CloudType 서비스를 활용하여 배포',
      },
      {
        content: 'request 갯수에 상한선을 두어, 동기/비동기 요청을 별개로 주도록 만들어 서버 부하를 방지',
      },
      {
        content: 'github에 release를 배포하여 자동 업데이트가 가능하도록 구현',
      },
      {
        content: '간단한 ipc통신으로 로컬 api를 제작하였으며, AbortController를 활용하여 알맞 요청 취소를 구현',
      },
    ],
    image: '/images/projects/recruit-crawler.webp',
    skills: ['ReactJS', 'Electron', 'TypeScript', 'Koa', 'Vite', 'MUI', 'Recoil', 'Tanstack-Query', 'CloudType'],
    link: 'https://github.com/minr2kb/recruit-crawler-app',
    cateTag: '사이드',
  },
  {
    id: 'worship-team-live',
    title: '찬양팀 라이브',
    description: `악기 연주자를 위한 라이브 소통 대시보드 서비스`,
    details: [
      {
        content: '미리 저장해둔 단축어를 활용하여 소통하는 방식으로, 최소한의 인증과 범용성을 위해 구글 OAuth를 활용',
      },
      {
        content: 'Firebase Realtime DB를 활용하여 실시간 요청 기능 구현',
      },
    ],
    image: '/images/projects/worship-team-live.webp',
    skills: ['ReactJS', 'TypeScript', 'MUI', 'Firebase'],
    link: 'https://worship-team-live.web.app',
    cateTag: '사이드',
  },
  {
    id: 'christmas-tree-decor',
    title: '크리스마스 트리 꾸미기',
    description: `QR을 활용해 실시간 스크린의 크리스마스 트리를 꾸미는 서비스`,
    details: [
      {
        content: 'Supabase를 통해 실시간 장식에 대한 데이터 저장 및 실시간 업데이트 기능 구현',
      },
      {
        content: 'QR 다운로드, 디버깅 단축키 등 편의성 기능 구현',
      },
    ],
    image: '/images/projects/christmas-tree-decor.webp',
    skills: ['ReactJS', 'TypeScript', 'ChakraUI', 'Supabase'],
    link: 'https://christmas-tree-decor.web.app',
    cateTag: '사이드',
  },
  {
    id: 'publy-dinner-worldcup',
    title: '퍼블리 회식 월드컵',
    description: `회사 근처 회식장소 선정을 위한 프로젝트`,
    details: [
      {
        content: 'Firebase를 통한 서버리스 환경 개발',
      },
      {
        content: '장소별/유저별 등 결과 필터링 기능 구현',
      },
      {
        content: '재치있는 UI를 위해 캐릭터 등의 UI 요소 추가',
      },
    ],
    image: '/images/projects/publy-dinner-worldcup.webp',
    skills: ['ReactJS', 'TypeScript', 'MUI', 'Firebase'],
    link: 'https://publy-dinner-worldcup.web.app',
    cateTag: '사이드',
  },
  {
    id: '3d-virtual-store',
    title: '3D 모의창업',
    description: `3D 인테리어 시안 제작 서비스`,
    details: [
      {
        content:
          '그리드 시스템을 직접 구현하여 인터렉션 환경을 구축했으며, 사용자가 쉽고 빠르게 시안을 제작할 수 있도록 최소화된 UI를 직접 설계/제작',
      },
      {
        content:
          'Polygon으로 구성된 평면에 대한 충돌시스템을 구현했으며, Suspense를 사용한 렌더링 로드 화면과 유저 액션 history를 구현하여 UX를 향상',
      },
    ],
    image: '/images/projects/3d-virtual-store.webp',
    skills: ['React.js', 'TypeScript', 'R3F', 'Three.js', 'MUI', 'Recoil'],
    cateTag: 'TMR Founders',
  },
  {
    id: 'zcl-admin-dashboard',
    title: 'ZCL 어드민 대시보드',
    description: `컴퓨터 비전 기반 자동 물류 관리 시스템의 관리자 대시보드`,
    details: [
      {
        content: 'React와 CoreUI를 활용하여 프론트를 기획 및 개발하였고, Flask와 MySQL을 활용하여 백엔드를 구축',
      },
      {
        content:
          '실시간으로 DB에 들어오는 물류 현황과 수요 예측 모델 데이터를 차트를 활용하여 시각화하는 기능에 중점을 두고 개발',
      },
    ],
    image: '/images/projects/zcl-admin-dashboard.webp',
    skills: ['ReactJS', 'JavaScript', 'Redux', 'CoreUI', 'Flask', 'MySQL', 'Heroku'],
    cateTag: 'ZeroClassLab',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: `MacOS의 데스크탑 화면을 모티브로 하여 제작한 디자인 프로젝트`,
    details: [
      {
        content: '각 앱들은 소형 사이드 프로젝트들로 구성',
      },

      {
        content:
          'Webpack의 require.context를 활용하여 NextJS처럼 개발환경의 컴포넌트 디렉토리 구조가 그대로 브라우저에 렌더링 되도록 환경을 구축',
      },
    ],
    image: '/images/projects/playground.webp',
    skills: ['ReactJS', 'TypeScript', 'Webpack', 'MUI', 'Firebase'],
    link: 'https://playground-adade.web.app',
    cateTag: '사이드',
  },
];

export const contactsData = {
  email: 'kbmin1129@gmail.com',
  github: 'https://github.com/minr2kb',
  instagram: 'https://www.instagram.com/minr2_kb',
  linkedIn: 'https://www.linkedin.com/in/kyungbae-min-5963a921b',
};
