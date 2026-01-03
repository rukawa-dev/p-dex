# 📖 포켓몬 도감 (P-Dex)

간단한 웹 기반 포켓몬 도감 프로젝트입니다. PokeAPI의 데이터를 기반으로 하며, Vanilla JavaScript와 Tailwind CSS를 사용하여 제작되었습니다.

![스크린샷](https://via.placeholder.com/600x400.png?text=Project+Screenshot)
*(추후 실제 프로젝트 스크린샷으로 교체하세요.)*

---

## ✨ 주요 기능

- **반응형 카드 그리드 UI**: 모바일과 데스크톱 등 다양한 화면 크기에서 최적화된 UI를 제공합니다.
- **실시간 검색 필터**: 이름, 도감번호, 타입, 진화 조건 등 다양한 기준으로 포켓몬을 실시간으로 검색할 수 있습니다.
- **상세 정보 제공**:
    - 각 포켓몬의 타입, 약점, 진화 조건 등 상세 정보를 표시합니다.
    - 진화 조건은 레벨, 아이템, 통신 교환 등 조건에 따라 다른 색상으로 강조됩니다.
- **'잡음' 상태 저장**: 각 포켓몬의 '잡음' 상태를 토글 버튼으로 체크할 수 있으며, 이 정보는 브라우저의 `localStorage`에 저장되어 새로고침해도 유지됩니다.
- **데이터 초기화**: '잡음' 상태로 저장된 모든 데이터를 한 번에 초기화할 수 있습니다.
- **외부 링크**: 포켓몬 이름을 클릭하면 해당 포켓몬의 팬덤 위키 페이지로 이동합니다.
- **이미지 지연 로딩**: 화면에 보이는 이미지만 로드하여 초기 로딩 속도를 개선하고 데이터 사용량을 절약합니다.

## 🛠️ 기술 스택

- **Frontend**: HTML, CSS, Vanilla JavaScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Data**: [PokeAPI (v2)](https://pokeapi.co/)
- **Build Tool**: [Node.js](https://nodejs.org/) (데이터 생성용), [npm](https://www.npmjs.com/)
- **Dev Tools**: [concurrently](https://www.npmjs.com/package/concurrently) (동시 스크립트 실행)

## 🚀 프로젝트 실행 방법

### 1. 의존성 설치

프로젝트를 클론한 후, 필요한 개발 의존성을 설치합니다.

```bash
npm install
```

### 2. 포켓몬 데이터 생성

도감을 표시하기 위해 먼저 PokeAPI로부터 데이터를 가져와 `dex-data.js` 파일을 생성해야 합니다.

- **테스트용 데이터 생성 (1~30번)**
  ```bash
  npm run data:test
  ```

- **모든 데이터 생성 (1~1025번)**
  *(주의: API 호출이 많아 몇 분 정도 소요될 수 있습니다.)*
  ```bash
  npm run data:all
  ```

### 3. 개발 서버 실행

Tailwind CSS를 실시간으로 빌드하며, 로컬에서 프로젝트를 확인하려면 `dev` 스크립트를 실행하세요.

```bash
npm run dev
```

이후 `index.html` 파일을 브라우저에서 열면 도감을 확인할 수 있습니다. (Live Server 같은 VSCode 확장 프로그램을 사용하면 편리합니다.)

---

## 📂 프로젝트 구조

```
/
├── favicon_io/       # 파비콘 파일
├── node_modules/     # npm 패키지
├── dex-data.js       # 생성된 포켓몬 데이터 파일
├── index.html        # 메인 페이지
├── index.js          # 클라이언트 사이드 로직 (UI 렌더링, 검색, 이벤트 처리)
├── input.css         # Tailwind CSS 소스 파일
├── load-data.js      # Node.js 데이터 생성 스크립트
├── output.css        # 빌드된 Tailwind CSS 파일
├── package.json      # 프로젝트 정보 및 스크립트
├── README.md         # 프로젝트 설명서
└── tailwind.config.js # Tailwind CSS 설정 파일
```

---

## ⚖️ 면책 조항 (Disclaimer)

본 프로젝트는 개인적인 학습 및 포트폴리오 목적으로 제작된 **비영리 팬 프로젝트**이며, 이를 통해 어떠한 금전적 이득도 취하지 않습니다.

- 모든 포켓몬 데이터와 이미지는 [PokeAPI](https://pokeapi.co/)를 통해 제공받았습니다.
- Pokémon 및 모든 관련 이름, 이미지, 상표는 © 1995-2024 Nintendo, Creatures Inc., GAME FREAK Inc.의 저작권 및 상표입니다.
- 본 프로젝트는 상기 언급된 회사들과 공식적인 관련이 없으며, 어떠한 제휴 관계도 맺고 있지 않습니다.
- 본 프로젝트를 통해 발생할 수 있는 모든 문제에 대해 제작자는 책임을 지지 않습니다.
