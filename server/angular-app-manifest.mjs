
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-XP6ARERB.js",
      "chunk-AFARBO7T.js",
      "chunk-G7MKTURD.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2HNW5QQO.js",
      "chunk-G7MKTURD.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SL7GNDBL.js"
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
      "chunk-NUVVNC4G.js"
    ],
    "route": "/lab"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VR34XMXN.js"
    ],
    "route": "/legal"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-FUXOZWXW.js"
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
    'index.csr.html': {size: 57362, hash: '23d74058da48ad73e78f87f88b04857860cd2049982a575ec5ff6bc829394b68', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2845, hash: '28b121388c0d52cdf16ee77ce0533c195f7ca86222fc01995110b2fa9f21c59a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 122583, hash: 'afa21425ff0513c4fc64b2608a5ef7e94322641b9aa897b6e8ff93ad6ed6e4d6', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'index.html': {size: 132710, hash: '70f02acf51b487927f23886c14617b8259548805ecb84043fb7d8593537811ae', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 169879, hash: '4fe86dd5f4e7868b1c391725296db25553016c9ce627b7c88b453bf5dda506a7', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'ai/index.html': {size: 142969, hash: 'e6c178b0ab6f77ba4c6c56f730f67d91edef37f6c00e9c9539054622a372e3f5', text: () => import('./assets-chunks/ai_index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 124822, hash: 'ee9c0af9caa9b69dd564824e2f2c262c94ce8dc8c36a59c3d72fd67c3e626c8a', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 121253, hash: '7cab001a1a6f57752e7037defebcba7c8eb828427df55bbc4b9fe1c5039eef2f', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'styles-LVZTJQBY.css': {size: 92635, hash: '5AlJIRRAVJY', text: () => import('./assets-chunks/styles-LVZTJQBY_css.mjs').then(m => m.default)}
  },
};
