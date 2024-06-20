const fs = require('fs');
const path = require('path');

const filesToCopy = [
  { src: 'node_modules/js-base64/base64.js', dest: 'vendor/base64.js' },
  { src: 'node_modules/sortablejs/Sortable.min.js', dest: 'vendor/Sortable.min.js' },
];

filesToCopy.forEach(file => {
  const destDir = path.dirname(file.dest);
  fs.mkdirSync(destDir, { recursive: true });
  fs.copyFileSync(file.src, file.dest);
});
