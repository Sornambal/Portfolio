const fs = require('fs');
const p = require('path');
const d = './src/components';
const fsArr = fs.readdirSync(d).filter(f => f.endsWith('.js')).map(f => p.join(d, f));

for (const file of fsArr) {
  let c = fs.readFileSync(file, 'utf8');
  
  // Clean up dangling 'icon: ,'
  c = c.replace(/icon:\s*,/g, '');
  
  // Clean up dangling 'icon: ' before newlines
  c = c.replace(/icon:\s*(\r?\n)/g, '$1');

  // Any left over empty attributes?
  
  fs.writeFileSync(file, c);
  console.log('Fixed', file);
}
