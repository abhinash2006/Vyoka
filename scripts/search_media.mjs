import https from 'node:https';

async function searchCommons(query, limit = 8) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=${encodeURIComponent(query)}&gsrlimit=${limit}&prop=imageinfo&iiprop=url|mime|size|extmetadata&format=json`;

  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'VyokaLabsBot/1.0 (contact@vyokalabs.com)' } }, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (!json.query || !json.query.pages) return resolve([]);
          const results = [];
          for (const page of Object.values(json.query.pages)) {
            if (page.imageinfo && page.imageinfo[0]) {
              const info = page.imageinfo[0];
              const meta = info.extmetadata || {};
              results.push({
                title: page.title,
                url: info.url,
                mime: info.mime,
                width: info.width,
                height: info.height,
                size: info.size,
                description: meta.ImageDescription ? meta.ImageDescription.value.replace(/<[^>]+>/g, '').slice(0, 150) : '',
                license: meta.LicenseShortName ? meta.LicenseShortName.value : 'Public Domain / CC',
              });
            }
          }
          resolve(results);
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function run() {
  const searches = [
    'drone engineering',
    'drone workshop',
    'drone building',
    'UAS test',
    'quadcopter test flight',
    'optical spectrometer laboratory',
    'fluorescence microscope laboratory',
  ];

  for (const q of searches) {
    console.log(`\n=== SEARCH: "${q}" ===`);
    const results = await searchCommons(q, 5);
    for (const r of results) {
      if (r.mime === 'image/jpeg' || r.mime === 'image/png') {
        console.log(`- ${r.title}`);
        console.log(`  Size: ${r.width}x${r.height} (${Math.round(r.size/1024)} KB) | Lic: ${r.license}`);
        console.log(`  Desc: ${r.description}`);
        console.log(`  URL: ${r.url}`);
      }
    }
  }
}

run();
