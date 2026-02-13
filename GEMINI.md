# KEIPO Housewares Project Summary
- 모바일 최적화를 항상 생각해
- 모든 텍스트는 언어설정에 따라 번역이 잘 돼야해

## プロジェクトの概要 (Project Overview)
KEIPO Housewares의 글로벌 무역 포트폴리오 사이트를 구축했습니다. 초기 사이버펑크 디자인에서 시작하여 최종적으로 **애플 스타일의 미니멀리즘과 3D 인터랙션**이 결합된 고해상도 UI로 개편되었습니다.

## 핵심 마일스톤 (Key Milestones)

### 1. 디자인 및 UI/UX 개편
- **애플 스타일 미니멀리즘**: 화이트 배경, 정갈한 타이포그래피, 넓은 여백을 활용한 프리미엄 디자인 적용.
- **3D 인터랙션**: 3D 효과가 적용된 메뉴 버튼과 'Trade Insights' 섹션의 입체적인 카드 그리드 구현.
- **사이드 드로어(Drawer)**: 모바일 최적화를 위해 오른쪽에서 슬라이드되는 메뉴 및 언어 선택 드로어 도입.
- **반응형 네비게이션**: 데스크탑에서는 전체 메뉴 노출, 모바일에서는 미니멀한 햄버거 버튼 하나로 통합.

### 2. 다국어 지원 (Comprehensive i18n)
- **지원 언어**: 한국어(KO), 영어(EN), 튀르키예어(TR), 독일어(DE), 중국어(CN), 일본어(JP), 힌디어(IN).
- **자동화**: 모든 고정 텍스트(제품 설명, 통계 레이블, 메뉴명 등)를 번역 데이터베이스(`translations/index.ts`)에 통합.

### 3. 실데이터 기반 콘텐츠 (ImportGenius Integration)
- **무역 통계**: 실제 ImportGenius 데이터를 분석하여 24건 이상의 선적 기록, 주요 파트너(Camerons Products, SCS Direct) 명시.
- **제품 카테고리**: 실제 취급 품목인 브루잉 시스템, 스모킹 장비, 조리용 하드웨어로 구체화.

### 4. 동적 로직 및 기술적 해결
- **업력 자동 계산**: 설립 연도(1988년)를 기준으로 현재 연도와 비교하여 업력(현재 38년+)을 자동 계산하는 로직 구현.
- **자산 경로 관리 (Critical)**: GitHub Pages 배포 시 하위 경로(`BASE_PATH`) 이슈로 인한 404 에러 방지를 위해, 모든 정적 자산(이미지 등) 참조 시 반드시 `src/lib/constants.ts`의 `BASE_PATH`를 사용해야 함. (예: `${BASE_PATH}/images/logo.png`)
- **글래스모피즘 최적화**: 내비바와 사이드 드로어에 **Blur 80px**과 낮은 불투명도(0.25~0.3)를 적용하여 형체가 완전히 뭉개지는 프리미엄 유리 효과 구현.
- **렌더링 이슈 해결**: 특정 브라우저에서 블러가 무시되는 현상을 해결하기 위해 **인라인 스타일** 적용 및 **하드웨어 가속(translateZ)** 강제.
- **모바일 UX (History API)**: 드로어 오픈 시 브라우저 히스토리를 제어하여, 사용자가 '뒤로가기' 버튼을 눌렀을 때 페이지 이탈 대신 드로어만 닫히도록 최적화.
- **FOUC 방지**: Tailwind CSS v4 로딩 지연으로 인한 스타일 깨짐 현상을 해결하기 위해 표준 CSS와 인라인 스타일을 전략적으로 혼용.

## 기술 스택 및 설정 (Technical Stack)
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 + Standard CSS (for stability)
- **Icons**: Lucide React
- **Animation**: Framer Motion
- **Constants**: `src/lib/constants.ts` (ESTABLISHED_YEAR = 1988)

---
*Last Updated: 2026-02-14*
