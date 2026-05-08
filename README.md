# Portfolio - Micro Frontend Monorepo

![portfolio-mono](https://github.com/user-attachments/assets/a228aa0a-bdbf-47d1-94fb-60f7b883a435)
각 버전별 독립된 환경을 구축하고, 새로운 기술 스택을 활용을 위한 MFE 모노레포 프로젝트입니다

## 🌟 주요기능

- Turborepo와 Module Federation을 활용한 MFE 모노레포 구조로, 독립적 환경을 보장합니다.
- 새로운 앱을 cli를 통해 스캐폴딩하여 추가합니다.
- asset의 절대경로 지원 및 nested route 지원이 가능합니다
- [type-gen](https://github.com/minr2kb/portfolio-mono/tree/main/packages/type-gen)을 제작하여 빌드타임에 리모트앱의 타입을 추출해냅니다.

## 🎯 기술적 특징

### 1. 확장성 있는 모노레포 구조

- PNPM + Turborepo를 활용한 모노레포 환경 구성
- 템플릿 기반 스캐폴딩 cli로 새로운 버전의 포트폴리오 앱을 독립 환경에서 빠르게 생성 가능
- 자체 제작 type-gen 패키지를 통한 리모트 앱 타입 정의 자동 추출

### 2. 마이크로 프론트엔드 아키텍처

- Vite Module Federation을 활용한 런타임 통합
- 각 버전의 포트폴리오를 독립적으로 개발/배포 가능
- Cache-control을 통한 리모트 앱 변경사항 즉시 반영

### 3. 최적화된 개발 경험

- 독립적인 개발 서버 구동으로 빠른 HMR 지원
- 공통 템플릿 스캐폴딩을 통한 일관된 프로젝트 구조
- Firebase Hosting을 통해 4개의 CDN 기반 배포
- `getAssetsUrl()` 유틸을 통해 remote앱의 에셋을 안정적으로 로드

## 📁 프로젝트 구조

```

├── apps/
│ ├── host/ # 호스트 앱 (컨테이너)
│ ├── v1/ # v1 리모트 앱
│ ├── v2/ # v2 리모트 앱
│ ├── v3/ # v3 리모트 앱
│ └── v4/ # v4 리모트 앱
├── templates/
│ ├── react-vite/ # React + Vite 기반 템플릿
│ └── react-vite-mui/ # React + Vite + MUI 기반 템플릿
├── packages/
│ ├── shared/ # 공통 유틸들(WIP)
│ └── type-gen/ # 리모트앱 타입 추출을 위한 유틸
├── scripts/
│ └── create-app.js # 템플릿 스캐폴딩을 위한 스크립트
├── turbo.json # Turborepo 설정
├── firebase.json # firebase 호스팅 설정
├── package.json # 루트 패키지 설정
└── pnpm-workspace.yaml # PNPM 워크스페이스 설정
```

## 🛠 기술 스택

- **패키지 매니저**: PNPM
- **빌드 도구**: Vite
- **프레임워크**: React
- **언어**: TypeScript
- **모노레포 도구**: Turborepo
- **모듈 페더레이션**: Vite Module Federation Plugin

## 🚀 시작하기

### 1. 의존성 설치

```bash
pnpm install
```

### 2. 빌드

```bash
# 프로덕션 빌드
pnpm build

# 개발 빌드
pnpm build:dev
```

### 3. 개발 서버 실행

```bash
# 각 standalone
pnpm dev:host
pnpm dev:v1
pnpm dev:v2
pnpm dev:v3

# 동시 구동
pnpm start
```

### 배포

```bash
# 따로 배포
pnpm run deploy:host
pnpm run deploy:v1
pnpm run deploy:v2
pnpm run deploy:v3

# 동시 배포
pnpm run deploy
```

## 📲 앱 구조

### Host App (Container)

- 경로: `apps/host`
- 역할: 다른 마이크로 프론트엔드 앱들을 통합하는 컨테이너 애플리케이션
- 포트: 1129

### Remote App

- 경로: `apps/v1` `apps/v2` `apps/v3`, ...
- 역할: 각 버전별 리모트 애플리케이션
- 포트: 5001, 5002, 5003, ...

## 🖼️ 템플릿

### 리모트앱 템플릿

- 경로: `templates/*`
- 설명: 새로운 마이크로 프론트엔드 앱을 생성할 때 사용되는 기본 템플릿
- 포함된 설정:
  - TypeScript 설정
  - Vite 설정
  - Module Federation 설정
  - MUI 등 디자인 패키지 설정
  - 기본 패키지 구성

## ☕️ 개발 가이드

### 새로운 버전 리모트 앱 추가하기

```bash
pnpm create-app
```

1. `create-app` 스크립트 실행(이름, 포트 설정)
2. host 앱의 `vite.config.js`에 remoteEntry 추가
3. `host/src/AppRoutes.tsx` 내에 중첩 라우터 추가
4. `.env` 내 base_url 작성
5. 생성된 remote앱의 `vite.config.js` 내 base 환경변수 작성
6. `firebase.json`, `.firebaserc` 내에 배포 config 추가

### 주의사항

1. asset은 각 앱의 public 내부에 위치시키되, 상대 경로의 경우 반드시 빌드타임 경로 변환을 위해 `@/utils` 내의 `getAssetsUrl()`로 감싸서 작성한다. (host의 asset 사용시 그냥 상대경로만 작성)
2. host앱 구동시에는 각 remote앱의 빌드 결과물(`dist/assets/remoteEntry.js`)이 필요하기에 preview를 통해 구동된다. 이 때, 로컬 절대 주소 사용을 위해 `pnpm build:dev`로 빌드가 되며, HMR작동이 안된다.
3. 각 remote앱은 독립적으로 작동 가능하며 `dev` 스크립트를 사용해 개발 가능하다.
4. 배포는 매뉴얼 로컬 배포로 돌아가기에 반드시 프로덕션 빌드가 선행되어야 한다.

## TO-DO

- 공통 로직(데이터,타입,에셋 등) 패키지 분리
- 패키지 중복로드 방지 & lazy load
- 배포 자동화

## 고민하던 부분

- 각 앱 라우트별 글로벌 스타일이 간섭 -> 앱을 완전 lazy로드로 전환

## 👨‍💻 개발자

- Kyungbae Min - [GitHub](https://github.com/minr2kb)
- Email: kbmin1129@gmail.com
