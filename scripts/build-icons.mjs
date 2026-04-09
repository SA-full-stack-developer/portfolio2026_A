import { mkdirSync, readFileSync, writeFileSync } from 'fs';

import { join } from 'path';

const ICONS = [
  'laptop',
  'globe-hemisphere-west',
  'star',
  'coffee',
  'devices',
  'code-simple',
  'rocket-launch',
  'magnifying-glass-plus',
  'chalkboard-teacher',
  'users-three',
  'screencast',
  'arrow-fat-up',
  'arrow-fat-down',
  'arrow-clockwise',
  'list',
  'x-circle',
];

const input = 'node_modules/@phosphor-icons/core/assets/duotone';
const output = 'src/assets/icons';

mkdirSync(output, { recursive: true });

const symbols = ICONS.map((icon) => {
  const raw = readFileSync(join(input, `${icon}-duotone.svg`), 'utf8');
  const viewBox = raw.match(/viewBox="([^"]+)"/)?.[1] ?? '0 0 256 256';
  const inner = raw
    .replace(/<svg[^>]*>/, '')
    .replace('</svg>', '')
    .trim();
  return `  <symbol id="ph-${icon}" viewBox="${viewBox}">${inner}</symbol>`;
}).join('\n');

writeFileSync(
  join(output, 'sprite.svg'),
  `<svg xmlns="http://www.w3.org/2000/svg">\n${symbols}\n</svg>`,
);
