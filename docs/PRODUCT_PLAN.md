# JLPT Helper Product Plan

## Product Goal

사용자가 일본어 단어 목록을 Codex에게 전달하면, 앱 코드에 영구 데이터로 추가된 단어장을 모바일에서 반복 암기할 수 있게 한다. 첫 버전은 정적 웹앱으로 시작하고, 단어 데이터는 저장소에 커밋되는 코드 데이터로 관리한다. 학습 상태는 초기에는 브라우저에 저장하되, 이후 GitHub 기반 저장 방식으로 한 명의 사용자가 여러 기기에서 같은 상태를 볼 수 있게 한다.

## Target User

- JLPT 또는 일본어 학습자가 직접 모은 단어를 빠르게 외우고 싶다.
- 모바일 화면에서 한 손으로 넘기며 외웠는지 여부를 체크하고 싶다.
- 한자, 후리가나, 예문, 한국어 뜻을 한 번에 보지 않고 단계적으로 떠올리고 싶다.

## Core Principles

- 모바일 우선: 360px 폭에서도 모든 주요 조작이 엄지 영역 안에 있어야 한다.
- 오프라인 친화: 배포된 앱은 네트워크 없이 기존 단어장을 학습할 수 있어야 한다.
- 데이터는 명시적: 단어장은 코드의 구조화 데이터 파일에 추가하고 PR diff로 검토할 수 있어야 한다.
- 반복 학습 중심: 사용자가 못 외운 단어만 빠르게 다시 볼 수 있어야 한다.
- 최소 입력 마찰: 사용자는 단어만 주고, 후리가나/뜻/짧은 예문은 Codex가 정리해 코드에 반영한다.
- 외운 단어 제외: 체크 해제된 단어는 사용자가 다시 체크하거나 `처음부터 외우기`를 누르기 전까지 슬라이드에 나오지 않는다.

## Vocabulary Data Model

단어 데이터는 초기 버전에서 `src/data/decks.ts` 같은 코드 파일에 보관한다.

```ts
type VocabularyDeck = {
  id: string;
  title: string;
  description?: string;
  sourceBatch?: string;
  jlptLevel?: "N5" | "N4" | "N3" | "N2" | "N1" | "unknown";
  createdAt: string;
  updatedAt: string;
  words: VocabularyWord[];
};

type VocabularyWord = {
  id: string;
  kanji: string;
  kana?: string;
  meaningKo: string;
  exampleJa: string;
  exampleKo?: string;
  tags?: string[];
};
```

데이터 작성 규칙:

- `kanji`: 카드 첫 화면에 보일 대표 표기. 한자가 없는 단어는 히라가나/가타카나 표기를 넣는다.
- `kana`: 한자 읽기 또는 발음. `kanji`와 완전히 같거나 한자 없는 단어면 생략할 수 있다.
- `meaningKo`: 한국어 뜻. 필요하면 여러 뜻을 쉼표로 짧게 구분한다.
- `exampleJa`: 4단어 이상 8단어 이하의 짧은 일본어 예문을 목표로 한다.
- `exampleKo`: 일본어 예문의 한국어 번역. 카드 마지막 단계에서 `meaningKo`와 동시에 보여준다.
- `sourceBatch`: 사용자가 단어를 전달한 묶음 이름이나 날짜. 단어장은 JLPT 레벨보다 사용자 제공 묶음을 우선 기준으로 나눈다.
- `id`: `deck-id` 안에서 안정적인 kebab-case 또는 slug를 쓴다.

## Persistence Model

영구 단어 데이터와 사용자 학습 상태를 분리한다.

- 단어장/단어 원본: 코드에 저장되며 배포와 함께 갱신된다.
- 학습 체크 상태: 초기 버전은 브라우저 `localStorage`에 저장한다.
- 체크 의미: `checked = 아직 못 외운 단어`, `unchecked = 외운 단어`.
- 새 단어의 기본값: 전체 체크 상태로 시작한다.
- 데이터 버전 변경: 단어 `id`가 같으면 기존 상태를 유지하고, 새 단어는 체크 상태로 추가한다.
- 동기화 목표: 사용자는 1명으로 가정하고, 여러 기기에서 같은 학습 상태를 공유할 수 있게 만든다.
- 동기화 저장소: GitHub 기반 저장 방식을 사용한다.
- 동기화 충돌 정책: 단일 사용자 기준의 마지막 저장 우선 정책으로 충분하다.
- 동기화가 적용되더라도 오프라인 학습을 위해 로컬 상태를 캐시한다.
- 보안 원칙: GitHub 토큰이나 인증 정보는 코드, 커밋, 배포 산출물에 넣지 않는다.

