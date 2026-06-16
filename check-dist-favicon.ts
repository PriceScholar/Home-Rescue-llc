import fs from 'fs';
import path from 'path';

const distPath = path.join(process.cwd(), 'dist', 'favicon.png');
if (fs.existsSync(distPath)) {
  const buf = fs.readFileSync(distPath);
  console.log('dist/favicon.png size:', buf.length);
  console.log('dist/favicon.png magic bytes:', buf.slice(0, 8).toString('hex'));
} else {
  console.log('dist/favicon.png does not exist');
}
