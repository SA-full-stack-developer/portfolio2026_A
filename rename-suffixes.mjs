// scripts/rename-suffixes.mjs

import { globSync } from 'glob';
import fs from 'node:fs';
import path from 'node:path';
import { Project } from 'ts-morph';

const SUFFIXES = [
  'component',
  'service',
  'directive',
  'guard',
  'pipe',
  'interceptor',
  'resolver',
  'module',
  'mock',
  'config',
  'constants',
  'model',
  'util',
];
const TS_SUFFIX_RE = new RegExp(`\\.(${SUFFIXES.join('|')})\\.(ts)$`);
const SPEC_SUFFIX_RE = new RegExp(`\\.(${SUFFIXES.join('|')})\\.(spec\\.ts)$`);
const ASSET_SUFFIX_RE = new RegExp(`\\.(${SUFFIXES.join('|')})\\.(html|scss)$`);

function newNameFor(fileName) {
  if (SPEC_SUFFIX_RE.test(fileName)) return fileName.replace(SPEC_SUFFIX_RE, '.$2');
  if (TS_SUFFIX_RE.test(fileName)) return fileName.replace(TS_SUFFIX_RE, '.$2');
  if (ASSET_SUFFIX_RE.test(fileName)) return fileName.replace(ASSET_SUFFIX_RE, '.$2');
  return fileName;
}

const project = new Project({ tsConfigFilePath: 'tsconfig.base.json' }); // ajusta si el root real es otro

const roots = ['apps/portfolio/src/app', 'apps/lab001/src/app'];
const renamedAssets = []; // { oldName, newName } para la Fase 2

for (const root of roots) {
  const files = globSync(`${root}/**/*.{ts,html,scss}`);
  for (const filePath of files) {
    const fileName = path.basename(filePath);
    const newName = newNameFor(fileName);
    if (newName === fileName) continue;

    const dir = path.dirname(filePath);
    const newPath = path.join(dir, newName);

    if (fileName.endsWith('.ts')) {
      const sourceFile = project.addSourceFileAtPathIfExists(filePath);
      if (sourceFile) {
        sourceFile.move(newPath); // reescribe imports relativos solo
        console.log(`[ts]   ${filePath} -> ${newPath}`);
      }
    } else {
      fs.renameSync(filePath, newPath);
      renamedAssets.push({ oldName: fileName, newName });
      console.log(`[asset] ${filePath} -> ${newPath}`);
    }
  }
}

await project.save();
fs.writeFileSync('renamed-assets.json', JSON.stringify(renamedAssets, null, 2));
