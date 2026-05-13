import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const imagesDir = path.join(process.cwd(), 'src', 'assets', 'images');

async function generateMobileImages() {
  const files = fs.readdirSync(imagesDir);

  for (const file of files) {
    if (file.endsWith('.webp') && !file.endsWith('-mobile.webp')) {
      const inputPath = path.join(imagesDir, file);
      const stat = fs.statSync(inputPath);
      
      // If image is larger than 100KB, create a mobile version
      if (stat.size > 100000) {
        const outputFilename = `${path.basename(file, '.webp')}-mobile.webp`;
        const outputPath = path.join(imagesDir, outputFilename);

        if (!fs.existsSync(outputPath)) {
          console.log(`Generating mobile version for ${file}...`);
          try {
            await sharp(inputPath)
              .resize(600) // max width 600px for mobile
              .webp({ quality: 75, effort: 6 })
              .toFile(outputPath);
            console.log(`Successfully generated ${outputFilename}`);
          } catch (error) {
            console.error(`Failed to generate ${outputFilename}:`, error);
          }
        } else {
            console.log(`Skipping ${file}, mobile version already exists.`);
        }
      }
    }
  }
}

generateMobileImages();
