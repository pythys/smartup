const fs = require('fs');
const path = require('path');

const filesToCopy = [
  { src: 'node_modules/blueimp-md5/js/md5.min.js', dest: 'vendor/md5.min.js' },
  { src: 'node_modules/dompurify/dist/purify.min.js', dest: 'vendor/purify.min.js' },
  { src: 'node_modules/gbk.js/dist/gbk.min.js', dest: 'vendor/gbk.min.js' },
  { src: 'node_modules/js-base64/base64.js', dest: 'vendor/base64.js' },
  { src: 'node_modules/sortablejs/Sortable.min.js', dest: 'vendor/Sortable.min.js' },
];

filesToCopy.forEach(file => {
  const destDir = path.dirname(file.dest);
  fs.mkdirSync(destDir, { recursive: true });
  fs.copyFileSync(file.src, file.dest);
});
