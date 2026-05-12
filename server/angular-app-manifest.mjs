
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-AFBSKRLK.js",
      "chunk-XSCF3QX6.js",
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
    'index.csr.html': {size: 57362, hash: '82fc44cf960ed000fe4dbb445a82d8c22bd7bb0576f41488d9e411724c49c89b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2845, hash: '0569d1820d0e38368feb7251904cc8c6bc98652b53b4d7e53abe25bc4659f5ba', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 169879, hash: 'b677d2b7279c340088679b2353fef32b75fbfc8853205da3ab3d6758624824f1', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 122583, hash: '76fbaf6bb6566432c261e2bcfddb00f3f19f38242b87b399c4a3b2fca2672e73', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'index.html': {size: 132710, hash: '5fb2df08188f4a5e0b3313399b9050b9188b8624390873c329cb5b747b1de1d8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 121259, hash: 'abdeec41b83da2c8bfff071868f117c39210c5b68edc2ffc135b36264efab87a', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'ai/index.html': {size: 142969, hash: '3c5ab82f3751d20963049fdd97aa3a280c08fa5b4a8d217b847fdaad79792eea', text: () => import('./assets-chunks/ai_index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 124816, hash: '10249b0565aa4d54f5b0e061d26809d44951a310531b3933579147f4b940d679', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'styles-LVZTJQBY.css': {size: 92635, hash: '5AlJIRRAVJY', text: () => import('./assets-chunks/styles-LVZTJQBY_css.mjs').then(m => m.default)}
  },
};
