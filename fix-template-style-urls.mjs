// scripts/fix-template-style-urls.mjs

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
const RE = new RegExp(`\\.(${SUFFIXES.join('|')})\\.(html|scss)`, 'g');

const project = new Project({ tsConfigFilePath: 'tsconfig.base.json' });
let fixed = 0;

for (const sourceFile of project.getSourceFiles([
  'apps/portfolio/src/app/**/*.ts',
  'apps/lab001/src/app/**/*.ts',
])) {
  const text = sourceFile.getFullText();
  if (RE.test(text)) {
    sourceFile.replaceWithText(text.replace(RE, '.$2'));
    fixed++;
  }
}

await project.save();
console.log(`Fixed ${fixed} files`);
