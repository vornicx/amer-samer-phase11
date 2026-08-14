import { cpSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';

mkdirSync('dist', { recursive: true });
cpSync('assets', 'dist/assets', { recursive: true });
cpSync('design-hardening.css', 'dist/design-hardening.css');

const source = readFileSync('index.html', 'utf8');
const link = '  <link rel="stylesheet" href="./design-hardening.css" />\n';
const html = source.includes('design-hardening.css')
  ? source
  : source.replace('</head>', `${link}</head>`);

writeFileSync('dist/index.html', html, 'utf8');
