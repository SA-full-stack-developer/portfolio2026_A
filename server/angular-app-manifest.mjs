
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
    'contact/index.html': {size: 170062, hash: '26a06ad4bd5538e8c8b415f944f8f76dfc508eb6e15843b3660cb1c3fac18d34', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 122766, hash: '24d88286775194bcd6dfe90989ac0b1a792e55ee6cbe849f16f33036cc4fa63b', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'index.html': {size: 175748, hash: '978a7c190842559c0e03f3c67a100be987335a6bc3cfea04a3f009a41768f5bc', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 121442, hash: '2023f7265d526f86dcfe9549db0a5d0273adb4d01772e641eb47f0ff1186aad9', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 124999, hash: 'e8561828af57d2c6fc6b7e84a6daff89d119081465495ea801a541477de1255e', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'ai/index.html': {size: 143152, hash: 'af483398c999daed9fb4a1b36d2ac2466f5f655be5cecc3977b57ffdbc44c8ab', text: () => import('./assets-chunks/ai_index_html.mjs').then(m => m.default)},
    'styles-LVZTJQBY.css': {size: 92635, hash: '5AlJIRRAVJY', text: () => import('./assets-chunks/styles-LVZTJQBY_css.mjs').then(m => m.default)}
  },
};
