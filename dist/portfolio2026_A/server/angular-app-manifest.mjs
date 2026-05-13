
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-BSRIZ56Y.js",
      "chunk-XSCF3QX6.js",
      "chunk-G7MKTURD.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MCLYQYFV.js",
      "chunk-G7MKTURD.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XJFTATUH.js"
    ],
    "route": "/about-me"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-JHCUVBFV.js"
    ],
    "route": "/error"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HDHOCJNC.js"
    ],
    "route": "/lab"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SKULVMOC.js"
    ],
    "route": "/legal"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YJ35FKBW.js"
    ],
    "route": "/ai"
  },
  {
    "renderMode": 0,
    "redirectTo": "/error",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 57362, hash: '080fb34266623cdc987212ee30b88e6c47b7ece2fb7fa6893ed7490514ae6d13', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2845, hash: '209a94583aa872bf3f522378745a7bba2a349b7142b452610750fdae00b592d1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 132710, hash: '8666fffa5ec46ce71099224efd43281856a56aadbe57653e81e56f5678238536', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 169879, hash: 'f89a84f7ad43e24ea6a2c4cfe3eeab31f4a6ceefcf06ce5349158932476580c9', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'ai/index.html': {size: 142965, hash: '489c27977665ac403c621f9e92a1be0ed00e6025410a4826ded801d8715e29bc', text: () => import('./assets-chunks/ai_index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 124816, hash: 'f6c944763ca28d97db6ca6fb3f5fa65134a69c380b148c9749c65a5e26e0baa8', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 121259, hash: '4c86d76bd743012590b087966fdf1176b35df5e23e4d11272e5fedbf2a2ce163', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 122589, hash: 'aff7c46e5be596273efbd7f349717f82aebdfdb517f3f55a7030a8368bcc1395', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'styles-LVZTJQBY.css': {size: 92635, hash: '5AlJIRRAVJY', text: () => import('./assets-chunks/styles-LVZTJQBY_css.mjs').then(m => m.default)}
  },
};
