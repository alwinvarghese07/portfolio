import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const imagesDir = path.join(process.cwd(), 'src', 'assets', 'images');

async function convertImages() {
  const files = fs.readdirSync(imagesDir);

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
      const inputPath = path.join(imagesDir, file);
      const outputFilename = `${path.basename(file, path.extname(file))}.webp`;
      const outputPath = path.join(imagesDir, outputFilename);

      // Skip if WebP already exists
      if (!fs.existsSync(outputPath)) {
        console.log(`Converting ${file} to ${outputFilename}...`);
        try {
          await sharp(inputPath)
            .webp({ quality: 80, effort: 6 }) // effort 6 for better compression
            .toFile(outputPath);
          console.log(`Successfully converted ${file}`);
        } catch (error) {
          console.error(`Failed to convert ${file}:`, error);
        }
      } else {
        console.log(`Skipping ${file}, WebP already exists.`);
      }
    }
  }
}

convertImages();
