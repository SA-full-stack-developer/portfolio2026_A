
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
    'legal/index.html': {size: 122766, hash: '5d61f22a65574938291281d1e2800f85f35d15c8ecb20bc3e42d892fbc5ae825', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 170062, hash: '2144f96911d52b8d8956ac8774c480cb6748f40a2fe76f428945cdbb29b733d5', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 175748, hash: '3cc84891d9951789a6927e12d2f041596bc43fd04f41a50e7d52d2f09f01f9c4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 121436, hash: 'd8a8ffe3a1ed304324b9765c8f9883a83ce2532b7c98d8f2c30acfdb2e80c203', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'ai/index.html': {size: 143152, hash: 'cd55327f5f021b81bf451302e2da732fdb810d3acf67f626e70dfdc68926ef2e', text: () => import('./assets-chunks/ai_index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 125005, hash: '73e020dd439a804fd078dea17607ce46d30117a701124f87e48561f924afb1ee', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'styles-LVZTJQBY.css': {size: 92635, hash: '5AlJIRRAVJY', text: () => import('./assets-chunks/styles-LVZTJQBY_css.mjs').then(m => m.default)}
  },
};
