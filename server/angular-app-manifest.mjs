
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-L3JHJ7E6.js",
      "chunk-QPBPMNW4.js",
      "chunk-RJ2FHGJD.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZEWF5X4Y.js",
      "chunk-RJ2FHGJD.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4B62VEQ5.js"
    ],
    "route": "/about-me"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-M2EDZ7II.js"
    ],
    "route": "/error"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4V3KASPJ.js"
    ],
    "route": "/lab"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RWPAIIBD.js"
    ],
    "route": "/legal"
  },
  {
    "renderMode": 0,
    "redirectTo": "/error",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 57464, hash: '365d688eca28b009d8e47d07eff4f2595429438bcaf8e164b3dfcdc1b46083fb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2949, hash: 'a769ef0ce0132e87ef9fbdcdc393cba557b22032860b1b5043aa5b9e57583815', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 161228, hash: '8f1c0abb1cab5c0aafeb67d52b82a6d388b83b7aa07b6110e4a205d58db813e5', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 112969, hash: '558ca981e06c90d913fe0c6f90a16836c3399a240860ba1fa2001707ba890144', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'index.html': {size: 165950, hash: 'd8c71345c39fd0ebde92e8286779ee91902321fdb7dc4ac36567d89dc2ca317a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 115208, hash: '6e9c7dd0cb174eb7bee6899579f5895cafa5672d11066705eae312b592d38ecc', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 111639, hash: '391c2e36ee166637ee0d6b82fb4a22fbafb42534479f581bf11e6aaadd887684', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'styles-LVZTJQBY.css': {size: 92635, hash: '5AlJIRRAVJY', text: () => import('./assets-chunks/styles-LVZTJQBY_css.mjs').then(m => m.default)}
  },
};
