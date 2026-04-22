
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-WTZ67TYW.js",
      "chunk-O55INJJ7.js",
      "chunk-AEKVGCBR.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OD7PXXN2.js",
      "chunk-AEKVGCBR.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4TRKR4NW.js"
    ],
    "route": "/about-me"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-AGQSU6LX.js"
    ],
    "route": "/error"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-P5UILUJ3.js"
    ],
    "route": "/lab"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VI7PUASF.js"
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
    'index.csr.html': {size: 67190, hash: 'ed52ce549e7432e2229aa8a2b04d3c371b0d7b7c17c726456ce5ec7925a5e7d8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 13327, hash: '73ab376fa62432a4674d455729e2cd250be0bac8e10a2e110005480baca75756', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 129685, hash: '88c01077a57a3d2760695b9ab8df01f0aa972cbb9ecc51a5b89f2fedb538a9db', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 120514, hash: '7305a824959cf5c60e9f1297a82eb00dfd8e789231d051af5f19a5e1c9c4f019', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 122667, hash: 'f70690a465bfbf04cae391dbc0dec1db46b6b44140d7bcc5fd4020b8918f6c12', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 167411, hash: '35674b204ec3fa221335002e41053d60c331f4e4776c399970cad6691da021a4', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'error/index.html': {size: 123006, hash: 'de844e74b0e37e8920a05f015c538742d0464dc71db2067325f8d4703c5e0c56', text: () => import('./assets-chunks/error_index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 119211, hash: 'bbc7220d2d9d27e569a7dded7e88181ba8773e4695ee4e066073f159d3a9fa99', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'styles-TBBLIE2T.css': {size: 91501, hash: 't+6B9jiWQ1M', text: () => import('./assets-chunks/styles-TBBLIE2T_css.mjs').then(m => m.default)}
  },
};
