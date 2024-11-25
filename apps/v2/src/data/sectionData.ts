import { type ProjectItemType, type SkillItemType, type EduExpItemType } from '@/types';

export const educationData: EduExpItemType = {
  title: 'Stony Brook University',
  subtitle: '한국뉴욕주립대, 2019 Spring - 2022 Fall',
  logoSrc: '/images/logo/sbu.png',
  descs: [
    'Bachelor of Science',
    '전공: Applied Mathematics and Statistics (응용 수학 통계학)',
    '부전공: Computer Science (컴퓨터 공학)',
    'CGPA: 3.98/4.0',
  ],
};

export const experiencesData: EduExpItemType[] = [
  {
    title: '퍼블리',
    subtitle: 'PUBLY, 2023.07 - 2024.04',
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

export const skillsData: SkillItemType[] = [
  {
    name: 'ReactJS',
    rating: 5,
    image: '/images/stackIcon/ReactJS.webp',
    description:
      '메인 기술 스택입니다. 라이프사이클을 잘 이해하고 있으며, 적절한 훅, 상태관리를 활용하여 렌더링 최적화를 할 수 있습니다. 좋은 유지보수성을 가지는 컴포넌트 설계를 위해 깊게 고민합니다.',
  },

  {
    name: 'NextJS',
    rating: 4,
    image: '/images/stackIcon/NextJS.webp',
    description:
      '리액트와 더불어 메인으로 다루는 기술스택입니다. NextAuth를 활용한 인증 구현, dynamic import를 통한 성능개선과 SSR상황에서의 다양한 트러블 슈팅 경험이 있습니다.',
  },

  {
    name: 'TypeScript',
    rating: 4,
    image: '/images/stackIcon/TypeScript.webp',
    description:
      '함수와 api 등에 적절한 타이핑이 가능하며, 다양한 타입 관련 문제 해결 경험을 통해 타입 건전성을 지키는 안전한 코드를 작성하고 있습니다.',
  },
  {
    name: 'JavaScript',
    rating: 5,
    image: '/images/stackIcon/JavaScript.webp',
    description:
      '한국어, 영어 다음으로 자신있는 언어입니다. 비동기 핸들링에 능숙하며, JS를 활용하여 노드, 웹 앱, 크롤러 등 다양한 프로젝트를 빌드했습니다.',
  },
  {
    name: 'ReactNative',
    rating: 3,
    image: '/images/stackIcon/ReactNative.webp',
    description:
      '리액트 지식을 기반으로 개발 가능합니다. 사내에서 진행한 Kotlin, Swift 스터디를 통해 네이티브 모듈 커스터마이징에 대한 리서치를 진행했습니다.',
  },
  {
    name: 'React-Query',
    rating: 4,
    image: '/images/stackIcon/ReactQuery.webp',
    description:
      '커스텀 훅을 활용하여 컨벤션을 지정하여 사용했습니다. API호출 최적화에 대한 고민을 바탕으로 사용했습니다.',
  },
  {
    name: 'Material UI',
    rating: 5,
    image: '/images/stackIcon/MUI.webp',
    description:
      '빠른 개발을 위해 도입했지만 익숙해지기에 꽤 많은 시간이 들었습니다. 오래 사용한 만큼, 내부 스타일과 인터페이스를 오버라이드 하는 수준의 커스터마이징이 가능합니다. 이를 통해 디자인 시스템에 대한 이해도를 키웠습니다.',
  },
  {
    name: 'Tailwind CSS',
    rating: 4,
    image: '/images/stackIcon/Tailwind.webp',
    description:
      '테일윈드에 디자인 토큰을 적용시켜 커스터마이징하여 사내 디자인시스템으로 사용했습니다. config와 플러그인을 통한 적절한 커스터마이징이 가능합니다.',
  },
  {
    name: 'ThreeJS',
    rating: 3,
    image: '/images/stackIcon/ThreeJS.webp',
    description:
      'R3F를 활용하여 리액트 3D 프로젝트를 구성해보았습니다. 연산을 통해 다각형 오브젝트의 충돌, 스택, 그리드 시스템 알고리즘을 구현했습니다.',
  },
  {
    name: 'Yarn Berry',
    rating: 3,
    image: '/images/stackIcon/Yarn.webp',
    description:
      "'내일의 창업' 모노레포 구성을 위해 처음 도입해보았습니다. 웹, 라이브러리 워크스페이스를 분리해 사용했으며, 추후 Nextjs 배포시 pnp방식의 한계로 nodeLinker를 수정하여 사용했습니다.",
  },
  {
    name: 'Nx',
    rating: 3,
    image: '/images/stackIcon/NX.webp',
    description:
      "'태그히어'서비스의 프론트와 node로 구성된 백엔드를 묶어 모노레포 환경을 구성했습니다. 각 프로젝트에 개별 배포 파이프라인을 붙여 사용했습니다.",
  },
  {
    name: 'Recoil',
    rating: 4,
    image: '/images/stackIcon/Recoil.webp',
    description:
      '전역상태관리를 위해 애용한 라이브러리입니다. selector, family 등을 활용하여 더 효율적인 상태관리 구조를 설계할 수 있습니다.',
  },
  {
    name: 'Jotai',
    rating: 5,
    image: '/images/stackIcon/Jotai.webp',
    description: 'Recoil의 사용 경험을 바탕으로 더 간소화된 사용을 위해 도입했습니다.',
  },
  {
    name: 'Redux',
    rating: 3,
    image: '/images/stackIcon/Redux.webp',
    description:
      '커리어리의 RN 프로젝트에서 대규모 상태 컨트롤을 하며 다양한 패턴을 사용했습니다. 추후 React-Query로의 마이그레이션 작업을 진행하기도 했습니다.',
  },
  {
    name: 'Github Action',
    rating: 3,
    image: '/images/stackIcon/Github.webp',
    description: '서비스의 배포 파이프라인 구성이 가능합니다.',
  },
  {
    name: 'Vite',
    rating: 3,
    image: '/images/stackIcon/Vite.webp',
    description: 'esbuild의 빠른 번들링의 이점을 활용하기 위해 webpack에서 마이그레이션을 진행했습니다.',
  },
  {
    name: 'Webpack',
    rating: 3,
    image: '/images/stackIcon/Webpack.webp',
    description: '적절한 config의 수정을 통해 필요한 결과를 얻어냅니다.',
  },
  {
    name: 'EC2',
    rating: 2,
    image: '/images/stackIcon/EC2.webp',
    description: 'Nextjs 프로젝트의 배포를 위해 사용했습니다. github actions 파이프라인으로 CD를 구축했습니다.',
  },
];

export const projectsData: ProjectItemType[] = [
  {
    title: '커리어리',
    description: `개발자 커뮤니티-채용 플랫폼`,
    details: [
      { content: '디자인 시스템을 주도적으로 개발했습니다', type: 'subtitle' },
      {
        content:
          '기존 디자인 시스템이 웹/앱 각각 분리되어 있어 유지보수 비용 문제로 사용성이 떨어지는 문제를 발견했습니다.',
        type: 'text',
      },
      {
        content:
          '아이콘과 디자인 토큰을 위한 파이프라인을 구축하고, 피그마에서 디자이너들이 직접 추가한 내용이 코드에 즉시 반영 가능하도록 만들었습니다.',
        type: 'text',
      },
      {
        content:
          '웹과 앱의 컨벤션을 통일하기 위해 ThemeProvider를 비롯한 내부 유틸을 개발하여 컴포넌트 스타일링을 템플릿화했습니다. 이는 작업 속도를 크게 향상시켜, 기존 두 명이 수행하던 작업을 혼자서도 가능하게 만들었습니다.',
        type: 'text',
      },
      {
        content: '추가적으로 모노레포 구축 혹은 스크립트를 통한 통합 환경 구축에 대한 로드맵을 공유하기도 했습니다.',
        type: 'text',
      },
      { content: '지속적인 서비스 개선에 관심을 두고 작업했습니다', type: 'subtitle' },
      {
        content:
          '안드로이드 플랫폼에서 마이페이지의 SectionList에서 성능 문제가 발생했고, lazy load와 순차적 렌더링 적용을 통해 블로킹 타임을 최대 4초 가량 개선시켰습니다.',
        type: 'text',
      },
      {
        content:
          '채팅 서비스에서 기능 중심 설계로 인해 상태, 역할별 20개가 넘는 중복 컴포넌트가 존재했고, 이를 UI와 비즈니스 로직을 분리시켜 6개의 공통 로직으로 묶어냈습니다. 이를 통해 유지보수성을 향상시켰습니다.',
        type: 'text',
      },
      {
        content:
          '광고 로드 에러로 인해 서비스 성과 측정이 불확실한 문제 해결을 위해 이미지를 매뉴얼하게 prefetch하여 로드 우선 순위를 주었고, onLoad 핸들러를 주어 더 정확한 성과 측정을 가능하도록 만들었습니다.',
        type: 'text',
      },
      { content: '스쿼드 단위의 협업을 경험했습니다', type: 'subtitle' },
      {
        content: '스쿼드 단위로 3주 스프린트 작업을 진행했으며, 이벤트 데이터에 기반한 유저 실험을 구현했습니다.',
        type: 'text',
      },
      {
        content:
          'Jira, 컨플루언스를 비롯한 다양한 Saas를 적극 활용해 태스크 관리, 협업을 했으며, tl;dv와 같은 도구를 직접 제안/도입하여 생산성에 기여하기도 했습니다. ',
        type: 'text',
      },
      {
        content: '필요에 따라 MSA-gateway로 구성된 백엔드 작업을 함께 수행했습니다.',
        type: 'text',
      },
    ],
    image: '/images/projects/careerly.webp',
    link: 'https://careerly.co.kr',
    skills: ['ReactJS', 'NextJS', 'ReactNative', 'TypeScript', 'TailwindCSS', 'Recoil', 'React-Query', 'Redux'],
    cateTag: 'PUBLY',
  },
  {
    title: '태그히어',
    description: `NFC를 활용한 스마트 테이블 오더 서비스`,
    details: [
      { content: '프로젝트의 셋팅과 개선에 대한 지속적인 고민을 했습니다', type: 'subtitle' },
      {
        content:
          '적은 인원간의 빠른 개발을 위해 NX 모노레포로 함께 구성된 Nest 백엔드와 TypeScript를 활용하여 인터페이스를 공유하고 타이핑을 진행했습니다.',
        type: 'text',
      },
      {
        content:
          '초기 로드 속도 향상을 위해 내부 라이프사이클 개선, 코드 스플리팅과 이미지 로더 개선 작업 등을 진행하였으며, TBT를 400ms 대에서 40ms대까지 감소시켰습니다.',
        type: 'text',
      },
      {
        content:
          '메인 기능 모듈에서 useEffect의 남용으로 인해 라이프사이클 관리가 어려워졌고, 이를 비즈니스 로직 기반 핸들러로 분리하여 로직을 정리한적이 있습니다.',
        type: 'text',
      },
      { content: '웹과 관련된 다양한 기술을 시도해보았습니다', type: 'subtitle' },
      {
        content:
          '대부분 네이티브로 구현하는 기능들을 웹으로 풀어내며 로컬 스토리지 보안, 소켓 세션 끊김, 토큰 유지 문제 등 수많은 트러블 슈팅을 경험했고, 웹과 브라우저에 대한 이해도를 크게 높였습니다.',
        type: 'text',
      },
      {
        content:
          '기존 QR의 단점을 대신하여, NFC보안을 위한 장치가 필요했고, 위치 검증 및 상태 관리를 통한 접근 제어 방식을 직접 고안하였습니다.',
        type: 'text',
      },
      {
        content: 'Serial API를 활용하여 브라우저 위에서도 프린터 등의 하드웨어가 제어가능하도록 기능을 개발했습니다.',
        type: 'text',
      },
      { content: '비즈니스적 실험에 적극 참여했습니다.', type: 'subtitle' },
      {
        content:
          '메뉴 및 주문 관리를 위한 대시보드를 개발했으며, 컴퓨터에 익숙치 못한 유저(사장님)들이 사용하기 편하도록 다양한 UX적 실험을 진행했습니다. 직관성을 위한 UI 개선과 DnD 도입, 포스기를 고려한 터치 인터페이스 등, 피드백을 받아 주도적으로 개선했습니다.',
        type: 'text',
      },
      {
        content:
          '직접 하루 종일 서비스 사용 가게에서 사용패턴을 관찰하러 나간 적이 있습니다. 이를 통해 주방측에서는 하드웨어적 지원이 필요할 수 있다는 논의를 하여, 직접 프린터 연동 공부를 통해 기능을 출시시켰습니다.',
        type: 'text',
      },
    ],
    image: '/images/projects/taghere.webp',
    link: 'https://tag-here.com',
    skills: ['ReactJS', 'TypeScript', 'MUI', 'Jotai', 'NX', 'Jira', 'SocketIO'],
    cateTag: 'TMR Founders',
  },
  {
    title: '내일의창업',
    description: `사이드 자영업자 원스톱 창업 플랫폼`,
    details: [
      {
        content:
          '전반적인 프로젝트 환경 셋팅에 참여하였으며, 패키지 환경 통합을 위해 yarn3 모노레포 환경을 구축하여 작업했습니다.',
        type: 'text',
      },
      {
        content:
          'NextJS의 SSR환경 배포를 위해 AWS와 Vercel에 관한 논의를 하였고, Github Action을 이용하여 배포 파이프라인을 구축하였습니다. ',
        type: 'text',
      },
      {
        content:
          '모듈 디펜던시를 모니터링하며 컴포넌트의 재활용성이 떨어지는 것을 확인하였고, 아키텍처로 아토믹 디자인을 채택하여 모듈의 갯수를 56% 가량 감소시킬 수 있었습니다.',
        type: 'text',
      },
      {
        content:
          'Material UI를 커스터마이징하여 디자인시스템으로 사용했고, 주요 라이브러리를 npm에 배포하여 사용했습니다. 이를 통해 디자인시스템에 대한 이해도를 크게 높였습니다.',
        type: 'text',
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
    ],
    cateTag: 'TMR Founders',
  },
  {
    title: 'ZCL 어드민 대시보드',
    description: `컴퓨터 비전 기반 자동 물류 관리 시스템의 관리자 대시보드`,
    details: [
      {
        content:
          'React와 CoreUI를 활용하여 프론트를 기획 및 개발하였고, Flask와 MySQL을 활용하여 백엔드를 구축하였습니다.',
        type: 'text',
      },
      {
        content:
          '실시간으로 DB에 들어오는 물류 현황과 수요 예측 모델 데이터를 차트를 활용하여 시각화하는 기능에 중점을 두었습니다.',
        type: 'text',
      },
    ],
    image: '/images/projects/zcl-admin-dashboard.webp',
    skills: ['ReactJS', 'JavaScript', 'Redux', 'CoreUI', 'Flask', 'MySQL', 'Heroku'],
    cateTag: 'ZeroClassLab',
  },
  {
    title: '트레이드포스',
    description: `수출입 전문가 매칭 플랫폼, ‘트레이드포스’ 외주 개발`,
    details: [
      {
        content:
          '서비스 의뢰 페이지 부터, 의뢰를 관리하는 어드민 페이지 내부 퍼널을 구성하기 위한 고민들을 경험했습니다.',
        type: 'text',
      },
      {
        content:
          '소수의 인원과 초기 프로젝트 구축부터 단기간의 빠른 개발을 위한 효율적인 스택 디자인을 구상하고 백엔드와의 긴밀한 협업을 통해 작업했습니다.',
        type: 'text',
      },
      {
        content: '디자이너와 Figma로 협력하여 MUI를 활용한 타이포 위계 및 컴포넌트 디자인 시스템을 구축했습니다.',
        type: 'text',
      },
    ],
    image: '/images/projects/tradeforce.webp',
    link: 'https://tradeforce.co.kr',
    skills: ['ReactJS', 'TypeScript', 'Recoil', 'MUI'],
    cateTag: '외주',
  },
  {
    title: '채용공고 스크래퍼',
    description: `구직 웹사이트 채용공고들을 한번에 모아보기 위한 데스크톱 스크래핑 앱`,
    details: [
      {
        content:
          'Koa로 구성된 크롤링 서버(https://github.com/minr2kb/recruit-crawler-back)를 CloudType 서비스를 활용하여 배포했습니다.',
        type: 'text',
      },
      {
        content: 'request 갯수에 상한선을 두어, 동기/비동기 요청을 별개로 주도록 만들어 서버 부하를 방지시켰습니다.',
        type: 'text',
      },
      {
        content: 'github에 release를 배포하여 자동 업데이트가 가능하도록 구현했습니다.',
        type: 'text',
      },
      {
        content: '간단한 ipc통신으로 로컬 api를 구현했고, AbortController를 활용하여 요청 취소를 구현했습니다.',
        type: 'text',
      },
    ],
    image: '/images/projects/recruit-crawler.webp',
    skills: ['ReactJS', 'Electron', 'TypeScript', 'Koa', 'Vite', 'MUI', 'Recoil', 'React-Query', 'CloudType'],
    link: 'https://github.com/minr2kb/recruit-crawler-app',
    cateTag: '사이드',
  },
  {
    title: '3D 모의창업',
    description: `3D 인테리어 시안 제작 서비스`,
    details: [
      {
        content:
          '그리드 시스템을 직접 구현하여 인터렉션 환경을 구축했고, 사용자가 쉽고 빠르게 시안을 제작할 수 있도록 최소화된 UI를 직접 설계/제작하였습니다.',
        type: 'text',
      },
      {
        content:
          'Polygon으로 구성된 평면에 대한 충돌시스템을 구현했으며, Suspense를 사용한 렌더링 로드 화면과 유저 액션 history를 구현하여 UX를 향상시켰습니다.',
        type: 'text',
      },
    ],
    image: '/images/projects/3d-virtual-store.webp',
    link: 'https://virtual-store-3d.web.app/',
    skills: ['ReactJS', 'TypeScript', 'ThreeJS', 'Recoil', 'MUI'],
    cateTag: 'TMR Founders',
  },
  {
    title: '찬양팀 라이브',
    description: `악기 연주자를 위한 라이브 소통 대시보드 서비스`,
    details: [
      { content: '직접 Figma를 활용하여 UI를 기획 및 디자인했습니다.', type: 'text' },
      {
        content:
          '미리 저장해둔 단축어를 활용하여 소통하는 방식으로, 최소한의 인증과 범용성을 위해 구글 OAuth를 활용했습니다.',
        type: 'text',
      },
      {
        content: 'Firebase Realtime DB를 활용하여 실시간 요청 데이터를 관리하였습니다.',
        type: 'text',
      },
    ],
    image: '/images/projects/worship-team-live.webp',
    skills: ['ReactJS', 'TypeScript', 'MUI', 'Firebase'],
    link: 'https://worship-team-live.web.app',
    cateTag: '사이드',
  },
  {
    title: 'Playground',
    description: `MacOS의 데스크탑 화면을 모티브로 하여 제작한 디자인 프로젝트`,
    details: [
      {
        content: '각 앱들은 소형 사이드 프로젝트들로 구성되어있습니다.',
        type: 'text',
      },

      {
        content:
          'Webpack을 활용하여 NextJS처럼 개발환경의 컴포넌트 디렉토리 구조가 그대로 브라우저에 렌더링 되도록 환경을 구축하였습니다.',
        type: 'text',
      },
    ],
    image: '/images/projects/playground.webp',
    skills: ['ReactJS', 'TypeScript', 'Webpack', 'MUI', 'Firebase'],
    link: 'https://playground-adade.web.app',
    cateTag: '사이드',
  },

  //   {
  //     title: 'Plog-In',
  //     description: `Plog-In은 플로깅을 통해 환경을 보호하고, 기록을 관리하는 플랫폼입니다.`,
  //     details: [
  //       //   '72시간 동안 진행된 해커톤에서 개발한 프로젝트입니다. 빠른 개발을 위해 JavaScript로 프로젝트를 구성하였으며 구글맵 API를 활용하여 위치를 트래킹 할 수 있도록 구현하였습니다.',
  //       //   '플로깅을 시작하면 실시간으로 시간과 위치를 기록하고, 자바스크립트로 구현한 거리 계산 알고리즘을 기반으로 거리와 경로를 기록합니다.',
  //       //   'Cleanest UI/UX분야에서 수상을 하였습니다.',
  //     ],
  //     image: '/images/projects/plog-in.webp',
  //     skills: ['ReactJS', 'JavaScript', 'FastAPI', 'GCP', 'MongoDB'],
  //     link: 'https://github.com/minr2kb/2022-sbu-hackathon',
  //     cateTag: 'Hackathon',
  //   },

  //   {
  //     title: 'E4E - Email for Earth',
  //     description: `삭제되지 않은 이메일들이 서버에 쌓이며 큰 전력을 소비하고 있다는 환경적 이슈에 착안하여 기획한 웹 캠페인으로, 유저가 쉽게 이메일을 삭제할 수 있도록 도와주는 서비스입니다.`,
  //     details: [
  //       //   '24시간 동안 진행된 해커톤에서 개발한 프로젝트입니다.',
  //       //   'Gmail API를 활용하여 사용자의 이메일에 접근했으며, 자체적으로 제공한 UI를 통해 유저가 부여한 조건에 맞추어 이메일을 삭제합니다.',
  //       //   '캠페인적인 요소를 위해 감소된 CO2 배출량 계산등의 UI가 추가되었습니다.',
  //       //   '최우수상을 수상하였습니다.',
  //     ],
  //     image: '/images/projects/e4e.webp',
  //     skills: ['ReactJS', 'JavaScript', 'GitHub Pages', 'FastAPI'],
  //     link: 'https://github.com/minr2kb/22S-hackathon-team5',
  //     cateTag: 'Hackathon',
  //   },
  //   {
  //     title: '버키',
  //     description: `무인 쇼핑 결제 플랫폼 앱, "버키" 개발에 참여했습니다.`,
  //     details: [
  //       //   'ReactNative를 활용하여 크로스 플랫폼 환경에서 개발하였으며, Figma를 활용하여 UI를 직접 리팩토링하여 상품 구매내역 관리페이지를 크게 개선할 수 있었습니다.',
  //     ],
  //     image: '/images/projects/buckey.webp',
  //     skills: ['ReactNative', 'JavaScript', 'Figma'],
  //     cateTag: 'ZeroClassLab',
  //   },
  //   {
  //     title: '종강 카운터',
  //     description: `학기 중 사이드 프로젝트로 제작한 종강까지 남은 일수를 알려주는 웹 앱입니다.`,
  //     details: [
  //       //   '날짜를 직접 지정할 수 있으며, 실시간 채팅과 좋아요 기능을 통해 익명의 대학생들이 소통할 수 있는 오픈된 공간을 제공했습니다.',
  //       //   'ReactJS와 Firebase를 활용하여 개발하였으며, Firebase의 Realtime DB를 활용하여 실시간 채팅 데이터를 관리하였습니다.',
  //     ],
  //     image: '/images/projects/jongang-counter.webp',
  //     skills: ['ReactJS', 'JavaScript', 'Firebase'],
  //     link: 'https://jongang-counter.web.app',
  //     cateTag: '사이드',
  //   },
  //   {
  //     title: 'RC 이벤트 - Mental Health',
  //     description: `대학교 교내 이벤트를 위하여 제작한 고민 게시판 프로젝트입니다.`,
  //     details: [
  //       //   '학교 구글 계정 로그인을 통하여 사이드의 고민을 게시글로 업로드, 수정 및 댓글을 달 수 있도록 구성되어있습니다.',
  //       //   'ReactJS와 Firebase를 활용하여 개발하였으며, Firebase의 Firestore를 활용하여 게시글 데이터를 관리하였습니다.',
  //     ],
  //     image: '/images/projects/mental-health.webp',
  //     skills: ['ReactJS', 'JavaScript', 'Firebase'],
  //     link: 'https://mental-health-rc2021f.web.app',
  //     cateTag: '사이드',
  //   },
  //   {
  //     title: 'RC 이벤트 - Entertainment Recommendation',
  //     description: `대학교 교내 이벤트를 위하여 제작한 폼 프로젝트입니다. 음악, 영화 등의 엔터테인먼트를 학생들로부터 추천받기 위해 제작되었습니다.`,
  //     details: [
  //       //   '받아야하는 정보 특성상 구글폼 활용시 데이터 입력 및 취합이 번거로워 질 것을 고려하여 자체적으로 폼을 제작했습니다.',
  //       //   'Youtube API를 활용하여 폼 추가시에 자동으로 영상을 쿼리하여 링크를 연결시키도록 구현했습니다.',
  //       //   '추천 결과를 장르별, 사람별 구분하여 볼 수 있도록 뷰를 구성하였으며, 관리자를 위한 랜덤 추첨 기능도 구현하였습니다.',
  //     ],
  //     image: '/images/projects/entertainment-recommend.webp',
  //     skills: ['ReactJS', 'JavaScript', 'Firebase'],
  //     link: 'https://entertainment-recommend-form.web.app',
  //     cateTag: '사이드',
  //   },
  //   {
  //     title: '청남교회 앱',
  //     description: `출석하고 있는 교회를 위한 공지 앱을 제작하였습니다.`,
  //     details: [
  //       //   '교인 인증과 관리자 등의 권한을 분리하여 공지 게시판 및 대시보드를 제공하도록 구현하였습니다.',
  //       //   '주 사용층의 연령대가 높을 것을 고려하여 직관성에 중점을 두어 기능 및 UI를 기획했습니다.',
  //       //   'Flutter와 Dart를 활용하여 개발하였으며, Firebase의 FCM을 통해 푸시알림을 구현하였습니다.',
  //     ],
  //     image: '/images/projects/cheongnam.webp',
  //     skills: ['Flutter', 'Dart', 'Firebase', 'FCM'],
  //     cateTag: '사이드',
  //   },
];

export const contactsData = {
  mobile: '010-4554-1664',
  email: 'kbmin1129@gmail.com',
  githubId: 'minr2kb',
  instagramId: 'minr2_kb',
  linkedIn: 'kyungbae-min-5963a921b',
};
