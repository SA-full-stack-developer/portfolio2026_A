
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
    'legal/index.html': {size: 112969, hash: '1bfe17e5a969f5af931f2123881ec27ff6c103299b2f4c7f735ac8b860979bc7', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 161228, hash: 'aadea8ea4b8de5c81b326ed8a53d034a22ba8d05034e17329543b76a7067c35f', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 165950, hash: '566324ffbc7ba4e8e5a5569c9acdbf425a71c94bbc28f3f22ca9193d69c694d4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 115202, hash: '83f0dafd2cc25cdaa0062b4bf3762e6dfb717b078efde3bff2278a788273b159', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 111645, hash: '1c1fad0db81a2c3fe16bd000ebd283e007ceeefc7182d15bdd0db4f9b3d02e0b', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'styles-LVZTJQBY.css': {size: 92635, hash: '5AlJIRRAVJY', text: () => import('./assets-chunks/styles-LVZTJQBY_css.mjs').then(m => m.default)}
  },
};
