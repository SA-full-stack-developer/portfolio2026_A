
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
    'index.csr.html': {size: 69070, hash: '0c42e7d563add6c447ef76e7ff4a75ab316196a37b383549114c7c6a71158618', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 14110, hash: '3b69f3761c4f9ba4a6fcf2d4cea89f8c38474d87e07a472d63fc28ebb0a11480', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 168408, hash: '89f2979a8b654ad4c8b2337110ea9fd914c79be9a87fb2a0253abacee5d3eb70', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 119989, hash: 'ea97bcb3437619f719784bee5beda570949ca02b23fa35a3bb197d22f02a559e', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'index.html': {size: 173165, hash: '2eaf8a2c1f1ee41c52701be2e17a5370ae9aca9b96d28176b12ff9f72dda1f53', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 123541, hash: '3ab8b2538c06ebcc014603a7e605bd2076d6f9342c3eefa95e19a67d5527d5df', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'error/index.html': {size: 123861, hash: '7516d8557390dd8c0bb5a66ad7d8dd95c27e9b465313ba2be970b0f3a3c12c5a', text: () => import('./assets-chunks/error_index_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 121308, hash: '8972a4f1ec47d89793b74eb45f1737a909fb491be4db4c729500ecabe94bf82e', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'styles-JVBUT725.css': {size: 92606, hash: 'bsHQQVElg1Y', text: () => import('./assets-chunks/styles-JVBUT725_css.mjs').then(m => m.default)}
  },
};
