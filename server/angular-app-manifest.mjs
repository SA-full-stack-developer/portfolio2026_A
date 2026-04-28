
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-IX4ECHRL.js",
      "chunk-QDVRGSIR.js",
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
    'index.csr.html': {size: 68034, hash: '11f4db748c6c0b747e0be2fd1505c199b9b9df94eda107ff5c61ab58372e79e4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 14181, hash: '6eccda8358f2ca27a490401ab0ba81fd6d0ad80def97efcafef53b67351dee77', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 129233, hash: '4dc6503fcd29cd768aabdd8a0d45b1808b2d4ace5c02ef6e8438cafe012f9efd', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 118770, hash: 'd441e8daab3dcbaeba8da732185f6f1ec657fb723610ca1f937c16e288c16c15', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 167189, hash: 'a016a57dcb543d7ae1c7ebaec6bce17626cf5ffe396bd141d17fc902dd67d415', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'error/index.html': {size: 122642, hash: '32eb3b45677d3f25e4d10619e0ee44a5caa972f3da7f1065e48c8a199930ae72', text: () => import('./assets-chunks/error_index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 122322, hash: '0ad1e26c3edb29a81d07339f40f78f944c072a846d1066f20a09b917145c137f', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 120089, hash: 'f58eca166e6e9f61b4b06bf56c788063894332c21cb82a1f72aa9a99afe04d15', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'styles-TBBLIE2T.css': {size: 91501, hash: 't+6B9jiWQ1M', text: () => import('./assets-chunks/styles-TBBLIE2T_css.mjs').then(m => m.default)}
  },
};
