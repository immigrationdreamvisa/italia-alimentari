import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcImagesDir = path.resolve(__dirname, 'src/assets/images');
const targetDirs = [
  path.resolve(__dirname, 'public/src/assets/images'),
  path.resolve(__dirname, 'public/assets/images'),
  path.resolve(__dirname, 'public/images'),
];

if (fs.existsSync(srcImagesDir)) {
  for (const targetDir of targetDirs) {
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    const files = fs.readdirSync(srcImagesDir);
    for (const file of files) {
      const srcFile = path.join(srcImagesDir, file);
      const destFile = path.join(targetDir, file);
      if (fs.statSync(srcFile).isFile()) {
        fs.copyFileSync(srcFile, destFile);
      }
    }
  }
  console.log('✓ Successfully synced all images to public/ directories');
}

