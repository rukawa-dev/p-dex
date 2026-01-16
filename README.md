# 📖 P-Dex (포켓몬 도감)

Vanilla JavaScript와 Tailwind CSS를 사용하여 제작된 웹 기반 포켓몬 도감 프로젝트입니다. 다양한 세대의 포켓몬 도감을 탐색하고, 나만의 포획 기록을 관리할 수 있습니다.

![전국도감 스크린샷](assets/imgs/screen-shot.png)
**LIVE DEMO**: https://rukawa-dev.github.io/p-dex/

---

## ✨ 주요 기능

- **🌐 다중 도감 및 2단계 사이드바**:
  - **전국도감**을 필두로, **스칼렛·바이올렛**, **LEGENDS Z-A** 등 게임별 2단계 아코디언 메뉴를 제공합니다.
  - 팔데아, 북신, 블루베리, 미르, 이차원 도감 등 다양한 지역 도감을 지원하며 `localStorage`에 상태가 보존됩니다.
  - 도감 옆 **지도(Map) 버튼**을 통해 외부 공략 지도로 즉시 이동할 수 있습니다.

- **🧬 최적화된 폼 체인지 UI**:
  - **메가진화**, **거다이맥스**, **리전폼** 등 다양한 모습을 확인할 수 있습니다.
  - 폼이 존재하는 모든 포켓몬 카드에 **드롭다운(Select) 메뉴**가 적용되어, 카드 레이아웃을 해치지 않고 깔끔하게 모습을 전환할 수 있습니다.

- **🔍 강력한 검색 기능**:
  - **이름으로 검색**: 검색어와 일치하는 포켓몬 카드로 즉시 스크롤하고 하이라이트합니다. (Enter/Shift+Enter로 이동)
  - **조건별 필터링**: **도감번호**, **타입**, **진화 조건**으로 검색 시 조건에 맞는 포켓몬만 실시간 필터링합니다.

- **📝 개인화된 포획 관리**:
  - **'잡음' 상태 저장**: 각 포켓몬의 포획 여부를 토글하여 기록할 수 있습니다.
  - **에메랄드 그린 디자인**: 잡았을 때 부드러운 에메랄드 그린 배경색이 적용되어 시각적으로 수집 완료 상태를 명확히 보여줍니다.
  - **도감별 독립 저장**: 포획 기록은 각 도감별로 독립적으로 브라우저에 저장됩니다.
  - **잡은 포켓몬 숨기기**: 목록에서 잡은 포켓몬을 일시적으로 숨겨 남은 목표를 한눈에 볼 수 있습니다.

- **📱 현대적인 UI/UX**:
  - **Lucide 아이콘**: 모든 아이콘을 Lucide 라이브러리로 통일하여 깔끔하고 세련된 디자인을 구현했습니다.
  - **프리미엄 스타일링**: 부드러운 그라데이션, 글래스모피즘 효과, 로딩 애니메이션 등이 적용되었습니다.
  - **반응형 디자인**: 모바일과 데스크톱 모두에 최적화되어 있습니다.

## 🛠️ 기술 스택

- **Frontend**: HTML, CSS, Vanilla JavaScript
- **Icons**: [Lucide](https://lucide.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Data Source**: [PokeAPI (v2)](https://pokeapi.co/), 구글 시트 연동 JSON 데이터
- **Build Tool**: [Node.js](https://nodejs.org/), [npm](https://www.npmjs.com/)

## 🚀 프로젝트 실행 방법

### 1. 의존성 설치

```bash
npm install
```

### 2. 포켓몬 데이터 생성 (통합 명령어)

전국도감 데이터 생성 후 설정된 모든 지역 도감을 자동으로 생성합니다.

- **전체 도감 데이터 한 번에 생성/갱신**
  ```bash
  npm run data:all
  ```

- **구글 시트로부터 데이터 강제 새로고침 (Refresh)**
  ```bash
  npm run data:all:refresh
  ```

- **(개발용) 일부 데이터만 생성 (1~30번)**
  ```bash
  npm run data:test
  ```

### 3. 개발 서버 실행

Tailwind CSS 실시간 빌드 및 로컬 확인:

```bash
npm run dev
```

## 📂 프로젝트 구조

```
/
├── pokemon.json          # 전국도감 데이터
├── pokemon-paldea*.json  # 팔데아/북신/블루베리 도감 데이터
├── pokemon-za*.json      # ZA/이차원 도감 데이터
├── 지역도감_시트정보.json   # 지역 도감 설정 및 구글 시트 매칭 정보
├── index.html            # 메인 페이지 (Lucide CDN 포함)
├── index.js              # UI 로직 및 데이터 렌더링
├── load-data.js          # PokeAPI 기반 전국도감 생성 스크립트
├── load-regional-data.js # 구글 시트 기반 지역 도감 생성 스크립트
├── input.css             # Tailwind CSS 소스 및 커스텀 스타일
├── package.json          # 통합 스크립트 정의
├── README.md             # 프로젝트 설명서
└── 지역 도감 추가하는 방법.md # 새로운 지역 도감 추가 가이드
```

---

## 📝 라이선스 (License)

본 프로젝트의 소스 코드에 대한 저작권은 rukawa-dev에게 있습니다. 개인적인 학습 목적의 참조만 허용되며 무단 복제 및 상업적 이용을 금합니다.

Copyright © rukawa-dev. All rights reserved.

---

## ⚖️ 면책 조항 (Disclaimer)

본 프로젝트는 개인적인 학습 및 포트폴리오 목적으로 제작된 **비영리 팬 프로젝트**입니다. 모든 포켓몬 저작권은 © Nintendo, Creatures Inc., GAME FREAK Inc.에 있습니다.

