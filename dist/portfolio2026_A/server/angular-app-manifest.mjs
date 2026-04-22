
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-IHTE34KX.js",
      "chunk-SZHH56J3.js",
      "chunk-4EQNT36A.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-G2ZCCVXT.js",
      "chunk-4EQNT36A.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3M7VJGHE.js"
    ],
    "route": "/about-me"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3XVIISCK.js"
    ],
    "route": "/error"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZITVFO7U.js"
    ],
    "route": "/lab"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EN3NDFZN.js"
    ],
    "route": "/legal"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 67190, hash: '025348e8ae81871ecbf697cf6edef89fa775f0c296ba79fc7e31b80b14dea327', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 13327, hash: '3388c7f7568f4118868452ccf1ed5d8525a5548f42325d6e3b556bbd244e1628', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 120729, hash: '487a307423d0d1eecc1bcdd9c555e9455f16f46471285fd62f832daf0a354d81', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 167626, hash: '7df14c1bc5f7748af278ebed892cf2c69bec65840d63fb4c5074a096aebc115b', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 122879, hash: 'bb202dd9a2e29462252c26fb0ff5733ed4a70f4b98afc6198959a3332b6d2675', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'index.html': {size: 172518, hash: '56dd8228cc0270c09e7fd1390c60f328d41ad61ac5711479d5353bd6b0e581ca', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 119420, hash: '86264a3060e86ff8158dcd796f7c321c503f6bfd12bb41348d2a67d1e1124a96', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'error/index.html': {size: 123227, hash: '532600471cc430f96e82295414b77c71334431c133dcd47b0666f4c080ae42a0', text: () => import('./assets-chunks/error_index_html.mjs').then(m => m.default)},
    'styles-TBBLIE2T.css': {size: 91501, hash: 't+6B9jiWQ1M', text: () => import('./assets-chunks/styles-TBBLIE2T_css.mjs').then(m => m.default)}
  },
};
