import fs from 'fs';
import path from 'path';

const srcDir = path.join(process.cwd(), 'src');

function findAndReplaceFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      findAndReplaceFiles(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Replace import statements targeting images
      const originalContent = content;
      content = content.replace(/import\s+.*?\s+from\s+['"](.*?\.(png|jpg|jpeg))['"]/g, (match, p1) => {
        const webpPath = p1.replace(/\.(png|jpg|jpeg)$/, '.webp');
        return match.replace(p1, webpPath);
      });

      // Also replace any direct string usages of .png or .jpg in src strings if any exist in the code
      content = content.replace(/['"](.*?\.(png|jpg|jpeg))['"]/g, (match, p1) => {
         if (p1.includes('assets/images')) {
            const webpPath = p1.replace(/\.(png|jpg|jpeg)$/, '.webp');
            return match.replace(p1, webpPath);
         }
         return match;
      });

      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated imports in ${fullPath}`);
      }
    }
  }
}

findAndReplaceFiles(srcDir);
