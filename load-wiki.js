// 필요한 라이브러리를 가져옵니다.
const cheerio = require('cheerio'); // HTML을 파싱하고 데이터를 추출하기 위한 라이브러리
const fs = require('fs'); // 파일 시스템에 접근하기 위한 Node.js 내장 모듈
const path = require('path'); // 파일 경로를 다루기 위한 Node.js 내장 모듈

/**
 * 로컬 HTML 파일에서 이미지 정보와 포켓몬 이름을 추출하여 pokemon-wiki.json 파일을 새로 생성합니다.
 * <td>의 순수 텍스트를 기반으로 이름을 추출합니다.
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
    console.log("이름 추출이 복잡한 경우(name은 null로 저장됩니다):");

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
        
        // 텍스트에 줄바꿈이 없으면 단일 이름으로 간주
        if (nameText && !nameText.includes('\n')) {
          monsterName = nameText;
        } else {
          // 텍스트가 비어있거나 줄바꿈이 포함된 복잡한 경우, 콘솔에 출력
          console.log(`- ${altText}의 이름 TD: ${nameTd.html()}`);
        }
      }
      
      // 이름 추출 여부와 관계없이 모든 항목을 추가
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
