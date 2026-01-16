const fs = require('fs');

// 구글 시트 ID
const SPREADSHEET_ID = '1k1QfNi_DtKKBe6IG07Ol68P-SiKTGzwml36daXYn8jQ';

// 설정 파일 경로
const CONFIG_FILE = '지역도감_시트정보.json';

async function processDex(config, allPokemonData) {
  const { gid, name: targetName, key } = config;
  const safeKey = key.replace(/:/g, '-');
  const outputFileName = `pokemon-${safeKey}.json`;

  // CSV 내보내기 URL (gid 포함)
  const csvUrl = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/export?format=csv&gid=${gid}`;

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

    let name = row[nameColumnIndex].trim();
    if (!name) continue;

    // 이름에서 괄호 포함 내용 제거 (예: "디그다(알로라의 모습)" -> "디그다")
    // 매칭을 위해 원본 이름은 유지하고 처리된 이름을 사용
    const cleanName = name.replace(/\(.*\)/g, '').trim();

    const pokemon = allPokemonData.find(p => p.name === cleanName);
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
  console.log(`\n📊 [${targetName}] 분석 결과:`);
  console.log(`- 발견된 포켓몬: ${customPokemonList.length}마리`);
  console.log(`- 매칭 실패: ${notFoundNames.length}건`);

  if (notFoundNames.length > 0) {
    console.log(`⚠️ 매칭되지 않은 이름 (일부): ${notFoundNames.slice(0, 10).join(', ')}${notFoundNames.length > 10 ? '...' : ''}`);
  }

  fs.writeFileSync(outputFileName, JSON.stringify(customPokemonList, null, 2));
  console.log(`\n💾 파일 저장 완료: ${outputFileName}\n`);
}

async function main() {
  try {
    // 1. 기존 전국도감 데이터 로드
    if (!fs.existsSync('pokemon.json')) {
      console.error('❌ 오류: pokemon.json 파일이 없습니다. 먼저 load-data.js를 실행하여 데이터를 생성해주세요.');
      return;
    }

    console.log('📂 전국도감 데이터(pokemon.json) 로드 중...');
    const allPokemonData = JSON.parse(fs.readFileSync('pokemon.json', 'utf8'));
    console.log(`✅ 총 ${allPokemonData.length}마리의 포켓몬 데이터가 로드되었습니다.\n`);

    // 2. 설정 파일 로드
    if (!fs.existsSync(CONFIG_FILE)) {
      console.error(`❌ 오류: 설정 파일(${CONFIG_FILE})이 없습니다.`);
      return;
    }
    const dexConfigs = JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8'));

    // 3. 모든 도감 순차 처리
    for (const config of dexConfigs) {
      await processDex(config, allPokemonData);
    }

    console.log('🎉 모든 지역 도감 데이터 갱신이 완료되었습니다.');

  } catch (error) {
    console.error('❌ 오류 발생:', error.message);
  }
}

main();