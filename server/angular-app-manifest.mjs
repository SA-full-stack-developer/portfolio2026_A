
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
    'legal/index.html': {size: 112969, hash: '7fd52519fd73f37bb6cf8983eeae0c38d6d61f14be9287969291e131568730f0', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 161228, hash: 'c68556222d7dbf2539a7b5f082ce81f8cc4899ab7d16c6b9de2182690d06d1a2', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 165950, hash: '83d18a17aa77339e33effb34cf0d1c52f05a6cdc564c5a210eed9ca0fb4ff48c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 115202, hash: 'a36ab998b94a64608cd3627e7eae101f023654a8b1fae6c3e83ce82f7656894b', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 111645, hash: '782eeb69cc77c6699e8b860a1ca4cdfee0d71a10c0502e392f7bbb3ece07a070', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'styles-LVZTJQBY.css': {size: 92635, hash: '5AlJIRRAVJY', text: () => import('./assets-chunks/styles-LVZTJQBY_css.mjs').then(m => m.default)}
  },
};
