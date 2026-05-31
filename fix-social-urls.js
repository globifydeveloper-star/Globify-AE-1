const fs = require('fs');
const path = require('path');

// Recursively find all .tsx and .ts files under src/
function findFiles(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      findFiles(fullPath, files);
    } else if (entry.isFile() && (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts'))) {
      files.push(fullPath);
    }
  }
  return files;
}

const SRC_DIR = path.join(__dirname, 'src');
const files = findFiles(SRC_DIR);

let updatedCount = 0;

for (const file of files) {
  // Read as UTF-8 explicitly
  const original = fs.readFileSync(file, 'utf8');
  let content = original;

  // Fix 1: LinkedIn URL (only if not already corrected — negative lookahead for dash)
  content = content.replace(
    /https:\/\/www\.linkedin\.com\/company\/globify(?!-)/g,
    'https://www.linkedin.com/company/globify-software-solutions-pvt-ltd'
  );

  // Fix 2: Instagram URL (only if not already corrected — negative lookahead for underscore)
  content = content.replace(
    /https:\/\/www\.instagram\.com\/globify(?!_)/g,
    'https://www.instagram.com/globify_software_solutions'
  );

  // Fix 3: Add YouTube after Instagram in sameAs arrays (only if not already present in file)
  if (!content.includes('youtube.com/@GlobifyCorp')) {
    content = content.replace(
      /("https:\/\/www\.instagram\.com\/globify_software_solutions")/g,
      '$1, "https://www.youtube.com/@GlobifyCorp"'
    );
  }

  // Fix 4: Add Facebook after YouTube in sameAs arrays (only if not already present in file)
  if (!content.includes('facebook.com/globifydigital')) {
    content = content.replace(
      /("https:\/\/www\.youtube\.com\/@GlobifyCorp")/g,
      '$1, "https://www.facebook.com/globifydigital"'
    );
  }

  if (content !== original) {
    // Write as UTF-8 without BOM — Node's default 'utf8' encoding does NOT add a BOM
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated:', path.relative(__dirname, file));
    updatedCount++;
  }
}

console.log(`\nDone. ${updatedCount} files updated.`);