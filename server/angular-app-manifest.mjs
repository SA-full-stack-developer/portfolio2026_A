
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
    'index.csr.html': {size: 58176, hash: 'e61a95fbbb2b6c2e844b59f941e214cd98f69d45af1fcc07ee8f80b74da106ef', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3216, hash: '32f8df3db13a4c0e2dff7c6868a6059c64584b6462bd975badc6cf89f9827558', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 157514, hash: '68ff8d6ee475142463fec274209fa805836dfabe7db07b56500acd48aa16a70a', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 109095, hash: '9afcd019147a2ab779284db12b500a72038ef250117d677a2c3a41ce070b9a5e', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'index.html': {size: 162271, hash: '1b74ec06ba745e7132ec102423b8a697e4903cbd4cfcb4f2b740f29ba0d30d2e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'error/index.html': {size: 112967, hash: 'fc13208d9b7cdc0a562d09479209002209724cc4e59084ee6c0457feba91c1de', text: () => import('./assets-chunks/error_index_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 110414, hash: 'e7903362d1b3c7b3ee02449b06b3ff07402ebe77eb83f4bb2ce1ff3dc2e6be3b', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 112647, hash: '81e06ee334bf3486b1e7e6a7b2cab1322e702cecbaa1dfecd3ed2ae7215d3b04', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'styles-JVBUT725.css': {size: 92606, hash: 'bsHQQVElg1Y', text: () => import('./assets-chunks/styles-JVBUT725_css.mjs').then(m => m.default)}
  },
};
