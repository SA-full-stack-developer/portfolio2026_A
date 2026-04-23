
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-OPRF5VKP.js",
      "chunk-DGTNUMAM.js",
      "chunk-I3PXBMHQ.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-KBNBR2NL.js",
      "chunk-I3PXBMHQ.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Z3RVBXTQ.js"
    ],
    "route": "/about-me"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ACFRWWBY.js"
    ],
    "route": "/error"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-IX4KPTD7.js"
    ],
    "route": "/lab"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WQV7MGIW.js"
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
    'index.csr.html': {size: 67241, hash: 'a1262b307c7551b93b3644f6d542be973c90c1a05d1d27ed61c1509ed41e3de1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 13378, hash: '049946e1dfb43166d6c6dc2e24f30257e480ba3da0f930bb26b7cb76d20a565c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 122895, hash: '3ae12236b0a837d99d86adc341f71225754dfe15d6eeca2abe877b298fc783ee', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 120745, hash: 'ad0d35c502a34c1177afb3b1d1112d0b6b96cfbb84498bf04fdd9c058cf95305', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 167826, hash: '51108e3673d58c3b7e4a8d59a9cea260fb729be3b076c4b90c1434360b045e7f', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 172130, hash: 'a0d1932fefa311ebebef63a586b723c041dfa3d6a85b15165356e769fff808ee', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'error/index.html': {size: 123237, hash: 'd5d2504ab26fe995c544f7da969915df67e3706c76382fba28991c7038579e9a', text: () => import('./assets-chunks/error_index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 119436, hash: 'cd209805ba28ae3a5ce87b8ecb3319d3188ba85cf0145ccd1a86131e96e283c8', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'styles-TBBLIE2T.css': {size: 91501, hash: 't+6B9jiWQ1M', text: () => import('./assets-chunks/styles-TBBLIE2T_css.mjs').then(m => m.default)}
  },
};
