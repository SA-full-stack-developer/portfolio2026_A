
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
    'contact/index.html': {size: 157514, hash: '897e5abf249fd559b22598527f6226b9adf59a07593cbd5c13c072ff731f3e37', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 109095, hash: 'f217fc0bdc8388a9e8ad509332bc5a579bb236d103ed8c92eefdc80eb1f79337', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'index.html': {size: 162271, hash: 'c668b04f52e8457f80192df8ea07d14b0fa4d4edd2bdc49a0f9f1325d629e4a5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'error/index.html': {size: 112967, hash: 'fc8191b96b8c851567308b8b326b48ffe3f7fa746b90327f4d5beee3ef6475cd', text: () => import('./assets-chunks/error_index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 112647, hash: 'ce8a2383e5a95962fd1a0fb0edb78eb763b6a9b1deb9be964f7687d9853cc53b', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 110414, hash: '896ecf9f7a2b798d757d1960ece28a3eb213a899e86e4dd25a7216691a49008c', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'styles-JVBUT725.css': {size: 92606, hash: 'bsHQQVElg1Y', text: () => import('./assets-chunks/styles-JVBUT725_css.mjs').then(m => m.default)}
  },
};
