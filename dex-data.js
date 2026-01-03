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
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
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
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
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
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
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
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
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
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
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
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
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
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
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
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"
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
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
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
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"
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
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
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
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
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
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png"
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
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png"
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
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png"
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
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png"
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
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png"
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
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png"
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
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"
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
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png"
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
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png"
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
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png"
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
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png"
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
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png"
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
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
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
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"
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
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png"
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
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png"
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
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png"
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
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png"
  }
];