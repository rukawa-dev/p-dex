// 필요한 라이브러리를 가져옵니다.
const cheerio = require('cheerio'); // HTML을 파싱하고 데이터를 추출하기 위한 라이브러리
const fs = require('fs'); // 파일 시스템에 접근하기 위한 Node.js 내장 모듈
const path = require('path'); // 파일 경로를 다루기 위한 Node.js 내장 모듈

/**
 * 로컬 HTML 파일에서 'alt' 속성이 'icon'으로 시작하는 이미지의 총 개수를 셉니다.
 */
function countIconImages() {
  try {
    // 1. 로컬 HTML 파일 읽기
    const htmlPath = path.join(__dirname, 'crawling', 'namu-wiki-dump.html');
    if (!fs.existsSync(htmlPath)) {
      console.error(`오류: ${htmlPath} 파일을 찾을 수 없습니다.`);
      return;
    }
    const html = fs.readFileSync(htmlPath, 'utf-8');
    const $ = cheerio.load(html);

    // 2. 'alt' 속성이 'icon'으로 시작하는 모든 <img> 태그를 찾습니다.
    const iconImages = $('img[alt^="icon"]');
    const imageCount = iconImages.length;

    console.log(`'alt' 속성이 'icon'으로 시작하는 <img> 태그의 총 개수: ${imageCount}개`);

  } catch (error) {
    console.error('HTML 분석 중 오류가 발생했습니다:', error);
  }
}

// 이미지 개수 세는 함수 실행
countIconImages();
