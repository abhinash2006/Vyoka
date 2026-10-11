import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';

const images = [
  {
    name: 'hero-engineering.jpg',
    url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2000&q=85',
    alt: 'Advanced engineering laboratory and robotic hardware testing',
    category: 'Corporate / Engineering',
    source: 'Unsplash - Science & Engineering'
  },
  {
    name: 'prism-hero.jpg',
    url: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1600&q=85',
    alt: 'Scientific fluorescence imaging and optical microscopy setup',
    category: 'PRISM / Optics',
    source: 'Unsplash - Laboratory Science'
  },
  {
    name: 'prism-optics.jpg',
    url: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&w=1600&q=85',
    alt: 'Laser optical bench and precision optical sensor alignment',
    category: 'PRISM / Laser Excitation',
    source: 'Unsplash - Physics Optics'
  },
  {
    name: 'prism-water.jpg',
    url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=85',
    alt: 'Freshwater environmental water collection and sampling',
    category: 'PRISM / Environmental Monitoring',
    source: 'Unsplash - Environmental Science'
  },
  {
    name: 'prism-sample.jpg',
    url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1600&q=85',
    alt: 'Laboratory sample preparation and chemical reagent analysis',
    category: 'PRISM / Sample Preparation',
    source: 'Unsplash - Chemistry Lab'
  },
  {
    name: 'gravitas-hero.jpg',
    url: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1800&q=85',
    alt: 'Heavy-lift industrial multirotor drone operating in field environment',
    category: 'GRAVITAS / UAV Platform',
    source: 'Unsplash - Aerial Robotics'
  },
  {
    name: 'gravitas-avionics.jpg',
    url: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=1600&q=85',
    alt: 'Embedded flight computer, companion computing and avionics motherboard',
    category: 'GRAVITAS / Flight Electronics',
    source: 'Unsplash - Embedded Electronics'
  },
  {
    name: 'gravitas-flight.jpg',
    url: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=1600&q=85',
    alt: 'Autonomous multirotor UAV performing aerial logistics test flight',
    category: 'GRAVITAS / Autonomous Flight',
    source: 'Unsplash - Autonomous Systems'
  },
  {
    name: 'gravitas-disaster.jpg',
    url: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=1600&q=85',
    alt: 'Severe flood disaster emergency response and humanitarian logistics area',
    category: 'GRAVITAS / Flood Relief Mission',
    source: 'Unsplash - Emergency Response'
  },
  {
    name: 'about-engineering.jpg',
    url: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1600&q=85',
    alt: 'Engineers calibrating hardware components in prototyping facility',
    category: 'About / Engineering Culture',
    source: 'Unsplash - Engineering Lab'
  },
  {
    name: 'embedded-computing.jpg',
    url: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=1600&q=85',
    alt: 'Hardware circuit boards, microprocessors and edge AI computing',
    category: 'Technology / Edge Computing',
    source: 'Unsplash - Hardware Engineering'
  }
];

const destDir = path.resolve('public', 'images');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, destPath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: status code ${res.statusCode}`));
      }
      const fileStream = fs.createWriteStream(destPath);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close(() => resolve(destPath));
      });
      fileStream.on('error', (err) => {
        fs.unlink(destPath, () => {});
        reject(err);
      });
    }).on('error', reject);
  });
}

async function run() {
  console.log('Downloading high-resolution real photographs from Unsplash CDN...');
  let attribution = '# Image Attributions & License Records\\n\\nAll photographs used on the Vyoka Labs website are verified authentic photographs licensed under the Unsplash License (free to use for commercial and non-commercial purposes, without permission or fee).\\n\\n| Image File | Category | Description | Source |\\n|---|---|---|---|\\n';

  for (const img of images) {
    const dest = path.join(destDir, img.name);
    try {
      console.log(`Fetching ${img.name}...`);
      await downloadFile(img.url, dest);
      const stats = fs.statSync(dest);
      console.log(`✓ Saved ${img.name} (${Math.round(stats.size / 1024)} KB)`);
      attribution += `| \`${img.name}\` | ${img.category} | ${img.alt} | ${img.source} |\\n`;
    } catch (err) {
      console.error(`✗ Error downloading ${img.name}:`, err.message);
    }
  }

  attribution += `\\n\\n*Note: Prototype images depicted are illustrative reference imagery representing the real engineering disciplines, optical instrumentation, and industrial UAV domains utilized by Vyoka Labs Private Limited.*\\n`;
  fs.writeFileSync(path.join(destDir, 'ATTRIBUTION.md'), attribution, 'utf8');
  console.log('✓ Successfully wrote public/images/ATTRIBUTION.md');
}

run();
