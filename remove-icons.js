const fs = require('fs');
const p = require('path');
const d = './src/components';
const fsArr = fs.readdirSync(d).filter(f => f.endsWith('.js')).map(f => p.join(d, f));

for (const file of fsArr) {
  let c = fs.readFileSync(file, 'utf8');
  
  if (file.includes('Navbar.js')) {
    c = c.replace('<X size={24} />', '<span>✕</span>');
    c = c.replace('<Menu size={24} />', '<span>☰</span>');
  }
  
  const match = c.match(/import\s+\{([^}]+)\}\s+from\s+['"]lucide-react['"];?\n?/);
  if (match) {
    const icons = match[1].split(',').map(s => s.trim());
    c = c.replace(match[0], '');
    for (const icon of icons) {
      const regex = new RegExp('<' + icon + '\\b[^>]*\\/>', 'g');
      c = c.replace(regex, '');
    }
    fs.writeFileSync(file, c);
    console.log('Processed', file);
  }
}
