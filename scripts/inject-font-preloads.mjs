import { readFileSync, readdirSync, writeFileSync } from 'node:fs';

import { join } from 'node:path';

const browserDist = 'dist/portfolio/browser';
const indexPath = join(browserDist, 'index.html');

const interFonts = readdirSync(join(browserDist, 'media')).filter(
  (f) => f.startsWith('inter-latin-') && f.endsWith('.woff2'),
);

const criticalWeights = ['400', '500', '700'];
const criticalFonts = interFonts.filter((f) =>
  criticalWeights.some((w) => f.includes(`-${w}-normal-`)),
);

const materialIconPreload = `  <link rel="preload" as="font" type="font/woff2" crossorigin="anonymous" href="/assets/fonts/material-icons.woff2">`;

const preloadTags = [
  ...criticalFonts.map(
    (f) =>
      `  <link rel="preload" as="font" type="font/woff2" crossorigin="anonymous" href="/media/${f}">`,
  ),
  materialIconPreload,
].join('\n');

let html = readFileSync(indexPath, 'utf-8');
html = html.replace(/(<head[^>]*>)/i, `$1\n${preloadTags}`);
writeFileSync(indexPath, html);

console.log(
  `Injected ${criticalFonts.length} Inter fonts + Material Icons preload into index.html`,
);
