
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
    'index.csr.html': {size: 57362, hash: 'a4e08b07adf0b83841b7d4a49c507a734a02a61c81b773aedae17feb68d11a0b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2845, hash: 'ba87f128ecf23016db199b36e10e4058c2eb3e2b0dc4725147a0f8f7303853dc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 122583, hash: '61ae99fd6560564b87690a0b9a98c5824658bdf9892032e4b74f6693896758b8', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'index.html': {size: 132710, hash: '8666fffa5ec46ce71099224efd43281856a56aadbe57653e81e56f5678238536', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 169879, hash: 'f89a84f7ad43e24ea6a2c4cfe3eeab31f4a6ceefcf06ce5349158932476580c9', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'ai/index.html': {size: 142969, hash: 'ee791defaae8b8dd1a40bc01f8cb8c03968c52b002f9a009754953865d1d4c22', text: () => import('./assets-chunks/ai_index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 121253, hash: 'b0f9dc3a92359f06fb2b485b94f03a782ed07aac1bc7d74817386e28211ed088', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 124822, hash: 'fdd8d83fa00bb84e4f407f7c0e733a188b936c2dfc9d245cce94fe6f09ace08b', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'styles-LVZTJQBY.css': {size: 92635, hash: '5AlJIRRAVJY', text: () => import('./assets-chunks/styles-LVZTJQBY_css.mjs').then(m => m.default)}
  },
};
