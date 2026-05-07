
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-ULHXV3V7.js",
      "chunk-XCZHJRWW.js",
      "chunk-COXLYE2J.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-KXNTKOQW.js",
      "chunk-COXLYE2J.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-II2HTMFP.js"
    ],
    "route": "/about-me"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EEV7OPVS.js"
    ],
    "route": "/error"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TDWVDRE4.js"
    ],
    "route": "/lab"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QKQGPZEU.js"
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
    'index.csr.html': {size: 57214, hash: 'fe4062763f7561bb2eedc20713d09b23f5f78c1ce7910dbce499df73f1419114', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2696, hash: 'e2a10fe700cf5899abe93b4b9a48228b9553469b086f1ae29118d9df966327bf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 108068, hash: '97cb56d5efe5c47b66e43b6f16c23dc89eb1e7a649c535e56dc3ab88216d6e5c', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 157162, hash: '800b94cb0a35be602b0edc48b2c39ccc22bf02f27c37232f0c62b4d28b18006a', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 161419, hash: '587f806d486cfa2817ca2d6e7e2e5368acab7b6eb1b947ad668c45af2ffb5099', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'error/index.html': {size: 111934, hash: 'c0c5759ee96209b30756f593f4ecde3a6246c6a5956e29940bed2e6878d62542', text: () => import('./assets-chunks/error_index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 111626, hash: '3b6b1654c8903762f8d282eb408105193082129679932651d0bfad97c418ce65', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 109387, hash: '6d77d8883df4519f307480691c5d47856af3d13d768d8080743d277e00ec6e2c', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'styles-5TOGD44G.css': {size: 92935, hash: 'vjku28OH1Gg', text: () => import('./assets-chunks/styles-5TOGD44G_css.mjs').then(m => m.default)}
  },
};
