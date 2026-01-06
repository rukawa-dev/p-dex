const fs = require('fs');

// 구글 시트 ID
const SPREADSHEET_ID = '1k1QfNi_DtKKBe6IG07Ol68P-SiKTGzwml36daXYn8jQ';

// 도감별 설정 (GID 및 파일명)
const DEX_CONFIG = {
  'za': {
    gid: '0',
    name: 'ZA 도감',
    output: 'pokemon-za.json'
  },
  'za:dlc': {
    gid: '1623373325',
    name: 'ZA DLC 도감',
    output: 'pokemon-za-dlc.json'
  },
  'paldea': {
    gid: '1321757419',
    name: '팔데아 도감',
    output: 'pokemon-paldea.json'
  }
};

async function main() {
  try {
    // 실행 인자 확인
    const args = process.argv.slice(2);
    const dexKey = args[0] || 'za'; // 기본값은 'za'

    const config = DEX_CONFIG[dexKey];
    if (!config) {
      console.error(`❌ 오류: 알 수 없는 도감 키입니다: '${dexKey}'`);
      console.error(`사용 가능한 키: ${Object.keys(DEX_CONFIG).join(', ')}`);
      return;
    }

    const { gid, name: targetName, output: outputFileName } = config;
    
    // CSV 내보내기 URL (gid 포함)
    const csvUrl = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/export?format=csv&gid=${gid}`;

    // 1. 기존 전국도감 데이터 로드
    if (!fs.existsSync('pokemon.json')) {
      console.error('❌ 오류: pokemon.json 파일이 없습니다. 먼저 load-data.js를 실행하여 데이터를 생성해주세요.');
      return;
    }
    
    console.log('📂 전국도감 데이터(pokemon.json) 로드 중...');
    const allPokemonData = JSON.parse(fs.readFileSync('pokemon.json', 'utf8'));
    console.log(`✅ 총 ${allPokemonData.length}마리의 포켓몬 데이터가 로드되었습니다.`);

    // 2. 구글 시트 데이터 가져오기
    console.log(`🌐 구글 시트에서 [${targetName}] 목록을 가져오는 중... (GID: ${gid})`);
    const response = await fetch(csvUrl);
    if (!response.ok) {
      throw new Error(`구글 시트 요청 실패: ${response.status} ${response.statusText}`);
    }
    const csvText = await response.text();
    const lines = csvText.split(/\r?\n/); // 줄바꿈 처리

    if (lines.length < 2) {
      throw new Error('CSV 데이터가 비어있거나 형식이 올바르지 않습니다.');
    }

    // 3. 포켓몬 이름이 있는 컬럼 찾기 (스마트 감지)
    console.log('🔍 포켓몬 이름 컬럼 분석 중...');
    let nameColumnIndex = -1;
    let maxMatches = 0;
    
    // 헤더를 제외한 앞부분 20줄을 샘플로 사용하여 매칭 테스트
    const sampleSize = Math.min(lines.length, 20);
    // 첫 줄(헤더)을 콤마로 분리하여 열 개수 파악
    const columnCount = lines[0].split(',').length;

    for (let col = 0; col < columnCount; col++) {
      let matches = 0;
      for (let i = 1; i < sampleSize; i++) {
        const row = lines[i].split(','); // 간단한 CSV 파싱
        if (row[col]) {
          const cellValue = row[col].trim();
          // 전국도감 데이터에 있는 이름인지 확인
          if (allPokemonData.some(p => p.name === cellValue)) {
            matches++;
          }
        }
      }
      
      if (matches > maxMatches) {
        maxMatches = matches;
        nameColumnIndex = col;
      }
    }

    if (nameColumnIndex === -1) {
      throw new Error('포켓몬 이름이 포함된 컬럼을 찾을 수 없습니다. 시트 내용을 확인해주세요.');
    }
    
    console.log(`✅ 포켓몬 이름 컬럼 발견: ${nameColumnIndex + 1}번째 열 (매칭률: ${maxMatches}건)`);

    // 4. 데이터 추출 및 매칭
    const customPokemonList = [];
    const notFoundNames = [];
    const addedIds = new Set(); // 중복 방지용

    for (let i = 1; i < lines.length; i++) {
      const row = lines[i].split(',');
      // 행 데이터가 부족하면 건너뜀
      if (row.length <= nameColumnIndex) continue;

      const name = row[nameColumnIndex].trim();
      if (!name) continue;

      const pokemon = allPokemonData.find(p => p.name === name);
      if (pokemon) {
        if (!addedIds.has(pokemon.id)) {
          customPokemonList.push(pokemon);
          addedIds.add(pokemon.id);
        }
      } else {
        // 헤더나 빈 줄이 아닌 실제 데이터인데 못 찾은 경우만 기록
        // (이름이 '이름', 'Name' 등이거나 너무 짧은 경우는 제외)
        if (name.length > 1 && name !== '이름' && name !== 'Name' && name !== 'Pokemon') {
            notFoundNames.push(name);
        }
      }
    }

    // 5. 결과 저장
    console.log(`\n📊 분석 결과:`);
    console.log(`- 발견된 포켓몬: ${customPokemonList.length}마리`);
    console.log(`- 매칭 실패: ${notFoundNames.length}건`);
    
    if (notFoundNames.length > 0) {
      console.log(`⚠️ 매칭되지 않은 이름 (일부): ${notFoundNames.slice(0, 10).join(', ')}${notFoundNames.length > 10 ? '...' : ''}`);
    }

    fs.writeFileSync(outputFileName, JSON.stringify(customPokemonList, null, 2));
    console.log(`\n💾 파일 저장 완료: ${outputFileName}`);

  } catch (error) {
    console.error('❌ 오류 발생:', error.message);
  }
}

main();