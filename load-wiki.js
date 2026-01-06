// 필요한 라이브러리를 가져옵니다.
const cheerio = require('cheerio'); // HTML을 파싱하고 데이터를 추출하기 위한 라이브러리
const fs = require('fs'); // 파일 시스템에 접근하기 위한 Node.js 내장 모듈
const path = require('path'); // 파일 경로를 다루기 위한 Node.js 내장 모듈

/**
 * 로컬 HTML 파일에서 이미지 정보와 포켓몬 이름을 추출하여 pokemon-wiki.json 파일을 새로 생성합니다.
 * rowspan으로 이름이 누락된 경우, 대표 항목의 이름을 가져와 채워줍니다.
 * 최종적으로 이름이 누락된 항목의 총 개수를 눈에 띄게 출력합니다.
 */
function createWikiJson() {
  try {
    // --- 1. HTML 파일 읽기 ---
    const htmlPath = path.join(__dirname, 'crawling', 'namu-wiki-dump.html');
    if (!fs.existsSync(htmlPath)) {
      console.error(`오류: ${htmlPath} 파일을 찾을 수 없습니다.`);
      return;
    }
    const html = fs.readFileSync(htmlPath, 'utf-8');
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

      if (monsterName === null) {
        missingNameIds.push(altText);
      }

      imagesData.push({
        id: altText,
        src: realSrc,
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
