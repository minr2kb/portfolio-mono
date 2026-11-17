# Portfolio 2.0 · 0단계 콘텐츠 점검

기준: 2026-11-17. 이 문서는 공개 후보를 고르는 작업 메모이며, 게시 승인이나 사실 검증 결과가 아니다. 현재 작업 트리의 프로젝트 설명과 이미지는 수정하지 않았다.

## 프로젝트 후보

| 우선순위 | 후보 | 확인한 원본 | 게시 전 확인할 내용 |
| --- | --- | --- | --- |
| 1 | Routar | `packages/data/src/sections/projects.ts`의 `routar` 항목, [공개 GitHub 저장소](https://github.com/minr2kb/routar) | 포트폴리오의 각 기술 주장에 대응하는 문서·코드 위치, 작성자 역할과 공개 문구 |
| 2 | Dalant Pay | 같은 파일의 `dalant-pay` 항목, [공개 GitHub 저장소](https://github.com/minr2kb/dalant-pay)와 [서비스 링크](https://dalant-pay.vercel.app) | 개별 기술 주장에 맞는 코드 위치, 실제 행사 사용 근거와 공개 가능 범위. 서비스 동작은 이번 점검에서 확인하지 못함 |
| 대안 | Contiroom | 같은 파일의 `contiroom` 항목, [서비스 링크](https://cntirm.vercel.app) | 편집·AI 초안·권한·인쇄 기능의 현재 동작과 공개 가능한 코드·자료 |

Routar와 Dalant Pay의 공개 저장소를 확인했다. Dalant Pay의 [QR 서명·만료 코드](https://github.com/minr2kb/dalant-pay/blob/main/src/lib/qr-server.ts), [인증 경로](https://github.com/minr2kb/dalant-pay/blob/main/src/app/api/markets/%5BmarketId%5D/%28missions%29/missions/%5BmissionId%5D/verify/route.ts), [포인트 이전 SQL](https://github.com/minr2kb/dalant-pay/blob/main/supabase/schema.sql), [서버 prefetch 코드](https://github.com/minr2kb/dalant-pay/blob/main/src/lib/query/hydrate.tsx)를 확인했다. 인증 경로는 관리자 본인의 QR 인증을 허용하며, 미션 QR은 토큰별 일회용이 아니라 인증 횟수·슬롯 중복으로 제한한다. 이에 맞춰 포트폴리오의 두 설명을 수정했다. 코드만으로 실제 행사 사용·성과나 현재 서비스 동작까지 검증되지는 않는다. 두 프로젝트의 문구 전체를 `verified`로 색인하면 안 된다.

## 기술 글

저장소에는 글 본문 또는 MDX가 없다. `packages/data/src/sections/contacts.ts`에는 [Velog 프로필](https://velog.io/@minr2kb) 링크만 있다. 이번 점검에서 프로필의 글 목록에 접근하지 못했으므로 공개 글 2~3개를 아직 선정할 수 없다.

첫 글의 주제 후보는 Routar의 스키마·런타임 검증 선택, Dalant Pay의 사용자 흐름·서버 상태 설계, 이 저장소의 모듈 페더레이션 구성이다. 이는 **글 주제**이지 기존에 작성·게시된 글이 아니다. 글 URL 또는 원문을 확보한 뒤 공개 여부와 프로젝트 관계를 확정한다.

## CareerInsight와 근거 경계

`packages/data/src/sections/experiences.ts`의 경력 설명은 작성자 서술이다. 강점·약점·협업 방식에 관한 승인된 CareerInsight 원문은 저장소에서 찾지 못했다. PRD의 예시도 작성자 확인 전 초안으로 명시돼 있다.

초기 공개 후보는 작성자가 직접 확정한 진술만 사용한다. 각 진술마다 연결할 프로젝트·글, 사실과 자기평가의 구분, 말할 수 없는 범위와 필요한 경우 개선 행동을 확인한다. 특히 기존 프로젝트 설명의 `45%`, `90%`, `70%` 같은 회사 성과 수치는 측정 원본과 공개 허용 범위를 확인하기 전 AI 답변의 검증된 근거로 사용하지 않는다.

작성자 검토용 자기평가 초안:

- 강점: "사용자 문제를 제품 흐름과 기술 설계로 연결하는 데 관심을 두고 작업해 왔다." 근거 후보: Dalant Pay의 행사 사용자 흐름, Routar의 API 사용 경험 설계. 성과 검증을 뜻하지 않는다.
- 한계: "대규모 트래픽 운영이나 조직 리딩에 관한 공개 검증 자료는 현재 제시하지 못한다." 경험 자체가 없다는 단정이 아니며, 실제 약점으로 게시할지도 작성자가 결정해야 한다.

두 문장은 작성자가 사용을 허용한 `self_reported` 초안이다. 공개 시에도 독립 검증된 사실로 표시하지 않는다.

## 0단계 완료를 위한 남은 결정

1. Routar와 Dalant Pay를 첫 두 프로젝트 후보로 두고 각 주장에 맞는 근거를 확인한다. 두 프로젝트 모두 공개 저장소가 있다.
2. 공개할 기술 글 2~3개의 원문 또는 URL을 지정한다. 기존 글이 없다면 새 글을 작성할 주제 2~3개를 정한다.
3. 허용된 강점·한계 초안을 공개용 문장으로 다듬고 근거와 한계를 확정한다. 다른 CareerInsight는 작성자 확인을 받는다.
4. 선택한 각 프로젝트의 개별 주장에 근거 링크와 공개 가능 여부를 붙인다.

이번 점검에서 새 콘텐츠나 비공개 자료를 가져오거나 색인하지 않았다. 위 결정 전에는 선택 후보를 검색 인덱스나 AI 답변에 자동 게시하지 않는다.
