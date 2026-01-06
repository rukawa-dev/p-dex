// 필요한 라이브러리를 가져옵니다.
const cheerio = require('cheerio'); // HTML을 파싱하고 데이터를 추출하기 위한 라이브러리
const fs = require('fs'); // 파일 시스템에 접근하기 위한 Node.js 내장 모듈
const path = require('path'); // 파일 경로를 다루기 위한 Node.js 내장 모듈

/**
 * 로컬 HTML 파일에서 이미지 정보와 포켓몬 이름을 추출하여 pokemon-wiki.json 파일을 새로 생성합니다.
 * 이름 추출에 실패한 경우 해당 ID를 콘솔에 출력합니다.
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
    console.log("이름이 누락된 항목의 ID:");

    iconImages.each((i, elem) => {
      const image = $(elem);
      const altText = image.attr('alt');
      const realSrc = image.attr('data-src');

      if (!realSrc) {
        return; // data-src가 없으면 건너뜁니다.
      }

      const imageTd = image.closest('td');
      const nameTd = imageTd.next('td');
      let monsterName = null;

      if (nameTd.length > 0) {
        const nameText = nameTd.text().trim();
        
        // 텍스트가 한 줄인 경우에만 이름으로 간주
        if (nameText && !nameText.includes('\n')) {
          // 이름에서 대괄호와 숫자(각주)를 제거하여 정제
          monsterName = nameText.replace(/\[\d+\]/g, '').trim();
        }
      }
      
      // 이름 추출에 실패한 경우(monsterName이 null인 경우) ID를 콘솔에 출력
      if (monsterName === null) {
        console.log(altText);
      }

      imagesData.push({
        id: altText,
        src: realSrc,
        name: monsterName
      });
    });

    // --- 3. 새로운 JSON 객체 생성 ---
    const wikiData = {
      images: imagesData
    };

    // --- 4. 새로운 데이터로 JSON 파일 생성 (덮어쓰기) ---
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
