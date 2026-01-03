const pokemonData = [
  {
    "id": 1,
    "name": "이상해씨",
    "types": [
      "grass",
      "poison"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "flying",
      "psychic"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
  },
  {
    "id": 2,
    "name": "이상해풀",
    "types": [
      "grass",
      "poison"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "flying",
      "psychic"
    ],
    "evolution": {
      "text": "이상해씨 Lv.16",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
  },
  {
    "id": 3,
    "name": "이상해꽃",
    "types": [
      "grass",
      "poison"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "flying",
      "psychic"
    ],
    "evolution": {
      "text": "이상해풀 Lv.32",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png"
  },
  {
    "id": 4,
    "name": "파이리",
    "types": [
      "fire"
    ],
    "weaknesses": [
      "water",
      "ground",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
  },
  {
    "id": 5,
    "name": "리자드",
    "types": [
      "fire"
    ],
    "weaknesses": [
      "water",
      "ground",
      "rock"
    ],
    "evolution": {
      "text": "파이리 Lv.16",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png"
  },
  {
    "id": 6,
    "name": "리자몽",
    "types": [
      "fire",
      "flying"
    ],
    "weaknesses": [
      "water",
      "electric",
      "rock"
    ],
    "evolution": {
      "text": "리자드 Lv.36",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
  },
  {
    "id": 7,
    "name": "꼬부기",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
  },
  {
    "id": 8,
    "name": "어니부기",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "꼬부기 Lv.16",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png"
  },
  {
    "id": 9,
    "name": "거북왕",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "어니부기 Lv.36",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png"
  },
  {
    "id": 10,
    "name": "캐터피",
    "types": [
      "bug"
    ],
    "weaknesses": [
      "fire",
      "flying",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png"
  },
  {
    "id": 11,
    "name": "단데기",
    "types": [
      "bug"
    ],
    "weaknesses": [
      "fire",
      "flying",
      "rock"
    ],
    "evolution": {
      "text": "캐터피 Lv.7",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png"
  },
  {
    "id": 12,
    "name": "버터플",
    "types": [
      "bug",
      "flying"
    ],
    "weaknesses": [
      "fire",
      "electric",
      "ice",
      "flying",
      "rock"
    ],
    "evolution": {
      "text": "단데기 Lv.10",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png"
  },
  {
    "id": 13,
    "name": "뿔충이",
    "types": [
      "bug",
      "poison"
    ],
    "weaknesses": [
      "fire",
      "flying",
      "psychic",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png"
  },
  {
    "id": 14,
    "name": "딱충이",
    "types": [
      "bug",
      "poison"
    ],
    "weaknesses": [
      "fire",
      "flying",
      "psychic",
      "rock"
    ],
    "evolution": {
      "text": "뿔충이 Lv.7",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png"
  },
  {
    "id": 15,
    "name": "독침붕",
    "types": [
      "bug",
      "poison"
    ],
    "weaknesses": [
      "fire",
      "flying",
      "psychic",
      "rock"
    ],
    "evolution": {
      "text": "딱충이 Lv.10",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png"
  },
  {
    "id": 16,
    "name": "구구",
    "types": [
      "normal",
      "flying"
    ],
    "weaknesses": [
      "electric",
      "ice",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png"
  },
  {
    "id": 17,
    "name": "피죤",
    "types": [
      "normal",
      "flying"
    ],
    "weaknesses": [
      "electric",
      "ice",
      "rock"
    ],
    "evolution": {
      "text": "구구 Lv.18",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png"
  },
  {
    "id": 18,
    "name": "피죤투",
    "types": [
      "normal",
      "flying"
    ],
    "weaknesses": [
      "electric",
      "ice",
      "rock"
    ],
    "evolution": {
      "text": "피죤 Lv.36",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png"
  },
  {
    "id": 19,
    "name": "꼬렛",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png"
  },
  {
    "id": 20,
    "name": "레트라",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "꼬렛 Lv.20",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png"
  },
  {
    "id": 21,
    "name": "깨비참",
    "types": [
      "normal",
      "flying"
    ],
    "weaknesses": [
      "electric",
      "ice",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png"
  },
  {
    "id": 22,
    "name": "깨비드릴조",
    "types": [
      "normal",
      "flying"
    ],
    "weaknesses": [
      "electric",
      "ice",
      "rock"
    ],
    "evolution": {
      "text": "깨비참 Lv.20",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png"
  },
  {
    "id": 23,
    "name": "아보",
    "types": [
      "poison"
    ],
    "weaknesses": [
      "ground",
      "psychic"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png"
  },
  {
    "id": 24,
    "name": "아보크",
    "types": [
      "poison"
    ],
    "weaknesses": [
      "ground",
      "psychic"
    ],
    "evolution": {
      "text": "아보 Lv.22",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png"
  },
  {
    "id": 25,
    "name": "피카츄",
    "types": [
      "electric"
    ],
    "weaknesses": [
      "ground"
    ],
    "evolution": {
      "text": "피츄 친밀도 높음",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
  },
  {
    "id": 26,
    "name": "라이츄",
    "types": [
      "electric"
    ],
    "weaknesses": [
      "ground"
    ],
    "evolution": {
      "text": "피카츄 천둥의돌 사용",
      "category": "ITEM"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png"
  },
  {
    "id": 27,
    "name": "모래두지",
    "types": [
      "ground"
    ],
    "weaknesses": [
      "water",
      "grass",
      "ice"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png"
  },
  {
    "id": 28,
    "name": "고지",
    "types": [
      "ground"
    ],
    "weaknesses": [
      "water",
      "grass",
      "ice"
    ],
    "evolution": {
      "text": "모래두지 Lv.22",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png"
  },
  {
    "id": 29,
    "name": "니드런♀",
    "types": [
      "poison"
    ],
    "weaknesses": [
      "ground",
      "psychic"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png"
  },
  {
    "id": 30,
    "name": "니드리나",
    "types": [
      "poison"
    ],
    "weaknesses": [
      "ground",
      "psychic"
    ],
    "evolution": {
      "text": "니드런♀ Lv.16",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/30.png"
  },
  {
    "id": 31,
    "name": "니드퀸",
    "types": [
      "poison",
      "ground"
    ],
    "weaknesses": [
      "water",
      "ice",
      "ground",
      "psychic"
    ],
    "evolution": {
      "text": "니드리나 달의돌 사용",
      "category": "ITEM"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png"
  },
  {
    "id": 32,
    "name": "니드런♂",
    "types": [
      "poison"
    ],
    "weaknesses": [
      "ground",
      "psychic"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png"
  },
  {
    "id": 33,
    "name": "니드리노",
    "types": [
      "poison"
    ],
    "weaknesses": [
      "ground",
      "psychic"
    ],
    "evolution": {
      "text": "니드런♂ Lv.16",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png"
  },
  {
    "id": 34,
    "name": "니드킹",
    "types": [
      "poison",
      "ground"
    ],
    "weaknesses": [
      "water",
      "ice",
      "ground",
      "psychic"
    ],
    "evolution": {
      "text": "니드리노 달의돌 사용",
      "category": "ITEM"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png"
  },
  {
    "id": 35,
    "name": "삐삐",
    "types": [
      "fairy"
    ],
    "weaknesses": [
      "poison",
      "steel"
    ],
    "evolution": {
      "text": "삐 친밀도 높음",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png"
  },
  {
    "id": 36,
    "name": "픽시",
    "types": [
      "fairy"
    ],
    "weaknesses": [
      "poison",
      "steel"
    ],
    "evolution": {
      "text": "삐삐 달의돌 사용",
      "category": "ITEM"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png"
  },
  {
    "id": 37,
    "name": "식스테일",
    "types": [
      "fire"
    ],
    "weaknesses": [
      "water",
      "ground",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png"
  },
  {
    "id": 38,
    "name": "나인테일",
    "types": [
      "fire"
    ],
    "weaknesses": [
      "water",
      "ground",
      "rock"
    ],
    "evolution": {
      "text": "식스테일 불꽃의돌 사용",
      "category": "ITEM"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png"
  },
  {
    "id": 39,
    "name": "푸린",
    "types": [
      "normal",
      "fairy"
    ],
    "weaknesses": [
      "poison",
      "steel"
    ],
    "evolution": {
      "text": "푸푸린 친밀도 높음",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png"
  },
  {
    "id": 40,
    "name": "푸크린",
    "types": [
      "normal",
      "fairy"
    ],
    "weaknesses": [
      "poison",
      "steel"
    ],
    "evolution": {
      "text": "푸린 달의돌 사용",
      "category": "ITEM"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png"
  },
  {
    "id": 41,
    "name": "주뱃",
    "types": [
      "poison",
      "flying"
    ],
    "weaknesses": [
      "electric",
      "ice",
      "psychic",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png"
  },
  {
    "id": 42,
    "name": "골뱃",
    "types": [
      "poison",
      "flying"
    ],
    "weaknesses": [
      "electric",
      "ice",
      "psychic",
      "rock"
    ],
    "evolution": {
      "text": "주뱃 Lv.22",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/42.png"
  },
  {
    "id": 43,
    "name": "뚜벅쵸",
    "types": [
      "grass",
      "poison"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "flying",
      "psychic"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png"
  },
  {
    "id": 44,
    "name": "냄새꼬",
    "types": [
      "grass",
      "poison"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "flying",
      "psychic"
    ],
    "evolution": {
      "text": "뚜벅쵸 Lv.21",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/44.png"
  },
  {
    "id": 45,
    "name": "라플레시아",
    "types": [
      "grass",
      "poison"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "flying",
      "psychic"
    ],
    "evolution": {
      "text": "냄새꼬 리프의돌 사용",
      "category": "ITEM"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/45.png"
  },
  {
    "id": 46,
    "name": "파라스",
    "types": [
      "bug",
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/46.png"
  },
  {
    "id": 47,
    "name": "파라섹트",
    "types": [
      "bug",
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug",
      "rock"
    ],
    "evolution": {
      "text": "파라스 Lv.24",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/47.png"
  },
  {
    "id": 48,
    "name": "콘팡",
    "types": [
      "bug",
      "poison"
    ],
    "weaknesses": [
      "fire",
      "flying",
      "psychic",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/48.png"
  },
  {
    "id": 49,
    "name": "도나리",
    "types": [
      "bug",
      "poison"
    ],
    "weaknesses": [
      "fire",
      "flying",
      "psychic",
      "rock"
    ],
    "evolution": {
      "text": "콘팡 Lv.31",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/49.png"
  },
  {
    "id": 50,
    "name": "디그다",
    "types": [
      "ground"
    ],
    "weaknesses": [
      "water",
      "grass",
      "ice"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/50.png"
  },
  {
    "id": 51,
    "name": "닥트리오",
    "types": [
      "ground"
    ],
    "weaknesses": [
      "water",
      "grass",
      "ice"
    ],
    "evolution": {
      "text": "디그다 Lv.26",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/51.png"
  },
  {
    "id": 52,
    "name": "나옹",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png"
  },
  {
    "id": 53,
    "name": "페르시온",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "나옹 Lv.28",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/53.png"
  },
  {
    "id": 54,
    "name": "고라파덕",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png"
  },
  {
    "id": 55,
    "name": "골덕",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "고라파덕 Lv.33",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/55.png"
  },
  {
    "id": 56,
    "name": "망키",
    "types": [
      "fighting"
    ],
    "weaknesses": [
      "flying",
      "psychic",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/56.png"
  },
  {
    "id": 57,
    "name": "성원숭",
    "types": [
      "fighting"
    ],
    "weaknesses": [
      "flying",
      "psychic",
      "fairy"
    ],
    "evolution": {
      "text": "망키 Lv.28",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/57.png"
  },
  {
    "id": 58,
    "name": "가디",
    "types": [
      "fire"
    ],
    "weaknesses": [
      "water",
      "ground",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png"
  },
  {
    "id": 59,
    "name": "윈디",
    "types": [
      "fire"
    ],
    "weaknesses": [
      "water",
      "ground",
      "rock"
    ],
    "evolution": {
      "text": "가디 불꽃의돌 사용",
      "category": "ITEM"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png"
  },
  {
    "id": 60,
    "name": "발챙이",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/60.png"
  },
  {
    "id": 61,
    "name": "슈륙챙이",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "발챙이 Lv.25",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/61.png"
  },
  {
    "id": 62,
    "name": "강챙이",
    "types": [
      "water",
      "fighting"
    ],
    "weaknesses": [
      "electric",
      "grass",
      "flying",
      "psychic",
      "fairy"
    ],
    "evolution": {
      "text": "슈륙챙이 물의돌 사용",
      "category": "ITEM"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/62.png"
  },
  {
    "id": 63,
    "name": "캐이시",
    "types": [
      "psychic"
    ],
    "weaknesses": [
      "bug",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png"
  },
  {
    "id": 64,
    "name": "윤겔라",
    "types": [
      "psychic"
    ],
    "weaknesses": [
      "bug",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "캐이시 Lv.16",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/64.png"
  },
  {
    "id": 65,
    "name": "후딘",
    "types": [
      "psychic"
    ],
    "weaknesses": [
      "bug",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "윤겔라 통신교환",
      "category": "TRADE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png"
  },
  {
    "id": 66,
    "name": "알통몬",
    "types": [
      "fighting"
    ],
    "weaknesses": [
      "flying",
      "psychic",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png"
  },
  {
    "id": 67,
    "name": "근육몬",
    "types": [
      "fighting"
    ],
    "weaknesses": [
      "flying",
      "psychic",
      "fairy"
    ],
    "evolution": {
      "text": "알통몬 Lv.28",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/67.png"
  },
  {
    "id": 68,
    "name": "괴력몬",
    "types": [
      "fighting"
    ],
    "weaknesses": [
      "flying",
      "psychic",
      "fairy"
    ],
    "evolution": {
      "text": "근육몬 통신교환",
      "category": "TRADE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png"
  },
  {
    "id": 69,
    "name": "모다피",
    "types": [
      "grass",
      "poison"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "flying",
      "psychic"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/69.png"
  },
  {
    "id": 70,
    "name": "우츠동",
    "types": [
      "grass",
      "poison"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "flying",
      "psychic"
    ],
    "evolution": {
      "text": "모다피 Lv.21",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/70.png"
  },
  {
    "id": 71,
    "name": "우츠보트",
    "types": [
      "grass",
      "poison"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "flying",
      "psychic"
    ],
    "evolution": {
      "text": "우츠동 리프의돌 사용",
      "category": "ITEM"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/71.png"
  },
  {
    "id": 72,
    "name": "왕눈해",
    "types": [
      "water",
      "poison"
    ],
    "weaknesses": [
      "electric",
      "ground",
      "psychic"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/72.png"
  },
  {
    "id": 73,
    "name": "독파리",
    "types": [
      "water",
      "poison"
    ],
    "weaknesses": [
      "electric",
      "ground",
      "psychic"
    ],
    "evolution": {
      "text": "왕눈해 Lv.30",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/73.png"
  },
  {
    "id": 74,
    "name": "꼬마돌",
    "types": [
      "rock",
      "ground"
    ],
    "weaknesses": [
      "water",
      "grass",
      "ice",
      "fighting",
      "ground",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png"
  },
  {
    "id": 75,
    "name": "데구리",
    "types": [
      "rock",
      "ground"
    ],
    "weaknesses": [
      "water",
      "grass",
      "ice",
      "fighting",
      "ground",
      "steel"
    ],
    "evolution": {
      "text": "꼬마돌 Lv.25",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/75.png"
  },
  {
    "id": 76,
    "name": "딱구리",
    "types": [
      "rock",
      "ground"
    ],
    "weaknesses": [
      "water",
      "grass",
      "ice",
      "fighting",
      "ground",
      "steel"
    ],
    "evolution": {
      "text": "데구리 통신교환",
      "category": "TRADE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/76.png"
  },
  {
    "id": 77,
    "name": "포니타",
    "types": [
      "fire"
    ],
    "weaknesses": [
      "water",
      "ground",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/77.png"
  },
  {
    "id": 78,
    "name": "날쌩마",
    "types": [
      "fire"
    ],
    "weaknesses": [
      "water",
      "ground",
      "rock"
    ],
    "evolution": {
      "text": "포니타 Lv.40",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png"
  },
  {
    "id": 79,
    "name": "야돈",
    "types": [
      "water",
      "psychic"
    ],
    "weaknesses": [
      "electric",
      "grass",
      "bug",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/79.png"
  },
  {
    "id": 80,
    "name": "야도란",
    "types": [
      "water",
      "psychic"
    ],
    "weaknesses": [
      "electric",
      "grass",
      "bug",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "야돈 Lv.37",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/80.png"
  },
  {
    "id": 81,
    "name": "코일",
    "types": [
      "electric",
      "steel"
    ],
    "weaknesses": [
      "fire",
      "fighting",
      "ground"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/81.png"
  },
  {
    "id": 82,
    "name": "레어코일",
    "types": [
      "electric",
      "steel"
    ],
    "weaknesses": [
      "fire",
      "fighting",
      "ground"
    ],
    "evolution": {
      "text": "코일 Lv.30",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/82.png"
  },
  {
    "id": 83,
    "name": "파오리",
    "types": [
      "normal",
      "flying"
    ],
    "weaknesses": [
      "electric",
      "ice",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/83.png"
  },
  {
    "id": 84,
    "name": "두두",
    "types": [
      "normal",
      "flying"
    ],
    "weaknesses": [
      "electric",
      "ice",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/84.png"
  },
  {
    "id": 85,
    "name": "두트리오",
    "types": [
      "normal",
      "flying"
    ],
    "weaknesses": [
      "electric",
      "ice",
      "rock"
    ],
    "evolution": {
      "text": "두두 Lv.31",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/85.png"
  },
  {
    "id": 86,
    "name": "쥬쥬",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/86.png"
  },
  {
    "id": 87,
    "name": "쥬레곤",
    "types": [
      "water",
      "ice"
    ],
    "weaknesses": [
      "electric",
      "grass",
      "fighting",
      "rock"
    ],
    "evolution": {
      "text": "쥬쥬 Lv.34",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/87.png"
  },
  {
    "id": 88,
    "name": "질퍽이",
    "types": [
      "poison"
    ],
    "weaknesses": [
      "ground",
      "psychic"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/88.png"
  },
  {
    "id": 89,
    "name": "질뻐기",
    "types": [
      "poison"
    ],
    "weaknesses": [
      "ground",
      "psychic"
    ],
    "evolution": {
      "text": "질퍽이 Lv.38",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/89.png"
  },
  {
    "id": 90,
    "name": "셀러",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/90.png"
  },
  {
    "id": 91,
    "name": "파르셀",
    "types": [
      "water",
      "ice"
    ],
    "weaknesses": [
      "electric",
      "grass",
      "fighting",
      "rock"
    ],
    "evolution": {
      "text": "셀러 물의돌 사용",
      "category": "ITEM"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/91.png"
  },
  {
    "id": 92,
    "name": "고오스",
    "types": [
      "ghost",
      "poison"
    ],
    "weaknesses": [
      "ground",
      "psychic",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/92.png"
  },
  {
    "id": 93,
    "name": "고우스트",
    "types": [
      "ghost",
      "poison"
    ],
    "weaknesses": [
      "ground",
      "psychic",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "고오스 Lv.25",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/93.png"
  },
  {
    "id": 94,
    "name": "팬텀",
    "types": [
      "ghost",
      "poison"
    ],
    "weaknesses": [
      "ground",
      "psychic",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "고우스트 통신교환",
      "category": "TRADE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png"
  },
  {
    "id": 95,
    "name": "롱스톤",
    "types": [
      "rock",
      "ground"
    ],
    "weaknesses": [
      "water",
      "grass",
      "ice",
      "fighting",
      "ground",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png"
  },
  {
    "id": 96,
    "name": "슬리프",
    "types": [
      "psychic"
    ],
    "weaknesses": [
      "bug",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/96.png"
  },
  {
    "id": 97,
    "name": "슬리퍼",
    "types": [
      "psychic"
    ],
    "weaknesses": [
      "bug",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "슬리프 Lv.26",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/97.png"
  },
  {
    "id": 98,
    "name": "크랩",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/98.png"
  },
  {
    "id": 99,
    "name": "킹크랩",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "크랩 Lv.28",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/99.png"
  },
  {
    "id": 100,
    "name": "찌리리공",
    "types": [
      "electric"
    ],
    "weaknesses": [
      "ground"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png"
  },
  {
    "id": 101,
    "name": "붐볼",
    "types": [
      "electric"
    ],
    "weaknesses": [
      "ground"
    ],
    "evolution": {
      "text": "찌리리공 Lv.30",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/101.png"
  },
  {
    "id": 102,
    "name": "아라리",
    "types": [
      "grass",
      "psychic"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/102.png"
  },
  {
    "id": 103,
    "name": "나시",
    "types": [
      "grass",
      "psychic"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "아라리 리프의돌 사용",
      "category": "ITEM"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/103.png"
  },
  {
    "id": 104,
    "name": "탕구리",
    "types": [
      "ground"
    ],
    "weaknesses": [
      "water",
      "grass",
      "ice"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/104.png"
  },
  {
    "id": 105,
    "name": "텅구리",
    "types": [
      "ground"
    ],
    "weaknesses": [
      "water",
      "grass",
      "ice"
    ],
    "evolution": {
      "text": "탕구리 Lv.28",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/105.png"
  },
  {
    "id": 106,
    "name": "시라소몬",
    "types": [
      "fighting"
    ],
    "weaknesses": [
      "flying",
      "psychic",
      "fairy"
    ],
    "evolution": {
      "text": "배루키 Lv.20",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/106.png"
  },
  {
    "id": 107,
    "name": "홍수몬",
    "types": [
      "fighting"
    ],
    "weaknesses": [
      "flying",
      "psychic",
      "fairy"
    ],
    "evolution": {
      "text": "배루키 Lv.20",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/107.png"
  },
  {
    "id": 108,
    "name": "내루미",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/108.png"
  },
  {
    "id": 109,
    "name": "또가스",
    "types": [
      "poison"
    ],
    "weaknesses": [
      "ground",
      "psychic"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/109.png"
  },
  {
    "id": 110,
    "name": "또도가스",
    "types": [
      "poison"
    ],
    "weaknesses": [
      "ground",
      "psychic"
    ],
    "evolution": {
      "text": "또가스 Lv.35",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/110.png"
  },
  {
    "id": 111,
    "name": "뿔카노",
    "types": [
      "ground",
      "rock"
    ],
    "weaknesses": [
      "water",
      "grass",
      "ice",
      "fighting",
      "ground",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/111.png"
  },
  {
    "id": 112,
    "name": "코뿌리",
    "types": [
      "ground",
      "rock"
    ],
    "weaknesses": [
      "water",
      "grass",
      "ice",
      "fighting",
      "ground",
      "steel"
    ],
    "evolution": {
      "text": "뿔카노 Lv.42",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/112.png"
  },
  {
    "id": 113,
    "name": "럭키",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "핑복 특수 조건",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/113.png"
  },
  {
    "id": 114,
    "name": "덩쿠리",
    "types": [
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/114.png"
  },
  {
    "id": 115,
    "name": "캥카",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/115.png"
  },
  {
    "id": 116,
    "name": "쏘드라",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/116.png"
  },
  {
    "id": 117,
    "name": "시드라",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "쏘드라 Lv.32",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/117.png"
  },
  {
    "id": 118,
    "name": "콘치",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/118.png"
  },
  {
    "id": 119,
    "name": "왕콘치",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "콘치 Lv.33",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/119.png"
  },
  {
    "id": 120,
    "name": "별가사리",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/120.png"
  },
  {
    "id": 121,
    "name": "아쿠스타",
    "types": [
      "water",
      "psychic"
    ],
    "weaknesses": [
      "electric",
      "grass",
      "bug",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "별가사리 물의돌 사용",
      "category": "ITEM"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/121.png"
  },
  {
    "id": 122,
    "name": "마임맨",
    "types": [
      "psychic",
      "fairy"
    ],
    "weaknesses": [
      "poison",
      "ghost",
      "steel"
    ],
    "evolution": {
      "text": "흉내내 특수 조건",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/122.png"
  },
  {
    "id": 123,
    "name": "스라크",
    "types": [
      "bug",
      "flying"
    ],
    "weaknesses": [
      "fire",
      "electric",
      "ice",
      "flying",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/123.png"
  },
  {
    "id": 124,
    "name": "루주라",
    "types": [
      "ice",
      "psychic"
    ],
    "weaknesses": [
      "fire",
      "bug",
      "rock",
      "ghost",
      "dark",
      "steel"
    ],
    "evolution": {
      "text": "뽀뽀라 Lv.30",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/124.png"
  },
  {
    "id": 125,
    "name": "에레브",
    "types": [
      "electric"
    ],
    "weaknesses": [
      "ground"
    ],
    "evolution": {
      "text": "에레키드 Lv.30",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/125.png"
  },
  {
    "id": 126,
    "name": "마그마",
    "types": [
      "fire"
    ],
    "weaknesses": [
      "water",
      "ground",
      "rock"
    ],
    "evolution": {
      "text": "마그비 Lv.30",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/126.png"
  },
  {
    "id": 127,
    "name": "쁘사이저",
    "types": [
      "bug"
    ],
    "weaknesses": [
      "fire",
      "flying",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/127.png"
  },
  {
    "id": 128,
    "name": "켄타로스",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/128.png"
  },
  {
    "id": 129,
    "name": "잉어킹",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png"
  },
  {
    "id": 130,
    "name": "갸라도스",
    "types": [
      "water",
      "flying"
    ],
    "weaknesses": [
      "electric",
      "rock"
    ],
    "evolution": {
      "text": "잉어킹 Lv.20",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png"
  },
  {
    "id": 131,
    "name": "라프라스",
    "types": [
      "water",
      "ice"
    ],
    "weaknesses": [
      "electric",
      "grass",
      "fighting",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png"
  },
  {
    "id": 132,
    "name": "메타몽",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"
  },
  {
    "id": 133,
    "name": "이브이",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png"
  },
  {
    "id": 134,
    "name": "샤미드",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "이브이 물의돌 사용",
      "category": "ITEM"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png"
  },
  {
    "id": 135,
    "name": "쥬피썬더",
    "types": [
      "electric"
    ],
    "weaknesses": [
      "ground"
    ],
    "evolution": {
      "text": "이브이 천둥의돌 사용",
      "category": "ITEM"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png"
  },
  {
    "id": 136,
    "name": "부스터",
    "types": [
      "fire"
    ],
    "weaknesses": [
      "water",
      "ground",
      "rock"
    ],
    "evolution": {
      "text": "이브이 불꽃의돌 사용",
      "category": "ITEM"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png"
  },
  {
    "id": 137,
    "name": "폴리곤",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/137.png"
  },
  {
    "id": 138,
    "name": "암나이트",
    "types": [
      "rock",
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass",
      "fighting",
      "ground"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/138.png"
  },
  {
    "id": 139,
    "name": "암스타",
    "types": [
      "rock",
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass",
      "fighting",
      "ground"
    ],
    "evolution": {
      "text": "암나이트 Lv.40",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/139.png"
  },
  {
    "id": 140,
    "name": "투구",
    "types": [
      "rock",
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass",
      "fighting",
      "ground"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/140.png"
  },
  {
    "id": 141,
    "name": "투구푸스",
    "types": [
      "rock",
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass",
      "fighting",
      "ground"
    ],
    "evolution": {
      "text": "투구 Lv.40",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/141.png"
  },
  {
    "id": 142,
    "name": "프테라",
    "types": [
      "rock",
      "flying"
    ],
    "weaknesses": [
      "water",
      "electric",
      "ice",
      "rock",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/142.png"
  },
  {
    "id": 143,
    "name": "잠만보",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "먹고자 친밀도 높음",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png"
  },
  {
    "id": 144,
    "name": "프리져",
    "types": [
      "ice",
      "flying"
    ],
    "weaknesses": [
      "fire",
      "electric",
      "rock",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png"
  },
  {
    "id": 145,
    "name": "썬더",
    "types": [
      "electric",
      "flying"
    ],
    "weaknesses": [
      "ice",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/145.png"
  },
  {
    "id": 146,
    "name": "파이어",
    "types": [
      "fire",
      "flying"
    ],
    "weaknesses": [
      "water",
      "electric",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/146.png"
  },
  {
    "id": 147,
    "name": "미뇽",
    "types": [
      "dragon"
    ],
    "weaknesses": [
      "ice",
      "dragon",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/147.png"
  },
  {
    "id": 148,
    "name": "신뇽",
    "types": [
      "dragon"
    ],
    "weaknesses": [
      "ice",
      "dragon",
      "fairy"
    ],
    "evolution": {
      "text": "미뇽 Lv.30",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/148.png"
  },
  {
    "id": 149,
    "name": "망나뇽",
    "types": [
      "dragon",
      "flying"
    ],
    "weaknesses": [
      "ice",
      "rock",
      "dragon",
      "fairy"
    ],
    "evolution": {
      "text": "신뇽 Lv.55",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png"
  },
  {
    "id": 150,
    "name": "뮤츠",
    "types": [
      "psychic"
    ],
    "weaknesses": [
      "bug",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png"
  },
  {
    "id": 151,
    "name": "뮤",
    "types": [
      "psychic"
    ],
    "weaknesses": [
      "bug",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png"
  },
  {
    "id": 152,
    "name": "치코리타",
    "types": [
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/152.png"
  },
  {
    "id": 153,
    "name": "베이리프",
    "types": [
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "치코리타 Lv.16",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/153.png"
  },
  {
    "id": 154,
    "name": "메가니움",
    "types": [
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "베이리프 Lv.32",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/154.png"
  },
  {
    "id": 155,
    "name": "브케인",
    "types": [
      "fire"
    ],
    "weaknesses": [
      "water",
      "ground",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/155.png"
  },
  {
    "id": 156,
    "name": "마그케인",
    "types": [
      "fire"
    ],
    "weaknesses": [
      "water",
      "ground",
      "rock"
    ],
    "evolution": {
      "text": "브케인 Lv.14",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/156.png"
  },
  {
    "id": 157,
    "name": "블레이범",
    "types": [
      "fire"
    ],
    "weaknesses": [
      "water",
      "ground",
      "rock"
    ],
    "evolution": {
      "text": "마그케인 Lv.36",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/157.png"
  },
  {
    "id": 158,
    "name": "리아코",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/158.png"
  },
  {
    "id": 159,
    "name": "엘리게이",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "리아코 Lv.18",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/159.png"
  },
  {
    "id": 160,
    "name": "장크로다일",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "엘리게이 Lv.30",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/160.png"
  },
  {
    "id": 161,
    "name": "꼬리선",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/161.png"
  },
  {
    "id": 162,
    "name": "다꼬리",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "꼬리선 Lv.15",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/162.png"
  },
  {
    "id": 163,
    "name": "부우부",
    "types": [
      "normal",
      "flying"
    ],
    "weaknesses": [
      "electric",
      "ice",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/163.png"
  },
  {
    "id": 164,
    "name": "야부엉",
    "types": [
      "normal",
      "flying"
    ],
    "weaknesses": [
      "electric",
      "ice",
      "rock"
    ],
    "evolution": {
      "text": "부우부 Lv.20",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/164.png"
  },
  {
    "id": 165,
    "name": "레디바",
    "types": [
      "bug",
      "flying"
    ],
    "weaknesses": [
      "fire",
      "electric",
      "ice",
      "flying",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/165.png"
  },
  {
    "id": 166,
    "name": "레디안",
    "types": [
      "bug",
      "flying"
    ],
    "weaknesses": [
      "fire",
      "electric",
      "ice",
      "flying",
      "rock"
    ],
    "evolution": {
      "text": "레디바 Lv.18",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/166.png"
  },
  {
    "id": 167,
    "name": "페이검",
    "types": [
      "bug",
      "poison"
    ],
    "weaknesses": [
      "fire",
      "flying",
      "psychic",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/167.png"
  },
  {
    "id": 168,
    "name": "아리아도스",
    "types": [
      "bug",
      "poison"
    ],
    "weaknesses": [
      "fire",
      "flying",
      "psychic",
      "rock"
    ],
    "evolution": {
      "text": "페이검 Lv.22",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/168.png"
  },
  {
    "id": 169,
    "name": "크로뱃",
    "types": [
      "poison",
      "flying"
    ],
    "weaknesses": [
      "electric",
      "ice",
      "psychic",
      "rock"
    ],
    "evolution": {
      "text": "골뱃 친밀도 높음",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/169.png"
  },
  {
    "id": 170,
    "name": "초라기",
    "types": [
      "water",
      "electric"
    ],
    "weaknesses": [
      "grass",
      "ground"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/170.png"
  },
  {
    "id": 171,
    "name": "랜턴",
    "types": [
      "water",
      "electric"
    ],
    "weaknesses": [
      "grass",
      "ground"
    ],
    "evolution": {
      "text": "초라기 Lv.27",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/171.png"
  },
  {
    "id": 172,
    "name": "피츄",
    "types": [
      "electric"
    ],
    "weaknesses": [
      "ground"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/172.png"
  },
  {
    "id": 173,
    "name": "삐",
    "types": [
      "fairy"
    ],
    "weaknesses": [
      "poison",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/173.png"
  },
  {
    "id": 174,
    "name": "푸푸린",
    "types": [
      "normal",
      "fairy"
    ],
    "weaknesses": [
      "poison",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/174.png"
  },
  {
    "id": 175,
    "name": "토게피",
    "types": [
      "fairy"
    ],
    "weaknesses": [
      "poison",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/175.png"
  },
  {
    "id": 176,
    "name": "토게틱",
    "types": [
      "fairy",
      "flying"
    ],
    "weaknesses": [
      "electric",
      "ice",
      "poison",
      "rock",
      "steel"
    ],
    "evolution": {
      "text": "토게피 친밀도 높음",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/176.png"
  },
  {
    "id": 177,
    "name": "네이티",
    "types": [
      "psychic",
      "flying"
    ],
    "weaknesses": [
      "electric",
      "ice",
      "rock",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/177.png"
  },
  {
    "id": 178,
    "name": "네이티오",
    "types": [
      "psychic",
      "flying"
    ],
    "weaknesses": [
      "electric",
      "ice",
      "rock",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "네이티 Lv.25",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/178.png"
  },
  {
    "id": 179,
    "name": "메리프",
    "types": [
      "electric"
    ],
    "weaknesses": [
      "ground"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/179.png"
  },
  {
    "id": 180,
    "name": "보송송",
    "types": [
      "electric"
    ],
    "weaknesses": [
      "ground"
    ],
    "evolution": {
      "text": "메리프 Lv.15",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/180.png"
  },
  {
    "id": 181,
    "name": "전룡",
    "types": [
      "electric"
    ],
    "weaknesses": [
      "ground"
    ],
    "evolution": {
      "text": "보송송 Lv.30",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/181.png"
  },
  {
    "id": 182,
    "name": "아르코",
    "types": [
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "냄새꼬 태양의돌 사용",
      "category": "ITEM"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/182.png"
  },
  {
    "id": 183,
    "name": "마릴",
    "types": [
      "water",
      "fairy"
    ],
    "weaknesses": [
      "electric",
      "grass",
      "poison"
    ],
    "evolution": {
      "text": "루리리 친밀도 높음",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/183.png"
  },
  {
    "id": 184,
    "name": "마릴리",
    "types": [
      "water",
      "fairy"
    ],
    "weaknesses": [
      "electric",
      "grass",
      "poison"
    ],
    "evolution": {
      "text": "마릴 Lv.18",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/184.png"
  },
  {
    "id": 185,
    "name": "꼬지모",
    "types": [
      "rock"
    ],
    "weaknesses": [
      "water",
      "grass",
      "fighting",
      "ground",
      "steel"
    ],
    "evolution": {
      "text": "꼬지지 특수 조건",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/185.png"
  },
  {
    "id": 186,
    "name": "왕구리",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "슈륙챙이 통신교환",
      "category": "TRADE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/186.png"
  },
  {
    "id": 187,
    "name": "통통코",
    "types": [
      "grass",
      "flying"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/187.png"
  },
  {
    "id": 188,
    "name": "두코",
    "types": [
      "grass",
      "flying"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "rock"
    ],
    "evolution": {
      "text": "통통코 Lv.18",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/188.png"
  },
  {
    "id": 189,
    "name": "솜솜코",
    "types": [
      "grass",
      "flying"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "rock"
    ],
    "evolution": {
      "text": "두코 Lv.27",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/189.png"
  },
  {
    "id": 190,
    "name": "에이팜",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/190.png"
  },
  {
    "id": 191,
    "name": "해너츠",
    "types": [
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/191.png"
  },
  {
    "id": 192,
    "name": "해루미",
    "types": [
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "해너츠 태양의돌 사용",
      "category": "ITEM"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/192.png"
  },
  {
    "id": 193,
    "name": "왕자리",
    "types": [
      "bug",
      "flying"
    ],
    "weaknesses": [
      "fire",
      "electric",
      "ice",
      "flying",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/193.png"
  },
  {
    "id": 194,
    "name": "우파",
    "types": [
      "water",
      "ground"
    ],
    "weaknesses": [
      "grass"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/194.png"
  },
  {
    "id": 195,
    "name": "누오",
    "types": [
      "water",
      "ground"
    ],
    "weaknesses": [
      "grass"
    ],
    "evolution": {
      "text": "우파 Lv.20",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/195.png"
  },
  {
    "id": 196,
    "name": "에브이",
    "types": [
      "psychic"
    ],
    "weaknesses": [
      "bug",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "이브이 친밀도 높음",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/196.png"
  },
  {
    "id": 197,
    "name": "블래키",
    "types": [
      "dark"
    ],
    "weaknesses": [
      "fighting",
      "bug",
      "fairy"
    ],
    "evolution": {
      "text": "이브이 친밀도 높음",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/197.png"
  },
  {
    "id": 198,
    "name": "니로우",
    "types": [
      "dark",
      "flying"
    ],
    "weaknesses": [
      "electric",
      "ice",
      "rock",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/198.png"
  },
  {
    "id": 199,
    "name": "야도킹",
    "types": [
      "water",
      "psychic"
    ],
    "weaknesses": [
      "electric",
      "grass",
      "bug",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "야돈 통신교환",
      "category": "TRADE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/199.png"
  },
  {
    "id": 200,
    "name": "무우마",
    "types": [
      "ghost"
    ],
    "weaknesses": [
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/200.png"
  },
  {
    "id": 201,
    "name": "안농",
    "types": [
      "psychic"
    ],
    "weaknesses": [
      "bug",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/201.png"
  },
  {
    "id": 202,
    "name": "마자용",
    "types": [
      "psychic"
    ],
    "weaknesses": [
      "bug",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "마자 Lv.15",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/202.png"
  },
  {
    "id": 203,
    "name": "키링키",
    "types": [
      "normal",
      "psychic"
    ],
    "weaknesses": [
      "bug",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/203.png"
  },
  {
    "id": 204,
    "name": "피콘",
    "types": [
      "bug"
    ],
    "weaknesses": [
      "fire",
      "flying",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/204.png"
  },
  {
    "id": 205,
    "name": "쏘콘",
    "types": [
      "bug",
      "steel"
    ],
    "weaknesses": [
      "fire"
    ],
    "evolution": {
      "text": "피콘 Lv.31",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/205.png"
  },
  {
    "id": 206,
    "name": "노고치",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/206.png"
  },
  {
    "id": 207,
    "name": "글라이거",
    "types": [
      "ground",
      "flying"
    ],
    "weaknesses": [
      "water",
      "ice"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/207.png"
  },
  {
    "id": 208,
    "name": "강철톤",
    "types": [
      "steel",
      "ground"
    ],
    "weaknesses": [
      "fire",
      "water",
      "fighting",
      "ground"
    ],
    "evolution": {
      "text": "롱스톤 통신교환",
      "category": "TRADE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/208.png"
  },
  {
    "id": 209,
    "name": "블루",
    "types": [
      "fairy"
    ],
    "weaknesses": [
      "poison",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/209.png"
  },
  {
    "id": 210,
    "name": "그랑블루",
    "types": [
      "fairy"
    ],
    "weaknesses": [
      "poison",
      "steel"
    ],
    "evolution": {
      "text": "블루 Lv.23",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/210.png"
  },
  {
    "id": 211,
    "name": "침바루",
    "types": [
      "water",
      "poison"
    ],
    "weaknesses": [
      "electric",
      "ground",
      "psychic"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/211.png"
  },
  {
    "id": 212,
    "name": "핫삼",
    "types": [
      "bug",
      "steel"
    ],
    "weaknesses": [
      "fire"
    ],
    "evolution": {
      "text": "스라크 통신교환",
      "category": "TRADE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/212.png"
  },
  {
    "id": 213,
    "name": "단단지",
    "types": [
      "bug",
      "rock"
    ],
    "weaknesses": [
      "water",
      "rock",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/213.png"
  },
  {
    "id": 214,
    "name": "헤라크로스",
    "types": [
      "bug",
      "fighting"
    ],
    "weaknesses": [
      "fire",
      "flying",
      "psychic",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/214.png"
  },
  {
    "id": 215,
    "name": "포푸니",
    "types": [
      "dark",
      "ice"
    ],
    "weaknesses": [
      "fire",
      "fighting",
      "bug",
      "rock",
      "steel",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/215.png"
  },
  {
    "id": 216,
    "name": "깜지곰",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/216.png"
  },
  {
    "id": 217,
    "name": "링곰",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "깜지곰 Lv.30",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/217.png"
  },
  {
    "id": 218,
    "name": "마그마그",
    "types": [
      "fire"
    ],
    "weaknesses": [
      "water",
      "ground",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/218.png"
  },
  {
    "id": 219,
    "name": "마그카르고",
    "types": [
      "fire",
      "rock"
    ],
    "weaknesses": [
      "water",
      "fighting",
      "ground",
      "rock"
    ],
    "evolution": {
      "text": "마그마그 Lv.38",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/219.png"
  },
  {
    "id": 220,
    "name": "꾸꾸리",
    "types": [
      "ice",
      "ground"
    ],
    "weaknesses": [
      "fire",
      "water",
      "grass",
      "fighting",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/220.png"
  },
  {
    "id": 221,
    "name": "메꾸리",
    "types": [
      "ice",
      "ground"
    ],
    "weaknesses": [
      "fire",
      "water",
      "grass",
      "fighting",
      "steel"
    ],
    "evolution": {
      "text": "꾸꾸리 Lv.33",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/221.png"
  },
  {
    "id": 222,
    "name": "코산호",
    "types": [
      "water",
      "rock"
    ],
    "weaknesses": [
      "electric",
      "grass",
      "fighting",
      "ground"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/222.png"
  },
  {
    "id": 223,
    "name": "총어",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/223.png"
  },
  {
    "id": 224,
    "name": "대포무노",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "총어 Lv.25",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/224.png"
  },
  {
    "id": 225,
    "name": "딜리버드",
    "types": [
      "ice",
      "flying"
    ],
    "weaknesses": [
      "fire",
      "electric",
      "rock",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/225.png"
  },
  {
    "id": 226,
    "name": "만타인",
    "types": [
      "water",
      "flying"
    ],
    "weaknesses": [
      "electric",
      "rock"
    ],
    "evolution": {
      "text": "타만타 특수 조건",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/226.png"
  },
  {
    "id": 227,
    "name": "무장조",
    "types": [
      "steel",
      "flying"
    ],
    "weaknesses": [
      "fire",
      "electric"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/227.png"
  },
  {
    "id": 228,
    "name": "델빌",
    "types": [
      "dark",
      "fire"
    ],
    "weaknesses": [
      "water",
      "fighting",
      "ground",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/228.png"
  },
  {
    "id": 229,
    "name": "헬가",
    "types": [
      "dark",
      "fire"
    ],
    "weaknesses": [
      "water",
      "fighting",
      "ground",
      "rock"
    ],
    "evolution": {
      "text": "델빌 Lv.24",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/229.png"
  },
  {
    "id": 230,
    "name": "킹드라",
    "types": [
      "water",
      "dragon"
    ],
    "weaknesses": [
      "dragon",
      "fairy"
    ],
    "evolution": {
      "text": "시드라 통신교환",
      "category": "TRADE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/230.png"
  },
  {
    "id": 231,
    "name": "코코리",
    "types": [
      "ground"
    ],
    "weaknesses": [
      "water",
      "grass",
      "ice"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/231.png"
  },
  {
    "id": 232,
    "name": "코리갑",
    "types": [
      "ground"
    ],
    "weaknesses": [
      "water",
      "grass",
      "ice"
    ],
    "evolution": {
      "text": "코코리 Lv.25",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/232.png"
  },
  {
    "id": 233,
    "name": "폴리곤2",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "폴리곤 통신교환",
      "category": "TRADE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/233.png"
  },
  {
    "id": 234,
    "name": "노라키",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/234.png"
  },
  {
    "id": 235,
    "name": "루브도",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/235.png"
  },
  {
    "id": 236,
    "name": "배루키",
    "types": [
      "fighting"
    ],
    "weaknesses": [
      "flying",
      "psychic",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/236.png"
  },
  {
    "id": 237,
    "name": "카포에라",
    "types": [
      "fighting"
    ],
    "weaknesses": [
      "flying",
      "psychic",
      "fairy"
    ],
    "evolution": {
      "text": "배루키 Lv.20",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/237.png"
  },
  {
    "id": 238,
    "name": "뽀뽀라",
    "types": [
      "ice",
      "psychic"
    ],
    "weaknesses": [
      "fire",
      "bug",
      "rock",
      "ghost",
      "dark",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/238.png"
  },
  {
    "id": 239,
    "name": "에레키드",
    "types": [
      "electric"
    ],
    "weaknesses": [
      "ground"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/239.png"
  },
  {
    "id": 240,
    "name": "마그비",
    "types": [
      "fire"
    ],
    "weaknesses": [
      "water",
      "ground",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/240.png"
  },
  {
    "id": 241,
    "name": "밀탱크",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/241.png"
  },
  {
    "id": 242,
    "name": "해피너스",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "럭키 친밀도 높음",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/242.png"
  },
  {
    "id": 243,
    "name": "라이코",
    "types": [
      "electric"
    ],
    "weaknesses": [
      "ground"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/243.png"
  },
  {
    "id": 244,
    "name": "앤테이",
    "types": [
      "fire"
    ],
    "weaknesses": [
      "water",
      "ground",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/244.png"
  },
  {
    "id": 245,
    "name": "스이쿤",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/245.png"
  },
  {
    "id": 246,
    "name": "애버라스",
    "types": [
      "rock",
      "ground"
    ],
    "weaknesses": [
      "water",
      "grass",
      "ice",
      "fighting",
      "ground",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/246.png"
  },
  {
    "id": 247,
    "name": "데기라스",
    "types": [
      "rock",
      "ground"
    ],
    "weaknesses": [
      "water",
      "grass",
      "ice",
      "fighting",
      "ground",
      "steel"
    ],
    "evolution": {
      "text": "애버라스 Lv.30",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/247.png"
  },
  {
    "id": 248,
    "name": "마기라스",
    "types": [
      "rock",
      "dark"
    ],
    "weaknesses": [
      "water",
      "grass",
      "fighting",
      "ground",
      "bug",
      "steel",
      "fairy"
    ],
    "evolution": {
      "text": "데기라스 Lv.55",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/248.png"
  },
  {
    "id": 249,
    "name": "루기아",
    "types": [
      "psychic",
      "flying"
    ],
    "weaknesses": [
      "electric",
      "ice",
      "rock",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/249.png"
  },
  {
    "id": 250,
    "name": "칠색조",
    "types": [
      "fire",
      "flying"
    ],
    "weaknesses": [
      "water",
      "electric",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/250.png"
  },
  {
    "id": 251,
    "name": "세레비",
    "types": [
      "psychic",
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/251.png"
  },
  {
    "id": 252,
    "name": "나무지기",
    "types": [
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/252.png"
  },
  {
    "id": 253,
    "name": "나무돌이",
    "types": [
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "나무지기 Lv.16",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/253.png"
  },
  {
    "id": 254,
    "name": "나무킹",
    "types": [
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "나무돌이 Lv.36",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/254.png"
  },
  {
    "id": 255,
    "name": "아차모",
    "types": [
      "fire"
    ],
    "weaknesses": [
      "water",
      "ground",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/255.png"
  },
  {
    "id": 256,
    "name": "영치코",
    "types": [
      "fire",
      "fighting"
    ],
    "weaknesses": [
      "water",
      "ground",
      "flying",
      "psychic"
    ],
    "evolution": {
      "text": "아차모 Lv.16",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/256.png"
  },
  {
    "id": 257,
    "name": "번치코",
    "types": [
      "fire",
      "fighting"
    ],
    "weaknesses": [
      "water",
      "ground",
      "flying",
      "psychic"
    ],
    "evolution": {
      "text": "영치코 Lv.36",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/257.png"
  },
  {
    "id": 258,
    "name": "물짱이",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/258.png"
  },
  {
    "id": 259,
    "name": "늪짱이",
    "types": [
      "water",
      "ground"
    ],
    "weaknesses": [
      "grass"
    ],
    "evolution": {
      "text": "물짱이 Lv.16",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/259.png"
  },
  {
    "id": 260,
    "name": "대짱이",
    "types": [
      "water",
      "ground"
    ],
    "weaknesses": [
      "grass"
    ],
    "evolution": {
      "text": "늪짱이 Lv.36",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/260.png"
  },
  {
    "id": 261,
    "name": "포챠나",
    "types": [
      "dark"
    ],
    "weaknesses": [
      "fighting",
      "bug",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/261.png"
  },
  {
    "id": 262,
    "name": "그라에나",
    "types": [
      "dark"
    ],
    "weaknesses": [
      "fighting",
      "bug",
      "fairy"
    ],
    "evolution": {
      "text": "포챠나 Lv.18",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/262.png"
  },
  {
    "id": 263,
    "name": "지그제구리",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/263.png"
  },
  {
    "id": 264,
    "name": "직구리",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "지그제구리 Lv.20",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/264.png"
  },
  {
    "id": 265,
    "name": "개무소",
    "types": [
      "bug"
    ],
    "weaknesses": [
      "fire",
      "flying",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/265.png"
  },
  {
    "id": 266,
    "name": "실쿤",
    "types": [
      "bug"
    ],
    "weaknesses": [
      "fire",
      "flying",
      "rock"
    ],
    "evolution": {
      "text": "개무소 Lv.7",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/266.png"
  },
  {
    "id": 267,
    "name": "뷰티플라이",
    "types": [
      "bug",
      "flying"
    ],
    "weaknesses": [
      "fire",
      "electric",
      "ice",
      "flying",
      "rock"
    ],
    "evolution": {
      "text": "실쿤 Lv.10",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/267.png"
  },
  {
    "id": 268,
    "name": "카스쿤",
    "types": [
      "bug"
    ],
    "weaknesses": [
      "fire",
      "flying",
      "rock"
    ],
    "evolution": {
      "text": "개무소 Lv.7",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/268.png"
  },
  {
    "id": 269,
    "name": "독케일",
    "types": [
      "bug",
      "poison"
    ],
    "weaknesses": [
      "fire",
      "flying",
      "psychic",
      "rock"
    ],
    "evolution": {
      "text": "카스쿤 Lv.10",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/269.png"
  },
  {
    "id": 270,
    "name": "연꽃몬",
    "types": [
      "water",
      "grass"
    ],
    "weaknesses": [
      "poison",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/270.png"
  },
  {
    "id": 271,
    "name": "로토스",
    "types": [
      "water",
      "grass"
    ],
    "weaknesses": [
      "poison",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "연꽃몬 Lv.14",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/271.png"
  },
  {
    "id": 272,
    "name": "로파파",
    "types": [
      "water",
      "grass"
    ],
    "weaknesses": [
      "poison",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "로토스 물의돌 사용",
      "category": "ITEM"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/272.png"
  },
  {
    "id": 273,
    "name": "도토링",
    "types": [
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/273.png"
  },
  {
    "id": 274,
    "name": "잎새코",
    "types": [
      "grass",
      "dark"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "fighting",
      "poison",
      "flying",
      "bug",
      "fairy"
    ],
    "evolution": {
      "text": "도토링 Lv.14",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/274.png"
  },
  {
    "id": 275,
    "name": "다탱구",
    "types": [
      "grass",
      "dark"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "fighting",
      "poison",
      "flying",
      "bug",
      "fairy"
    ],
    "evolution": {
      "text": "잎새코 리프의돌 사용",
      "category": "ITEM"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/275.png"
  },
  {
    "id": 276,
    "name": "테일로",
    "types": [
      "normal",
      "flying"
    ],
    "weaknesses": [
      "electric",
      "ice",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/276.png"
  },
  {
    "id": 277,
    "name": "스왈로",
    "types": [
      "normal",
      "flying"
    ],
    "weaknesses": [
      "electric",
      "ice",
      "rock"
    ],
    "evolution": {
      "text": "테일로 Lv.22",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/277.png"
  },
  {
    "id": 278,
    "name": "갈모매",
    "types": [
      "water",
      "flying"
    ],
    "weaknesses": [
      "electric",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/278.png"
  },
  {
    "id": 279,
    "name": "패리퍼",
    "types": [
      "water",
      "flying"
    ],
    "weaknesses": [
      "electric",
      "rock"
    ],
    "evolution": {
      "text": "갈모매 Lv.25",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/279.png"
  },
  {
    "id": 280,
    "name": "랄토스",
    "types": [
      "psychic",
      "fairy"
    ],
    "weaknesses": [
      "poison",
      "ghost",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/280.png"
  },
  {
    "id": 281,
    "name": "킬리아",
    "types": [
      "psychic",
      "fairy"
    ],
    "weaknesses": [
      "poison",
      "ghost",
      "steel"
    ],
    "evolution": {
      "text": "랄토스 Lv.20",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/281.png"
  },
  {
    "id": 282,
    "name": "가디안",
    "types": [
      "psychic",
      "fairy"
    ],
    "weaknesses": [
      "poison",
      "ghost",
      "steel"
    ],
    "evolution": {
      "text": "킬리아 Lv.30",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/282.png"
  },
  {
    "id": 283,
    "name": "비구술",
    "types": [
      "bug",
      "water"
    ],
    "weaknesses": [
      "electric",
      "flying",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/283.png"
  },
  {
    "id": 284,
    "name": "비나방",
    "types": [
      "bug",
      "flying"
    ],
    "weaknesses": [
      "fire",
      "electric",
      "ice",
      "flying",
      "rock"
    ],
    "evolution": {
      "text": "비구술 Lv.22",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/284.png"
  },
  {
    "id": 285,
    "name": "버섯꼬",
    "types": [
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/285.png"
  },
  {
    "id": 286,
    "name": "버섯모",
    "types": [
      "grass",
      "fighting"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "psychic",
      "fairy"
    ],
    "evolution": {
      "text": "버섯꼬 Lv.23",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/286.png"
  },
  {
    "id": 287,
    "name": "게을로",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/287.png"
  },
  {
    "id": 288,
    "name": "발바로",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "게을로 Lv.18",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/288.png"
  },
  {
    "id": 289,
    "name": "게을킹",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "발바로 Lv.36",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/289.png"
  },
  {
    "id": 290,
    "name": "토중몬",
    "types": [
      "bug",
      "ground"
    ],
    "weaknesses": [
      "fire",
      "water",
      "ice",
      "flying"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/290.png"
  },
  {
    "id": 291,
    "name": "아이스크",
    "types": [
      "bug",
      "flying"
    ],
    "weaknesses": [
      "fire",
      "electric",
      "ice",
      "flying",
      "rock"
    ],
    "evolution": {
      "text": "토중몬 Lv.20",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/291.png"
  },
  {
    "id": 292,
    "name": "껍질몬",
    "types": [
      "bug",
      "ghost"
    ],
    "weaknesses": [
      "fire",
      "flying",
      "rock",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "토중몬 특수 조건",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/292.png"
  },
  {
    "id": 293,
    "name": "소곤룡",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/293.png"
  },
  {
    "id": 294,
    "name": "노공룡",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "소곤룡 Lv.20",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/294.png"
  },
  {
    "id": 295,
    "name": "폭음룡",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "노공룡 Lv.40",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/295.png"
  },
  {
    "id": 296,
    "name": "마크탕",
    "types": [
      "fighting"
    ],
    "weaknesses": [
      "flying",
      "psychic",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/296.png"
  },
  {
    "id": 297,
    "name": "하리뭉",
    "types": [
      "fighting"
    ],
    "weaknesses": [
      "flying",
      "psychic",
      "fairy"
    ],
    "evolution": {
      "text": "마크탕 Lv.24",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/297.png"
  },
  {
    "id": 298,
    "name": "루리리",
    "types": [
      "normal",
      "fairy"
    ],
    "weaknesses": [
      "poison",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/298.png"
  },
  {
    "id": 299,
    "name": "코코파스",
    "types": [
      "rock"
    ],
    "weaknesses": [
      "water",
      "grass",
      "fighting",
      "ground",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/299.png"
  },
  {
    "id": 300,
    "name": "에나비",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/300.png"
  },
  {
    "id": 301,
    "name": "델케티",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "에나비 달의돌 사용",
      "category": "ITEM"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/301.png"
  },
  {
    "id": 302,
    "name": "깜까미",
    "types": [
      "dark",
      "ghost"
    ],
    "weaknesses": [
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/302.png"
  },
  {
    "id": 303,
    "name": "입치트",
    "types": [
      "steel",
      "fairy"
    ],
    "weaknesses": [
      "fire",
      "ground"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/303.png"
  },
  {
    "id": 304,
    "name": "가보리",
    "types": [
      "steel",
      "rock"
    ],
    "weaknesses": [
      "water",
      "fighting",
      "ground"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/304.png"
  },
  {
    "id": 305,
    "name": "갱도라",
    "types": [
      "steel",
      "rock"
    ],
    "weaknesses": [
      "water",
      "fighting",
      "ground"
    ],
    "evolution": {
      "text": "가보리 Lv.32",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/305.png"
  },
  {
    "id": 306,
    "name": "보스로라",
    "types": [
      "steel",
      "rock"
    ],
    "weaknesses": [
      "water",
      "fighting",
      "ground"
    ],
    "evolution": {
      "text": "갱도라 Lv.42",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/306.png"
  },
  {
    "id": 307,
    "name": "요가랑",
    "types": [
      "fighting",
      "psychic"
    ],
    "weaknesses": [
      "flying",
      "ghost",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/307.png"
  },
  {
    "id": 308,
    "name": "요가램",
    "types": [
      "fighting",
      "psychic"
    ],
    "weaknesses": [
      "flying",
      "ghost",
      "fairy"
    ],
    "evolution": {
      "text": "요가랑 Lv.37",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/308.png"
  },
  {
    "id": 309,
    "name": "썬더라이",
    "types": [
      "electric"
    ],
    "weaknesses": [
      "ground"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/309.png"
  },
  {
    "id": 310,
    "name": "썬더볼트",
    "types": [
      "electric"
    ],
    "weaknesses": [
      "ground"
    ],
    "evolution": {
      "text": "썬더라이 Lv.26",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/310.png"
  },
  {
    "id": 311,
    "name": "플러시",
    "types": [
      "electric"
    ],
    "weaknesses": [
      "ground"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/311.png"
  },
  {
    "id": 312,
    "name": "마이농",
    "types": [
      "electric"
    ],
    "weaknesses": [
      "ground"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/312.png"
  },
  {
    "id": 313,
    "name": "볼비트",
    "types": [
      "bug"
    ],
    "weaknesses": [
      "fire",
      "flying",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/313.png"
  },
  {
    "id": 314,
    "name": "네오비트",
    "types": [
      "bug"
    ],
    "weaknesses": [
      "fire",
      "flying",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/314.png"
  },
  {
    "id": 315,
    "name": "로젤리아",
    "types": [
      "grass",
      "poison"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "flying",
      "psychic"
    ],
    "evolution": {
      "text": "꼬몽울 친밀도 높음",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/315.png"
  },
  {
    "id": 316,
    "name": "꼴깍몬",
    "types": [
      "poison"
    ],
    "weaknesses": [
      "ground",
      "psychic"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/316.png"
  },
  {
    "id": 317,
    "name": "꿀꺽몬",
    "types": [
      "poison"
    ],
    "weaknesses": [
      "ground",
      "psychic"
    ],
    "evolution": {
      "text": "꼴깍몬 Lv.26",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/317.png"
  },
  {
    "id": 318,
    "name": "샤프니아",
    "types": [
      "water",
      "dark"
    ],
    "weaknesses": [
      "electric",
      "grass",
      "fighting",
      "bug",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/318.png"
  },
  {
    "id": 319,
    "name": "샤크니아",
    "types": [
      "water",
      "dark"
    ],
    "weaknesses": [
      "electric",
      "grass",
      "fighting",
      "bug",
      "fairy"
    ],
    "evolution": {
      "text": "샤프니아 Lv.30",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/319.png"
  },
  {
    "id": 320,
    "name": "고래왕자",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/320.png"
  },
  {
    "id": 321,
    "name": "고래왕",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "고래왕자 Lv.40",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/321.png"
  },
  {
    "id": 322,
    "name": "둔타",
    "types": [
      "fire",
      "ground"
    ],
    "weaknesses": [
      "water",
      "ground"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/322.png"
  },
  {
    "id": 323,
    "name": "폭타",
    "types": [
      "fire",
      "ground"
    ],
    "weaknesses": [
      "water",
      "ground"
    ],
    "evolution": {
      "text": "둔타 Lv.33",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/323.png"
  },
  {
    "id": 324,
    "name": "코터스",
    "types": [
      "fire"
    ],
    "weaknesses": [
      "water",
      "ground",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/324.png"
  },
  {
    "id": 325,
    "name": "피그점프",
    "types": [
      "psychic"
    ],
    "weaknesses": [
      "bug",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/325.png"
  },
  {
    "id": 326,
    "name": "피그킹",
    "types": [
      "psychic"
    ],
    "weaknesses": [
      "bug",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "피그점프 Lv.32",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/326.png"
  },
  {
    "id": 327,
    "name": "얼루기",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/327.png"
  },
  {
    "id": 328,
    "name": "톱치",
    "types": [
      "ground"
    ],
    "weaknesses": [
      "water",
      "grass",
      "ice"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/328.png"
  },
  {
    "id": 329,
    "name": "비브라바",
    "types": [
      "ground",
      "dragon"
    ],
    "weaknesses": [
      "ice",
      "dragon",
      "fairy"
    ],
    "evolution": {
      "text": "톱치 Lv.35",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/329.png"
  },
  {
    "id": 330,
    "name": "플라이곤",
    "types": [
      "ground",
      "dragon"
    ],
    "weaknesses": [
      "ice",
      "dragon",
      "fairy"
    ],
    "evolution": {
      "text": "비브라바 Lv.45",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/330.png"
  },
  {
    "id": 331,
    "name": "선인왕",
    "types": [
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/331.png"
  },
  {
    "id": 332,
    "name": "밤선인",
    "types": [
      "grass",
      "dark"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "fighting",
      "poison",
      "flying",
      "bug",
      "fairy"
    ],
    "evolution": {
      "text": "선인왕 Lv.32",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/332.png"
  },
  {
    "id": 333,
    "name": "파비코",
    "types": [
      "normal",
      "flying"
    ],
    "weaknesses": [
      "electric",
      "ice",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/333.png"
  },
  {
    "id": 334,
    "name": "파비코리",
    "types": [
      "dragon",
      "flying"
    ],
    "weaknesses": [
      "ice",
      "rock",
      "dragon",
      "fairy"
    ],
    "evolution": {
      "text": "파비코 Lv.35",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/334.png"
  },
  {
    "id": 335,
    "name": "쟝고",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/335.png"
  },
  {
    "id": 336,
    "name": "세비퍼",
    "types": [
      "poison"
    ],
    "weaknesses": [
      "ground",
      "psychic"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/336.png"
  },
  {
    "id": 337,
    "name": "루나톤",
    "types": [
      "rock",
      "psychic"
    ],
    "weaknesses": [
      "water",
      "grass",
      "ground",
      "bug",
      "ghost",
      "dark",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/337.png"
  },
  {
    "id": 338,
    "name": "솔록",
    "types": [
      "rock",
      "psychic"
    ],
    "weaknesses": [
      "water",
      "grass",
      "ground",
      "bug",
      "ghost",
      "dark",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/338.png"
  },
  {
    "id": 339,
    "name": "미꾸리",
    "types": [
      "water",
      "ground"
    ],
    "weaknesses": [
      "grass"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/339.png"
  },
  {
    "id": 340,
    "name": "메깅",
    "types": [
      "water",
      "ground"
    ],
    "weaknesses": [
      "grass"
    ],
    "evolution": {
      "text": "미꾸리 Lv.30",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/340.png"
  },
  {
    "id": 341,
    "name": "가재군",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/341.png"
  },
  {
    "id": 342,
    "name": "가재장군",
    "types": [
      "water",
      "dark"
    ],
    "weaknesses": [
      "electric",
      "grass",
      "fighting",
      "bug",
      "fairy"
    ],
    "evolution": {
      "text": "가재군 Lv.30",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/342.png"
  },
  {
    "id": 343,
    "name": "오뚝군",
    "types": [
      "ground",
      "psychic"
    ],
    "weaknesses": [
      "water",
      "grass",
      "ice",
      "bug",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/343.png"
  },
  {
    "id": 344,
    "name": "점토도리",
    "types": [
      "ground",
      "psychic"
    ],
    "weaknesses": [
      "water",
      "grass",
      "ice",
      "bug",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "오뚝군 Lv.36",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/344.png"
  },
  {
    "id": 345,
    "name": "릴링",
    "types": [
      "rock",
      "grass"
    ],
    "weaknesses": [
      "ice",
      "fighting",
      "bug",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/345.png"
  },
  {
    "id": 346,
    "name": "릴리요",
    "types": [
      "rock",
      "grass"
    ],
    "weaknesses": [
      "ice",
      "fighting",
      "bug",
      "steel"
    ],
    "evolution": {
      "text": "릴링 Lv.40",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/346.png"
  },
  {
    "id": 347,
    "name": "아노딥스",
    "types": [
      "rock",
      "bug"
    ],
    "weaknesses": [
      "water",
      "rock",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/347.png"
  },
  {
    "id": 348,
    "name": "아말도",
    "types": [
      "rock",
      "bug"
    ],
    "weaknesses": [
      "water",
      "rock",
      "steel"
    ],
    "evolution": {
      "text": "아노딥스 Lv.40",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/348.png"
  },
  {
    "id": 349,
    "name": "빈티나",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/349.png"
  },
  {
    "id": 350,
    "name": "밀로틱",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "빈티나 특수 조건",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/350.png"
  },
  {
    "id": 351,
    "name": "캐스퐁",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/351.png"
  },
  {
    "id": 352,
    "name": "켈리몬",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/352.png"
  },
  {
    "id": 353,
    "name": "어둠대신",
    "types": [
      "ghost"
    ],
    "weaknesses": [
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/353.png"
  },
  {
    "id": 354,
    "name": "다크펫",
    "types": [
      "ghost"
    ],
    "weaknesses": [
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "어둠대신 Lv.37",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/354.png"
  },
  {
    "id": 355,
    "name": "해골몽",
    "types": [
      "ghost"
    ],
    "weaknesses": [
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/355.png"
  },
  {
    "id": 356,
    "name": "미라몽",
    "types": [
      "ghost"
    ],
    "weaknesses": [
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "해골몽 Lv.37",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/356.png"
  },
  {
    "id": 357,
    "name": "트로피우스",
    "types": [
      "grass",
      "flying"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/357.png"
  },
  {
    "id": 358,
    "name": "치렁",
    "types": [
      "psychic"
    ],
    "weaknesses": [
      "bug",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "랑딸랑 친밀도 높음",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/358.png"
  },
  {
    "id": 359,
    "name": "앱솔",
    "types": [
      "dark"
    ],
    "weaknesses": [
      "fighting",
      "bug",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/359.png"
  },
  {
    "id": 360,
    "name": "마자",
    "types": [
      "psychic"
    ],
    "weaknesses": [
      "bug",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/360.png"
  },
  {
    "id": 361,
    "name": "눈꼬마",
    "types": [
      "ice"
    ],
    "weaknesses": [
      "fire",
      "fighting",
      "rock",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/361.png"
  },
  {
    "id": 362,
    "name": "얼음귀신",
    "types": [
      "ice"
    ],
    "weaknesses": [
      "fire",
      "fighting",
      "rock",
      "steel"
    ],
    "evolution": {
      "text": "눈꼬마 Lv.42",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/362.png"
  },
  {
    "id": 363,
    "name": "대굴레오",
    "types": [
      "ice",
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass",
      "fighting",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/363.png"
  },
  {
    "id": 364,
    "name": "씨레오",
    "types": [
      "ice",
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass",
      "fighting",
      "rock"
    ],
    "evolution": {
      "text": "대굴레오 Lv.32",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/364.png"
  },
  {
    "id": 365,
    "name": "씨카이저",
    "types": [
      "ice",
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass",
      "fighting",
      "rock"
    ],
    "evolution": {
      "text": "씨레오 Lv.44",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/365.png"
  },
  {
    "id": 366,
    "name": "진주몽",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/366.png"
  },
  {
    "id": 367,
    "name": "헌테일",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "진주몽 통신교환",
      "category": "TRADE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/367.png"
  },
  {
    "id": 368,
    "name": "분홍장이",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "진주몽 통신교환",
      "category": "TRADE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/368.png"
  },
  {
    "id": 369,
    "name": "시라칸",
    "types": [
      "water",
      "rock"
    ],
    "weaknesses": [
      "electric",
      "grass",
      "fighting",
      "ground"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/369.png"
  },
  {
    "id": 370,
    "name": "사랑동이",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/370.png"
  },
  {
    "id": 371,
    "name": "아공이",
    "types": [
      "dragon"
    ],
    "weaknesses": [
      "ice",
      "dragon",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/371.png"
  },
  {
    "id": 372,
    "name": "쉘곤",
    "types": [
      "dragon"
    ],
    "weaknesses": [
      "ice",
      "dragon",
      "fairy"
    ],
    "evolution": {
      "text": "아공이 Lv.30",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/372.png"
  },
  {
    "id": 373,
    "name": "보만다",
    "types": [
      "dragon",
      "flying"
    ],
    "weaknesses": [
      "ice",
      "rock",
      "dragon",
      "fairy"
    ],
    "evolution": {
      "text": "쉘곤 Lv.50",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/373.png"
  },
  {
    "id": 374,
    "name": "메탕",
    "types": [
      "steel",
      "psychic"
    ],
    "weaknesses": [
      "fire",
      "ground",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/374.png"
  },
  {
    "id": 375,
    "name": "메탕구",
    "types": [
      "steel",
      "psychic"
    ],
    "weaknesses": [
      "fire",
      "ground",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "메탕 Lv.20",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/375.png"
  },
  {
    "id": 376,
    "name": "메타그로스",
    "types": [
      "steel",
      "psychic"
    ],
    "weaknesses": [
      "fire",
      "ground",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "메탕구 Lv.45",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/376.png"
  },
  {
    "id": 377,
    "name": "레지락",
    "types": [
      "rock"
    ],
    "weaknesses": [
      "water",
      "grass",
      "fighting",
      "ground",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/377.png"
  },
  {
    "id": 378,
    "name": "레지아이스",
    "types": [
      "ice"
    ],
    "weaknesses": [
      "fire",
      "fighting",
      "rock",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/378.png"
  },
  {
    "id": 379,
    "name": "레지스틸",
    "types": [
      "steel"
    ],
    "weaknesses": [
      "fire",
      "fighting",
      "ground"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/379.png"
  },
  {
    "id": 380,
    "name": "라티아스",
    "types": [
      "dragon",
      "psychic"
    ],
    "weaknesses": [
      "ice",
      "bug",
      "ghost",
      "dragon",
      "dark",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/380.png"
  },
  {
    "id": 381,
    "name": "라티오스",
    "types": [
      "dragon",
      "psychic"
    ],
    "weaknesses": [
      "ice",
      "bug",
      "ghost",
      "dragon",
      "dark",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/381.png"
  },
  {
    "id": 382,
    "name": "가이오가",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/382.png"
  },
  {
    "id": 383,
    "name": "그란돈",
    "types": [
      "ground"
    ],
    "weaknesses": [
      "water",
      "grass",
      "ice"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/383.png"
  },
  {
    "id": 384,
    "name": "레쿠쟈",
    "types": [
      "dragon",
      "flying"
    ],
    "weaknesses": [
      "ice",
      "rock",
      "dragon",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/384.png"
  },
  {
    "id": 385,
    "name": "지라치",
    "types": [
      "steel",
      "psychic"
    ],
    "weaknesses": [
      "fire",
      "ground",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/385.png"
  },
  {
    "id": 386,
    "name": "테오키스",
    "types": [
      "psychic"
    ],
    "weaknesses": [
      "bug",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/386.png"
  },
  {
    "id": 387,
    "name": "모부기",
    "types": [
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/387.png"
  },
  {
    "id": 388,
    "name": "수풀부기",
    "types": [
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "모부기 Lv.18",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/388.png"
  },
  {
    "id": 389,
    "name": "토대부기",
    "types": [
      "grass",
      "ground"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "수풀부기 Lv.32",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/389.png"
  },
  {
    "id": 390,
    "name": "불꽃숭이",
    "types": [
      "fire"
    ],
    "weaknesses": [
      "water",
      "ground",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/390.png"
  },
  {
    "id": 391,
    "name": "파이숭이",
    "types": [
      "fire",
      "fighting"
    ],
    "weaknesses": [
      "water",
      "ground",
      "flying",
      "psychic"
    ],
    "evolution": {
      "text": "불꽃숭이 Lv.14",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/391.png"
  },
  {
    "id": 392,
    "name": "초염몽",
    "types": [
      "fire",
      "fighting"
    ],
    "weaknesses": [
      "water",
      "ground",
      "flying",
      "psychic"
    ],
    "evolution": {
      "text": "파이숭이 Lv.36",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/392.png"
  },
  {
    "id": 393,
    "name": "팽도리",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/393.png"
  },
  {
    "id": 394,
    "name": "팽태자",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "팽도리 Lv.16",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/394.png"
  },
  {
    "id": 395,
    "name": "엠페르트",
    "types": [
      "water",
      "steel"
    ],
    "weaknesses": [
      "electric",
      "fighting",
      "ground"
    ],
    "evolution": {
      "text": "팽태자 Lv.36",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/395.png"
  },
  {
    "id": 396,
    "name": "찌르꼬",
    "types": [
      "normal",
      "flying"
    ],
    "weaknesses": [
      "electric",
      "ice",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/396.png"
  },
  {
    "id": 397,
    "name": "찌르버드",
    "types": [
      "normal",
      "flying"
    ],
    "weaknesses": [
      "electric",
      "ice",
      "rock"
    ],
    "evolution": {
      "text": "찌르꼬 Lv.14",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/397.png"
  },
  {
    "id": 398,
    "name": "찌르호크",
    "types": [
      "normal",
      "flying"
    ],
    "weaknesses": [
      "electric",
      "ice",
      "rock"
    ],
    "evolution": {
      "text": "찌르버드 Lv.34",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/398.png"
  },
  {
    "id": 399,
    "name": "비버니",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/399.png"
  },
  {
    "id": 400,
    "name": "비버통",
    "types": [
      "normal",
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass",
      "fighting"
    ],
    "evolution": {
      "text": "비버니 Lv.15",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/400.png"
  },
  {
    "id": 401,
    "name": "귀뚤뚜기",
    "types": [
      "bug"
    ],
    "weaknesses": [
      "fire",
      "flying",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/401.png"
  },
  {
    "id": 402,
    "name": "귀뚤톡크",
    "types": [
      "bug"
    ],
    "weaknesses": [
      "fire",
      "flying",
      "rock"
    ],
    "evolution": {
      "text": "귀뚤뚜기 Lv.10",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/402.png"
  },
  {
    "id": 403,
    "name": "꼬링크",
    "types": [
      "electric"
    ],
    "weaknesses": [
      "ground"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/403.png"
  },
  {
    "id": 404,
    "name": "럭시오",
    "types": [
      "electric"
    ],
    "weaknesses": [
      "ground"
    ],
    "evolution": {
      "text": "꼬링크 Lv.15",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/404.png"
  },
  {
    "id": 405,
    "name": "렌트라",
    "types": [
      "electric"
    ],
    "weaknesses": [
      "ground"
    ],
    "evolution": {
      "text": "럭시오 Lv.30",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/405.png"
  },
  {
    "id": 406,
    "name": "꼬몽울",
    "types": [
      "grass",
      "poison"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "flying",
      "psychic"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/406.png"
  },
  {
    "id": 407,
    "name": "로즈레이드",
    "types": [
      "grass",
      "poison"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "flying",
      "psychic"
    ],
    "evolution": {
      "text": "로젤리아 빛의돌 사용",
      "category": "ITEM"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/407.png"
  },
  {
    "id": 408,
    "name": "두개도스",
    "types": [
      "rock"
    ],
    "weaknesses": [
      "water",
      "grass",
      "fighting",
      "ground",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/408.png"
  },
  {
    "id": 409,
    "name": "램펄드",
    "types": [
      "rock"
    ],
    "weaknesses": [
      "water",
      "grass",
      "fighting",
      "ground",
      "steel"
    ],
    "evolution": {
      "text": "두개도스 Lv.30",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/409.png"
  },
  {
    "id": 410,
    "name": "방패톱스",
    "types": [
      "rock",
      "steel"
    ],
    "weaknesses": [
      "water",
      "fighting",
      "ground"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/410.png"
  },
  {
    "id": 411,
    "name": "바리톱스",
    "types": [
      "rock",
      "steel"
    ],
    "weaknesses": [
      "water",
      "fighting",
      "ground"
    ],
    "evolution": {
      "text": "방패톱스 Lv.30",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/411.png"
  },
  {
    "id": 412,
    "name": "도롱충이",
    "types": [
      "bug"
    ],
    "weaknesses": [
      "fire",
      "flying",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/412.png"
  },
  {
    "id": 413,
    "name": "도롱마담",
    "types": [
      "bug",
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/413.png"
  },
  {
    "id": 414,
    "name": "나메일",
    "types": [
      "bug",
      "flying"
    ],
    "weaknesses": [
      "fire",
      "electric",
      "ice",
      "flying",
      "rock"
    ],
    "evolution": {
      "text": "도롱충이 Lv.20",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/414.png"
  },
  {
    "id": 415,
    "name": "세꿀버리",
    "types": [
      "bug",
      "flying"
    ],
    "weaknesses": [
      "fire",
      "electric",
      "ice",
      "flying",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/415.png"
  },
  {
    "id": 416,
    "name": "비퀸",
    "types": [
      "bug",
      "flying"
    ],
    "weaknesses": [
      "fire",
      "electric",
      "ice",
      "flying",
      "rock"
    ],
    "evolution": {
      "text": "세꿀버리 Lv.21",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/416.png"
  },
  {
    "id": 417,
    "name": "파치리스",
    "types": [
      "electric"
    ],
    "weaknesses": [
      "ground"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/417.png"
  },
  {
    "id": 418,
    "name": "브이젤",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/418.png"
  },
  {
    "id": 419,
    "name": "플로젤",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "브이젤 Lv.26",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/419.png"
  },
  {
    "id": 420,
    "name": "체리버",
    "types": [
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/420.png"
  },
  {
    "id": 421,
    "name": "체리꼬",
    "types": [
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "체리버 Lv.25",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/421.png"
  },
  {
    "id": 422,
    "name": "깝질무",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/422.png"
  },
  {
    "id": 423,
    "name": "트리토돈",
    "types": [
      "water",
      "ground"
    ],
    "weaknesses": [
      "grass"
    ],
    "evolution": {
      "text": "깝질무 Lv.30",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/423.png"
  },
  {
    "id": 424,
    "name": "겟핸보숭",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "에이팜 특수 조건",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/424.png"
  },
  {
    "id": 425,
    "name": "흔들풍손",
    "types": [
      "ghost",
      "flying"
    ],
    "weaknesses": [
      "electric",
      "ice",
      "rock",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/425.png"
  },
  {
    "id": 426,
    "name": "둥실라이드",
    "types": [
      "ghost",
      "flying"
    ],
    "weaknesses": [
      "electric",
      "ice",
      "rock",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "흔들풍손 Lv.28",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/426.png"
  },
  {
    "id": 427,
    "name": "이어롤",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/427.png"
  },
  {
    "id": 428,
    "name": "이어롭",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "이어롤 친밀도 높음",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/428.png"
  },
  {
    "id": 429,
    "name": "무우마직",
    "types": [
      "ghost"
    ],
    "weaknesses": [
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "무우마 어둠의돌 사용",
      "category": "ITEM"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/429.png"
  },
  {
    "id": 430,
    "name": "돈크로우",
    "types": [
      "dark",
      "flying"
    ],
    "weaknesses": [
      "electric",
      "ice",
      "rock",
      "fairy"
    ],
    "evolution": {
      "text": "니로우 어둠의돌 사용",
      "category": "ITEM"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/430.png"
  },
  {
    "id": 431,
    "name": "나옹마",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/431.png"
  },
  {
    "id": 432,
    "name": "몬냥이",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "나옹마 Lv.38",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/432.png"
  },
  {
    "id": 433,
    "name": "랑딸랑",
    "types": [
      "psychic"
    ],
    "weaknesses": [
      "bug",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/433.png"
  },
  {
    "id": 434,
    "name": "스컹뿡",
    "types": [
      "poison",
      "dark"
    ],
    "weaknesses": [
      "ground"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/434.png"
  },
  {
    "id": 435,
    "name": "스컹탱크",
    "types": [
      "poison",
      "dark"
    ],
    "weaknesses": [
      "ground"
    ],
    "evolution": {
      "text": "스컹뿡 Lv.34",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/435.png"
  },
  {
    "id": 436,
    "name": "동미러",
    "types": [
      "steel",
      "psychic"
    ],
    "weaknesses": [
      "fire",
      "ground",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/436.png"
  },
  {
    "id": 437,
    "name": "동탁군",
    "types": [
      "steel",
      "psychic"
    ],
    "weaknesses": [
      "fire",
      "ground",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "동미러 Lv.33",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/437.png"
  },
  {
    "id": 438,
    "name": "꼬지지",
    "types": [
      "rock"
    ],
    "weaknesses": [
      "water",
      "grass",
      "fighting",
      "ground",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/438.png"
  },
  {
    "id": 439,
    "name": "흉내내",
    "types": [
      "psychic",
      "fairy"
    ],
    "weaknesses": [
      "poison",
      "ghost",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/439.png"
  },
  {
    "id": 440,
    "name": "핑복",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/440.png"
  },
  {
    "id": 441,
    "name": "페라페",
    "types": [
      "normal",
      "flying"
    ],
    "weaknesses": [
      "electric",
      "ice",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/441.png"
  },
  {
    "id": 442,
    "name": "화강돌",
    "types": [
      "ghost",
      "dark"
    ],
    "weaknesses": [
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/442.png"
  },
  {
    "id": 443,
    "name": "딥상어동",
    "types": [
      "dragon",
      "ground"
    ],
    "weaknesses": [
      "ice",
      "dragon",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/443.png"
  },
  {
    "id": 444,
    "name": "한바이트",
    "types": [
      "dragon",
      "ground"
    ],
    "weaknesses": [
      "ice",
      "dragon",
      "fairy"
    ],
    "evolution": {
      "text": "딥상어동 Lv.24",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/444.png"
  },
  {
    "id": 445,
    "name": "한카리아스",
    "types": [
      "dragon",
      "ground"
    ],
    "weaknesses": [
      "ice",
      "dragon",
      "fairy"
    ],
    "evolution": {
      "text": "한바이트 Lv.48",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/445.png"
  },
  {
    "id": 446,
    "name": "먹고자",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/446.png"
  },
  {
    "id": 447,
    "name": "리오르",
    "types": [
      "fighting"
    ],
    "weaknesses": [
      "flying",
      "psychic",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/447.png"
  },
  {
    "id": 448,
    "name": "루카리오",
    "types": [
      "fighting",
      "steel"
    ],
    "weaknesses": [
      "fire",
      "fighting",
      "ground"
    ],
    "evolution": {
      "text": "리오르 친밀도 높음",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png"
  },
  {
    "id": 449,
    "name": "히포포타스",
    "types": [
      "ground"
    ],
    "weaknesses": [
      "water",
      "grass",
      "ice"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/449.png"
  },
  {
    "id": 450,
    "name": "하마돈",
    "types": [
      "ground"
    ],
    "weaknesses": [
      "water",
      "grass",
      "ice"
    ],
    "evolution": {
      "text": "히포포타스 Lv.34",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/450.png"
  },
  {
    "id": 451,
    "name": "스콜피",
    "types": [
      "poison",
      "bug"
    ],
    "weaknesses": [
      "fire",
      "flying",
      "psychic",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/451.png"
  },
  {
    "id": 452,
    "name": "드래피온",
    "types": [
      "poison",
      "dark"
    ],
    "weaknesses": [
      "ground"
    ],
    "evolution": {
      "text": "스콜피 Lv.40",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/452.png"
  },
  {
    "id": 453,
    "name": "삐딱구리",
    "types": [
      "poison",
      "fighting"
    ],
    "weaknesses": [
      "ground",
      "flying",
      "psychic"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/453.png"
  },
  {
    "id": 454,
    "name": "독개굴",
    "types": [
      "poison",
      "fighting"
    ],
    "weaknesses": [
      "ground",
      "flying",
      "psychic"
    ],
    "evolution": {
      "text": "삐딱구리 Lv.37",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/454.png"
  },
  {
    "id": 455,
    "name": "무스틈니",
    "types": [
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/455.png"
  },
  {
    "id": 456,
    "name": "형광어",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/456.png"
  },
  {
    "id": 457,
    "name": "네오라이트",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "형광어 Lv.31",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/457.png"
  },
  {
    "id": 458,
    "name": "타만타",
    "types": [
      "water",
      "flying"
    ],
    "weaknesses": [
      "electric",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/458.png"
  },
  {
    "id": 459,
    "name": "눈쓰개",
    "types": [
      "grass",
      "ice"
    ],
    "weaknesses": [
      "fire",
      "fighting",
      "poison",
      "flying",
      "bug",
      "rock",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/459.png"
  },
  {
    "id": 460,
    "name": "눈설왕",
    "types": [
      "grass",
      "ice"
    ],
    "weaknesses": [
      "fire",
      "fighting",
      "poison",
      "flying",
      "bug",
      "rock",
      "steel"
    ],
    "evolution": {
      "text": "눈쓰개 Lv.40",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/460.png"
  },
  {
    "id": 461,
    "name": "포푸니라",
    "types": [
      "dark",
      "ice"
    ],
    "weaknesses": [
      "fire",
      "fighting",
      "bug",
      "rock",
      "steel",
      "fairy"
    ],
    "evolution": {
      "text": "포푸니 특수 조건",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/461.png"
  },
  {
    "id": 462,
    "name": "자포코일",
    "types": [
      "electric",
      "steel"
    ],
    "weaknesses": [
      "fire",
      "fighting",
      "ground"
    ],
    "evolution": {
      "text": "레어코일 특수 조건",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/462.png"
  },
  {
    "id": 463,
    "name": "내룸벨트",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "내루미 특수 조건",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/463.png"
  },
  {
    "id": 464,
    "name": "거대코뿌리",
    "types": [
      "ground",
      "rock"
    ],
    "weaknesses": [
      "water",
      "grass",
      "ice",
      "fighting",
      "ground",
      "steel"
    ],
    "evolution": {
      "text": "코뿌리 통신교환",
      "category": "TRADE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/464.png"
  },
  {
    "id": 465,
    "name": "덩쿠림보",
    "types": [
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "덩쿠리 특수 조건",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/465.png"
  },
  {
    "id": 466,
    "name": "에레키블",
    "types": [
      "electric"
    ],
    "weaknesses": [
      "ground"
    ],
    "evolution": {
      "text": "에레브 통신교환",
      "category": "TRADE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/466.png"
  },
  {
    "id": 467,
    "name": "마그마번",
    "types": [
      "fire"
    ],
    "weaknesses": [
      "water",
      "ground",
      "rock"
    ],
    "evolution": {
      "text": "마그마 통신교환",
      "category": "TRADE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/467.png"
  },
  {
    "id": 468,
    "name": "토게키스",
    "types": [
      "fairy",
      "flying"
    ],
    "weaknesses": [
      "electric",
      "ice",
      "poison",
      "rock",
      "steel"
    ],
    "evolution": {
      "text": "토게틱 빛의돌 사용",
      "category": "ITEM"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/468.png"
  },
  {
    "id": 469,
    "name": "메가자리",
    "types": [
      "bug",
      "flying"
    ],
    "weaknesses": [
      "fire",
      "electric",
      "ice",
      "flying",
      "rock"
    ],
    "evolution": {
      "text": "왕자리 특수 조건",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/469.png"
  },
  {
    "id": 470,
    "name": "리피아",
    "types": [
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "이브이 특수 조건",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/470.png"
  },
  {
    "id": 471,
    "name": "글레이시아",
    "types": [
      "ice"
    ],
    "weaknesses": [
      "fire",
      "fighting",
      "rock",
      "steel"
    ],
    "evolution": {
      "text": "이브이 특수 조건",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/471.png"
  },
  {
    "id": 472,
    "name": "글라이온",
    "types": [
      "ground",
      "flying"
    ],
    "weaknesses": [
      "water",
      "ice"
    ],
    "evolution": {
      "text": "글라이거 특수 조건",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/472.png"
  },
  {
    "id": 473,
    "name": "맘모꾸리",
    "types": [
      "ice",
      "ground"
    ],
    "weaknesses": [
      "fire",
      "water",
      "grass",
      "fighting",
      "steel"
    ],
    "evolution": {
      "text": "메꾸리 특수 조건",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/473.png"
  },
  {
    "id": 474,
    "name": "폴리곤Z",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "폴리곤2 통신교환",
      "category": "TRADE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/474.png"
  },
  {
    "id": 475,
    "name": "엘레이드",
    "types": [
      "psychic",
      "fighting"
    ],
    "weaknesses": [
      "flying",
      "ghost",
      "fairy"
    ],
    "evolution": {
      "text": "킬리아 각성의돌 사용",
      "category": "ITEM"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/475.png"
  },
  {
    "id": 476,
    "name": "대코파스",
    "types": [
      "rock",
      "steel"
    ],
    "weaknesses": [
      "water",
      "fighting",
      "ground"
    ],
    "evolution": {
      "text": "코코파스 특수 조건",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/476.png"
  },
  {
    "id": 477,
    "name": "야느와르몽",
    "types": [
      "ghost"
    ],
    "weaknesses": [
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "미라몽 통신교환",
      "category": "TRADE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/477.png"
  },
  {
    "id": 478,
    "name": "눈여아",
    "types": [
      "ice",
      "ghost"
    ],
    "weaknesses": [
      "fire",
      "rock",
      "ghost",
      "dark",
      "steel"
    ],
    "evolution": {
      "text": "눈꼬마 각성의돌 사용",
      "category": "ITEM"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/478.png"
  },
  {
    "id": 479,
    "name": "로토무",
    "types": [
      "electric",
      "ghost"
    ],
    "weaknesses": [
      "ground",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/479.png"
  },
  {
    "id": 480,
    "name": "유크시",
    "types": [
      "psychic"
    ],
    "weaknesses": [
      "bug",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/480.png"
  },
  {
    "id": 481,
    "name": "엠라이트",
    "types": [
      "psychic"
    ],
    "weaknesses": [
      "bug",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/481.png"
  },
  {
    "id": 482,
    "name": "아그놈",
    "types": [
      "psychic"
    ],
    "weaknesses": [
      "bug",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/482.png"
  },
  {
    "id": 483,
    "name": "디아루가",
    "types": [
      "steel",
      "dragon"
    ],
    "weaknesses": [
      "fighting",
      "ground"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/483.png"
  },
  {
    "id": 484,
    "name": "펄기아",
    "types": [
      "water",
      "dragon"
    ],
    "weaknesses": [
      "dragon",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/484.png"
  },
  {
    "id": 485,
    "name": "히드런",
    "types": [
      "fire",
      "steel"
    ],
    "weaknesses": [
      "water",
      "fighting",
      "ground"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/485.png"
  },
  {
    "id": 486,
    "name": "레지기가스",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/486.png"
  },
  {
    "id": 487,
    "name": "기라티나",
    "types": [
      "ghost",
      "dragon"
    ],
    "weaknesses": [
      "ice",
      "ghost",
      "dragon",
      "dark",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/487.png"
  },
  {
    "id": 488,
    "name": "크레세리아",
    "types": [
      "psychic"
    ],
    "weaknesses": [
      "bug",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/488.png"
  },
  {
    "id": 489,
    "name": "피오네",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/489.png"
  },
  {
    "id": 490,
    "name": "마나피",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "피오네 특수 조건",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/490.png"
  },
  {
    "id": 491,
    "name": "다크라이",
    "types": [
      "dark"
    ],
    "weaknesses": [
      "fighting",
      "bug",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/491.png"
  },
  {
    "id": 492,
    "name": "쉐이미",
    "types": [
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/492.png"
  },
  {
    "id": 493,
    "name": "아르세우스",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/493.png"
  },
  {
    "id": 494,
    "name": "비크티니",
    "types": [
      "psychic",
      "fire"
    ],
    "weaknesses": [
      "water",
      "ground",
      "rock",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/494.png"
  },
  {
    "id": 495,
    "name": "주리비얀",
    "types": [
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/495.png"
  },
  {
    "id": 496,
    "name": "샤비",
    "types": [
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "주리비얀 Lv.17",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/496.png"
  },
  {
    "id": 497,
    "name": "샤로다",
    "types": [
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "샤비 Lv.36",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/497.png"
  },
  {
    "id": 498,
    "name": "뚜꾸리",
    "types": [
      "fire"
    ],
    "weaknesses": [
      "water",
      "ground",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/498.png"
  },
  {
    "id": 499,
    "name": "차오꿀",
    "types": [
      "fire",
      "fighting"
    ],
    "weaknesses": [
      "water",
      "ground",
      "flying",
      "psychic"
    ],
    "evolution": {
      "text": "뚜꾸리 Lv.17",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/499.png"
  },
  {
    "id": 500,
    "name": "염무왕",
    "types": [
      "fire",
      "fighting"
    ],
    "weaknesses": [
      "water",
      "ground",
      "flying",
      "psychic"
    ],
    "evolution": {
      "text": "차오꿀 Lv.36",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/500.png"
  },
  {
    "id": 501,
    "name": "수댕이",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/501.png"
  },
  {
    "id": 502,
    "name": "쌍검자비",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "수댕이 Lv.17",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/502.png"
  },
  {
    "id": 503,
    "name": "대검귀",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "쌍검자비 Lv.36",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/503.png"
  },
  {
    "id": 504,
    "name": "보르쥐",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/504.png"
  },
  {
    "id": 505,
    "name": "보르그",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "보르쥐 Lv.20",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/505.png"
  },
  {
    "id": 506,
    "name": "요테리",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/506.png"
  },
  {
    "id": 507,
    "name": "하데리어",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "요테리 Lv.16",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/507.png"
  },
  {
    "id": 508,
    "name": "바랜드",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "하데리어 Lv.32",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/508.png"
  },
  {
    "id": 509,
    "name": "쌔비냥",
    "types": [
      "dark"
    ],
    "weaknesses": [
      "fighting",
      "bug",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/509.png"
  },
  {
    "id": 510,
    "name": "레파르다스",
    "types": [
      "dark"
    ],
    "weaknesses": [
      "fighting",
      "bug",
      "fairy"
    ],
    "evolution": {
      "text": "쌔비냥 Lv.20",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/510.png"
  },
  {
    "id": 511,
    "name": "야나프",
    "types": [
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/511.png"
  },
  {
    "id": 512,
    "name": "야나키",
    "types": [
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "야나프 리프의돌 사용",
      "category": "ITEM"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/512.png"
  },
  {
    "id": 513,
    "name": "바오프",
    "types": [
      "fire"
    ],
    "weaknesses": [
      "water",
      "ground",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/513.png"
  },
  {
    "id": 514,
    "name": "바오키",
    "types": [
      "fire"
    ],
    "weaknesses": [
      "water",
      "ground",
      "rock"
    ],
    "evolution": {
      "text": "바오프 불꽃의돌 사용",
      "category": "ITEM"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/514.png"
  },
  {
    "id": 515,
    "name": "앗차프",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/515.png"
  },
  {
    "id": 516,
    "name": "앗차키",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "앗차프 물의돌 사용",
      "category": "ITEM"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/516.png"
  },
  {
    "id": 517,
    "name": "몽나",
    "types": [
      "psychic"
    ],
    "weaknesses": [
      "bug",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/517.png"
  },
  {
    "id": 518,
    "name": "몽얌나",
    "types": [
      "psychic"
    ],
    "weaknesses": [
      "bug",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "몽나 달의돌 사용",
      "category": "ITEM"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/518.png"
  },
  {
    "id": 519,
    "name": "콩둘기",
    "types": [
      "normal",
      "flying"
    ],
    "weaknesses": [
      "electric",
      "ice",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/519.png"
  },
  {
    "id": 520,
    "name": "유토브",
    "types": [
      "normal",
      "flying"
    ],
    "weaknesses": [
      "electric",
      "ice",
      "rock"
    ],
    "evolution": {
      "text": "콩둘기 Lv.21",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/520.png"
  },
  {
    "id": 521,
    "name": "켄호로우",
    "types": [
      "normal",
      "flying"
    ],
    "weaknesses": [
      "electric",
      "ice",
      "rock"
    ],
    "evolution": {
      "text": "유토브 Lv.32",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/521.png"
  },
  {
    "id": 522,
    "name": "줄뮤마",
    "types": [
      "electric"
    ],
    "weaknesses": [
      "ground"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/522.png"
  },
  {
    "id": 523,
    "name": "제브라이카",
    "types": [
      "electric"
    ],
    "weaknesses": [
      "ground"
    ],
    "evolution": {
      "text": "줄뮤마 Lv.27",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/523.png"
  },
  {
    "id": 524,
    "name": "단굴",
    "types": [
      "rock"
    ],
    "weaknesses": [
      "water",
      "grass",
      "fighting",
      "ground",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/524.png"
  },
  {
    "id": 525,
    "name": "암트르",
    "types": [
      "rock"
    ],
    "weaknesses": [
      "water",
      "grass",
      "fighting",
      "ground",
      "steel"
    ],
    "evolution": {
      "text": "단굴 Lv.25",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/525.png"
  },
  {
    "id": 526,
    "name": "기가이어스",
    "types": [
      "rock"
    ],
    "weaknesses": [
      "water",
      "grass",
      "fighting",
      "ground",
      "steel"
    ],
    "evolution": {
      "text": "암트르 통신교환",
      "category": "TRADE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/526.png"
  },
  {
    "id": 527,
    "name": "또르박쥐",
    "types": [
      "psychic",
      "flying"
    ],
    "weaknesses": [
      "electric",
      "ice",
      "rock",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/527.png"
  },
  {
    "id": 528,
    "name": "맘박쥐",
    "types": [
      "psychic",
      "flying"
    ],
    "weaknesses": [
      "electric",
      "ice",
      "rock",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "또르박쥐 친밀도 높음",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/528.png"
  },
  {
    "id": 529,
    "name": "두더류",
    "types": [
      "ground"
    ],
    "weaknesses": [
      "water",
      "grass",
      "ice"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/529.png"
  },
  {
    "id": 530,
    "name": "몰드류",
    "types": [
      "ground",
      "steel"
    ],
    "weaknesses": [
      "fire",
      "water",
      "fighting",
      "ground"
    ],
    "evolution": {
      "text": "두더류 Lv.31",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/530.png"
  },
  {
    "id": 531,
    "name": "다부니",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/531.png"
  },
  {
    "id": 532,
    "name": "으랏차",
    "types": [
      "fighting"
    ],
    "weaknesses": [
      "flying",
      "psychic",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/532.png"
  },
  {
    "id": 533,
    "name": "토쇠골",
    "types": [
      "fighting"
    ],
    "weaknesses": [
      "flying",
      "psychic",
      "fairy"
    ],
    "evolution": {
      "text": "으랏차 Lv.25",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/533.png"
  },
  {
    "id": 534,
    "name": "노보청",
    "types": [
      "fighting"
    ],
    "weaknesses": [
      "flying",
      "psychic",
      "fairy"
    ],
    "evolution": {
      "text": "토쇠골 통신교환",
      "category": "TRADE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/534.png"
  },
  {
    "id": 535,
    "name": "동챙이",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/535.png"
  },
  {
    "id": 536,
    "name": "두까비",
    "types": [
      "water",
      "ground"
    ],
    "weaknesses": [
      "grass"
    ],
    "evolution": {
      "text": "동챙이 Lv.25",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/536.png"
  },
  {
    "id": 537,
    "name": "두빅굴",
    "types": [
      "water",
      "ground"
    ],
    "weaknesses": [
      "grass"
    ],
    "evolution": {
      "text": "두까비 Lv.36",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/537.png"
  },
  {
    "id": 538,
    "name": "던지미",
    "types": [
      "fighting"
    ],
    "weaknesses": [
      "flying",
      "psychic",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/538.png"
  },
  {
    "id": 539,
    "name": "타격귀",
    "types": [
      "fighting"
    ],
    "weaknesses": [
      "flying",
      "psychic",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/539.png"
  },
  {
    "id": 540,
    "name": "두르보",
    "types": [
      "bug",
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/540.png"
  },
  {
    "id": 541,
    "name": "두르쿤",
    "types": [
      "bug",
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug",
      "rock"
    ],
    "evolution": {
      "text": "두르보 Lv.20",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/541.png"
  },
  {
    "id": 542,
    "name": "모아머",
    "types": [
      "bug",
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug",
      "rock"
    ],
    "evolution": {
      "text": "두르쿤 친밀도 높음",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/542.png"
  },
  {
    "id": 543,
    "name": "마디네",
    "types": [
      "bug",
      "poison"
    ],
    "weaknesses": [
      "fire",
      "flying",
      "psychic",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/543.png"
  },
  {
    "id": 544,
    "name": "휠구",
    "types": [
      "bug",
      "poison"
    ],
    "weaknesses": [
      "fire",
      "flying",
      "psychic",
      "rock"
    ],
    "evolution": {
      "text": "마디네 Lv.22",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/544.png"
  },
  {
    "id": 545,
    "name": "펜드라",
    "types": [
      "bug",
      "poison"
    ],
    "weaknesses": [
      "fire",
      "flying",
      "psychic",
      "rock"
    ],
    "evolution": {
      "text": "휠구 Lv.30",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/545.png"
  },
  {
    "id": 546,
    "name": "소미안",
    "types": [
      "grass",
      "fairy"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/546.png"
  },
  {
    "id": 547,
    "name": "엘풍",
    "types": [
      "grass",
      "fairy"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "steel"
    ],
    "evolution": {
      "text": "소미안 태양의돌 사용",
      "category": "ITEM"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/547.png"
  },
  {
    "id": 548,
    "name": "치릴리",
    "types": [
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/548.png"
  },
  {
    "id": 549,
    "name": "드레디어",
    "types": [
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "치릴리 태양의돌 사용",
      "category": "ITEM"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/549.png"
  },
  {
    "id": 550,
    "name": "배쓰나이",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/550.png"
  },
  {
    "id": 551,
    "name": "깜눈크",
    "types": [
      "ground",
      "dark"
    ],
    "weaknesses": [
      "water",
      "grass",
      "ice",
      "fighting",
      "bug",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/551.png"
  },
  {
    "id": 552,
    "name": "악비르",
    "types": [
      "ground",
      "dark"
    ],
    "weaknesses": [
      "water",
      "grass",
      "ice",
      "fighting",
      "bug",
      "fairy"
    ],
    "evolution": {
      "text": "깜눈크 Lv.29",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/552.png"
  },
  {
    "id": 553,
    "name": "악비아르",
    "types": [
      "ground",
      "dark"
    ],
    "weaknesses": [
      "water",
      "grass",
      "ice",
      "fighting",
      "bug",
      "fairy"
    ],
    "evolution": {
      "text": "악비르 Lv.40",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/553.png"
  },
  {
    "id": 554,
    "name": "달막화",
    "types": [
      "fire"
    ],
    "weaknesses": [
      "water",
      "ground",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/554.png"
  },
  {
    "id": 555,
    "name": "불비달마",
    "types": [
      "fire"
    ],
    "weaknesses": [
      "water",
      "ground",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/555.png"
  },
  {
    "id": 556,
    "name": "마라카치",
    "types": [
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/556.png"
  },
  {
    "id": 557,
    "name": "돌살이",
    "types": [
      "bug",
      "rock"
    ],
    "weaknesses": [
      "water",
      "rock",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/557.png"
  },
  {
    "id": 558,
    "name": "암팰리스",
    "types": [
      "bug",
      "rock"
    ],
    "weaknesses": [
      "water",
      "rock",
      "steel"
    ],
    "evolution": {
      "text": "돌살이 Lv.34",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/558.png"
  },
  {
    "id": 559,
    "name": "곤율랭",
    "types": [
      "dark",
      "fighting"
    ],
    "weaknesses": [
      "fighting",
      "flying",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/559.png"
  },
  {
    "id": 560,
    "name": "곤율거니",
    "types": [
      "dark",
      "fighting"
    ],
    "weaknesses": [
      "fighting",
      "flying",
      "fairy"
    ],
    "evolution": {
      "text": "곤율랭 Lv.39",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/560.png"
  },
  {
    "id": 561,
    "name": "심보러",
    "types": [
      "psychic",
      "flying"
    ],
    "weaknesses": [
      "electric",
      "ice",
      "rock",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/561.png"
  },
  {
    "id": 562,
    "name": "데스마스",
    "types": [
      "ghost"
    ],
    "weaknesses": [
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/562.png"
  },
  {
    "id": 563,
    "name": "데스니칸",
    "types": [
      "ghost"
    ],
    "weaknesses": [
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "데스마스 Lv.34",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/563.png"
  },
  {
    "id": 564,
    "name": "프로토가",
    "types": [
      "water",
      "rock"
    ],
    "weaknesses": [
      "electric",
      "grass",
      "fighting",
      "ground"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/564.png"
  },
  {
    "id": 565,
    "name": "늑골라",
    "types": [
      "water",
      "rock"
    ],
    "weaknesses": [
      "electric",
      "grass",
      "fighting",
      "ground"
    ],
    "evolution": {
      "text": "프로토가 Lv.37",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/565.png"
  },
  {
    "id": 566,
    "name": "아켄",
    "types": [
      "rock",
      "flying"
    ],
    "weaknesses": [
      "water",
      "electric",
      "ice",
      "rock",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/566.png"
  },
  {
    "id": 567,
    "name": "아케오스",
    "types": [
      "rock",
      "flying"
    ],
    "weaknesses": [
      "water",
      "electric",
      "ice",
      "rock",
      "steel"
    ],
    "evolution": {
      "text": "아켄 Lv.37",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/567.png"
  },
  {
    "id": 568,
    "name": "깨봉이",
    "types": [
      "poison"
    ],
    "weaknesses": [
      "ground",
      "psychic"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/568.png"
  },
  {
    "id": 569,
    "name": "더스트나",
    "types": [
      "poison"
    ],
    "weaknesses": [
      "ground",
      "psychic"
    ],
    "evolution": {
      "text": "깨봉이 Lv.36",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/569.png"
  },
  {
    "id": 570,
    "name": "조로아",
    "types": [
      "dark"
    ],
    "weaknesses": [
      "fighting",
      "bug",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/570.png"
  },
  {
    "id": 571,
    "name": "조로아크",
    "types": [
      "dark"
    ],
    "weaknesses": [
      "fighting",
      "bug",
      "fairy"
    ],
    "evolution": {
      "text": "조로아 Lv.30",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/571.png"
  },
  {
    "id": 572,
    "name": "치라미",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/572.png"
  },
  {
    "id": 573,
    "name": "치라치노",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "치라미 빛의돌 사용",
      "category": "ITEM"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/573.png"
  },
  {
    "id": 574,
    "name": "고디탱",
    "types": [
      "psychic"
    ],
    "weaknesses": [
      "bug",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/574.png"
  },
  {
    "id": 575,
    "name": "고디보미",
    "types": [
      "psychic"
    ],
    "weaknesses": [
      "bug",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "고디탱 Lv.32",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/575.png"
  },
  {
    "id": 576,
    "name": "고디모아젤",
    "types": [
      "psychic"
    ],
    "weaknesses": [
      "bug",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "고디보미 Lv.41",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/576.png"
  },
  {
    "id": 577,
    "name": "유니란",
    "types": [
      "psychic"
    ],
    "weaknesses": [
      "bug",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/577.png"
  },
  {
    "id": 578,
    "name": "듀란",
    "types": [
      "psychic"
    ],
    "weaknesses": [
      "bug",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "유니란 Lv.32",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/578.png"
  },
  {
    "id": 579,
    "name": "란쿨루스",
    "types": [
      "psychic"
    ],
    "weaknesses": [
      "bug",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "듀란 Lv.41",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/579.png"
  },
  {
    "id": 580,
    "name": "꼬지보리",
    "types": [
      "water",
      "flying"
    ],
    "weaknesses": [
      "electric",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/580.png"
  },
  {
    "id": 581,
    "name": "스완나",
    "types": [
      "water",
      "flying"
    ],
    "weaknesses": [
      "electric",
      "rock"
    ],
    "evolution": {
      "text": "꼬지보리 Lv.35",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/581.png"
  },
  {
    "id": 582,
    "name": "바닐프티",
    "types": [
      "ice"
    ],
    "weaknesses": [
      "fire",
      "fighting",
      "rock",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/582.png"
  },
  {
    "id": 583,
    "name": "바닐리치",
    "types": [
      "ice"
    ],
    "weaknesses": [
      "fire",
      "fighting",
      "rock",
      "steel"
    ],
    "evolution": {
      "text": "바닐프티 Lv.35",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/583.png"
  },
  {
    "id": 584,
    "name": "배바닐라",
    "types": [
      "ice"
    ],
    "weaknesses": [
      "fire",
      "fighting",
      "rock",
      "steel"
    ],
    "evolution": {
      "text": "바닐리치 Lv.47",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/584.png"
  },
  {
    "id": 585,
    "name": "사철록",
    "types": [
      "normal",
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "fighting",
      "poison",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/585.png"
  },
  {
    "id": 586,
    "name": "바라철록",
    "types": [
      "normal",
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "fighting",
      "poison",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "사철록 Lv.34",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/586.png"
  },
  {
    "id": 587,
    "name": "에몽가",
    "types": [
      "electric",
      "flying"
    ],
    "weaknesses": [
      "ice",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/587.png"
  },
  {
    "id": 588,
    "name": "딱정곤",
    "types": [
      "bug"
    ],
    "weaknesses": [
      "fire",
      "flying",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/588.png"
  },
  {
    "id": 589,
    "name": "슈바르고",
    "types": [
      "bug",
      "steel"
    ],
    "weaknesses": [
      "fire"
    ],
    "evolution": {
      "text": "딱정곤 통신교환",
      "category": "TRADE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/589.png"
  },
  {
    "id": 590,
    "name": "깜놀버슬",
    "types": [
      "grass",
      "poison"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "flying",
      "psychic"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/590.png"
  },
  {
    "id": 591,
    "name": "뽀록나",
    "types": [
      "grass",
      "poison"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "flying",
      "psychic"
    ],
    "evolution": {
      "text": "깜놀버슬 Lv.39",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/591.png"
  },
  {
    "id": 592,
    "name": "탱그릴",
    "types": [
      "water",
      "ghost"
    ],
    "weaknesses": [
      "electric",
      "grass",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/592.png"
  },
  {
    "id": 593,
    "name": "탱탱겔",
    "types": [
      "water",
      "ghost"
    ],
    "weaknesses": [
      "electric",
      "grass",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "탱그릴 Lv.40",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/593.png"
  },
  {
    "id": 594,
    "name": "맘복치",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/594.png"
  },
  {
    "id": 595,
    "name": "파쪼옥",
    "types": [
      "bug",
      "electric"
    ],
    "weaknesses": [
      "fire",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/595.png"
  },
  {
    "id": 596,
    "name": "전툴라",
    "types": [
      "bug",
      "electric"
    ],
    "weaknesses": [
      "fire",
      "rock"
    ],
    "evolution": {
      "text": "파쪼옥 Lv.36",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/596.png"
  },
  {
    "id": 597,
    "name": "철시드",
    "types": [
      "grass",
      "steel"
    ],
    "weaknesses": [
      "fire",
      "fighting"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/597.png"
  },
  {
    "id": 598,
    "name": "너트령",
    "types": [
      "grass",
      "steel"
    ],
    "weaknesses": [
      "fire",
      "fighting"
    ],
    "evolution": {
      "text": "철시드 Lv.40",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/598.png"
  },
  {
    "id": 599,
    "name": "기어르",
    "types": [
      "steel"
    ],
    "weaknesses": [
      "fire",
      "fighting",
      "ground"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/599.png"
  },
  {
    "id": 600,
    "name": "기기어르",
    "types": [
      "steel"
    ],
    "weaknesses": [
      "fire",
      "fighting",
      "ground"
    ],
    "evolution": {
      "text": "기어르 Lv.38",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/600.png"
  },
  {
    "id": 601,
    "name": "기기기어르",
    "types": [
      "steel"
    ],
    "weaknesses": [
      "fire",
      "fighting",
      "ground"
    ],
    "evolution": {
      "text": "기기어르 Lv.49",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/601.png"
  },
  {
    "id": 602,
    "name": "저리어",
    "types": [
      "electric"
    ],
    "weaknesses": [
      "ground"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/602.png"
  },
  {
    "id": 603,
    "name": "저리릴",
    "types": [
      "electric"
    ],
    "weaknesses": [
      "ground"
    ],
    "evolution": {
      "text": "저리어 Lv.39",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/603.png"
  },
  {
    "id": 604,
    "name": "저리더프",
    "types": [
      "electric"
    ],
    "weaknesses": [
      "ground"
    ],
    "evolution": {
      "text": "저리릴 천둥의돌 사용",
      "category": "ITEM"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/604.png"
  },
  {
    "id": 605,
    "name": "리그레",
    "types": [
      "psychic"
    ],
    "weaknesses": [
      "bug",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/605.png"
  },
  {
    "id": 606,
    "name": "벰크",
    "types": [
      "psychic"
    ],
    "weaknesses": [
      "bug",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "리그레 Lv.42",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/606.png"
  },
  {
    "id": 607,
    "name": "불켜미",
    "types": [
      "ghost",
      "fire"
    ],
    "weaknesses": [
      "water",
      "ground",
      "rock",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/607.png"
  },
  {
    "id": 608,
    "name": "램프라",
    "types": [
      "ghost",
      "fire"
    ],
    "weaknesses": [
      "water",
      "ground",
      "rock",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "불켜미 Lv.41",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/608.png"
  },
  {
    "id": 609,
    "name": "샹델라",
    "types": [
      "ghost",
      "fire"
    ],
    "weaknesses": [
      "water",
      "ground",
      "rock",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "램프라 어둠의돌 사용",
      "category": "ITEM"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/609.png"
  },
  {
    "id": 610,
    "name": "터검니",
    "types": [
      "dragon"
    ],
    "weaknesses": [
      "ice",
      "dragon",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/610.png"
  },
  {
    "id": 611,
    "name": "액슨도",
    "types": [
      "dragon"
    ],
    "weaknesses": [
      "ice",
      "dragon",
      "fairy"
    ],
    "evolution": {
      "text": "터검니 Lv.38",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/611.png"
  },
  {
    "id": 612,
    "name": "액스라이즈",
    "types": [
      "dragon"
    ],
    "weaknesses": [
      "ice",
      "dragon",
      "fairy"
    ],
    "evolution": {
      "text": "액슨도 Lv.48",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/612.png"
  },
  {
    "id": 613,
    "name": "코고미",
    "types": [
      "ice"
    ],
    "weaknesses": [
      "fire",
      "fighting",
      "rock",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/613.png"
  },
  {
    "id": 614,
    "name": "툰베어",
    "types": [
      "ice"
    ],
    "weaknesses": [
      "fire",
      "fighting",
      "rock",
      "steel"
    ],
    "evolution": {
      "text": "코고미 Lv.37",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/614.png"
  },
  {
    "id": 615,
    "name": "프리지오",
    "types": [
      "ice"
    ],
    "weaknesses": [
      "fire",
      "fighting",
      "rock",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/615.png"
  },
  {
    "id": 616,
    "name": "쪼마리",
    "types": [
      "bug"
    ],
    "weaknesses": [
      "fire",
      "flying",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/616.png"
  },
  {
    "id": 617,
    "name": "어지리더",
    "types": [
      "bug"
    ],
    "weaknesses": [
      "fire",
      "flying",
      "rock"
    ],
    "evolution": {
      "text": "쪼마리 통신교환",
      "category": "TRADE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/617.png"
  },
  {
    "id": 618,
    "name": "메더",
    "types": [
      "ground",
      "electric"
    ],
    "weaknesses": [
      "water",
      "grass",
      "ice",
      "ground"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/618.png"
  },
  {
    "id": 619,
    "name": "비조푸",
    "types": [
      "fighting"
    ],
    "weaknesses": [
      "flying",
      "psychic",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/619.png"
  },
  {
    "id": 620,
    "name": "비조도",
    "types": [
      "fighting"
    ],
    "weaknesses": [
      "flying",
      "psychic",
      "fairy"
    ],
    "evolution": {
      "text": "비조푸 Lv.50",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/620.png"
  },
  {
    "id": 621,
    "name": "크리만",
    "types": [
      "dragon"
    ],
    "weaknesses": [
      "ice",
      "dragon",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/621.png"
  },
  {
    "id": 622,
    "name": "골비람",
    "types": [
      "ground",
      "ghost"
    ],
    "weaknesses": [
      "water",
      "grass",
      "ice",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/622.png"
  },
  {
    "id": 623,
    "name": "골루그",
    "types": [
      "ground",
      "ghost"
    ],
    "weaknesses": [
      "water",
      "grass",
      "ice",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "골비람 Lv.43",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/623.png"
  },
  {
    "id": 624,
    "name": "자망칼",
    "types": [
      "dark",
      "steel"
    ],
    "weaknesses": [
      "fire",
      "fighting",
      "ground"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/624.png"
  },
  {
    "id": 625,
    "name": "절각참",
    "types": [
      "dark",
      "steel"
    ],
    "weaknesses": [
      "fire",
      "fighting",
      "ground"
    ],
    "evolution": {
      "text": "자망칼 Lv.52",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/625.png"
  },
  {
    "id": 626,
    "name": "버프론",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/626.png"
  },
  {
    "id": 627,
    "name": "수리둥보",
    "types": [
      "normal",
      "flying"
    ],
    "weaknesses": [
      "electric",
      "ice",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/627.png"
  },
  {
    "id": 628,
    "name": "워글",
    "types": [
      "normal",
      "flying"
    ],
    "weaknesses": [
      "electric",
      "ice",
      "rock"
    ],
    "evolution": {
      "text": "수리둥보 Lv.54",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/628.png"
  },
  {
    "id": 629,
    "name": "벌차이",
    "types": [
      "dark",
      "flying"
    ],
    "weaknesses": [
      "electric",
      "ice",
      "rock",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/629.png"
  },
  {
    "id": 630,
    "name": "버랜지나",
    "types": [
      "dark",
      "flying"
    ],
    "weaknesses": [
      "electric",
      "ice",
      "rock",
      "fairy"
    ],
    "evolution": {
      "text": "벌차이 Lv.54",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/630.png"
  },
  {
    "id": 631,
    "name": "앤티골",
    "types": [
      "fire"
    ],
    "weaknesses": [
      "water",
      "ground",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/631.png"
  },
  {
    "id": 632,
    "name": "아이앤트",
    "types": [
      "bug",
      "steel"
    ],
    "weaknesses": [
      "fire"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/632.png"
  },
  {
    "id": 633,
    "name": "모노두",
    "types": [
      "dark",
      "dragon"
    ],
    "weaknesses": [
      "ice",
      "fighting",
      "bug",
      "dragon",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/633.png"
  },
  {
    "id": 634,
    "name": "디헤드",
    "types": [
      "dark",
      "dragon"
    ],
    "weaknesses": [
      "ice",
      "fighting",
      "bug",
      "dragon",
      "fairy"
    ],
    "evolution": {
      "text": "모노두 Lv.50",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/634.png"
  },
  {
    "id": 635,
    "name": "삼삼드래",
    "types": [
      "dark",
      "dragon"
    ],
    "weaknesses": [
      "ice",
      "fighting",
      "bug",
      "dragon",
      "fairy"
    ],
    "evolution": {
      "text": "디헤드 Lv.64",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/635.png"
  },
  {
    "id": 636,
    "name": "활화르바",
    "types": [
      "bug",
      "fire"
    ],
    "weaknesses": [
      "water",
      "flying",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/636.png"
  },
  {
    "id": 637,
    "name": "불카모스",
    "types": [
      "bug",
      "fire"
    ],
    "weaknesses": [
      "water",
      "flying",
      "rock"
    ],
    "evolution": {
      "text": "활화르바 Lv.59",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/637.png"
  },
  {
    "id": 638,
    "name": "코바르온",
    "types": [
      "steel",
      "fighting"
    ],
    "weaknesses": [
      "fire",
      "fighting",
      "ground"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/638.png"
  },
  {
    "id": 639,
    "name": "테라키온",
    "types": [
      "rock",
      "fighting"
    ],
    "weaknesses": [
      "water",
      "grass",
      "fighting",
      "ground",
      "psychic",
      "steel",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/639.png"
  },
  {
    "id": 640,
    "name": "비리디온",
    "types": [
      "grass",
      "fighting"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "psychic",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/640.png"
  },
  {
    "id": 641,
    "name": "토네로스",
    "types": [
      "flying"
    ],
    "weaknesses": [
      "electric",
      "ice",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/641.png"
  },
  {
    "id": 642,
    "name": "볼트로스",
    "types": [
      "electric",
      "flying"
    ],
    "weaknesses": [
      "ice",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/642.png"
  },
  {
    "id": 643,
    "name": "레시라무",
    "types": [
      "dragon",
      "fire"
    ],
    "weaknesses": [
      "ground",
      "rock",
      "dragon"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/643.png"
  },
  {
    "id": 644,
    "name": "제크로무",
    "types": [
      "dragon",
      "electric"
    ],
    "weaknesses": [
      "ice",
      "ground",
      "dragon",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/644.png"
  },
  {
    "id": 645,
    "name": "랜드로스",
    "types": [
      "ground",
      "flying"
    ],
    "weaknesses": [
      "water",
      "ice"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/645.png"
  },
  {
    "id": 646,
    "name": "큐레무",
    "types": [
      "dragon",
      "ice"
    ],
    "weaknesses": [
      "fighting",
      "rock",
      "dragon",
      "steel",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/646.png"
  },
  {
    "id": 647,
    "name": "케르디오",
    "types": [
      "water",
      "fighting"
    ],
    "weaknesses": [
      "electric",
      "grass",
      "flying",
      "psychic",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/647.png"
  },
  {
    "id": 648,
    "name": "메로엣타",
    "types": [
      "normal",
      "psychic"
    ],
    "weaknesses": [
      "bug",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/648.png"
  },
  {
    "id": 649,
    "name": "게노세크트",
    "types": [
      "bug",
      "steel"
    ],
    "weaknesses": [
      "fire"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/649.png"
  },
  {
    "id": 650,
    "name": "도치마론",
    "types": [
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/650.png"
  },
  {
    "id": 651,
    "name": "도치보구",
    "types": [
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "도치마론 Lv.16",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/651.png"
  },
  {
    "id": 652,
    "name": "브리가론",
    "types": [
      "grass",
      "fighting"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "psychic",
      "fairy"
    ],
    "evolution": {
      "text": "도치보구 Lv.36",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/652.png"
  },
  {
    "id": 653,
    "name": "푸호꼬",
    "types": [
      "fire"
    ],
    "weaknesses": [
      "water",
      "ground",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/653.png"
  },
  {
    "id": 654,
    "name": "테르나",
    "types": [
      "fire"
    ],
    "weaknesses": [
      "water",
      "ground",
      "rock"
    ],
    "evolution": {
      "text": "푸호꼬 Lv.16",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/654.png"
  },
  {
    "id": 655,
    "name": "마폭시",
    "types": [
      "fire",
      "psychic"
    ],
    "weaknesses": [
      "water",
      "ground",
      "rock",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "테르나 Lv.36",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/655.png"
  },
  {
    "id": 656,
    "name": "개구마르",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/656.png"
  },
  {
    "id": 657,
    "name": "개굴반장",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "개구마르 Lv.16",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/657.png"
  },
  {
    "id": 658,
    "name": "개굴닌자",
    "types": [
      "water",
      "dark"
    ],
    "weaknesses": [
      "electric",
      "grass",
      "fighting",
      "bug",
      "fairy"
    ],
    "evolution": {
      "text": "개굴반장 Lv.36",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/658.png"
  },
  {
    "id": 659,
    "name": "파르빗",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/659.png"
  },
  {
    "id": 660,
    "name": "파르토",
    "types": [
      "normal",
      "ground"
    ],
    "weaknesses": [
      "water",
      "grass",
      "ice",
      "fighting"
    ],
    "evolution": {
      "text": "파르빗 Lv.20",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/660.png"
  },
  {
    "id": 661,
    "name": "화살꼬빈",
    "types": [
      "normal",
      "flying"
    ],
    "weaknesses": [
      "electric",
      "ice",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/661.png"
  },
  {
    "id": 662,
    "name": "불화살빈",
    "types": [
      "fire",
      "flying"
    ],
    "weaknesses": [
      "water",
      "electric",
      "rock"
    ],
    "evolution": {
      "text": "화살꼬빈 Lv.17",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/662.png"
  },
  {
    "id": 663,
    "name": "파이어로",
    "types": [
      "fire",
      "flying"
    ],
    "weaknesses": [
      "water",
      "electric",
      "rock"
    ],
    "evolution": {
      "text": "불화살빈 Lv.35",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/663.png"
  },
  {
    "id": 664,
    "name": "분이벌레",
    "types": [
      "bug"
    ],
    "weaknesses": [
      "fire",
      "flying",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/664.png"
  },
  {
    "id": 665,
    "name": "분떠도리",
    "types": [
      "bug"
    ],
    "weaknesses": [
      "fire",
      "flying",
      "rock"
    ],
    "evolution": {
      "text": "분이벌레 Lv.9",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/665.png"
  },
  {
    "id": 666,
    "name": "비비용",
    "types": [
      "bug",
      "flying"
    ],
    "weaknesses": [
      "fire",
      "electric",
      "ice",
      "flying",
      "rock"
    ],
    "evolution": {
      "text": "분떠도리 Lv.12",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/666.png"
  },
  {
    "id": 667,
    "name": "레오꼬",
    "types": [
      "fire",
      "normal"
    ],
    "weaknesses": [
      "water",
      "fighting",
      "ground",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/667.png"
  },
  {
    "id": 668,
    "name": "화염레오",
    "types": [
      "fire",
      "normal"
    ],
    "weaknesses": [
      "water",
      "fighting",
      "ground",
      "rock"
    ],
    "evolution": {
      "text": "레오꼬 Lv.35",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/668.png"
  },
  {
    "id": 669,
    "name": "플라베베",
    "types": [
      "fairy"
    ],
    "weaknesses": [
      "poison",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/669.png"
  },
  {
    "id": 670,
    "name": "플라엣테",
    "types": [
      "fairy"
    ],
    "weaknesses": [
      "poison",
      "steel"
    ],
    "evolution": {
      "text": "플라베베 Lv.19",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/670.png"
  },
  {
    "id": 671,
    "name": "플라제스",
    "types": [
      "fairy"
    ],
    "weaknesses": [
      "poison",
      "steel"
    ],
    "evolution": {
      "text": "플라엣테 빛의돌 사용",
      "category": "ITEM"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/671.png"
  },
  {
    "id": 672,
    "name": "메이클",
    "types": [
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/672.png"
  },
  {
    "id": 673,
    "name": "고고트",
    "types": [
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "메이클 Lv.32",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/673.png"
  },
  {
    "id": 674,
    "name": "판짱",
    "types": [
      "fighting"
    ],
    "weaknesses": [
      "flying",
      "psychic",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/674.png"
  },
  {
    "id": 675,
    "name": "부란다",
    "types": [
      "fighting",
      "dark"
    ],
    "weaknesses": [
      "fighting",
      "flying",
      "fairy"
    ],
    "evolution": {
      "text": "판짱 Lv.32",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/675.png"
  },
  {
    "id": 676,
    "name": "트리미앙",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/676.png"
  },
  {
    "id": 677,
    "name": "냐스퍼",
    "types": [
      "psychic"
    ],
    "weaknesses": [
      "bug",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/677.png"
  },
  {
    "id": 678,
    "name": "냐오닉스",
    "types": [
      "psychic"
    ],
    "weaknesses": [
      "bug",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/678.png"
  },
  {
    "id": 679,
    "name": "단칼빙",
    "types": [
      "steel",
      "ghost"
    ],
    "weaknesses": [
      "fire",
      "ground",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/679.png"
  },
  {
    "id": 680,
    "name": "쌍검킬",
    "types": [
      "steel",
      "ghost"
    ],
    "weaknesses": [
      "fire",
      "ground",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "단칼빙 Lv.35",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/680.png"
  },
  {
    "id": 681,
    "name": "킬가르도",
    "types": [
      "steel",
      "ghost"
    ],
    "weaknesses": [
      "fire",
      "ground",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/681.png"
  },
  {
    "id": 682,
    "name": "슈쁘",
    "types": [
      "fairy"
    ],
    "weaknesses": [
      "poison",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/682.png"
  },
  {
    "id": 683,
    "name": "프레프티르",
    "types": [
      "fairy"
    ],
    "weaknesses": [
      "poison",
      "steel"
    ],
    "evolution": {
      "text": "슈쁘 통신교환",
      "category": "TRADE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/683.png"
  },
  {
    "id": 684,
    "name": "나룸퍼프",
    "types": [
      "fairy"
    ],
    "weaknesses": [
      "poison",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/684.png"
  },
  {
    "id": 685,
    "name": "나루림",
    "types": [
      "fairy"
    ],
    "weaknesses": [
      "poison",
      "steel"
    ],
    "evolution": {
      "text": "나룸퍼프 통신교환",
      "category": "TRADE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/685.png"
  },
  {
    "id": 686,
    "name": "오케이징",
    "types": [
      "dark",
      "psychic"
    ],
    "weaknesses": [
      "bug",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/686.png"
  },
  {
    "id": 687,
    "name": "칼라마네로",
    "types": [
      "dark",
      "psychic"
    ],
    "weaknesses": [
      "bug",
      "fairy"
    ],
    "evolution": {
      "text": "오케이징 Lv.30",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/687.png"
  },
  {
    "id": 688,
    "name": "거북손손",
    "types": [
      "rock",
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass",
      "fighting",
      "ground"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/688.png"
  },
  {
    "id": 689,
    "name": "거북손데스",
    "types": [
      "rock",
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass",
      "fighting",
      "ground"
    ],
    "evolution": {
      "text": "거북손손 Lv.39",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/689.png"
  },
  {
    "id": 690,
    "name": "수레기",
    "types": [
      "poison",
      "water"
    ],
    "weaknesses": [
      "electric",
      "ground",
      "psychic"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/690.png"
  },
  {
    "id": 691,
    "name": "드래캄",
    "types": [
      "poison",
      "dragon"
    ],
    "weaknesses": [
      "ice",
      "ground",
      "psychic",
      "dragon"
    ],
    "evolution": {
      "text": "수레기 Lv.48",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/691.png"
  },
  {
    "id": 692,
    "name": "완철포",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/692.png"
  },
  {
    "id": 693,
    "name": "블로스터",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "완철포 Lv.37",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/693.png"
  },
  {
    "id": 694,
    "name": "목도리키텔",
    "types": [
      "electric",
      "normal"
    ],
    "weaknesses": [
      "fighting",
      "ground"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/694.png"
  },
  {
    "id": 695,
    "name": "일레도리자드",
    "types": [
      "electric",
      "normal"
    ],
    "weaknesses": [
      "fighting",
      "ground"
    ],
    "evolution": {
      "text": "목도리키텔 태양의돌 사용",
      "category": "ITEM"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/695.png"
  },
  {
    "id": 696,
    "name": "티고라스",
    "types": [
      "rock",
      "dragon"
    ],
    "weaknesses": [
      "ice",
      "fighting",
      "ground",
      "dragon",
      "steel",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/696.png"
  },
  {
    "id": 697,
    "name": "견고라스",
    "types": [
      "rock",
      "dragon"
    ],
    "weaknesses": [
      "ice",
      "fighting",
      "ground",
      "dragon",
      "steel",
      "fairy"
    ],
    "evolution": {
      "text": "티고라스 Lv.39",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/697.png"
  },
  {
    "id": 698,
    "name": "아마루스",
    "types": [
      "rock",
      "ice"
    ],
    "weaknesses": [
      "water",
      "grass",
      "fighting",
      "ground",
      "rock",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/698.png"
  },
  {
    "id": 699,
    "name": "아마루르가",
    "types": [
      "rock",
      "ice"
    ],
    "weaknesses": [
      "water",
      "grass",
      "fighting",
      "ground",
      "rock",
      "steel"
    ],
    "evolution": {
      "text": "아마루스 Lv.39",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/699.png"
  },
  {
    "id": 700,
    "name": "님피아",
    "types": [
      "fairy"
    ],
    "weaknesses": [
      "poison",
      "steel"
    ],
    "evolution": {
      "text": "이브이 특수 조건",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/700.png"
  },
  {
    "id": 701,
    "name": "루차불",
    "types": [
      "fighting",
      "flying"
    ],
    "weaknesses": [
      "electric",
      "ice",
      "flying",
      "psychic",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/701.png"
  },
  {
    "id": 702,
    "name": "데덴네",
    "types": [
      "electric",
      "fairy"
    ],
    "weaknesses": [
      "poison",
      "ground"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/702.png"
  },
  {
    "id": 703,
    "name": "멜리시",
    "types": [
      "rock",
      "fairy"
    ],
    "weaknesses": [
      "water",
      "grass",
      "ground",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/703.png"
  },
  {
    "id": 704,
    "name": "미끄메라",
    "types": [
      "dragon"
    ],
    "weaknesses": [
      "ice",
      "dragon",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/704.png"
  },
  {
    "id": 705,
    "name": "미끄네일",
    "types": [
      "dragon"
    ],
    "weaknesses": [
      "ice",
      "dragon",
      "fairy"
    ],
    "evolution": {
      "text": "미끄메라 Lv.40",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/705.png"
  },
  {
    "id": 706,
    "name": "미끄래곤",
    "types": [
      "dragon"
    ],
    "weaknesses": [
      "ice",
      "dragon",
      "fairy"
    ],
    "evolution": {
      "text": "미끄네일 Lv.50",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/706.png"
  },
  {
    "id": 707,
    "name": "클레피",
    "types": [
      "steel",
      "fairy"
    ],
    "weaknesses": [
      "fire",
      "ground"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/707.png"
  },
  {
    "id": 708,
    "name": "나목령",
    "types": [
      "ghost",
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "flying",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/708.png"
  },
  {
    "id": 709,
    "name": "대로트",
    "types": [
      "ghost",
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "flying",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "나목령 통신교환",
      "category": "TRADE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/709.png"
  },
  {
    "id": 710,
    "name": "호바귀",
    "types": [
      "ghost",
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "flying",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/710.png"
  },
  {
    "id": 711,
    "name": "펌킨인",
    "types": [
      "ghost",
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "flying",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/711.png"
  },
  {
    "id": 712,
    "name": "꽁어름",
    "types": [
      "ice"
    ],
    "weaknesses": [
      "fire",
      "fighting",
      "rock",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/712.png"
  },
  {
    "id": 713,
    "name": "크레베이스",
    "types": [
      "ice"
    ],
    "weaknesses": [
      "fire",
      "fighting",
      "rock",
      "steel"
    ],
    "evolution": {
      "text": "꽁어름 Lv.37",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/713.png"
  },
  {
    "id": 714,
    "name": "음뱃",
    "types": [
      "flying",
      "dragon"
    ],
    "weaknesses": [
      "ice",
      "rock",
      "dragon",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/714.png"
  },
  {
    "id": 715,
    "name": "음번",
    "types": [
      "flying",
      "dragon"
    ],
    "weaknesses": [
      "ice",
      "rock",
      "dragon",
      "fairy"
    ],
    "evolution": {
      "text": "음뱃 Lv.48",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/715.png"
  },
  {
    "id": 716,
    "name": "제르네아스",
    "types": [
      "fairy"
    ],
    "weaknesses": [
      "poison",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/716.png"
  },
  {
    "id": 717,
    "name": "이벨타르",
    "types": [
      "dark",
      "flying"
    ],
    "weaknesses": [
      "electric",
      "ice",
      "rock",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/717.png"
  },
  {
    "id": 718,
    "name": "지가르데",
    "types": [
      "dragon",
      "ground"
    ],
    "weaknesses": [
      "ice",
      "dragon",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/718.png"
  },
  {
    "id": 719,
    "name": "디안시",
    "types": [
      "rock",
      "fairy"
    ],
    "weaknesses": [
      "water",
      "grass",
      "ground",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/719.png"
  },
  {
    "id": 720,
    "name": "후파",
    "types": [
      "psychic",
      "ghost"
    ],
    "weaknesses": [
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/720.png"
  },
  {
    "id": 721,
    "name": "볼케니온",
    "types": [
      "fire",
      "water"
    ],
    "weaknesses": [
      "electric",
      "ground",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/721.png"
  },
  {
    "id": 722,
    "name": "나몰빼미",
    "types": [
      "grass",
      "flying"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/722.png"
  },
  {
    "id": 723,
    "name": "빼미스로우",
    "types": [
      "grass",
      "flying"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "rock"
    ],
    "evolution": {
      "text": "나몰빼미 Lv.17",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/723.png"
  },
  {
    "id": 724,
    "name": "모크나이퍼",
    "types": [
      "grass",
      "ghost"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "flying",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "빼미스로우 Lv.34",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/724.png"
  },
  {
    "id": 725,
    "name": "냐오불",
    "types": [
      "fire"
    ],
    "weaknesses": [
      "water",
      "ground",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/725.png"
  },
  {
    "id": 726,
    "name": "냐오히트",
    "types": [
      "fire"
    ],
    "weaknesses": [
      "water",
      "ground",
      "rock"
    ],
    "evolution": {
      "text": "냐오불 Lv.17",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/726.png"
  },
  {
    "id": 727,
    "name": "어흥염",
    "types": [
      "fire",
      "dark"
    ],
    "weaknesses": [
      "water",
      "fighting",
      "ground",
      "rock"
    ],
    "evolution": {
      "text": "냐오히트 Lv.34",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/727.png"
  },
  {
    "id": 728,
    "name": "누리공",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/728.png"
  },
  {
    "id": 729,
    "name": "키요공",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "누리공 Lv.17",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/729.png"
  },
  {
    "id": 730,
    "name": "누리레느",
    "types": [
      "water",
      "fairy"
    ],
    "weaknesses": [
      "electric",
      "grass",
      "poison"
    ],
    "evolution": {
      "text": "키요공 Lv.34",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/730.png"
  },
  {
    "id": 731,
    "name": "콕코구리",
    "types": [
      "normal",
      "flying"
    ],
    "weaknesses": [
      "electric",
      "ice",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/731.png"
  },
  {
    "id": 732,
    "name": "크라파",
    "types": [
      "normal",
      "flying"
    ],
    "weaknesses": [
      "electric",
      "ice",
      "rock"
    ],
    "evolution": {
      "text": "콕코구리 Lv.14",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/732.png"
  },
  {
    "id": 733,
    "name": "왕큰부리",
    "types": [
      "normal",
      "flying"
    ],
    "weaknesses": [
      "electric",
      "ice",
      "rock"
    ],
    "evolution": {
      "text": "크라파 Lv.28",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/733.png"
  },
  {
    "id": 734,
    "name": "영구스",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/734.png"
  },
  {
    "id": 735,
    "name": "형사구스",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "영구스 Lv.20",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/735.png"
  },
  {
    "id": 736,
    "name": "턱지충이",
    "types": [
      "bug"
    ],
    "weaknesses": [
      "fire",
      "flying",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/736.png"
  },
  {
    "id": 737,
    "name": "전지충이",
    "types": [
      "bug",
      "electric"
    ],
    "weaknesses": [
      "fire",
      "rock"
    ],
    "evolution": {
      "text": "턱지충이 Lv.20",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/737.png"
  },
  {
    "id": 738,
    "name": "투구뿌논",
    "types": [
      "bug",
      "electric"
    ],
    "weaknesses": [
      "fire",
      "rock"
    ],
    "evolution": {
      "text": "전지충이 특수 조건",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/738.png"
  },
  {
    "id": 739,
    "name": "오기지게",
    "types": [
      "fighting"
    ],
    "weaknesses": [
      "flying",
      "psychic",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/739.png"
  },
  {
    "id": 740,
    "name": "모단단게",
    "types": [
      "fighting",
      "ice"
    ],
    "weaknesses": [
      "fire",
      "fighting",
      "flying",
      "psychic",
      "steel",
      "fairy"
    ],
    "evolution": {
      "text": "오기지게 특수 조건",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/740.png"
  },
  {
    "id": 741,
    "name": "춤추새",
    "types": [
      "fire",
      "flying"
    ],
    "weaknesses": [
      "water",
      "electric",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/741.png"
  },
  {
    "id": 742,
    "name": "에블리",
    "types": [
      "bug",
      "fairy"
    ],
    "weaknesses": [
      "fire",
      "poison",
      "flying",
      "rock",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/742.png"
  },
  {
    "id": 743,
    "name": "에리본",
    "types": [
      "bug",
      "fairy"
    ],
    "weaknesses": [
      "fire",
      "poison",
      "flying",
      "rock",
      "steel"
    ],
    "evolution": {
      "text": "에블리 Lv.25",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/743.png"
  },
  {
    "id": 744,
    "name": "암멍이",
    "types": [
      "rock"
    ],
    "weaknesses": [
      "water",
      "grass",
      "fighting",
      "ground",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/744.png"
  },
  {
    "id": 745,
    "name": "루가루암",
    "types": [
      "rock"
    ],
    "weaknesses": [
      "water",
      "grass",
      "fighting",
      "ground",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/745.png"
  },
  {
    "id": 746,
    "name": "약어리",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/746.png"
  },
  {
    "id": 747,
    "name": "시마사리",
    "types": [
      "poison",
      "water"
    ],
    "weaknesses": [
      "electric",
      "ground",
      "psychic"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/747.png"
  },
  {
    "id": 748,
    "name": "더시마사리",
    "types": [
      "poison",
      "water"
    ],
    "weaknesses": [
      "electric",
      "ground",
      "psychic"
    ],
    "evolution": {
      "text": "시마사리 Lv.38",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/748.png"
  },
  {
    "id": 749,
    "name": "머드나기",
    "types": [
      "ground"
    ],
    "weaknesses": [
      "water",
      "grass",
      "ice"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/749.png"
  },
  {
    "id": 750,
    "name": "만마드",
    "types": [
      "ground"
    ],
    "weaknesses": [
      "water",
      "grass",
      "ice"
    ],
    "evolution": {
      "text": "머드나기 Lv.30",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/750.png"
  },
  {
    "id": 751,
    "name": "물거미",
    "types": [
      "water",
      "bug"
    ],
    "weaknesses": [
      "electric",
      "flying",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/751.png"
  },
  {
    "id": 752,
    "name": "깨비물거미",
    "types": [
      "water",
      "bug"
    ],
    "weaknesses": [
      "electric",
      "flying",
      "rock"
    ],
    "evolution": {
      "text": "물거미 Lv.22",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/752.png"
  },
  {
    "id": 753,
    "name": "짜랑랑",
    "types": [
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/753.png"
  },
  {
    "id": 754,
    "name": "라란티스",
    "types": [
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "짜랑랑 Lv.34",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/754.png"
  },
  {
    "id": 755,
    "name": "자마슈",
    "types": [
      "grass",
      "fairy"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/755.png"
  },
  {
    "id": 756,
    "name": "마셰이드",
    "types": [
      "grass",
      "fairy"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "steel"
    ],
    "evolution": {
      "text": "자마슈 Lv.24",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/756.png"
  },
  {
    "id": 757,
    "name": "야도뇽",
    "types": [
      "poison",
      "fire"
    ],
    "weaknesses": [
      "water",
      "ground",
      "psychic",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/757.png"
  },
  {
    "id": 758,
    "name": "염뉴트",
    "types": [
      "poison",
      "fire"
    ],
    "weaknesses": [
      "water",
      "ground",
      "psychic",
      "rock"
    ],
    "evolution": {
      "text": "야도뇽 Lv.33",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/758.png"
  },
  {
    "id": 759,
    "name": "포곰곰",
    "types": [
      "normal",
      "fighting"
    ],
    "weaknesses": [
      "fighting",
      "flying",
      "psychic",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/759.png"
  },
  {
    "id": 760,
    "name": "이븐곰",
    "types": [
      "normal",
      "fighting"
    ],
    "weaknesses": [
      "fighting",
      "flying",
      "psychic",
      "fairy"
    ],
    "evolution": {
      "text": "포곰곰 Lv.27",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/760.png"
  },
  {
    "id": 761,
    "name": "달콤아",
    "types": [
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/761.png"
  },
  {
    "id": 762,
    "name": "달무리나",
    "types": [
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "달콤아 Lv.18",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/762.png"
  },
  {
    "id": 763,
    "name": "달코퀸",
    "types": [
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "달무리나 특수 조건",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/763.png"
  },
  {
    "id": 764,
    "name": "큐아링",
    "types": [
      "fairy"
    ],
    "weaknesses": [
      "poison",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/764.png"
  },
  {
    "id": 765,
    "name": "하랑우탄",
    "types": [
      "normal",
      "psychic"
    ],
    "weaknesses": [
      "bug",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/765.png"
  },
  {
    "id": 766,
    "name": "내던숭이",
    "types": [
      "fighting"
    ],
    "weaknesses": [
      "flying",
      "psychic",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/766.png"
  },
  {
    "id": 767,
    "name": "꼬시레",
    "types": [
      "bug",
      "water"
    ],
    "weaknesses": [
      "electric",
      "flying",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/767.png"
  },
  {
    "id": 768,
    "name": "갑주무사",
    "types": [
      "bug",
      "water"
    ],
    "weaknesses": [
      "electric",
      "flying",
      "rock"
    ],
    "evolution": {
      "text": "꼬시레 Lv.30",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/768.png"
  },
  {
    "id": 769,
    "name": "모래꿍",
    "types": [
      "ghost",
      "ground"
    ],
    "weaknesses": [
      "water",
      "grass",
      "ice",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/769.png"
  },
  {
    "id": 770,
    "name": "모래성이당",
    "types": [
      "ghost",
      "ground"
    ],
    "weaknesses": [
      "water",
      "grass",
      "ice",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "모래꿍 Lv.42",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/770.png"
  },
  {
    "id": 771,
    "name": "해무기",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/771.png"
  },
  {
    "id": 772,
    "name": "타입:널",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/772.png"
  },
  {
    "id": 773,
    "name": "실버디",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "타입:널 친밀도 높음",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/773.png"
  },
  {
    "id": 774,
    "name": "메테노",
    "types": [
      "rock",
      "flying"
    ],
    "weaknesses": [
      "water",
      "electric",
      "ice",
      "rock",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/774.png"
  },
  {
    "id": 775,
    "name": "자말라",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/775.png"
  },
  {
    "id": 776,
    "name": "폭거북스",
    "types": [
      "fire",
      "dragon"
    ],
    "weaknesses": [
      "ground",
      "rock",
      "dragon"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/776.png"
  },
  {
    "id": 777,
    "name": "토게데마루",
    "types": [
      "electric",
      "steel"
    ],
    "weaknesses": [
      "fire",
      "fighting",
      "ground"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/777.png"
  },
  {
    "id": 778,
    "name": "따라큐",
    "types": [
      "ghost",
      "fairy"
    ],
    "weaknesses": [
      "ghost",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/778.png"
  },
  {
    "id": 779,
    "name": "치갈기",
    "types": [
      "water",
      "psychic"
    ],
    "weaknesses": [
      "electric",
      "grass",
      "bug",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/779.png"
  },
  {
    "id": 780,
    "name": "할비롱",
    "types": [
      "normal",
      "dragon"
    ],
    "weaknesses": [
      "ice",
      "fighting",
      "dragon",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/780.png"
  },
  {
    "id": 781,
    "name": "타타륜",
    "types": [
      "ghost",
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "flying",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/781.png"
  },
  {
    "id": 782,
    "name": "짜랑꼬",
    "types": [
      "dragon"
    ],
    "weaknesses": [
      "ice",
      "dragon",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/782.png"
  },
  {
    "id": 783,
    "name": "짜랑고우",
    "types": [
      "dragon",
      "fighting"
    ],
    "weaknesses": [
      "ice",
      "flying",
      "psychic",
      "dragon",
      "fairy"
    ],
    "evolution": {
      "text": "짜랑꼬 Lv.35",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/783.png"
  },
  {
    "id": 784,
    "name": "짜랑고우거",
    "types": [
      "dragon",
      "fighting"
    ],
    "weaknesses": [
      "ice",
      "flying",
      "psychic",
      "dragon",
      "fairy"
    ],
    "evolution": {
      "text": "짜랑고우 Lv.45",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/784.png"
  },
  {
    "id": 785,
    "name": "카푸꼬꼬꼭",
    "types": [
      "electric",
      "fairy"
    ],
    "weaknesses": [
      "poison",
      "ground"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/785.png"
  },
  {
    "id": 786,
    "name": "카푸나비나",
    "types": [
      "psychic",
      "fairy"
    ],
    "weaknesses": [
      "poison",
      "ghost",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/786.png"
  },
  {
    "id": 787,
    "name": "카푸브루루",
    "types": [
      "grass",
      "fairy"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/787.png"
  },
  {
    "id": 788,
    "name": "카푸느지느",
    "types": [
      "water",
      "fairy"
    ],
    "weaknesses": [
      "electric",
      "grass",
      "poison"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/788.png"
  },
  {
    "id": 789,
    "name": "코스모그",
    "types": [
      "psychic"
    ],
    "weaknesses": [
      "bug",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/789.png"
  },
  {
    "id": 790,
    "name": "코스모움",
    "types": [
      "psychic"
    ],
    "weaknesses": [
      "bug",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "코스모그 Lv.43",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/790.png"
  },
  {
    "id": 791,
    "name": "솔가레오",
    "types": [
      "psychic",
      "steel"
    ],
    "weaknesses": [
      "fire",
      "ground",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "코스모움 Lv.53",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/791.png"
  },
  {
    "id": 792,
    "name": "루나아라",
    "types": [
      "psychic",
      "ghost"
    ],
    "weaknesses": [
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "코스모움 Lv.53",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/792.png"
  },
  {
    "id": 793,
    "name": "텅비드",
    "types": [
      "rock",
      "poison"
    ],
    "weaknesses": [
      "water",
      "ground",
      "psychic",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/793.png"
  },
  {
    "id": 794,
    "name": "매시붕",
    "types": [
      "bug",
      "fighting"
    ],
    "weaknesses": [
      "fire",
      "flying",
      "psychic",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/794.png"
  },
  {
    "id": 795,
    "name": "페로코체",
    "types": [
      "bug",
      "fighting"
    ],
    "weaknesses": [
      "fire",
      "flying",
      "psychic",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/795.png"
  },
  {
    "id": 796,
    "name": "전수목",
    "types": [
      "electric"
    ],
    "weaknesses": [
      "ground"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/796.png"
  },
  {
    "id": 797,
    "name": "철화구야",
    "types": [
      "steel",
      "flying"
    ],
    "weaknesses": [
      "fire",
      "electric"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/797.png"
  },
  {
    "id": 798,
    "name": "종이신도",
    "types": [
      "grass",
      "steel"
    ],
    "weaknesses": [
      "fire",
      "fighting"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/798.png"
  },
  {
    "id": 799,
    "name": "악식킹",
    "types": [
      "dark",
      "dragon"
    ],
    "weaknesses": [
      "ice",
      "fighting",
      "bug",
      "dragon",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/799.png"
  },
  {
    "id": 800,
    "name": "네크로즈마",
    "types": [
      "psychic"
    ],
    "weaknesses": [
      "bug",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/800.png"
  },
  {
    "id": 801,
    "name": "마기아나",
    "types": [
      "steel",
      "fairy"
    ],
    "weaknesses": [
      "fire",
      "ground"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/801.png"
  },
  {
    "id": 802,
    "name": "마샤도",
    "types": [
      "fighting",
      "ghost"
    ],
    "weaknesses": [
      "flying",
      "psychic",
      "ghost",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/802.png"
  },
  {
    "id": 803,
    "name": "베베놈",
    "types": [
      "poison"
    ],
    "weaknesses": [
      "ground",
      "psychic"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/803.png"
  },
  {
    "id": 804,
    "name": "아고용",
    "types": [
      "poison",
      "dragon"
    ],
    "weaknesses": [
      "ice",
      "ground",
      "psychic",
      "dragon"
    ],
    "evolution": {
      "text": "베베놈 특수 조건",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/804.png"
  },
  {
    "id": 805,
    "name": "차곡차곡",
    "types": [
      "rock",
      "steel"
    ],
    "weaknesses": [
      "water",
      "fighting",
      "ground"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/805.png"
  },
  {
    "id": 806,
    "name": "두파팡",
    "types": [
      "fire",
      "ghost"
    ],
    "weaknesses": [
      "water",
      "ground",
      "rock",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/806.png"
  },
  {
    "id": 807,
    "name": "제라오라",
    "types": [
      "electric"
    ],
    "weaknesses": [
      "ground"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/807.png"
  },
  {
    "id": 808,
    "name": "멜탄",
    "types": [
      "steel"
    ],
    "weaknesses": [
      "fire",
      "fighting",
      "ground"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/808.png"
  },
  {
    "id": 809,
    "name": "멜메탈",
    "types": [
      "steel"
    ],
    "weaknesses": [
      "fire",
      "fighting",
      "ground"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/809.png"
  },
  {
    "id": 810,
    "name": "흥나숭",
    "types": [
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/810.png"
  },
  {
    "id": 811,
    "name": "채키몽",
    "types": [
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "흥나숭 Lv.16",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/811.png"
  },
  {
    "id": 812,
    "name": "고릴타",
    "types": [
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "채키몽 Lv.35",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/812.png"
  },
  {
    "id": 813,
    "name": "염버니",
    "types": [
      "fire"
    ],
    "weaknesses": [
      "water",
      "ground",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/813.png"
  },
  {
    "id": 814,
    "name": "래비풋",
    "types": [
      "fire"
    ],
    "weaknesses": [
      "water",
      "ground",
      "rock"
    ],
    "evolution": {
      "text": "염버니 Lv.16",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/814.png"
  },
  {
    "id": 815,
    "name": "에이스번",
    "types": [
      "fire"
    ],
    "weaknesses": [
      "water",
      "ground",
      "rock"
    ],
    "evolution": {
      "text": "래비풋 Lv.35",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/815.png"
  },
  {
    "id": 816,
    "name": "울머기",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/816.png"
  },
  {
    "id": 817,
    "name": "누겔레온",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "울머기 Lv.16",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/817.png"
  },
  {
    "id": 818,
    "name": "인텔리레온",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "누겔레온 Lv.35",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/818.png"
  },
  {
    "id": 819,
    "name": "탐리스",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/819.png"
  },
  {
    "id": 820,
    "name": "요씽리스",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "탐리스 Lv.24",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/820.png"
  },
  {
    "id": 821,
    "name": "파라꼬",
    "types": [
      "flying"
    ],
    "weaknesses": [
      "electric",
      "ice",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/821.png"
  },
  {
    "id": 822,
    "name": "파크로우",
    "types": [
      "flying"
    ],
    "weaknesses": [
      "electric",
      "ice",
      "rock"
    ],
    "evolution": {
      "text": "파라꼬 Lv.18",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/822.png"
  },
  {
    "id": 823,
    "name": "아머까오",
    "types": [
      "flying",
      "steel"
    ],
    "weaknesses": [
      "fire",
      "electric"
    ],
    "evolution": {
      "text": "파크로우 Lv.38",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/823.png"
  },
  {
    "id": 824,
    "name": "두루지벌레",
    "types": [
      "bug"
    ],
    "weaknesses": [
      "fire",
      "flying",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/824.png"
  },
  {
    "id": 825,
    "name": "레돔벌레",
    "types": [
      "bug",
      "psychic"
    ],
    "weaknesses": [
      "fire",
      "flying",
      "bug",
      "rock",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "두루지벌레 Lv.10",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/825.png"
  },
  {
    "id": 826,
    "name": "이올브",
    "types": [
      "bug",
      "psychic"
    ],
    "weaknesses": [
      "fire",
      "flying",
      "bug",
      "rock",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "레돔벌레 Lv.30",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/826.png"
  },
  {
    "id": 827,
    "name": "훔처우",
    "types": [
      "dark"
    ],
    "weaknesses": [
      "fighting",
      "bug",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/827.png"
  },
  {
    "id": 828,
    "name": "폭슬라이",
    "types": [
      "dark"
    ],
    "weaknesses": [
      "fighting",
      "bug",
      "fairy"
    ],
    "evolution": {
      "text": "훔처우 Lv.18",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/828.png"
  },
  {
    "id": 829,
    "name": "꼬모카",
    "types": [
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/829.png"
  },
  {
    "id": 830,
    "name": "백솜모카",
    "types": [
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "꼬모카 Lv.20",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/830.png"
  },
  {
    "id": 831,
    "name": "우르",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/831.png"
  },
  {
    "id": 832,
    "name": "배우르",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "우르 Lv.24",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/832.png"
  },
  {
    "id": 833,
    "name": "깨물부기",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/833.png"
  },
  {
    "id": 834,
    "name": "갈가부기",
    "types": [
      "water",
      "rock"
    ],
    "weaknesses": [
      "electric",
      "grass",
      "fighting",
      "ground"
    ],
    "evolution": {
      "text": "깨물부기 Lv.22",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/834.png"
  },
  {
    "id": 835,
    "name": "멍파치",
    "types": [
      "electric"
    ],
    "weaknesses": [
      "ground"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/835.png"
  },
  {
    "id": 836,
    "name": "펄스멍",
    "types": [
      "electric"
    ],
    "weaknesses": [
      "ground"
    ],
    "evolution": {
      "text": "멍파치 Lv.25",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/836.png"
  },
  {
    "id": 837,
    "name": "탄동",
    "types": [
      "rock"
    ],
    "weaknesses": [
      "water",
      "grass",
      "fighting",
      "ground",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/837.png"
  },
  {
    "id": 838,
    "name": "탄차곤",
    "types": [
      "rock",
      "fire"
    ],
    "weaknesses": [
      "water",
      "fighting",
      "ground",
      "rock"
    ],
    "evolution": {
      "text": "탄동 Lv.18",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/838.png"
  },
  {
    "id": 839,
    "name": "석탄산",
    "types": [
      "rock",
      "fire"
    ],
    "weaknesses": [
      "water",
      "fighting",
      "ground",
      "rock"
    ],
    "evolution": {
      "text": "탄차곤 Lv.34",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/839.png"
  },
  {
    "id": 840,
    "name": "과사삭벌레",
    "types": [
      "grass",
      "dragon"
    ],
    "weaknesses": [
      "ice",
      "poison",
      "flying",
      "bug",
      "dragon",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/840.png"
  },
  {
    "id": 841,
    "name": "애프룡",
    "types": [
      "grass",
      "dragon"
    ],
    "weaknesses": [
      "ice",
      "poison",
      "flying",
      "bug",
      "dragon",
      "fairy"
    ],
    "evolution": {
      "text": "과사삭벌레 새콤한사과 사용",
      "category": "ITEM"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/841.png"
  },
  {
    "id": 842,
    "name": "단지래플",
    "types": [
      "grass",
      "dragon"
    ],
    "weaknesses": [
      "ice",
      "poison",
      "flying",
      "bug",
      "dragon",
      "fairy"
    ],
    "evolution": {
      "text": "과사삭벌레 달콤한사과 사용",
      "category": "ITEM"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/842.png"
  },
  {
    "id": 843,
    "name": "모래뱀",
    "types": [
      "ground"
    ],
    "weaknesses": [
      "water",
      "grass",
      "ice"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/843.png"
  },
  {
    "id": 844,
    "name": "사다이사",
    "types": [
      "ground"
    ],
    "weaknesses": [
      "water",
      "grass",
      "ice"
    ],
    "evolution": {
      "text": "모래뱀 Lv.36",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/844.png"
  },
  {
    "id": 845,
    "name": "윽우지",
    "types": [
      "flying",
      "water"
    ],
    "weaknesses": [
      "electric",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/845.png"
  },
  {
    "id": 846,
    "name": "찌로꼬치",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/846.png"
  },
  {
    "id": 847,
    "name": "꼬치조",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "찌로꼬치 Lv.26",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/847.png"
  },
  {
    "id": 848,
    "name": "일레즌",
    "types": [
      "electric",
      "poison"
    ],
    "weaknesses": [
      "ground",
      "psychic"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/848.png"
  },
  {
    "id": 849,
    "name": "스트린더",
    "types": [
      "electric",
      "poison"
    ],
    "weaknesses": [
      "ground",
      "psychic"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/849.png"
  },
  {
    "id": 850,
    "name": "태우지네",
    "types": [
      "fire",
      "bug"
    ],
    "weaknesses": [
      "water",
      "flying",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/850.png"
  },
  {
    "id": 851,
    "name": "다태우지네",
    "types": [
      "fire",
      "bug"
    ],
    "weaknesses": [
      "water",
      "flying",
      "rock"
    ],
    "evolution": {
      "text": "태우지네 Lv.28",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/851.png"
  },
  {
    "id": 852,
    "name": "때때무노",
    "types": [
      "fighting"
    ],
    "weaknesses": [
      "flying",
      "psychic",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/852.png"
  },
  {
    "id": 853,
    "name": "케오퍼스",
    "types": [
      "fighting"
    ],
    "weaknesses": [
      "flying",
      "psychic",
      "fairy"
    ],
    "evolution": {
      "text": "때때무노 특수 조건",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/853.png"
  },
  {
    "id": 854,
    "name": "데인차",
    "types": [
      "ghost"
    ],
    "weaknesses": [
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/854.png"
  },
  {
    "id": 855,
    "name": "포트데스",
    "types": [
      "ghost"
    ],
    "weaknesses": [
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "데인차 깨진포트 사용",
      "category": "ITEM"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/855.png"
  },
  {
    "id": 856,
    "name": "몸지브림",
    "types": [
      "psychic"
    ],
    "weaknesses": [
      "bug",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/856.png"
  },
  {
    "id": 857,
    "name": "손지브림",
    "types": [
      "psychic"
    ],
    "weaknesses": [
      "bug",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "몸지브림 Lv.32",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/857.png"
  },
  {
    "id": 858,
    "name": "브리무음",
    "types": [
      "psychic",
      "fairy"
    ],
    "weaknesses": [
      "poison",
      "ghost",
      "steel"
    ],
    "evolution": {
      "text": "손지브림 Lv.42",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/858.png"
  },
  {
    "id": 859,
    "name": "메롱꿍",
    "types": [
      "dark",
      "fairy"
    ],
    "weaknesses": [
      "poison",
      "steel",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/859.png"
  },
  {
    "id": 860,
    "name": "쏘겨모",
    "types": [
      "dark",
      "fairy"
    ],
    "weaknesses": [
      "poison",
      "steel",
      "fairy"
    ],
    "evolution": {
      "text": "메롱꿍 Lv.32",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/860.png"
  },
  {
    "id": 861,
    "name": "오롱털",
    "types": [
      "dark",
      "fairy"
    ],
    "weaknesses": [
      "poison",
      "steel",
      "fairy"
    ],
    "evolution": {
      "text": "쏘겨모 Lv.42",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/861.png"
  },
  {
    "id": 862,
    "name": "가로막구리",
    "types": [
      "dark",
      "normal"
    ],
    "weaknesses": [
      "fighting",
      "bug",
      "fairy"
    ],
    "evolution": {
      "text": "직구리 Lv.35",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/862.png"
  },
  {
    "id": 863,
    "name": "나이킹",
    "types": [
      "steel"
    ],
    "weaknesses": [
      "fire",
      "fighting",
      "ground"
    ],
    "evolution": {
      "text": "나옹 Lv.28",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/863.png"
  },
  {
    "id": 864,
    "name": "산호르곤",
    "types": [
      "ghost"
    ],
    "weaknesses": [
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "코산호 Lv.38",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/864.png"
  },
  {
    "id": 865,
    "name": "창파나이트",
    "types": [
      "fighting"
    ],
    "weaknesses": [
      "flying",
      "psychic",
      "fairy"
    ],
    "evolution": {
      "text": "파오리 특수 조건",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/865.png"
  },
  {
    "id": 866,
    "name": "마임꽁꽁",
    "types": [
      "ice",
      "psychic"
    ],
    "weaknesses": [
      "fire",
      "bug",
      "rock",
      "ghost",
      "dark",
      "steel"
    ],
    "evolution": {
      "text": "마임맨 Lv.42",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/866.png"
  },
  {
    "id": 867,
    "name": "데스판",
    "types": [
      "ground",
      "ghost"
    ],
    "weaknesses": [
      "water",
      "grass",
      "ice",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "데스마스 특수 조건",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/867.png"
  },
  {
    "id": 868,
    "name": "마빌크",
    "types": [
      "fairy"
    ],
    "weaknesses": [
      "poison",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/868.png"
  },
  {
    "id": 869,
    "name": "마휘핑",
    "types": [
      "fairy"
    ],
    "weaknesses": [
      "poison",
      "steel"
    ],
    "evolution": {
      "text": "마빌크 특수 조건",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/869.png"
  },
  {
    "id": 870,
    "name": "대여르",
    "types": [
      "fighting"
    ],
    "weaknesses": [
      "flying",
      "psychic",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/870.png"
  },
  {
    "id": 871,
    "name": "찌르성게",
    "types": [
      "electric"
    ],
    "weaknesses": [
      "ground"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/871.png"
  },
  {
    "id": 872,
    "name": "누니머기",
    "types": [
      "ice",
      "bug"
    ],
    "weaknesses": [
      "fire",
      "flying",
      "rock",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/872.png"
  },
  {
    "id": 873,
    "name": "모스노우",
    "types": [
      "ice",
      "bug"
    ],
    "weaknesses": [
      "fire",
      "flying",
      "rock",
      "steel"
    ],
    "evolution": {
      "text": "누니머기 친밀도 높음",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/873.png"
  },
  {
    "id": 874,
    "name": "돌헨진",
    "types": [
      "rock"
    ],
    "weaknesses": [
      "water",
      "grass",
      "fighting",
      "ground",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/874.png"
  },
  {
    "id": 875,
    "name": "빙큐보",
    "types": [
      "ice"
    ],
    "weaknesses": [
      "fire",
      "fighting",
      "rock",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/875.png"
  },
  {
    "id": 876,
    "name": "에써르",
    "types": [
      "psychic",
      "normal"
    ],
    "weaknesses": [
      "bug",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/876.png"
  },
  {
    "id": 877,
    "name": "모르페코",
    "types": [
      "electric",
      "dark"
    ],
    "weaknesses": [
      "fighting",
      "ground",
      "bug",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/877.png"
  },
  {
    "id": 878,
    "name": "끼리동",
    "types": [
      "steel"
    ],
    "weaknesses": [
      "fire",
      "fighting",
      "ground"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/878.png"
  },
  {
    "id": 879,
    "name": "대왕끼리동",
    "types": [
      "steel"
    ],
    "weaknesses": [
      "fire",
      "fighting",
      "ground"
    ],
    "evolution": {
      "text": "끼리동 Lv.34",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/879.png"
  },
  {
    "id": 880,
    "name": "파치래곤",
    "types": [
      "electric",
      "dragon"
    ],
    "weaknesses": [
      "ice",
      "ground",
      "dragon",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/880.png"
  },
  {
    "id": 881,
    "name": "파치르돈",
    "types": [
      "electric",
      "ice"
    ],
    "weaknesses": [
      "fire",
      "fighting",
      "ground",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/881.png"
  },
  {
    "id": 882,
    "name": "어래곤",
    "types": [
      "water",
      "dragon"
    ],
    "weaknesses": [
      "dragon",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/882.png"
  },
  {
    "id": 883,
    "name": "어치르돈",
    "types": [
      "water",
      "ice"
    ],
    "weaknesses": [
      "electric",
      "grass",
      "fighting",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/883.png"
  },
  {
    "id": 884,
    "name": "두랄루돈",
    "types": [
      "steel",
      "dragon"
    ],
    "weaknesses": [
      "fighting",
      "ground"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/884.png"
  },
  {
    "id": 885,
    "name": "드라꼰",
    "types": [
      "dragon",
      "ghost"
    ],
    "weaknesses": [
      "ice",
      "ghost",
      "dragon",
      "dark",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/885.png"
  },
  {
    "id": 886,
    "name": "드래런치",
    "types": [
      "dragon",
      "ghost"
    ],
    "weaknesses": [
      "ice",
      "ghost",
      "dragon",
      "dark",
      "fairy"
    ],
    "evolution": {
      "text": "드라꼰 Lv.50",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/886.png"
  },
  {
    "id": 887,
    "name": "드래펄트",
    "types": [
      "dragon",
      "ghost"
    ],
    "weaknesses": [
      "ice",
      "ghost",
      "dragon",
      "dark",
      "fairy"
    ],
    "evolution": {
      "text": "드래런치 Lv.60",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/887.png"
  },
  {
    "id": 888,
    "name": "자시안",
    "types": [
      "fairy"
    ],
    "weaknesses": [
      "poison",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/888.png"
  },
  {
    "id": 889,
    "name": "자마젠타",
    "types": [
      "fighting"
    ],
    "weaknesses": [
      "flying",
      "psychic",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/889.png"
  },
  {
    "id": 890,
    "name": "무한다이노",
    "types": [
      "poison",
      "dragon"
    ],
    "weaknesses": [
      "ice",
      "ground",
      "psychic",
      "dragon"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/890.png"
  },
  {
    "id": 891,
    "name": "치고마",
    "types": [
      "fighting"
    ],
    "weaknesses": [
      "flying",
      "psychic",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/891.png"
  },
  {
    "id": 892,
    "name": "우라오스",
    "types": [
      "fighting",
      "dark"
    ],
    "weaknesses": [
      "fighting",
      "flying",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/892.png"
  },
  {
    "id": 893,
    "name": "자루도",
    "types": [
      "dark",
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "fighting",
      "poison",
      "flying",
      "bug",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/893.png"
  },
  {
    "id": 894,
    "name": "레지에레키",
    "types": [
      "electric"
    ],
    "weaknesses": [
      "ground"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/894.png"
  },
  {
    "id": 895,
    "name": "레지드래고",
    "types": [
      "dragon"
    ],
    "weaknesses": [
      "ice",
      "dragon",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/895.png"
  },
  {
    "id": 896,
    "name": "블리자포스",
    "types": [
      "ice"
    ],
    "weaknesses": [
      "fire",
      "fighting",
      "rock",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/896.png"
  },
  {
    "id": 897,
    "name": "레이스포스",
    "types": [
      "ghost"
    ],
    "weaknesses": [
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/897.png"
  },
  {
    "id": 898,
    "name": "버드렉스",
    "types": [
      "psychic",
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/898.png"
  },
  {
    "id": 899,
    "name": "신비록",
    "types": [
      "normal",
      "psychic"
    ],
    "weaknesses": [
      "bug",
      "dark"
    ],
    "evolution": {
      "text": "노라키 특수 조건",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/899.png"
  },
  {
    "id": 900,
    "name": "사마자르",
    "types": [
      "bug",
      "rock"
    ],
    "weaknesses": [
      "water",
      "rock",
      "steel"
    ],
    "evolution": {
      "text": "스라크 black-augurite 사용",
      "category": "ITEM"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/900.png"
  },
  {
    "id": 901,
    "name": "다투곰",
    "types": [
      "ground",
      "normal"
    ],
    "weaknesses": [
      "water",
      "grass",
      "ice",
      "fighting"
    ],
    "evolution": {
      "text": "링곰 peat-block 사용",
      "category": "ITEM"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/901.png"
  },
  {
    "id": 902,
    "name": "대쓰여너",
    "types": [
      "water",
      "ghost"
    ],
    "weaknesses": [
      "electric",
      "grass",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/902.png"
  },
  {
    "id": 903,
    "name": "포푸니크",
    "types": [
      "fighting",
      "poison"
    ],
    "weaknesses": [
      "ground",
      "flying",
      "psychic"
    ],
    "evolution": {
      "text": "포푸니 특수 조건",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/903.png"
  },
  {
    "id": 904,
    "name": "장침바루",
    "types": [
      "dark",
      "poison"
    ],
    "weaknesses": [
      "ground"
    ],
    "evolution": {
      "text": "침바루 특수 조건",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/904.png"
  },
  {
    "id": 905,
    "name": "러브로스",
    "types": [
      "fairy",
      "flying"
    ],
    "weaknesses": [
      "electric",
      "ice",
      "poison",
      "rock",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/905.png"
  },
  {
    "id": 906,
    "name": "나오하",
    "types": [
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/906.png"
  },
  {
    "id": 907,
    "name": "나로테",
    "types": [
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "나오하 Lv.16",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/907.png"
  },
  {
    "id": 908,
    "name": "마스카나",
    "types": [
      "grass",
      "dark"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "fighting",
      "poison",
      "flying",
      "bug",
      "fairy"
    ],
    "evolution": {
      "text": "나로테 Lv.36",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/908.png"
  },
  {
    "id": 909,
    "name": "뜨아거",
    "types": [
      "fire"
    ],
    "weaknesses": [
      "water",
      "ground",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/909.png"
  },
  {
    "id": 910,
    "name": "악뜨거",
    "types": [
      "fire"
    ],
    "weaknesses": [
      "water",
      "ground",
      "rock"
    ],
    "evolution": {
      "text": "뜨아거 Lv.16",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/910.png"
  },
  {
    "id": 911,
    "name": "라우드본",
    "types": [
      "fire",
      "ghost"
    ],
    "weaknesses": [
      "water",
      "ground",
      "rock",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "악뜨거 Lv.36",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/911.png"
  },
  {
    "id": 912,
    "name": "꾸왁스",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/912.png"
  },
  {
    "id": 913,
    "name": "아꾸왁",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "꾸왁스 Lv.16",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/913.png"
  },
  {
    "id": 914,
    "name": "웨이니발",
    "types": [
      "water",
      "fighting"
    ],
    "weaknesses": [
      "electric",
      "grass",
      "flying",
      "psychic",
      "fairy"
    ],
    "evolution": {
      "text": "아꾸왁 Lv.36",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/914.png"
  },
  {
    "id": 915,
    "name": "맛보돈",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/915.png"
  },
  {
    "id": 916,
    "name": "퍼퓨돈",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/916.png"
  },
  {
    "id": 917,
    "name": "타랜툴라",
    "types": [
      "bug"
    ],
    "weaknesses": [
      "fire",
      "flying",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/917.png"
  },
  {
    "id": 918,
    "name": "트래피더",
    "types": [
      "bug"
    ],
    "weaknesses": [
      "fire",
      "flying",
      "rock"
    ],
    "evolution": {
      "text": "타랜툴라 Lv.15",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/918.png"
  },
  {
    "id": 919,
    "name": "콩알뚜기",
    "types": [
      "bug"
    ],
    "weaknesses": [
      "fire",
      "flying",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/919.png"
  },
  {
    "id": 920,
    "name": "엑스레그",
    "types": [
      "bug",
      "dark"
    ],
    "weaknesses": [
      "fire",
      "flying",
      "bug",
      "rock",
      "fairy"
    ],
    "evolution": {
      "text": "콩알뚜기 Lv.24",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/920.png"
  },
  {
    "id": 921,
    "name": "빠모",
    "types": [
      "electric"
    ],
    "weaknesses": [
      "ground"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/921.png"
  },
  {
    "id": 922,
    "name": "빠모트",
    "types": [
      "electric",
      "fighting"
    ],
    "weaknesses": [
      "ground",
      "psychic",
      "fairy"
    ],
    "evolution": {
      "text": "빠모 Lv.18",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/922.png"
  },
  {
    "id": 923,
    "name": "빠르모트",
    "types": [
      "electric",
      "fighting"
    ],
    "weaknesses": [
      "ground",
      "psychic",
      "fairy"
    ],
    "evolution": {
      "text": "빠모트 특수 조건",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/923.png"
  },
  {
    "id": 924,
    "name": "두리쥐",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/924.png"
  },
  {
    "id": 925,
    "name": "파밀리쥐",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/925.png"
  },
  {
    "id": 926,
    "name": "쫀도기",
    "types": [
      "fairy"
    ],
    "weaknesses": [
      "poison",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/926.png"
  },
  {
    "id": 927,
    "name": "바우첼",
    "types": [
      "fairy"
    ],
    "weaknesses": [
      "poison",
      "steel"
    ],
    "evolution": {
      "text": "쫀도기 Lv.26",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/927.png"
  },
  {
    "id": 928,
    "name": "미니브",
    "types": [
      "grass",
      "normal"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "fighting",
      "poison",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/928.png"
  },
  {
    "id": 929,
    "name": "올리뇨",
    "types": [
      "grass",
      "normal"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "fighting",
      "poison",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "미니브 Lv.25",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/929.png"
  },
  {
    "id": 930,
    "name": "올리르바",
    "types": [
      "grass",
      "normal"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "fighting",
      "poison",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "올리뇨 Lv.35",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/930.png"
  },
  {
    "id": 931,
    "name": "시비꼬",
    "types": [
      "normal",
      "flying"
    ],
    "weaknesses": [
      "electric",
      "ice",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/931.png"
  },
  {
    "id": 932,
    "name": "베베솔트",
    "types": [
      "rock"
    ],
    "weaknesses": [
      "water",
      "grass",
      "fighting",
      "ground",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/932.png"
  },
  {
    "id": 933,
    "name": "스태솔트",
    "types": [
      "rock"
    ],
    "weaknesses": [
      "water",
      "grass",
      "fighting",
      "ground",
      "steel"
    ],
    "evolution": {
      "text": "베베솔트 Lv.24",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/933.png"
  },
  {
    "id": 934,
    "name": "콜로솔트",
    "types": [
      "rock"
    ],
    "weaknesses": [
      "water",
      "grass",
      "fighting",
      "ground",
      "steel"
    ],
    "evolution": {
      "text": "스태솔트 Lv.38",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/934.png"
  },
  {
    "id": 935,
    "name": "카르본",
    "types": [
      "fire"
    ],
    "weaknesses": [
      "water",
      "ground",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/935.png"
  },
  {
    "id": 936,
    "name": "카디나르마",
    "types": [
      "fire",
      "psychic"
    ],
    "weaknesses": [
      "water",
      "ground",
      "rock",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "카르본 auspicious-armor 사용",
      "category": "ITEM"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/936.png"
  },
  {
    "id": 937,
    "name": "파라블레이즈",
    "types": [
      "fire",
      "ghost"
    ],
    "weaknesses": [
      "water",
      "ground",
      "rock",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "카르본 malicious-armor 사용",
      "category": "ITEM"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/937.png"
  },
  {
    "id": 938,
    "name": "빈나두",
    "types": [
      "electric"
    ],
    "weaknesses": [
      "ground"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/938.png"
  },
  {
    "id": 939,
    "name": "찌리배리",
    "types": [
      "electric"
    ],
    "weaknesses": [
      "ground"
    ],
    "evolution": {
      "text": "빈나두 천둥의돌 사용",
      "category": "ITEM"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/939.png"
  },
  {
    "id": 940,
    "name": "찌리비",
    "types": [
      "electric",
      "flying"
    ],
    "weaknesses": [
      "ice",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/940.png"
  },
  {
    "id": 941,
    "name": "찌리비크",
    "types": [
      "electric",
      "flying"
    ],
    "weaknesses": [
      "ice",
      "rock"
    ],
    "evolution": {
      "text": "찌리비 Lv.25",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/941.png"
  },
  {
    "id": 942,
    "name": "오라티프",
    "types": [
      "dark"
    ],
    "weaknesses": [
      "fighting",
      "bug",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/942.png"
  },
  {
    "id": 943,
    "name": "마피티프",
    "types": [
      "dark"
    ],
    "weaknesses": [
      "fighting",
      "bug",
      "fairy"
    ],
    "evolution": {
      "text": "오라티프 Lv.30",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/943.png"
  },
  {
    "id": 944,
    "name": "땃쭈르",
    "types": [
      "poison",
      "normal"
    ],
    "weaknesses": [
      "ground",
      "psychic"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/944.png"
  },
  {
    "id": 945,
    "name": "태깅구르",
    "types": [
      "poison",
      "normal"
    ],
    "weaknesses": [
      "ground",
      "psychic"
    ],
    "evolution": {
      "text": "땃쭈르 Lv.28",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/945.png"
  },
  {
    "id": 946,
    "name": "그푸리",
    "types": [
      "grass",
      "ghost"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "flying",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/946.png"
  },
  {
    "id": 947,
    "name": "공푸리",
    "types": [
      "grass",
      "ghost"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "flying",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "그푸리 특수 조건",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/947.png"
  },
  {
    "id": 948,
    "name": "들눈해",
    "types": [
      "ground",
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/948.png"
  },
  {
    "id": 949,
    "name": "육파리",
    "types": [
      "ground",
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "들눈해 Lv.30",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/949.png"
  },
  {
    "id": 950,
    "name": "절벼게",
    "types": [
      "rock"
    ],
    "weaknesses": [
      "water",
      "grass",
      "fighting",
      "ground",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/950.png"
  },
  {
    "id": 951,
    "name": "캡싸이",
    "types": [
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/951.png"
  },
  {
    "id": 952,
    "name": "스코빌런",
    "types": [
      "grass",
      "fire"
    ],
    "weaknesses": [
      "poison",
      "flying",
      "rock"
    ],
    "evolution": {
      "text": "캡싸이 불꽃의돌 사용",
      "category": "ITEM"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/952.png"
  },
  {
    "id": 953,
    "name": "구르데",
    "types": [
      "bug"
    ],
    "weaknesses": [
      "fire",
      "flying",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/953.png"
  },
  {
    "id": 954,
    "name": "베라카스",
    "types": [
      "bug",
      "psychic"
    ],
    "weaknesses": [
      "fire",
      "flying",
      "bug",
      "rock",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "구르데 특수 조건",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/954.png"
  },
  {
    "id": 955,
    "name": "하느라기",
    "types": [
      "psychic"
    ],
    "weaknesses": [
      "bug",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/955.png"
  },
  {
    "id": 956,
    "name": "클레스퍼트라",
    "types": [
      "psychic"
    ],
    "weaknesses": [
      "bug",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "하느라기 Lv.35",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/956.png"
  },
  {
    "id": 957,
    "name": "어리짱",
    "types": [
      "fairy",
      "steel"
    ],
    "weaknesses": [
      "fire",
      "ground"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/957.png"
  },
  {
    "id": 958,
    "name": "벼리짱",
    "types": [
      "fairy",
      "steel"
    ],
    "weaknesses": [
      "fire",
      "ground"
    ],
    "evolution": {
      "text": "어리짱 Lv.24",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/958.png"
  },
  {
    "id": 959,
    "name": "두드리짱",
    "types": [
      "fairy",
      "steel"
    ],
    "weaknesses": [
      "fire",
      "ground"
    ],
    "evolution": {
      "text": "벼리짱 Lv.38",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/959.png"
  },
  {
    "id": 960,
    "name": "바다그다",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/960.png"
  },
  {
    "id": 961,
    "name": "바닥트리오",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "바다그다 Lv.26",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/961.png"
  },
  {
    "id": 962,
    "name": "떨구새",
    "types": [
      "flying",
      "dark"
    ],
    "weaknesses": [
      "electric",
      "ice",
      "rock",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/962.png"
  },
  {
    "id": 963,
    "name": "맨돌핀",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/963.png"
  },
  {
    "id": 964,
    "name": "돌핀맨",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/964.png"
  },
  {
    "id": 965,
    "name": "부르롱",
    "types": [
      "steel",
      "poison"
    ],
    "weaknesses": [
      "fire",
      "ground"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/965.png"
  },
  {
    "id": 966,
    "name": "부르르룸",
    "types": [
      "steel",
      "poison"
    ],
    "weaknesses": [
      "fire",
      "ground"
    ],
    "evolution": {
      "text": "부르롱 Lv.40",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/966.png"
  },
  {
    "id": 967,
    "name": "모토마",
    "types": [
      "dragon",
      "normal"
    ],
    "weaknesses": [
      "ice",
      "fighting",
      "dragon",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/967.png"
  },
  {
    "id": 968,
    "name": "꿈트렁",
    "types": [
      "steel"
    ],
    "weaknesses": [
      "fire",
      "fighting",
      "ground"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/968.png"
  },
  {
    "id": 969,
    "name": "초롱순",
    "types": [
      "rock",
      "poison"
    ],
    "weaknesses": [
      "water",
      "ground",
      "psychic",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/969.png"
  },
  {
    "id": 970,
    "name": "킬라플로르",
    "types": [
      "rock",
      "poison"
    ],
    "weaknesses": [
      "water",
      "ground",
      "psychic",
      "steel"
    ],
    "evolution": {
      "text": "초롱순 Lv.35",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/970.png"
  },
  {
    "id": 971,
    "name": "망망이",
    "types": [
      "ghost"
    ],
    "weaknesses": [
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/971.png"
  },
  {
    "id": 972,
    "name": "묘두기",
    "types": [
      "ghost"
    ],
    "weaknesses": [
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "망망이 Lv.30",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/972.png"
  },
  {
    "id": 973,
    "name": "꼬이밍고",
    "types": [
      "flying",
      "fighting"
    ],
    "weaknesses": [
      "electric",
      "ice",
      "flying",
      "psychic",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/973.png"
  },
  {
    "id": 974,
    "name": "터벅고래",
    "types": [
      "ice"
    ],
    "weaknesses": [
      "fire",
      "fighting",
      "rock",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/974.png"
  },
  {
    "id": 975,
    "name": "우락고래",
    "types": [
      "ice"
    ],
    "weaknesses": [
      "fire",
      "fighting",
      "rock",
      "steel"
    ],
    "evolution": {
      "text": "터벅고래 얼음의돌 사용",
      "category": "ITEM"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/975.png"
  },
  {
    "id": 976,
    "name": "가비루사",
    "types": [
      "water",
      "psychic"
    ],
    "weaknesses": [
      "electric",
      "grass",
      "bug",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/976.png"
  },
  {
    "id": 977,
    "name": "어써러셔",
    "types": [
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/977.png"
  },
  {
    "id": 978,
    "name": "싸리용",
    "types": [
      "dragon",
      "water"
    ],
    "weaknesses": [
      "dragon",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/978.png"
  },
  {
    "id": 979,
    "name": "저승갓숭",
    "types": [
      "fighting",
      "ghost"
    ],
    "weaknesses": [
      "flying",
      "psychic",
      "ghost",
      "fairy"
    ],
    "evolution": {
      "text": "성원숭 특수 조건",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/979.png"
  },
  {
    "id": 980,
    "name": "토오",
    "types": [
      "poison",
      "ground"
    ],
    "weaknesses": [
      "water",
      "ice",
      "ground",
      "psychic"
    ],
    "evolution": {
      "text": "우파 Lv.20",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/980.png"
  },
  {
    "id": 981,
    "name": "키키링",
    "types": [
      "normal",
      "psychic"
    ],
    "weaknesses": [
      "bug",
      "dark"
    ],
    "evolution": {
      "text": "키링키 특수 조건",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/981.png"
  },
  {
    "id": 982,
    "name": "노고고치",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/982.png"
  },
  {
    "id": 983,
    "name": "대도각참",
    "types": [
      "dark",
      "steel"
    ],
    "weaknesses": [
      "fire",
      "fighting",
      "ground"
    ],
    "evolution": {
      "text": "절각참 특수 조건",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/983.png"
  },
  {
    "id": 984,
    "name": "위대한엄니",
    "types": [
      "ground",
      "fighting"
    ],
    "weaknesses": [
      "water",
      "grass",
      "ice",
      "flying",
      "psychic",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/984.png"
  },
  {
    "id": 985,
    "name": "우렁찬꼬리",
    "types": [
      "fairy",
      "psychic"
    ],
    "weaknesses": [
      "poison",
      "ghost",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/985.png"
  },
  {
    "id": 986,
    "name": "사나운버섯",
    "types": [
      "grass",
      "dark"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "fighting",
      "poison",
      "flying",
      "bug",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/986.png"
  },
  {
    "id": 987,
    "name": "날개치는머리",
    "types": [
      "ghost",
      "fairy"
    ],
    "weaknesses": [
      "ghost",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/987.png"
  },
  {
    "id": 988,
    "name": "땅을기는날개",
    "types": [
      "bug",
      "fighting"
    ],
    "weaknesses": [
      "fire",
      "flying",
      "psychic",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/988.png"
  },
  {
    "id": 989,
    "name": "모래털가죽",
    "types": [
      "electric",
      "ground"
    ],
    "weaknesses": [
      "water",
      "grass",
      "ice",
      "ground"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/989.png"
  },
  {
    "id": 990,
    "name": "무쇠바퀴",
    "types": [
      "ground",
      "steel"
    ],
    "weaknesses": [
      "fire",
      "water",
      "fighting",
      "ground"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/990.png"
  },
  {
    "id": 991,
    "name": "무쇠보따리",
    "types": [
      "ice",
      "water"
    ],
    "weaknesses": [
      "electric",
      "grass",
      "fighting",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/991.png"
  },
  {
    "id": 992,
    "name": "무쇠손",
    "types": [
      "fighting",
      "electric"
    ],
    "weaknesses": [
      "ground",
      "psychic",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/992.png"
  },
  {
    "id": 993,
    "name": "무쇠머리",
    "types": [
      "dark",
      "flying"
    ],
    "weaknesses": [
      "electric",
      "ice",
      "rock",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/993.png"
  },
  {
    "id": 994,
    "name": "무쇠독나방",
    "types": [
      "fire",
      "poison"
    ],
    "weaknesses": [
      "water",
      "ground",
      "psychic",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/994.png"
  },
  {
    "id": 995,
    "name": "무쇠가시",
    "types": [
      "rock",
      "electric"
    ],
    "weaknesses": [
      "water",
      "grass",
      "fighting",
      "ground"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/995.png"
  },
  {
    "id": 996,
    "name": "드니차",
    "types": [
      "dragon",
      "ice"
    ],
    "weaknesses": [
      "fighting",
      "rock",
      "dragon",
      "steel",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/996.png"
  },
  {
    "id": 997,
    "name": "드니꽁",
    "types": [
      "dragon",
      "ice"
    ],
    "weaknesses": [
      "fighting",
      "rock",
      "dragon",
      "steel",
      "fairy"
    ],
    "evolution": {
      "text": "드니차 Lv.35",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/997.png"
  },
  {
    "id": 998,
    "name": "드닐레이브",
    "types": [
      "dragon",
      "ice"
    ],
    "weaknesses": [
      "fighting",
      "rock",
      "dragon",
      "steel",
      "fairy"
    ],
    "evolution": {
      "text": "드니꽁 Lv.54",
      "category": "LV"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/998.png"
  },
  {
    "id": 999,
    "name": "모으령",
    "types": [
      "ghost"
    ],
    "weaknesses": [
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/999.png"
  },
  {
    "id": 1000,
    "name": "타부자고",
    "types": [
      "steel",
      "ghost"
    ],
    "weaknesses": [
      "fire",
      "ground",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "모으령 특수 조건",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1000.png"
  },
  {
    "id": 1001,
    "name": "총지엔",
    "types": [
      "dark",
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "fighting",
      "poison",
      "flying",
      "bug",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1001.png"
  },
  {
    "id": 1002,
    "name": "파오젠",
    "types": [
      "dark",
      "ice"
    ],
    "weaknesses": [
      "fire",
      "fighting",
      "bug",
      "rock",
      "steel",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1002.png"
  },
  {
    "id": 1003,
    "name": "딩루",
    "types": [
      "dark",
      "ground"
    ],
    "weaknesses": [
      "water",
      "grass",
      "ice",
      "fighting",
      "bug",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1003.png"
  },
  {
    "id": 1004,
    "name": "위유이",
    "types": [
      "dark",
      "fire"
    ],
    "weaknesses": [
      "water",
      "fighting",
      "ground",
      "rock"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1004.png"
  },
  {
    "id": 1005,
    "name": "고동치는달",
    "types": [
      "dragon",
      "dark"
    ],
    "weaknesses": [
      "ice",
      "fighting",
      "bug",
      "dragon",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1005.png"
  },
  {
    "id": 1006,
    "name": "무쇠무인",
    "types": [
      "fairy",
      "fighting"
    ],
    "weaknesses": [
      "poison",
      "flying",
      "psychic",
      "steel",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1006.png"
  },
  {
    "id": 1007,
    "name": "코라이돈",
    "types": [
      "fighting",
      "dragon"
    ],
    "weaknesses": [
      "ice",
      "flying",
      "psychic",
      "dragon",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1007.png"
  },
  {
    "id": 1008,
    "name": "미라이돈",
    "types": [
      "electric",
      "dragon"
    ],
    "weaknesses": [
      "ice",
      "ground",
      "dragon",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1008.png"
  },
  {
    "id": 1009,
    "name": "굽이치는물결",
    "types": [
      "water",
      "dragon"
    ],
    "weaknesses": [
      "dragon",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1009.png"
  },
  {
    "id": 1010,
    "name": "무쇠잎새",
    "types": [
      "grass",
      "psychic"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1010.png"
  },
  {
    "id": 1011,
    "name": "과미르",
    "types": [
      "grass",
      "dragon"
    ],
    "weaknesses": [
      "ice",
      "poison",
      "flying",
      "bug",
      "dragon",
      "fairy"
    ],
    "evolution": {
      "text": "과사삭벌레 특수 조건",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1011.png"
  },
  {
    "id": 1012,
    "name": "차데스",
    "types": [
      "grass",
      "ghost"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "flying",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1012.png"
  },
  {
    "id": 1013,
    "name": "그우린차",
    "types": [
      "grass",
      "ghost"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "flying",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "차데스 특수 조건",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1013.png"
  },
  {
    "id": 1014,
    "name": "조타구",
    "types": [
      "poison",
      "fighting"
    ],
    "weaknesses": [
      "ground",
      "flying",
      "psychic"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1014.png"
  },
  {
    "id": 1015,
    "name": "이야후",
    "types": [
      "poison",
      "psychic"
    ],
    "weaknesses": [
      "ground",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1015.png"
  },
  {
    "id": 1016,
    "name": "기로치",
    "types": [
      "poison",
      "fairy"
    ],
    "weaknesses": [
      "ground",
      "psychic",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1016.png"
  },
  {
    "id": 1017,
    "name": "오거폰",
    "types": [
      "grass"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying",
      "bug"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1017.png"
  },
  {
    "id": 1018,
    "name": "브리두라스",
    "types": [
      "steel",
      "dragon"
    ],
    "weaknesses": [
      "fighting",
      "ground"
    ],
    "evolution": {
      "text": "두랄루돈 특수 조건",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1018.png"
  },
  {
    "id": 1019,
    "name": "과미드라",
    "types": [
      "grass",
      "dragon"
    ],
    "weaknesses": [
      "ice",
      "poison",
      "flying",
      "bug",
      "dragon",
      "fairy"
    ],
    "evolution": {
      "text": "과미르 특수 조건",
      "category": "ETC"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1019.png"
  },
  {
    "id": 1020,
    "name": "꿰뚫는화염",
    "types": [
      "fire",
      "dragon"
    ],
    "weaknesses": [
      "ground",
      "rock",
      "dragon"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1020.png"
  },
  {
    "id": 1021,
    "name": "날뛰는우레",
    "types": [
      "electric",
      "dragon"
    ],
    "weaknesses": [
      "ice",
      "ground",
      "dragon",
      "fairy"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1021.png"
  },
  {
    "id": 1022,
    "name": "무쇠암석",
    "types": [
      "rock",
      "psychic"
    ],
    "weaknesses": [
      "water",
      "grass",
      "ground",
      "bug",
      "ghost",
      "dark",
      "steel"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1022.png"
  },
  {
    "id": 1023,
    "name": "무쇠감투",
    "types": [
      "steel",
      "psychic"
    ],
    "weaknesses": [
      "fire",
      "ground",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1023.png"
  },
  {
    "id": 1024,
    "name": "테라파고스",
    "types": [
      "normal"
    ],
    "weaknesses": [
      "fighting"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1024.png"
  },
  {
    "id": 1025,
    "name": "복숭악동",
    "types": [
      "poison",
      "ghost"
    ],
    "weaknesses": [
      "ground",
      "psychic",
      "ghost",
      "dark"
    ],
    "evolution": {
      "text": "-",
      "category": "NONE"
    },
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1025.png"
  }
];