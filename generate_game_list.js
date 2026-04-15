const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname);
const entries = fs.readdirSync(root, { withFileTypes: true })
  .filter(entry => entry.isDirectory())
  .map(entry => entry.name)
  .sort((a, b) => a.localeCompare(b, 'en', { numeric: true, sensitivity: 'base' }));

const outputPath = path.join(root, 'games.json');
fs.writeFileSync(outputPath, JSON.stringify(entries, null, 2), 'utf8');
console.log(`Generated ${entries.length} games into ${outputPath}`);
