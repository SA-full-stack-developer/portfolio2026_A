
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-5XM5FQGU.js",
      "chunk-MIR3RURE.js",
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
    'index.csr.html': {size: 68034, hash: '2b821e053239afa3dd3845f0ec0df78e3c16d86e7e7d9877c4a0de2a1b2735fc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 14181, hash: '444ae43c79409211be06982cff4b2a0a0ac67ff8ef7b607e2831306deb646363', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 118953, hash: 'b1f109fdc1fc39d165d7ac3f620c93c55999b43b39d6bee8cd13c277efa60219', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 167372, hash: '08899b9525f0337b70b592fd7012df4ab0cbf150af317ac930e8da5d933b4af7', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 172260, hash: '240bd8c083fb25028fe88eb6086b59e004d836989cdb4beb2c102c94cd3e57e8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 122511, hash: '42e14e76a26812241a36aebf4a26d43bda659d638c671ccf6e9994aea3abb3fa', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'error/index.html': {size: 122819, hash: '156003d0c6941c4b66532e838ed12dccb3975a339236d684d013a02d4486363e', text: () => import('./assets-chunks/error_index_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 120272, hash: '2f1e8df9112019eafd52370c3c73a7b5be37ee41e319d77f609891aa8cf93577', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'styles-TBBLIE2T.css': {size: 91501, hash: 't+6B9jiWQ1M', text: () => import('./assets-chunks/styles-TBBLIE2T_css.mjs').then(m => m.default)}
  },
};
