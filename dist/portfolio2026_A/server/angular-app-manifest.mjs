
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
    'legal/index.html': {size: 120694, hash: 'b07aad4b77f1f090feb856d3943fdcd875eda1c9a9af36356259c060dbd619e7', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 122844, hash: 'c859626b8c84efb821330f15e82ec2ed6abcfc17ab44e6087a2ca52bb43650b9', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 167727, hash: '525b2e1625c70d888a0a8cd14fa7e83e4aaf197969b1183a37745549095e188e', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 172483, hash: '553813d8d9d48ed45db0a5c422f740f4cddf9868fa0aa07e969edeafddadaae5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 119385, hash: '583bc67a0b5a292116db38e5900efd00aa87472e809af6efd0a9011fe057e06c', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'error/index.html': {size: 123186, hash: 'e204efa867a2ad4a9bc6080b5fbff3fdd058cc2b59afcbbd897d0b8158e61305', text: () => import('./assets-chunks/error_index_html.mjs').then(m => m.default)},
    'styles-TBBLIE2T.css': {size: 91501, hash: 't+6B9jiWQ1M', text: () => import('./assets-chunks/styles-TBBLIE2T_css.mjs').then(m => m.default)}
  },
};