권장 저장 구조:

```ts
type StudyState = {
  version: 1;
  updatedAt: string;
  decks: Record<
    string,
    {
      checkedWordIds: string[];
      lastStudiedAt?: string;
    }
  >;
};
```

## GitHub Sync Design

GitHub 동기화는 단일 사용자의 여러 기기 상태 공유를 위한 선택 기능이다. 앱은 항상 로컬 상태로 동작하고, 동기화가 켜져 있으면 GitHub에 저장된 상태와 맞춘다.

권장 저장 위치:

- 같은 저장소의 별도 상태 파일: `.sync/study-state.json`
- 이 파일은 앱 코드 데이터와 별개로 취급한다.
- 커밋 히스토리에 학습 상태가 남는 것을 허용한다는 전제가 필요하다.

권장 동작:

- 앱 시작 시 로컬 상태를 먼저 로드한다.
- GitHub 동기화가 설정되어 있으면 `.sync/study-state.json`을 가져온다.
- 원격 `updatedAt`이 로컬 `updatedAt`보다 최신이면 원격 상태를 로컬에 덮어쓴다.
- 사용자가 단어 상태를 바꾸면 로컬 상태를 즉시 저장한다.
- 온라인이고 동기화가 설정되어 있으면 변경 후 원격 파일도 갱신한다.
- 원격 갱신에 실패하면 로컬 상태는 유지하고, 다음 앱 시작 또는 수동 동기화 때 다시 시도한다.

인증 방식:

- 초기 구현에서는 사용자가 직접 발급한 GitHub fine-grained token을 앱 설정에 입력하는 방식을 고려한다.
- 토큰은 브라우저 로컬 저장소에만 저장하고 저장소에는 절대 커밋하지 않는다.
- 장기적으로는 별도 작은 프록시나 GitHub OAuth 흐름을 붙일 수 있지만, 첫 동기화 버전에서는 과한 서버 구조를 피한다.

GitHub API 작업:

- `GET /repos/{owner}/{repo}/contents/.sync/study-state.json`으로 원격 상태를 읽는다.
- `PUT /repos/{owner}/{repo}/contents/.sync/study-state.json`으로 상태 파일을 갱신한다.
- 갱신 요청에는 기존 파일의 `sha`가 필요하므로, 읽기 결과를 저장해둔다.
- 충돌 또는 `sha` 불일치가 발생하면 원격을 다시 읽고 `updatedAt` 기준으로 최신 상태를 선택한다.

## Information Architecture

1. 단어장 목록
2. 단어장 학습 화면
3. 회차 종료 화면

초기 버전에서는 별도 설정 페이지를 만들지 않는다. 모든 필수 기능은 위 세 화면 안에서 해결한다.

## Screen 1: Deck List

목표: 사용자가 어떤 단어장을 학습할지 빠르게 고른다.

표시 정보:

- 앱 상단 제목: `JLPT Helper`
- 단어장 카드 목록
- 각 카드:
  - 단어장 이름
  - 단어 수
  - 못 외운 단어 수
  - 최근 학습 일시가 있으면 표시
  - `학습하기` 진입 affordance

상호작용:

- 단어장 카드를 누르면 해당 단어장 학습 화면으로 이동한다.
- 단어장 카드를 누르면 체크된 단어만 학습한다.
- 못 외운 단어 수가 0이면 바로 학습 세션을 시작하지 않고, 모든 단어를 다시 체크하는 `처음부터 외우기` 행동을 안내한다.

빈 상태:

- 코드에 단어장이 없으면 “아직 단어장이 없습니다”와 함께 데이터 추가 방식 안내를 짧게 표시한다.

## Screen 2: Study Session

목표: 한 단어씩 단계적으로 떠올리고, 외웠는지 여부를 빠르게 기록한다.

카드 진행 단계:

1. 표기만 표시: `kanji`
2. 읽기 표시: `kana`
   - 한자 없는 단어 또는 `kana`가 없으면 이 단계는 건너뛴다.
