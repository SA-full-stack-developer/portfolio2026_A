
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "route": "/about-me"
  },
  {
    "renderMode": 0,
    "route": "/error"
  },
  {
    "renderMode": 2,
    "route": "/lab"
  },
  {
    "renderMode": 0,
    "route": "/lab/*"
  },
  {
    "renderMode": 2,
    "route": "/legal"
  },
  {
    "renderMode": 0,
    "route": "/admin/*"
  },
  {
    "renderMode": 0,
    "redirectTo": "/error",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 57135, hash: '4bc8419f3fd1908ecc3e32e357d48cd59d60bbb4f6e1bf40f2a8f745875fca08', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2560, hash: 'dbe96d62ccd3effc41cf329681838ddee6b96a8adfe8cc73e2e580bcb39e395c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 82851, hash: '8c44a417b830d77963a9bbf9da4aaebe7bb1e0adb287ca9573baa0994f547ffa', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'index.html': {size: 128794, hash: 'df4de0aa388b312de5e4fe33c59145babd482fade613da9c84b0041f77b621a3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 129926, hash: '31cbdddfe32148b30b6c3819049ec765932ce597978e4bedf5eabab58180c6a5', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 80635, hash: '428e211a5c701dbae3e8cdc7aa43df368babe68b3bd3b2c22fbc725f3efb1c62', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 88561, hash: '33c4de39ab8c586790f5f885e8445ef112be766d88c325033d438060dbf48940', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'styles-ROCVPKEY.css': {size: 92696, hash: 'Lb3lBv9e/Q4', text: () => import('./assets-chunks/styles-ROCVPKEY_css.mjs').then(m => m.default)}
  },
};
