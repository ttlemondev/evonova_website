// Original parametric artwork; no stock imagery or runtime graphics dependency.
import { writeFileSync } from 'node:fs';

const TAU = Math.PI * 2;
function point(u, v) {
  const r = 67 + 13 * Math.cos(3 * u);
  const radius = 179 + 14 * Math.sin(3 * u) + r * Math.cos(v);
  const x = radius * Math.cos(u);
  const y = radius * Math.sin(u);
  const z = r * Math.sin(v) + 32 * Math.sin(2 * u);
  const tilt = .92;
  const yy = y * Math.cos(tilt) - z * Math.sin(tilt);
  const zz = y * Math.sin(tilt) + z * Math.cos(tilt);
  const turn = -.48;
  return { x: (x * Math.cos(turn) - yy * Math.sin(turn)) * 1.48 + 844,
    y: (x * Math.sin(turn) + yy * Math.cos(turn)) * 1.48 + 252, z: zz };
}
const faces = [];
for (let i = 0; i < 170; i++) {
  for (let j = 0; j < 30; j++) {
    const u = i / 170 * TAU, v = j / 30 * TAU;
    const points = [point(u, v), point(u + TAU / 170, v), point(u + TAU / 170, v + TAU / 30), point(u, v + TAU / 30)];
    const light = (Math.sin(v + .8) * .65 + Math.cos(u + 1.2) * .35 + 1) / 2;
    const luminance = 24 + 53 * light;
    const color = `hsl(${218 + 7 * Math.sin(u)}, ${75 + light * 12}%, ${luminance}%)`;
    const path = points.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
    faces.push({ depth: points.reduce((sum, p) => sum + p.z, 0), svg: `<polygon points="${path}" fill="${color}" stroke="${color}" stroke-width=".5"/>` });
  }
}
faces.sort((a,b) => a.depth - b.depth);
const ribs = [];
for (let i = 0; i < 170; i++) {
  const u = i / 170 * TAU;
  const points = Array.from({ length: 70 }, (_, j) => point(u, j / 69 * TAU));
  // Only draw the near-facing arc, keeping the rear surface occluded.
  const front = points.filter(p => p.z > 20);
  if (front.length > 2) ribs.push(`<polyline points="${front.map(p=>`${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ')}" fill="none" stroke="#c7e3ff" stroke-opacity=".22" stroke-width=".65"/>`);
}
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="550" viewBox="0 0 1280 550"><defs><linearGradient id="bg" x2="1" y2="1"><stop stop-color="#edf2fc"/><stop offset="1" stop-color="#dce7fa"/></linearGradient><filter id="blur"><feGaussianBlur stdDeviation="22"/></filter></defs><path fill="url(#bg)" d="M0 0h1280v550H0z"/><ellipse cx="864" cy="447" rx="245" ry="22" fill="#416dc5" opacity=".13" filter="url(#blur)"/>${faces.map(f=>f.svg).join('')}${ribs.join('')}</svg>`;
writeFileSync(new URL('../public/images/intelligence-form.svg', import.meta.url), svg);
const mobileSvg = svg.replace('width="1280" height="550" viewBox="0 0 1280 550"', 'width="780" height="1050" viewBox="340 -540 780 1050"').replace('M0 0h1280v550H0z', 'M0 -800h1500v2100H0z');
writeFileSync(new URL('../public/images/intelligence-form-mobile.svg', import.meta.url), mobileSvg);
