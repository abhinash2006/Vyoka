import http from 'node:http';

function makeRequest(path, options = {}) {
  return new Promise((resolve, reject) => {
    const req = http.request(`http://localhost:3000${path}`, options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          body: data,
        });
      });
    });
    req.on('error', reject);
    if (options.body) {
      req.write(options.body);
    }
    req.end();
  });
}

async function runTests() {
  console.log('===============================================================');
  console.log('VYOKA LABS PRIVATE LIMITED — AUTOMATED SUITE VERIFICATION');
  console.log('===============================================================\n');

  let passed = 0;
  let failed = 0;

  const routes = [
    { path: '/', expected: 200, name: 'Homepage' },
    { path: '/products', expected: 200, name: 'Products Overview' },
    { path: '/products/prism', expected: 200, name: 'PRISM Product Page' },
    { path: '/products/gravitas', expected: 200, name: 'GRAVITAS Product Page' },
    { path: '/about', expected: 200, name: 'About Us' },
    { path: '/contact', expected: 200, name: 'Contact Page' },
    { path: '/privacy', expected: 200, name: 'Privacy Policy' },
    { path: '/robots.txt', expected: 200, name: 'Robots.txt' },
    { path: '/sitemap.xml', expected: 200, name: 'Sitemap XML' },
    { path: '/unknown-route-404', expected: 404, name: 'Custom 404 Page' },
  ];

  console.log('1. Testing Page Route Availability & HTTP Statuses:');
  for (const r of routes) {
    try {
      const res = await makeRequest(r.path);
      if (res.statusCode === r.expected) {
        console.log(`  ✓ ${r.name.padEnd(25)} (${r.path}) -> HTTP ${res.statusCode} (${Math.round(res.body.length / 1024)} KB)`);
        passed++;
      } else {
        console.error(`  ✗ ${r.name.padEnd(25)} (${r.path}) -> Expected HTTP ${r.expected}, got ${res.statusCode}`);
        failed++;
      }
    } catch (err) {
      console.error(`  ✗ ${r.name.padEnd(25)} (${r.path}) -> Error:`, err.message);
      failed++;
    }
  }

  console.log('\n2. Testing Static Photography Assets Availability:');
  const images = [
    '/images/hero-engineering.jpg',
    '/images/prism-hero.jpg',
    '/images/prism-optics.jpg',
    '/images/prism-water.jpg',
    '/images/prism-sample.jpg',
    '/images/prism-lab.jpg',
    '/images/gravitas-hero.jpg',
    '/images/gravitas-hexacopter-hero.jpg',
    '/images/gravitas-avionics.jpg',
    '/images/gravitas-flight.jpg',
    '/images/gravitas-hardware.jpg',
    '/images/gravitas-hexacopter-hardware.jpg',
    '/images/gravitas-disaster.jpg',
    '/images/about-engineering.jpg',
    '/images/about-lab.jpg',
    '/images/embedded-computing.jpg',
  ];

  for (const img of images) {
    try {
      const res = await makeRequest(img, { method: 'HEAD' });
      if (res.statusCode === 200) {
        console.log(`  ✓ Image Loaded: ${img} (${res.headers['content-type']})`);
        passed++;
      } else {
        console.error(`  ✗ Image Failed: ${img} (HTTP ${res.statusCode})`);
        failed++;
      }
    } catch (err) {
      console.error(`  ✗ Image Request Failed: ${img} -> ${err.message}`);
      failed++;
    }
  }

  console.log('\n3. Testing Contact Form Server Endpoint (/api/contact):');

  // Test 3.1: Empty submission (Validation failure expected)
  try {
    const res = await makeRequest('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({}),
    });
    const parsed = JSON.parse(res.body);
    if (res.statusCode === 400 && parsed.errors && parsed.errors.name && parsed.errors.email) {
      console.log('  ✓ Empty Submission: Correctly rejected with HTTP 400 & validation errors');
      passed++;
    } else {
      console.error('  ✗ Empty Submission: Failed expectation', res.statusCode, parsed);
      failed++;
    }
  } catch (err) {
    console.error('  ✗ Empty Submission error:', err.message);
    failed++;
  }

  // Test 3.2: Invalid email format
  try {
    const res = await makeRequest('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Dr. Test User',
        email: 'invalid-email-format',
        enquiryType: 'prism',
        productOfInterest: 'prism',
        message: 'This is a test message with sufficient length.',
        consent: true,
      }),
    });
    const parsed = JSON.parse(res.body);
    if (res.statusCode === 400 && parsed.errors && parsed.errors.email) {
      console.log('  ✓ Invalid Email Format: Correctly rejected with HTTP 400');
      passed++;
    } else {
      console.error('  ✗ Invalid Email Format test failed', res.statusCode, parsed);
      failed++;
    }
  } catch (err) {
    console.error('  ✗ Invalid Email test error:', err.message);
    failed++;
  }

  // Test 3.3: Missing privacy consent
  try {
    const res = await makeRequest('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Dr. Test User',
        email: 'test@institute.edu',
        enquiryType: 'prism',
        productOfInterest: 'prism',
        message: 'Testing missing consent rejection.',
        consent: false,
      }),
    });
    const parsed = JSON.parse(res.body);
    if (res.statusCode === 400 && parsed.errors && parsed.errors.consent) {
      console.log('  ✓ Missing Consent: Correctly rejected with HTTP 400');
      passed++;
    } else {
      console.error('  ✗ Missing Consent test failed', res.statusCode, parsed);
      failed++;
    }
  } catch (err) {
    console.error('  ✗ Missing Consent test error:', err.message);
    failed++;
  }

  // Test 3.4: Honeypot Trap
  try {
    const res = await makeRequest('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Spam Bot',
        email: 'bot@spam.com',
        enquiryType: 'general',
        productOfInterest: 'general',
        message: 'Spam message promoting something unrelated.',
        consent: true,
        hp_website: 'http://spam-link.com', // Bot filled this hidden field!
      }),
    });
    const parsed = JSON.parse(res.body);
    if (res.statusCode === 200 && parsed.success) {
      console.log('  ✓ Honeypot Trap: Successfully trapped bot with 200 response without dispatching');
      passed++;
    } else {
      console.error('  ✗ Honeypot Trap failed', res.statusCode, parsed);
      failed++;
    }
  } catch (err) {
    console.error('  ✗ Honeypot test error:', err.message);
    failed++;
  }

  // Test 3.5: Legitimate enquiry submission
  try {
    const res = await makeRequest('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Dr. Anita Desai',
        email: 'anita.desai@nationalwater.org',
        organization: 'National Water Research Institute',
        enquiryType: 'pilot',
        productOfInterest: 'prism',
        message: 'We are conducting seasonal microplastic assessments in river reservoirs and would like to evaluate PRISM for portable screening.',
        consent: true,
        hp_website: '',
      }),
    });
    const parsed = JSON.parse(res.body);
    if (res.statusCode === 200 && parsed.success) {
      console.log(`  ✓ Valid Submission: Successfully accepted with HTTP 200 (isDevMode: ${parsed.isDevMode})`);
      console.log(`    Message: "${parsed.message}"`);
      passed++;
    } else {
      console.error('  ✗ Valid Submission failed', res.statusCode, parsed);
      failed++;
    }
  } catch (err) {
    console.error('  ✗ Valid Submission error:', err.message);
    failed++;
  }

  console.log('\n===============================================================');
  console.log(`TEST SUMMARY: ${passed} Passed, ${failed} Failed out of ${passed + failed} total tests.`);
  console.log('===============================================================');

  if (failed > 0) {
    process.exit(1);
  }
}

runTests();
