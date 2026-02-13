---
name: keipo-i18n-expert
description: Expert in managing multilingual translations (i18n) for the KEIPO Housewares project. Use when adding, editing, or validating translations in src/translations/index.ts across all 7 supported languages.
---

# KEIPO i18n Expert

KEIPO 프로젝트의 글로벌 무역 포트폴리오를 위해 7개 국어 번역을 전문적으로 관리합니다.

## 핵심 가이드라인

### 1. 지원 언어 및 스타일
- **EN (English)**: 전문적이고 비즈니스 중심적인 톤. (Apple 스타일)
- **KO (Korean)**: 신뢰감을 주는 정중한 문체.
- **TR (Turkish)**: 현지 무역 파트너에게 친숙한 비즈니스 용어 사용.
- **DE (German)**: 명확하고 기능적인 설명.
- **CN (Chinese)**: 간결하고 권위 있는 표현.
- **JP (Japanese)**: 정중하고 세밀한 배려가 담긴 문구.
- **IN (Hindi)**: 문화적으로 적절하고 읽기 쉬운 표준 힌디어.

### 2. 번역 워크플로우
1. **키(Key) 생성**: `camelCase`를 사용하며 기능과 위치를 명확히 함 (예: `heroTitle`, `navHistory`).
2. **데이터 업데이트**: `src/translations/index.ts` 파일의 모든 언어 섹션에 해당 키를 추가.
3. **레이아웃 검토**: 특히 독일어(DE)나 힌디어(IN)는 텍스트가 길어질 수 있으므로, 버튼이나 카드 내부에서 넘치지 않도록 간결한 대안을 항상 고려.

### 3. 특수 규칙
- **날짜 및 숫자**: `ESTABLISHED_YEAR` (1988) 상수를 참조하여 업력을 계산하는 문구(`history`)는 국가별 어순에 주의.
    - KO/JP/CN: `"{n}년의 신뢰"` (숫자가 앞)
    - EN/DE/TR: `"Years of Trust {n}"` 또는 적절한 위치.
- **금지사항**: 기계적인 직역 지양. 문맥상 "Global Trading"이 "세계적인 거래"보다 "글로벌 무역"이 적합한지 판단.

## 참조 파일
- `src/translations/index.ts`: 모든 번역 데이터의 소스 저장소.
- `src/lib/constants.ts`: `ESTABLISHED_YEAR` 등 비즈니스 상수 정의.
