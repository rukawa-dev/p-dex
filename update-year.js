const fs = require('fs');
const path = require('path');

const readmePath = path.join(__dirname, 'README.md');
const currentYear = new Date().getFullYear();

try {
  let content = fs.readFileSync(readmePath, 'utf8');
  
  // 1. __YEAR__ placeholder 교체
  content = content.replace(/__YEAR__/g, currentYear);

  // 2. Copyright 연도 패턴 교체 (예: Copyright © 2023 -> Copyright © 2024)
  // 이미 현재 연도라면 변경되지 않음
  content = content.replace(/Copyright © \d{4}/g, `Copyright © ${currentYear}`);

  // 3. 면책 조항 연도 패턴 교체 (예: 1995-2023 -> 1995-2024)
  content = content.replace(/1995-\d{4}/g, `1995-${currentYear}`);

  fs.writeFileSync(readmePath, content, 'utf8');
  console.log(`README.md has been updated with the year ${currentYear}.`);

} catch (error) {
  console.error('Error updating README.md:', error);
  process.exit(1);
}
