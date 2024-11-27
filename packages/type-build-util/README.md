# @packages/type-build-util

`type-build-util`은 TypeScript 모듈의 타입을 자동으로 생성하고 관리하는 내부 유틸리티입니다. 이 패키지는 Module Federation 환경에서 타입 정의를 쉽게 생성하고 사용할 수 있도록 도와줍니다.

## 시작하기

### 설치

```bash

$ yarn add @kbmin/type-build-util

```

### 사용법

| 사용에 앞서 remote 모듈 앱 내부에 몇가지 config 작성이 필요합니다.

1. **exposes.json 파일 작성(필수)**: 이 파일은 모듈 내에서 노출할 타입의 경로를 정의합니다.

```json
// 예시) ./exposes.json
{
  "./Button": "./src/Button",
  "./Input": "./src/Input"
}
```

2. **config 파일 작성(필수)**: 루트에 `dts.config.json` 파일을 생성하여 모듈의 설정을 정의합니다.

```json
// 예시) ./dts.config.json
{
  "name": "my-module",
  "exposesPath": "./exposes.json",
  "outDir": "../host",
  "tsConfigPath": "./tsconfig.json"
}
```

3. **타입 생성 스크립트 실행**: 다음 명령어를 사용하여 타입을 생성합니다.

```bash
$ yarn type-build-util
```

## API

### Config 인터페이스

`Config` 인터페이스는 모듈의 설정을 정의합니다.

- `name`: 모듈 이름
- `exposesPath`: `exposes.json` 파일의 위치
- `outDir`: 생성된 모듈 타입을 저장할 디렉토리
- `tsConfigPath`: exposes모듈들이 include내에 명시된 tsconfig 파일의 위치

### Exposes 인터페이스

`Exposes` 인터페이스는 모듈 내에서 노출할 타입의 경로를 정의합니다.

## 작성자

- 민경배 | Kyungbae Min
- kbmin1129@gmail.com
