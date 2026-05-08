# Portfolio - Micro Frontend Monorepo

![portfolio-mono](https://github.com/user-attachments/assets/a228aa0a-bdbf-47d1-94fb-60f7b883a435)
각 버전별 독립된 환경을 구축하고, 새로운 기술 스택을 활용을 위한 MFE 모노레포 프로젝트입니다

## 🌟 주요기능

- Turborepo와 Module Federation을 활용한 MFE 모노레포 구조로, 독립적 환경을 보장합니다.
- 새로운 앱을 CLI로 스캐폴딩하여 추가합니다. (env, firebase, host 라우터까지 자동 등록)
- 포트폴리오 데이터·이미지 에셋을 `@packages/data`로 중앙집중 관리합니다.
- [type-gen](https://github.com/minr2kb/portfolio-mono/tree/main/packages/type-gen)을 제작하여 빌드타임에 리모트앱의 타입을 추출해냅니다.

## 🎯 기술적 특징

### 1. 확장성 있는 모노레포 구조

- PNPM + Turborepo를 활용한 모노레포 환경 구성
- `@packages/create-app` CLI로 새로운 버전의 포트폴리오 앱을 한 명령으로 생성 — env, firebase.json, .firebaserc, host 라우터까지 자동 등록
- 자체 제작 `@packages/type-gen` 패키지를 통한 리모트 앱 타입 정의 자동 추출
- `@packages/tsconfig`로 TypeScript 설정을 중앙관리, 각 앱/패키지는 `extends`로 상속

### 2. 마이크로 프론트엔드 아키텍처

- Vite Module Federation을 활용한 런타임 통합
- 각 버전의 포트폴리오를 독립적으로 개발/배포 가능
- Cache-control을 통한 리모트 앱 변경사항 즉시 반영

### 3. 공유 패키지

- `@packages/data` — 포트폴리오 콘텐츠(경력, 프로젝트, 스킬 등) 및 이미지 에셋 중앙관리. 빌드시 각 앱의 `public/`에 복사
- `@packages/utils` — `getAssetsUrl()` 등 공통 유틸, Firebase 로거
- `@packages/tsconfig` — 앱/라이브러리용 TypeScript 베이스 설정

### 4. 최적화된 개발 경험

- 독립적인 개발 서버 구동으로 빠른 HMR 지원
- 공통 템플릿 스캐폴딩을 통한 일관된 프로젝트 구조
- Firebase Hosting을 통해 각 앱을 독립 CDN으로 배포

## 📁 프로젝트 구조

```
├── apps/
│   ├── host/        # 호스트 앱 (컨테이너, 포트 1129)
│   ├── v1/          # v1 리모트 앱 (포트 5001)
│   ├── v2/          # v2 리모트 앱 (포트 5002)
│   ├── v3/          # v3 리모트 앱 (포트 5003)
│   ├── v4/          # v4 리모트 앱 (포트 5004)
│   └── v5/          # v5 리모트 앱 (포트 5005)
├── packages/
│   ├── data/        # 포트폴리오 콘텐츠 데이터 및 이미지 에셋
│   ├── utils/       # 공통 유틸리티 (getAssetsUrl, logger 등)
│   ├── type-gen/    # 리모트앱 타입 추출 CLI
│   ├── create-app/  # 신규 앱 스캐폴딩 CLI
│   └── tsconfig/    # 공유 TypeScript 설정
│       ├── tsconfig.app.json      # Vite React 앱용
│       ├── tsconfig.node.json     # vite.config.ts용
│       ├── tsconfig.lib-esm.json  # ESM 라이브러리용
│       └── tsconfig.lib-cjs.json  # CJS 패키지용
├── templates/
│   └── react-vite/  # 신규 앱 생성용 기본 템플릿
├── turbo.json        # Turborepo 설정
├── firebase.json     # Firebase 호스팅 설정
├── .firebaserc       # Firebase 타겟 설정
├── package.json      # 루트 패키지 설정
└── pnpm-workspace.yaml
```

## 🛠 기술 스택

| 구분 | 도구 |
|------|------|
| 패키지 매니저 | PNPM |
| 모노레포 | Turborepo |
| 빌드 도구 | Vite + tsup |
| 프레임워크 | React 19 |
| 언어 | TypeScript |
| 모듈 페더레이션 | @originjs/vite-plugin-federation |
| 배포 | Firebase Hosting |

## 🚀 시작하기

### 1. 의존성 설치

```bash
pnpm install
```

### 2. 개발 서버 실행

```bash
# 개별 앱
pnpm dev:host
pnpm dev:v1
pnpm dev:v2
pnpm dev:v3
pnpm dev:v4
pnpm dev:v5

# host + 모든 remote 동시 구동
pnpm start
```

### 3. 빌드

```bash
# 프로덕션 빌드 (전체)
pnpm build

# 개발 빌드 (로컬 preview용)
pnpm build:dev
```

### 4. 배포

```bash
# 개별 배포
pnpm deploy:host
pnpm deploy:v1
pnpm deploy:v2
pnpm deploy:v3
pnpm deploy:v4
pnpm deploy:v5

# 전체 빌드 후 일괄 배포
pnpm deploy:all
```

## ☕️ 개발 가이드

### 새로운 버전 리모트 앱 추가하기

```bash
pnpm create-app
```

앱 이름과 포트를 입력하면 아래 작업이 자동으로 처리됩니다:

- `apps/{name}/` — 템플릿 복사 및 설정 초기화
- `apps/.env.development / .env.production` — 환경변수 추가
- `firebase.json` — 호스팅 엔트리 추가 (CORS 헤더, 리다이렉트 포함)
- `.firebaserc` — Firebase 호스팅 타겟 자동 등록
- `package.json` — `dev:{name}`, `deploy:{name}` 스크립트 추가
- `apps/host/vite.config.ts` — remotes 등록
- `apps/host/src/App.tsx` — 라우트 추가
- `apps/host/src/remote-types/{name}.d.ts` — 타입 스텁 생성

### 주의사항

1. 이미지 에셋은 `packages/data/assets/images/`에 중앙관리하며, 빌드 시 `copy-assets` 스크립트로 각 앱의 `public/images/`에 복사됩니다.
2. 에셋 경로는 반드시 `@packages/utils`의 `getAssetsUrl()`로 감싸서 사용합니다. (host 앱 제외)
3. host 앱 구동 시에는 각 remote 앱의 빌드 결과물(`dist/assets/remoteEntry.js`)이 필요하므로 `pnpm start`는 `build:dev` → `dev:host` + `preview:remotes` 순으로 동작합니다.
4. 각 remote 앱은 `pnpm dev:{name}`으로 독립 실행 가능합니다.

## 👨‍💻 개발자

- Kyungbae Min - [GitHub](https://github.com/minr2kb)
- Email: kbmin1129@gmail.com