3. 예문 표시: `exampleJa`
4. 뜻과 예문 번역 표시: `meaningKo`, `exampleKo`

탭/클릭 동작:

- 카드 본문을 누르면 다음 정보 단계로 진행한다.
- 마지막 단계에서 다시 누르면 카드가 흔들리거나 작은 힌트만 보여주고 단어 이동은 하지 않는다.
- 단어 이동은 하단 버튼 또는 스와이프로만 수행한다.

하단 버튼:

- 왼쪽: `못외웠음`
  - 현재 단어를 체크 상태로 유지한다.
  - 다음 단어로 이동한다.
- 오른쪽: `외웠음`
  - 현재 단어의 체크를 해제한다.
  - 다음 단어로 이동한다.

스와이프:

- 왼쪽 스와이프: 못외웠음
- 오른쪽 스와이프: 외웠음
- 버튼과 동일한 상태 변경을 수행한다.
- 스와이프 중 카드가 방향에 따라 살짝 이동하고, 임계값을 넘기면 다음 카드로 넘어간다.

진행 표시:

- 상단에 `3 / 24` 형태의 현재 순서 표시
- 못 외운 단어만 다시 외우는 세션이라면 `못 외운 단어 복습` 표시
- 뒤로 가기 버튼으로 단어장 목록으로 돌아갈 수 있다.

세션 단어 집합:

- 일반 시작: 현재 체크된 단어만 순서대로 보여준다.
- 다시 외우기: 현재 체크된 단어만 다시 보여준다.
- 외운 단어, 즉 체크 해제된 단어는 사용자가 다시 체크하거나 `처음부터 외우기`로 전체 초기화하기 전까지 세션에 포함하지 않는다.
- 세션 중 체크 상태는 즉시 저장한다.

## Screen 3: Session Complete

목표: 한 바퀴가 끝난 뒤 다음 반복 행동을 명확히 고른다.

표시 정보:

- 완료 메시지
- 전체 단어 수
- 아직 못 외운 단어 수
- 외운 단어 수
- 이번 회차에서 본 단어 요약
- 요약에는 각 단어의 표기, 읽기, 한국어 뜻, 현재 체크 여부를 표시한다.

버튼:

- `다시 외우기`
  - 체크된 단어만 새 세션으로 시작한다.
  - 체크된 단어가 0개라면 비활성화하거나 “못 외운 단어가 없습니다”로 표시한다.
- `처음부터 외우기`
  - 해당 단어장의 모든 단어를 체크 상태로 초기화한다.
  - 전체 단어 세션을 새로 시작한다.
- `단어장으로`
  - 단어장 목록으로 이동한다.
  - 업데이트된 체크 상태는 유지한다.

## State Transitions

```text
Deck List
  -> select deck
Study Session(checked words only)
  -> last word resolved
Session Complete
  -> 다시 외우기
Study Session(checked words only)
  -> last word resolved
Session Complete
  -> 처음부터 외우기
Study Session(all words, all checked)
  -> 단어장으로
Deck List
```

## Example Word Flow

예시 단어: `勉強`

1. 카드 첫 화면: `勉強`
2. 탭: `べんきょう`
3. 탭: `毎日 日本語を 勉強します。`
4. 탭: `공부`, `매일 일본어를 공부합니다.`
5. `외웠음`: 체크 해제 후 다음 단어
6. `못외웠음`: 체크 유지 후 다음 단어

## Adding New Words Through Codex

사용자가 단어를 전달했을 때 Codex 작업 절차:

1. 사용자가 준 단어 목록에서 중복과 표기 흔들림을 확인한다.
2. 사용자가 준 묶음 단위로 새 단어장을 만들거나, 명시된 기존 묶음에 추가한다.
3. 각 단어에 대해 `kanji`, `kana`, `meaningKo`, `exampleJa`, `exampleKo`를 작성한다.
4. 예문은 짧고 자연스럽게 만들며, 되도록 4~8단어 범위를 맞춘다.
5. 데이터 파일에 추가한다.
6. 단어 수와 중복 여부를 검증하는 테스트 또는 smoke 체크를 실행한다.

## Suggested Technical Stack

초기 구현 권장:

- Vite
- React
- TypeScript
- CSS Modules 또는 단일 CSS 파일
- Vitest

