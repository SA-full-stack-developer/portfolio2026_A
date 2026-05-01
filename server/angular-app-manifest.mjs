
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-6KHSGCYV.js",
      "chunk-TM3F4CNV.js",
      "chunk-6JZRQLSL.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZP4YGIWU.js",
      "chunk-6JZRQLSL.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SNPOVVDX.js"
    ],
    "route": "/about-me"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3XTWAFYV.js"
    ],
    "route": "/error"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3GGN7HH6.js"
    ],
    "route": "/lab"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-K2YXKDMN.js"
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
    'index.csr.html': {size: 58175, hash: 'f74a3d26306dcf0fa73e3bc1e585103066aa6aba0e5558cbc2e5e1834d50fcd3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3215, hash: '6249e6d5eb6f45b5463110a17b85bd37d428ff4215b5ecb26ccbf91cf578cbb7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 157513, hash: '5bb6133b4e51a404041ae68d528d5a83dc73dc131b4afbbaaf13d3032c7fb4dd', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 109094, hash: '1d9e3accaf8fdf621b8ade9a0ae7e351b2c9cb52fc8a065e334c37476af745ff', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'index.html': {size: 162270, hash: 'fcb1a67e45920d0f4f1a1fdcfb307d40cfb6e269693dfee6d19de2118cf597a7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'error/index.html': {size: 112966, hash: '99786e777ce5045baf810e0a868d897e822eecb5ae35145af98ab38a319e22d7', text: () => import('./assets-chunks/error_index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 112646, hash: '5041d0af3d6dee00493a47becea2ca1040daecb46be0e0b0eb6c9e629875d20f', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 110413, hash: 'deaf5fea13a707e4752c840a8a32c2395cf6c09a0f285f31f6a2a4483bd4308c', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'styles-JVBUT725.css': {size: 92606, hash: 'bsHQQVElg1Y', text: () => import('./assets-chunks/styles-JVBUT725_css.mjs').then(m => m.default)}
  },
};
