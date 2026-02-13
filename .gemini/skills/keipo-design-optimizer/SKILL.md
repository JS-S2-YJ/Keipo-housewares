---
name: keipo-design-optimizer
description: KEIPO 프로젝트의 반응형 디자인 및 다국어 최적화 스킬. 디자인 명령을 수행할 때 모바일 가독성, 언어별 텍스트 길이 대응, i18n 데이터 연결을 자동으로 처리합니다.
---

# KEIPO Design Optimizer

이 스킬은 KEIPO Housewares 프로젝트의 고해상도 Apple 스타일 UI를 유지하면서, 전 세계 사용자를 위한 다국어 대응 및 모바일 최적화를 보장합니다.

## 핵심 가이드라인

### 1. 반응형 최적화 (Responsive First)
- **Mobile-First**: 모든 스타일은 모바일(기본)에서 시작하여 `md:`, `lg:` 접두사를 통해 데스크탑으로 확장합니다.
- **Landscape & Short Viewport**: 모바일 가로모드나 세로 높이가 낮은 기기(Short height)를 고려합니다.
  - 세로 공간이 부족할 경우 패딩/마진을 축소(`py-4` -> `py-2`)하거나 섹션의 최소 높이(`min-h-screen`)를 유연하게 조정합니다.
  - `landscape:` 변형(variant)을 사용하여 가로모드 전용 레이아웃(예: 2열 배치)을 적용할 수 있습니다.
- **Touch Targets**: 모바일 버튼과 링크는 최소 44x44px의 클릭 영역을 확보합니다.
- **Side Drawer**: 모바일 네비게이션은 `side-drawer` 컴포넌트를 활용하며, `isDrawerOpen` 상태를 관리해야 합니다.

### 2. 다국어 레이아웃 대응 (Multi-language Support)
- **가변 텍스트 길이**: 독일어(DE), 힌디어(IN) 등은 영어 대비 텍스트가 1.5배 이상 길어질 수 있습니다. 
  - 고정 너비(`width: 200px`) 대신 가변 너비(`min-width`, `max-width`)를 사용하세요.
  - `flex-wrap`을 활용하여 텍스트가 넘칠 경우 자연스럽게 줄바꿈되도록 합니다.
- **언어별 특수 로직**: 숫자와 텍스트의 결합 순서가 언어마다 다를 수 있으므로 `page.tsx`의 `getHistoryText`와 같은 헬퍼 함수를 활용하세요.

### 3. i18n 워크플로우
- **문구 추가**: 새로운 UI 요소를 만들 때 하드코딩하지 말고 `src/translations/index.ts`에 모든 언어(en, ko, tr, de, cn, jp, in)의 번역을 추가합니다.
- **Hook 사용**: 컴포넌트 상단에서 `const { t, lang } = useLanguage();`를 호출하여 문구를 가져옵니다.

## 체크리스트
- [ ] Tailwind `md:` 접두사를 사용하여 데스크탑 전용 레이아웃을 분리했는가?
- [ ] 모바일 가로모드(Landscape)에서 콘텐츠가 잘리지 않고 스크롤이 가능한가?
- [ ] 힌디어/독일어 적용 시 컨테이너 밖으로 텍스트가 삐져나오지 않는가?
- [ ] `src/translations/index.ts`에 신규 키가 7개 언어 모두 정의되었는가?
- [ ] 모바일에서 가로 스크롤(`overflow-x`)이 발생하지 않는가?
