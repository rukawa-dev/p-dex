// 필요한 라이브러리를 가져옵니다.
const axios = require('axios'); // 웹 페이지 HTML을 가져오기 위한 라이브러리
const cheerio = require('cheerio'); // HTML을 파싱하고 데이터를 추출하기 위한 라이브러리
const fs = require('fs'); // 파일 시스템에 접근하기 위한 Node.js 내장 모듈
const path = require('path'); // 파일 경로를 다루기 위한 Node.js 내장 모듈

// 크롤링할 나무위키 URL
const url = 'https://namu.wiki/w/%ED%8F%AC%EC%BC%93%EB%AA%AC%EC%8A%A4%ED%84%B0(%ED%8F%AC%EC%BC%93%EB%AA%AC%EC%8A%A4%ED%84%B0)/%EB%AA%A9%EB%A1%9D/%EC%A0%84%EA%B5%AD%EB%8F%84%EA%B0%90';

/**
 * PokeAPI 캐시 파일에서 총 포켓몬 수를 가져옵니다.
 * @returns {number} 총 포켓몬 수
 */
function getTotalPokemonCount() {
  try {
    const cachePath = path.join(__dirname, 'cache', 'pokemon-species_limit=1.json');
    const cacheData = fs.readFileSync(cachePath, 'utf-8');
    const jsonData = JSON.parse(cacheData);
    return jsonData.count;
  } catch (error) {
    console.error('캐시 파일에서 총 포켓몬 수를 읽는 데 실패했습니다. 기본값(1500)을 사용합니다.', error);
    // 파일 읽기 실패 시 보수적인 기본값 설정
    return 1500;
  }
}

/**
 * 나무위키에서 포켓몬 데이터를 스크래핑하여 JSON 파일로 저장하는 비동기 함수
 */
async function scrapePokemonData() {
  const maxPokemonId = getTotalPokemonCount();
  console.log(`총 포켓몬 수: ${maxPokemonId} (API 캐시 기반)`);

  try {
    console.log('나무위키에서 데이터 가져오는 중...');
    const { data } = await axios.get(url, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
    });
    const $ = cheerio.load(data);

    const pokemonMap = new Map();

    // <img> 태그를 기준으로 데이터를 수집합니다.
    $('div.wiki-table-wrap table img').each((i, img) => {
        const $img = $(img);
        const $row = $img.closest('tr');

        // 이미지가 테이블 행(tr) 안에 없거나, 해당 행이 헤더(th)이면 건너뜁니다.
        if ($row.length === 0 || $row.find('th').length > 0) return;

        const columns = $row.find('td');
        if (columns.length < 3) return;

        // 1. 도감 번호 추출
        const idText = $(columns[0]).text().trim();
        const id = parseInt(idText.replace(/[^0-9]/g, ''), 10);

        // 2. 이름 추출
        const name = $(columns[1]).text().trim().split('[')[0];

        // --- 데이터 유효성 검사 ---
        if (isNaN(id) || id <= 0 || id > maxPokemonId || name.length > 20) {
            return;
        }

        // 맵에 포켓몬이 없으면 기본 정보를 추가합니다.
        if (!pokemonMap.has(id)) {
            pokemonMap.set(id, {
                id,
                name,
                types: new Set(), // 중복 타입을 방지하기 위해 Set 사용
            });
        }

        // 3. 타입 추출
        // 현재 이미지가 포함된 셀(td)을 찾습니다.
        const $typeCell = $img.closest('td');
        
        // 셀에서 타입 정보를 추출합니다. (a 태그의 title 속성 우선)
        let type = $typeCell.find('a').attr('title') || $img.attr('alt') || '';
        type = type.replace(/\(포켓몬스터\)/g, '').replace(/타입/g, '').trim();

        if (type) {
            pokemonMap.get(id).types.add(type);
        }
    });

    // Map에서 최종 리스트를 생성합니다.
    const pokemonList = Array.from(pokemonMap.values()).map(p => ({
        ...p,
        types: Array.from(p.types) // Set을 Array로 변환
    }));

    // 번호 순으로 정렬합니다.
    pokemonList.sort((a, b) => a.id - b.id);

    // 추출한 데이터를 JSON 파일로 저장합니다.
    const outputPath = 'pokemon-wiki.json';
    fs.writeFileSync(outputPath, JSON.stringify(pokemonList, null, 2), 'utf-8');
    
    console.log(`성공! 총 ${pokemonList.length}마리의 포켓몬 데이터를 '${outputPath}' 파일에 저장했습니다.`);

  } catch (error) {
    console.error('데이터 스크래핑 중 오류가 발생했습니다:', error);
  }
}

// 스크래핑 함수 실행
scrapePokemonData();
