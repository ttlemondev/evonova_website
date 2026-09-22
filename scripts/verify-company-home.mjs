import assert from 'node:assert/strict';

// Run against an already running development or production server.
const base = process.argv[2] || 'http://127.0.0.1:3002';
const redirects = [
  ['/', '/en'],
  ['/zh', '/en'],
  ['/zh/', '/en'],
  ['/zh/x-worker', '/en#products'],
  ['/en/about', '/en#company'],
  ['/zh/contact?topic=xWorker', '/en?topic=xWorker#contact'],
  ['/services', '/en#approach'],
  ['/zh/courses/coding-basic', '/en#approach'],
];

for (const [path, destination] of redirects) {
  const response = await fetch(`${base}${path}`, { redirect: 'manual' });
  assert.ok([307, 308].includes(response.status), `${path}: expected redirect`);
  const actual = new URL(response.headers.get('location'), base);
  // Next.js may first normalize a trailing slash; follow that single redirect.
  if (path === '/zh/' && actual.pathname === '/zh') {
    const normalized = await fetch(actual, { redirect: 'manual' });
    assert.equal(new URL(normalized.headers.get('location'), base).href, `${base}${destination}`);
  } else {
    assert.equal(actual.href, `${base}${destination}`);
  }
  console.log(`PASS ${path} -> ${destination}`);
}

const response = await fetch(`${base}/en`, { headers: { 'Accept-Language': 'zh-CN,zh;q=0.9' } });
assert.equal(response.status, 200);
const html = await response.text();
assert.match(html, /<html lang="en"/);
assert.equal((html.match(/<html(?:\s|>)/g) || []).length, 1, 'One root html element');
assert.equal((html.match(/<body(?:\s|>)/g) || []).length, 1, 'One root body element');
for (const text of ['Intelligence,', 'made everyday.', 'PokeVid', 'iPulse', 'mailto:contact@topfx.top', 'tel:+658287709']) {
  assert.ok(html.includes(text), `Missing ${text}`);
}
for (const id of ['products', 'pokevid', 'ipulse', 'approach', 'company', 'contact']) {
  assert.ok(html.includes(`id="${id}"`), `Missing section ${id}`);
}
console.log('PASS English page, document structure, section targets and preserved contact links');
