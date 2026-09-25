const fs = require('fs');
const https = require('https');
const path = require('path');

const cssUrl = 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap';
const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36';

const fontsDir = path.join(__dirname, 'public', 'fonts');

if (!fs.existsSync(fontsDir)) {
  fs.mkdirSync(fontsDir, { recursive: true });
}

function download(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': userAgent } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function downloadBinary(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      res.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  console.log('Fetching CSS...');
  let css = await download(cssUrl);
  
  const urlRegex = /url\((https:\/\/fonts\.gstatic\.com\/s\/[^)]+)\)/g;
  let match;
  
  const downloads = [];
  
  while ((match = urlRegex.exec(css)) !== null) {
    const fontUrl = match[1];
    const filename = fontUrl.split('/').pop();
    const destPath = path.join(fontsDir, filename);
    
    console.log(`Downloading ${filename}...`);
    downloads.push(downloadBinary(fontUrl, destPath));
    
    css = css.replace(fontUrl, `/fonts/${filename}`);
  }
  
  await Promise.all(downloads);
  
  fs.writeFileSync(path.join(fontsDir, 'fonts.css'), css);
  console.log('Fonts downloaded and CSS saved.');
}

run().catch(console.error);