선택 이유:

- 모바일 SPA를 빠르게 만들 수 있다.
- 정적 배포가 쉽다.
- 타입으로 단어 데이터 구조를 검증할 수 있다.
- 이후 PWA, 검색, 필터, 가져오기 기능으로 확장하기 쉽다.

## Proposed File Structure

```text
src/
  App.tsx
  main.tsx
  data/
    decks.ts
  domain/
    studyState.ts
    deckStats.ts
  components/
    DeckList.tsx
    StudySession.tsx
    WordCard.tsx
    SessionComplete.tsx
  styles/
    app.css
  test/
    decks.test.ts
    studyState.test.ts
```

## UX Details

- 카드 영역은 화면 중앙 대부분을 차지한다.
- 하단 버튼은 엄지로 누르기 쉽게 고정한다.
- 버튼 텍스트는 짧게 유지한다: `못외웠음`, `외웠음`.
- 한 단어 카드 안에서는 정보량이 갑자기 늘어도 레이아웃이 튀지 않게 최소 높이를 둔다.
- 후리가나는 작은 보조 텍스트로, 뜻은 가장 마지막에 눈에 띄게 표시한다.
- iOS Safari 하단 바를 고려해 하단 안전 영역 padding을 둔다.
- 색상만으로 상태를 구분하지 않고 텍스트도 함께 둔다.
- 완료 요약은 모바일에서 길어지지 않게 접을 수 있는 리스트 또는 압축된 행으로 표시한다.
- 단어장 보기와 완료 요약에서는 예문과 예문 번역을 생략하고, 표기/읽기/뜻/상태만 보여준다.

## Accessibility

- 모든 버튼은 실제 `button` 요소를 사용한다.
- 카드 탭 영역은 키보드에서도 `Enter` 또는 `Space`로 다음 단계 진행이 가능해야 한다.
- 스와이프는 보조 입력으로만 둔다. 버튼 조작이 기본 기능이다.
- 진행 상태는 텍스트로 표시한다.
- 작은 화면에서도 버튼 높이는 최소 44px 이상으로 유지한다.

## Initial Milestones

### Milestone 1: Static Product Skeleton

- Vite React TypeScript 앱 생성
- 단어장 목록 화면
- 샘플 단어장 1개
- 모바일 우선 기본 스타일
- smoke에서 앱 파일 존재와 데이터 구조 검증

### Milestone 2: Study Flow

- 단계형 카드 표시
- 외웠음/못외웠음 버튼
- 세션 완료 화면
- 체크 상태 `localStorage` 저장
- 단어장 목록 통계 반영
- 기본 학습 대상이 체크된 단어만인지 테스트로 고정

### Milestone 3: Mobile Gestures And Polish

- 좌우 스와이프 지원
- 터치 피드백
- 빈 상태와 완료 상태 개선
- 반응형 레이아웃 점검

### Milestone 4: Data Maintenance

- 단어 데이터 검증 테스트
- 중복 `id` 검사
- 예문 길이 가이드 검사
- 새 단어장 추가 작업 규칙 정리

### Milestone 5: Single-User Sync

- GitHub 기반 상태 파일 저장 방식 구현
- GitHub 저장소 정보와 토큰을 입력하는 설정 UI 추가
- 앱 시작 시 원격 상태 가져오기
- 상태 변경 후 GitHub 상태 파일 갱신
- 오프라인 캐시와 원격 상태 병합 규칙 구현
- 마지막 저장 우선 정책과 수동 새로고침 또는 자동 동기화 UX 구현

## Verification Plan

항상 실행:

- `npm run harness:smoke`

앱 생성 후 추가할 검증:

- `npm test`: 데이터 모델, 학습 상태 전환, 단어장 통계 테스트
- `npm run build`: TypeScript와 번들 빌드 확인
- 필요 시 Playwright 또는 브라우저 수동 확인: 모바일 폭에서 버튼, 카드, 스와이프 확인

## Open Product Questions

- GitHub 동기화 설정 UI를 초기 화면 안에 숨길지, 별도 설정 화면으로 만들지 결정이 필요하다.
- GitHub 토큰을 브라우저 로컬 저장소에 저장하는 보안/편의성 tradeoff를 받아들일지 최종 확인이 필요하다.
