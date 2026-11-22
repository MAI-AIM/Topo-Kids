const fs = require('fs');
const vm = require('vm');
const path = require('path');

const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

// 1. Check inline <script> blocks syntax
const scripts = [...html.matchAll(/<script(?:\s+[^>]*)?>([\s\S]*?)<\/script>/gi)];
scripts.forEach((m, idx) => {
  const code = m[1].trim();
  if (code) {
    new Function(code);
  }
});
console.log('✓ Inline script syntax OK');

// 2. Load and validate data files in a shared VM context
const sandbox = {};
vm.createContext(sandbox);
for (const file of ['data/wateren.js', 'data/groningen.js', 'data/friesland.js', 'data/tips.js']) {
  const code = fs.readFileSync(path.join(root, file), 'utf8')
    .replace(/\bconst\s+/g, 'var ');
  vm.runInContext(code, sandbox, { filename: file });
}

function validateDataset(name, arr, expectedCount) {
  if (!Array.isArray(arr) || arr.length !== expectedCount) {
    throw new Error(`${name}: expected ${expectedCount} items, got ${arr ? arr.length : 0}`);
  }
  const ids = new Set();
  for (const item of arr) {
    if (ids.has(item.id)) throw new Error(`${name}: duplicate id ${item.id}`);
    ids.add(item.id);
    if (!item.name || !item.code) throw new Error(`${name}: missing name/code on ${item.id}`);
    if (typeof item.lng !== 'number' || typeof item.lat !== 'number') {
      throw new Error(`${name}: invalid coords on ${item.id}`);
    }
  }
  console.log(`✓ ${name}: ${arr.length} items validated`);
}

validateDataset('WATERS_DATA', sandbox.WATERS_DATA, 17);
validateDataset('GRONINGEN_DATA', sandbox.GRONINGEN_DATA, 22);
validateDataset('FRIESLAND_DATA', sandbox.FRIESLAND_DATA, 22);

// 3. Validate sw.js syntax and manifest.json
new Function(fs.readFileSync(path.join(root, 'sw.js'), 'utf8'));
JSON.parse(fs.readFileSync(path.join(root, 'manifest.json'), 'utf8'));
console.log('✓ sw.js and manifest.json valid');

// 4. Verify static getElementById references exist in HTML
const idMatches = [...html.matchAll(/document\.getElementById\(['"]([A-Za-z0-9_-]+)['"]\)/g)];
const missingIds = new Set();
for (const m of idMatches) {
  const id = m[1];
  if (!html.includes(`id="${id}"`) && !html.includes(`id='${id}'`)) {
    missingIds.add(id);
  }
}
if (missingIds.size > 0) {
  throw new Error('Missing DOM IDs referenced in JS: ' + [...missingIds].join(', '));
}
console.log(`✓ All ${idMatches.length} static getElementById references exist in HTML`);
