// 필요한 라이브러리를 가져옵니다.
const cheerio = require('cheerio'); // HTML을 파싱하고 데이터를 추출하기 위한 라이브러리
const fs = require('fs'); // 파일 시스템에 접근하기 위한 Node.js 내장 모듈
const path = require('path'); // 파일 경로를 다루기 위한 Node.js 내장 모듈
const axios = require('axios'); // HTTP 요청을 보내기 위한 라이브러리

/**
 * 나무위키 URL에서 HTML을 가져와 이미지 정보와 포켓몬 이름을 추출하여 pokemon-wiki.json 파일을 새로 생성합니다.
 * rowspan으로 이름이 누락된 경우, 대표 항목의 이름을 가져와 채워줍니다.
 * 최종적으로 이름이 누락된 항목의 총 개수를 눈에 띄게 출력합니다.
 */
async function createWikiJson() {
  try {
    // --- 1. HTML 가져오기 (URL 크롤링) ---
    const url = 'https://namu.wiki/w/%ED%8F%AC%EC%BC%93%EB%AA%AC%EC%8A%A4%ED%84%B0(%ED%8F%AC%EC%BC%93%EB%AA%AC%EC%8A%A4%ED%84%B0)/%EB%AA%A9%EB%A1%9D/%EC%A0%84%EA%B5%AD%EB%8F%84%EA%B0%90';
    console.log(`데이터를 가져오는 중: ${url}`);
    
    // 나무위키 등은 User-Agent 헤더가 없으면 요청을 거부할 수 있으므로 헤더를 추가합니다.
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    
    const html = response.data;
    const $ = cheerio.load(html);

    // --- 2. 이미지 및 이름 정보 추출 ---
    const iconImages = $('img[alt^="icon"]');
    const imagesData = [];
    const nameCache = {}; // rowspan 처리를 위한 이름 캐시
    const missingNameIds = []; // 이름이 누락된 ID 목록

    iconImages.each((i, elem) => {
      const image = $(elem);
      const altText = image.attr('alt');
      const realSrc = image.attr('data-src');

      if (!realSrc) {
        return; // data-src가 없으면 건너뜁니다.
      }

      const baseId = altText.split(' ')[0]; // 'icon0386' 같은 베이스 ID 추출
      const imageTd = image.closest('td');
      const nameTd = imageTd.next('td');
      let monsterName = null;

      if (nameTd.length > 0) {
        const nameText = nameTd.text().trim();
        if (nameText && !nameText.includes('\n')) {
          monsterName = nameText.replace(/\[\d+\]/g, '').trim();
          if (monsterName) {
            nameCache[baseId] = monsterName;
          }
        }
      }
      
      if (monsterName === null && nameCache[baseId]) {
        monsterName = nameCache[baseId];
      }

      // ID 변환: 공백을 하이픈으로 변경
      const wikiId = altText.replace(/ /g, '-');

      if (monsterName === null) {
        missingNameIds.push(wikiId);
      }

      imagesData.push({
        "wiki-id": wikiId,
        name: monsterName
      });
    });

    // --- 3. 누락된 이름 개수 및 목록을 강조하여 출력 ---
    const red = '\x1b[31m';
    const yellow = '\x1b[33m';
    const reset = '\x1b[0m';

    console.log(`${yellow}========================================${reset}`);
    console.log(`${yellow}최종적으로 이름이 누락된 항목의 총 개수: ${red}${missingNameIds.length}${yellow}개${reset}`);
    if (missingNameIds.length > 0) {
      console.log(`${yellow}누락된 ID 목록: ${reset}`, missingNameIds);
    }
    console.log(`${yellow}========================================${reset}`);


    // --- 4. 새로운 JSON 객체 생성 ---
    const wikiData = {
      images: imagesData
    };

    // --- 5. 새로운 데이터로 JSON 파일 생성 (덮어쓰기) ---
    const jsonPath = path.join(__dirname, 'pokemon-wiki.json');
    const newJsonData = JSON.stringify(wikiData, null, 2);
    fs.writeFileSync(jsonPath, newJsonData, 'utf-8');

    console.log(`\n성공적으로 ${imagesData.length}개의 이미지 데이터로 ${jsonPath} 파일을 새로 생성했습니다.`);

  } catch (error) {
    console.error('작업 중 오류가 발생했습니다:', error);
  }
}

// 위키 JSON 생성 함수 실행
createWikiJson();
