import { ProjectItemType } from '../types';

export const projectsData: ProjectItemType[] = [
  {
    id: 'nationa-design-system',
    title: 'Nation A 디자인 시스템',
    description: `사내 디자인 시스템 구축 프로젝트`,
    details: [
      {
        content: 'ArkUI + PandaCSS 기반 스타일링 체계 도입',
        children: [
          {
            content:
              'Emotion과 Tailwind의 한계를 보완하기 위해 PandaCSS 주도적 도입: SSR 최적화, 토큰 커버리지 향상, 타입 안전성 확보',
          },
          {
            content:
              'cva, sva, recipe 유틸로 variant 중심의 구조화된 스타일 패턴을 구축',
          },
          {
            content:
              'ArkUI를 활용해 상태 로직 관리를 최소화하고, slot 기반의 컴포넌트 방식 차용',
          },
        ],
      },
      {
        content: '앱과 시스템의 역할 분리 전략',
        children: [
          {
            content:
              '디자인 시스템은 UI 컴포넌트와 theme 정의를, 앱은 Stack/Flex 기반 레이아웃 조립에 집중하도록 분리 설계',
          },
          {
            content:
              'Polymorphic HOC를 적용해 <Box as="section" /> 등 시맨틱 태그 대응이 가능한 유틸 컴포넌트 제공',
          },
          {
            content:
              'tokens, icons, ui를 패키지로 분리하고, 모노레포 기반으로 관리해 유지보수성과 확장성을 확보',
          },
        ],
      },
      {
        content: '자동화된 빌드 · 배포 환경',
        children: [
          {
            content:
              'Figma의 Tokens Studio, Icona를 연동해 디자인 토큰과 아이콘을 자동 반영하는 파이프라인을 구축',
          },
          {
            content:
              'Turborepo + Vite/tsup 으로 간소화된 멀티 패키지 빌드 환경 구성',
          },
          {
            content:
              'Changesets로 npm 릴리즈 흐름을 자동화하고, Storybook을 통해 디자인 시스템 공유',
          },
        ],
      },
    ],
    image: '/images/projects/nationa-design-system.png',
    link: 'https://github.com/Nation-A/design-system',
    skills: [
      'TypeScript',
      'PandaCSS',
      'Tokens Studio',
      'Icona',
      'Storybook',
      'Changesets',
      'PNPM',
      'Turborepo',
      'Figma',
    ],
    cateTag: 'Nation A',
  },
  {
    id: 'hey-d',
    title: 'Hey.D',
    description: `3D 모션 기반의 AI 채팅 서비스`,
    details: [
      {
        content: '2.0 버전 개발 리드',
        children: [
          {
            content:
              '메인피드 초기 속도 개선 및 웹 마케팅 작업을 고려한 Next.js 전환 및 메인피드 ISR 최적화로 초기 로딩 속도 약 45% 개선',
          },
          {
            content:
              'zustand가 혼용되던 remote계층을 tanstack-query의 queryOptions를 활용하여 전체 재정의. 서버상태 전역 동기화 및 캐싱 안정성 개선',
          },
          {
            content:
              'Jira 기반 워크플로와 브랜치 전략 도입으로 병목 제거 및 작업 추적 체계 확립',
          },
          {
            content:
              'S3 단일 정적 배포에서 SSR과 정적 리소스 캐시 정책이 충돌해 배포 유연성이 떨어지던 환경을, Vercel(SSR/ISR)과 전용 CDN(정적 리소스)로 분리 설계해 동일 도메인 무중단 마이그레이션 완료',
          },
        ],
      },
      {
        content: '핵심 로직 모듈 개발',
        children: [
          {
            content:
              '자동번역 기능 구현을 위해 정적 분석을 통한 번역 데이터 추출 파이프라인과 페이지별 텍스트 등록 및 배치 처리를 통한 동적 번역 모듈 구현',
          },
          {
            content:
              'Cognito와 Firebase 혼합 인증 구조로 인한 버그를 AuthService로 통합 캡슐화하여 인증 관련 오류를 90% 감소',
          },
          {
            content:
              'Webview 환경에서 산발적인 브릿지 호출 방식을 통합 브릿지 통신 모듈로 해결',
          },
          {
            content:
              'Analytics sheet로 부터의 attribute 타입 추출 스크립트 및 통합 analytics 모듈 제작으로 코드 일관성 확보 및 작업속도 70% 이상 개선',
          },
        ],
      },
    ],
    image: '/images/projects/hey-d.webp',
    link: 'https://hey-d.ai',
    skills: [
      'ReactJS',
      'NextJS',
      'TypeScript',
      'Zustand',
      'Tanstack Query',
      'ThreeJS',
      'PandaCSS',
      'Emotion',
      'Github Action',
      'AWS',
      'Vercel',
      'Tailwind',
      'Shadcn',
      'Prisma',
      'MariaDB',
      'DynamoDB',
    ],
    cateTag: 'Nation A',
  },
  {
    id: 'heyd-admin',
    title: 'Hey.D Admin',
    description: `AI 채팅 서비스의 운영/콘텐츠 관리용 백오피스`,
    details: [
      {
        content:
          'React + Django 기반의 백오피스를 Next.js 풀스택 구조로 마이그레이션',
        children: [
          {
            content:
              '기존 운영 도구를 Next.js 기반으로 전환하여 프론트-백엔드 통합 유지보수 체계 마련',
          },
          {
            content:
              '인증, 콘텐츠, 채팅 로그 등 기능별 API를 Prisma 기반으로 구조화하고, 타입 일관성을 확보',
          },
        ],
      },
      {
        content: '대시보드 특성에 맞춘 성능 최적화 전략',
        children: [
          {
            content:
              '대량의 테이블을 조인해야 하는 통계성 화면에서는 Prisma의 제약을 극복하기 위해 raw query를 적절히 병행하여 쿼리 성능을 확보',
          },
          {
            content:
              'MUI 기반 UI를 Shadcn + Tanstack Table 조합으로 개선하고, 정렬·가상화 등 고성능 인터랙션 구현',
          },
          {
            content:
              '메인피드 편집, 번역 수정 등 개발 리소스를 최소화한 동적 실험 기능 제공',
          },
        ],
      },
    ],
    image: '/images/projects/heyd-admin.png',
    skills: [
      'NextJS',
      'TypeScript',
      'Shadcn',
      'Tanstack Table',
      'Prisma',
      'MariaDB',
      'DynamoDB',
    ],
    cateTag: 'Nation A',
    link: 'https://admin.hey-d.ai',
  },
  {
    id: 'careerly',
    title: '커리어리',
    description: `개발자 커뮤니티-채용 플랫폼`,
    details: [
      {
        content: '디자인 시스템 작업 효율 개선',
        children: [
          {
            content:
              'submodule을 통한 Tailwind config 기반의 토큰 적용 방식 개선 및 교체 작업을 통해 토큰 커버리지 개선',
          },
        ],
      },
      {
        content: '프로덕트 성능, 안정성 개선',
        children: [
          {
            content:
              '마이페이지 SectionList 렌더링 시 탭 전환마다 전체 UI가 동기 렌더링되어 최대 4초간 메인 스레드가 블로킹되던 문제를, lazy load와 useTransition 패턴을 모방한 timeout 기반 점진적 렌더링으로 전환해 블로킹 타임을 개선',
          },
          {
            content:
              '상태와 타입별 20여 개로 분리돼 중복·불일치가 발생하던 채팅 메시지 버블을  variant 분기와 비즈니스 로직 수직 통합으로 6개로 축소하고 UI·로직 일관성과 확장성을 확보',
          },
          {
            content:
              '피드 광고에서 이미지 로딩 완료 전 노출로 집계돼 약 20%의 비정상 이벤트가 발생하던 문제를, 이미지 prefetch·onLoad 기반 노출 트리거와 스크롤 디바운싱 적용으로 정확한 노출 시점만 집계되도록 개선해 오류 이벤트를 20% 제거.',
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
            content:
              '스쿼드 간의 release 단위 배포를 위한 브랜치 전략 경험 및 배포 논의 참여',
          },
          {
            content: 'MSA-gateway 아키텍쳐의 백엔드 작업을 함께 수행',
          },
        ],
      },
    ],
    image: '/images/projects/careerly.webp',
    link: 'https://careerly.co.kr',
    skills: [
      'ReactJS',
      'NextJS',
      'ReactNative',
      'TypeScript',
      'TailwindCSS',
      'Recoil',
      'Tanstack-Query',
      'Redux',
    ],
    cateTag: 'PUBLY',
  },
  {
    id: 'careerly-design-system',
    title: '커리어리 디자인 시스템',
    description: `커리어리 서비스의 디자인/토큰 시스템`,
    details: [
      {
        content: '디자인 시스템 자동화 및 통합',
        children: [
          {
            content:
              '디자인 시스템의 일관성과 효율성을 높이기 위해 디자인 토큰과 아이콘 관리 자동화 제안 및 구현',
          },
          {
            content:
              'Figma 플러그인(Tokens Studio, Icona)과 Style Dictionary를 활용하여 디자인 토큰 및 아이콘을 웹과 앱에 맞게 변환 및 배포',
          },
          {
            content:
              'Bitbucket Pipelines를 이용하여 PR 머지 시 자동으로 토큰과 아이콘이 배포되는 CI/CD 파이프라인 구축',
          },
        ],
      },
      {
        content: '프로덕트 성능 및 효율 개선',
        children: [
          {
            content:
              'ThemeProvider 및 유틸리티 함수를 개발하여 스타일링을 템플릿화하고 유지보수 및 개발 시간을 30% 단축',
          },
          {
            content:
              '디자인 시스템 변경 사항이 즉각적으로 모든 플랫폼에 반영되도록 프로세스 최적화',
          },
          {
            content:
              '디자인 토큰 서브모듈화를 통해 코드베이스와 디자인 자산 간의 연계성을 강화',
          },
        ],
      },
      {
        content: '효율적인 협업 환경 구축',
        children: [
          {
            content:
              '디자이너와 개발자 간의 원활한 협업을 위해 디자인 자산의 중앙 집중식 관리 환경 제공',
          },
          {
            content: '설계와 구현 간의 간극을 줄이기 위한 기술 문서 작성',
          },
        ],
      },
    ],
    image: '/images/projects/careerly-design-system.webp',
    link: 'https://github.com/publy-korea/design-tokens',
    skills: [
      'ReactJS',
      'ReactNative',
      'TypeScript',
      'TailwindCSS',
      'NodeJS',
      'CVA',
      'Tokens Studio',
      'Bitbucket',
      'Storybook',
      'Figma',
    ],
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
            content:
              '불필요한 useEffect를 비즈니스 로직 기반 핸들러로 및 훅으로 분리시켜 유지보수성, 생산성을 향상',
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
            content:
              '주문 워크 보안을 위한 위치 검증, NFC 태그의 토큰 기반 접근 제어 방식 고안',
          },
          {
            content:
              'Serial API를 활용하여 프린터 웹 출력 기능을 일주일 개발 끝에 출시하여 실제 고객 20% 추가 전환',
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
        content: '확장성 있는 모노레포 구조',
        children: [
          {
            content:
              'PNPM + Turborepo를 활용한 모노레포 환경 구성과 템플릿 기반 스캐폴딩 cli로 새로운 버전의 포트폴리오 앱을 독립 환경에서 빠르게 생성 가능',
          },
          {
            content:
              '자체 제작 type-gen 패키지를 통한 리모트 앱 타입 정의 자동 추출',
          },
        ],
      },
      {
        content: '마이크로 프론트엔드 아키텍처',
        children: [
          {
            content:
              'Vite Module Federation을 활용한 런타임 통합으로 각 버전의 포트폴리오를 독립적으로 개발/배포 가능',
          },
          {
            content: 'Cache-control을 통한 리모트 앱 변경사항 즉시 반영',
          },
        ],
      },
      {
        content: '최적화된 개발 경험',
        children: [
          {
            content:
              '독립적인 개발 서버 구동으로 빠른 HMR 지원 및 공통 템플릿 스캐폴딩을 통한 일관된 프로젝트 구조',
          },
          {
            content:
              'Firebase Hosting의 CDN 기반 배포와 getAssetsUrl() 유틸을 통해 remote앱의 에셋을 안정적으로 로드',
          },
        ],
      },
    ],
    image: '/images/projects/portfolio-mono.webp',
    link: 'https://github.com/minr2kb/portfolio-mono',
    skills: [
      'ReactJS',
      'TypeScript',
      'Vite',
      'MUI',
      'ChakraUI',
      'PNPM',
      'Turborepo',
      'Firebase',
    ],
    cateTag: '사이드',
  },
  {
    id: 'moon-cheese',
    title: 'FE 모의과제: Moon Cheese',
    description: `요구사항을 각자 해결하고, 결과를 공유하며 비교·토론하는 성장형 모의과제`,
    details: [
      {
        content: '프로젝트 개요',
        children: [
          {
            content: 'Toss FE Accelerator 후속 프로젝트로 진행',
          },
          {
            content:
              '실무적 요구사항을 바탕으로 여러 개발자가 각자 솔루션을 구현하고 피드백하는 협업형 과제로 3인 팀으로 문제 구성',
          },
          {
            content: '모의 서버, 테스팅, UI로 역할 분담',
          },
        ],
      },
      {
        content: 'UI 파트 전담',
        children: [
          {
            content:
              'UI 파트를 전담하여 요구사항을 충족하는 화면 및 컴포넌트 구현',
          },
          {
            content:
              '디자인시스템 경험을 바탕으로 ui-lib 설계 및 추상화 작업 주도',
          },
          {
            content:
              '도전자들이 쉽게 활용할 수 있는 컴포넌트 구조와 스타일링 패턴 정립',
          },
        ],
      },
    ],
    image: '/images/projects/moon-cheese.webp',
    skills: [
      'React.js',
      'TypeScript',
      'Yarn Berry',
      'Vite',
      'PandaCSS',
      'ArkUI',
      'msw',
    ],
    link: 'https://news.hada.io/topic?id=22494',
    cateTag: '사이드',
  },
  {
    id: 'christmas-tree-decor',
    title: '크리스마스 트리 꾸미기',
    description: `QR을 활용해 실시간 스크린의 크리스마스 트리를 꾸미는 서비스`,
    details: [
      {
        content: '실시간 인터랙션 구현',
        children: [
          {
            content: 'Supabase Realtime을 활용한 실시간 데이터 동기화',
          },
          {
            content:
              'animationQueue 구현을 통한 자연스러운 조건부 애니메이션 구현',
          },
          {
            content:
              'WebRTC 기반 QR 코드 스캔과 원격 조작을 통한 트리 제어기능 구현',
          },
        ],
      },
      {
        content: '보안 및 사용자 경험 최적화',
        children: [
          {
            content:
              'Row Level Security (RLS)와 Aho-Corasick 알고리즘 기반 욕설 필터링으로 안전한 익명 접속 환경 구축',
          },
          {
            content:
              'CSS transform 활용 성능 최적화 및 토스트 메시지를 통한 직관적인 사용자 피드백 제공',
          },
        ],
      },
      {
        content: '개발자 도구 및 편의성 기능',
        children: [
          {
            content: 'QR 코드 생성/다운로드, 공유 링크 복사 등 편의 기능 구현',
          },
          {
            content:
              '전체화면, UI 요소 제어 등 다양한 단축키 지원으로 개발자 경험 향상',
          },
        ],
      },
      {
        content: '효율적인 기술 선택',
        children: [
          {
            content:
              'Tanstack-query, Nextjs 등을 고려했으나, 실시간 인터렉션 지원을 위해 React + jotai로 진행',
          },
          {
            content: 'api는 네임스페이스 분리를 위해 class로 감싸 활용',
          },
          {
            content: 'chakraUI v3를 활용하여 필요한 컴포넌트를 받아 사용',
          },
        ],
      },
    ],
    image: '/images/projects/christmas-tree-decor.webp',
    skills: ['ReactJS', 'TypeScript', 'ChakraUI', 'Supabase'],
    link: 'https://github.com/minr2kb/christmas-tree-decor',
    cateTag: '사이드',
  },
  {
    id: 'tradeforce',
    title: '트레이드포스',
    description: `수출입 전문가 매칭 플랫폼, '트레이드포스' 외주 개발`,
    details: [
      {
        content:
          '서비스 의뢰 페이지 부터, 의뢰를 관리하는 어드민 페이지 내부 퍼널을 구성하기 위한 고민들을 경험',
      },
      {
        content:
          '소수의 인원과 초기 프로젝트 구축부터 단기간의 빠른 개발을 위한 효율적인 스택 디자인을 구상하고 백엔드와의 긴밀한 협업을 통해 작업',
      },
      {
        content:
          '디자이너와 Figma로 협력하여 MUI를 활용한 간단한 타이포 위계 및 컴포넌트 디자인 시스템을 구축',
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
        content: '효율적인 크롤링 아키텍처 설계',
        children: [
          {
            content:
              'Koa 기반 크롤링 서버를 CloudType에 배포하여 안정적인 서비스 제공',
          },
          {
            content:
              '카테고리 수에 따른 동기/비동기 처리 전환으로 서버 부하 최적화 (5개 기준)',
          },
          {
            content: 'AbortController를 활용한 크롤링 중단/재시작 기능 구현',
          },
        ],
      },
      {
        content: '데스크톱 앱 개발 및 배포 자동화',
        children: [
          {
            content:
              'electron-updater와 Github Release를 활용한 자동 업데이트 파이프라인 구축',
          },
          {
            content: 'IPC 통신으로 메인-렌더러 프로세스 간 로컬 API 구현',
          },
          {
            content: 'Vite를 활용한 빌드 최적화 및 코드 스플리팅',
          },
        ],
      },
      {
        content: '사용자 중심 기능 구현',
        children: [
          {
            content:
              '6개 주요 채용 플랫폼 통합 검색 지원 (잡코리아, 원티드 등)',
          },
          {
            content: '플랫폼/날짜별 필터링 및 CSV 형식 결과 다운로드 기능',
          },
          {
            content: '크롤링 진행상황 실시간 모니터링 UI 제공',
          },
        ],
      },
    ],
    image: '/images/projects/recruit-crawler.webp',
    skills: [
      'ReactJS',
      'Electron',
      'TypeScript',
      'Koa',
      'Vite',
      'MUI',
      'Recoil',
      'Tanstack-Query',
      'CloudType',
    ],
    link: 'https://github.com/minr2kb/recruit-crawler-app',
    cateTag: '사이드',
  },
  {
    id: 'worship-team-live',
    title: '찬양팀 라이브',
    description: `악기 연주자를 위한 라이브 소통 대시보드 서비스`,
    details: [
      {
        content:
          '미리 저장해둔 단축어를 활용하여 소통하는 방식으로, 최소한의 인증과 범용성을 위해 구글 OAuth를 활용',
      },
      {
        content: 'Firebase Realtime DB를 활용하여 실시간 요청 기능 구현',
      },
    ],
    image: '/images/projects/worship-team-live.webp',
    skills: ['ReactJS', 'TypeScript', 'MUI', 'Firebase'],
    link: 'https://github.com/minr2kb/worship-team-live',
    cateTag: '사이드',
  },
  {
    id: 'publy-dinner-worldcup',
    title: '퍼블리 회식 월드컵',
    description: `회사 근처 회식장소 선정을 위한 프로젝트`,
    details: [
      {
        content: '토너먼트 투표 시스템 구현',
        children: [
          {
            content: '1:1 대결 방식의 토너먼트 구조로 최종 우승 식당을 선정',
          },
          {
            content:
              '회식 참여자/비참여자 구분 투표 및 포인트 시스템을 통한 순위 산정',
          },
          {
            content: '라운드별 애니메이션 효과로 게임적 요소 강화',
          },
        ],
      },
      {
        content: 'Firebase 기반 실시간 데이터 관리',
        children: [
          {
            content:
              '실시간 투표 결과 반영 및 장소별/유저별 결과 필터링 기능 구현',
          },
          {
            content:
              '투표 이력 관리와 결과 테이블 제공으로 투명한 집계 시스템 구축',
          },
        ],
      },
      {
        content: '인터랙티브 UI/UX 구현',
        children: [
          {
            content:
              '음식 이모지가 내리는 애니메이션 효과로 생동감 있는 화면 연출',
          },
          {
            content: '귀여운 개미 캐릭터와 상황별 멘트로 사용자 친근감 향상',
          },
          {
            content: '데스크톱 최적화 UI 및 모바일 접속 시 안내 메시지 제공',
          },
        ],
      },
    ],
    image: '/images/projects/publy-dinner-worldcup.webp',
    skills: ['ReactJS', 'TypeScript', 'MUI', 'Firebase'],
    link: 'https://github.com/minr2kb/publy-dinner-worldcup',
    cateTag: '사이드',
  },
  {
    id: 'inf-scroll',
    title: '가상 무한 스크롤',
    description: `가상 무한 스크롤 구현 및 비교 연습`,
    details: [
      {
        content: '가상 무한 스크롤 직접 구현',
        children: [
          {
            content: 'IntersectionObserver를 사용하여 Inifinite Scroll 구현',
          },
          {
            content: 'Vitualizer을 구현하여 성능 최적화 및 렌더링 효율성 향상',
          },
          {
            content: '높이 측정 및 캐싱을 통해 동적 높이의 아이템 관리',
          },
          {
            content: '이진 검색을 통한 인덱스 계산으로 스크롤 성능 최적화',
          },
        ],
      },
    ],
    image: '/images/projects/inf-scroll.webp',
    link: 'https://github.com/minr2kb/infinite-scroll-practice',
    skills: ['React.js', 'TypeScript', 'ChakraUI', 'Jotai', 'React-Virtuoso'],
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
        content:
          'React와 CoreUI를 활용하여 프론트를 기획 및 개발하였고, Flask와 MySQL을 활용하여 백엔드를 구축',
      },
      {
        content:
          '실시간으로 DB에 들어오는 물류 현황과 수요 예측 모델 데이터를 차트를 활용하여 시각화하는 기능에 중점을 두고 개발',
      },
    ],
    image: '/images/projects/zcl-admin-dashboard.webp',
    skills: [
      'ReactJS',
      'JavaScript',
      'Redux',
      'CoreUI',
      'Flask',
      'MySQL',
      'Heroku',
    ],
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
