# Portfolio - Micro Frontend Monorepo

- 이 프로젝트는 버전별 포트폴리오를 관리하기 위해 제작되었습니다.
- Turborepo와 Module Federation을 활용한 마이크로 프론트엔드 모노레포 구조입니다.

## 프로젝트 구조

```

├── apps/
│ ├── host/ # 호스트 앱 (컨테이너)
│ ├── v1/ # v1 리모트 앱
│ ├── v2/ # v2 리모트 앱
│ └── v3/ # v3 리모트 앱
├── templates/
│ ├── react-vite/ # React + Vite 기반 템플릿
│ └── react-vite-mui/ # React + Vite + MUI 기반 템플릿
├── packages/
│ └── type-build-util/ # 리모트앱 타입 추출을 위한 유틸
├── scripts/
│ └── create-app.js # 템플릿 스캐폴딩을 위한 스크립트
├── turbo.json # Turborepo 설정
├── package.json # 루트 패키지 설정
└── pnpm-workspace.yaml # PNPM 워크스페이스 설정
```

## 기술 스택

- **패키지 매니저**: PNPM
- **빌드 도구**: Vite
- **프레임워크**: React
- **언어**: TypeScript
- **모노레포 도구**: Turborepo
- **모듈 페더레이션**: Vite Module Federation Plugin

## 시작하기

### 1. 의존성 설치

```bash
pnpm install

```

### 2. 빌드

```bash
pnpm build
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

## 앱 구조

### Host App (Container)

- 경로: `apps/host`
- 역할: 다른 마이크로 프론트엔드 앱들을 통합하는 컨테이너 애플리케이션
- 포트: 1129

### V1 / V2 / V3 App

- 경로: `apps/v1` `apps/v2` `apps/v3`
- 역할: 각 버전별 리모트 애플리케이션
- 포트: 5001, 5002, 5003

## 템플릿

### 리모트앱 템플릿

- 경로: `templates/*`
- 설명: 새로운 마이크로 프론트엔드 앱을 생성할 때 사용되는 기본 템플릿
- 포함된 설정:
  - TypeScript 설정
  - Vite 설정
  - Module Federation 설정
  - MUI 등 디자인 패키지 설정
  - 기본 패키지 구성

## 개발 가이드

### 새로운 마이크로 프론트엔드 앱 추가하기

```bash
pnpm create-app
```

1. create-app 스크립트 실행
2. host 앱의 Module Federation 설정(vite.config.js)에 새 앱 추가
3. src/remotes.tsx 내에 중첩 라우터 추가

## TO-DO

- firebase 배포 파이프라인 -> 기존 도메인 유지
- 기존 앱 마이그레이션

## 작성자

- Kyungbae Min
- kbmin1129@gmail.com
