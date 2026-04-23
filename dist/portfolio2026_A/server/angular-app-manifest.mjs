
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
    'legal/index.html': {size: 120745, hash: '3ffd39e986448a175c992d0e6e09ee272238418331338104735539127a642174', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 122895, hash: 'cd2a2f05658b23aeb3547d81fe6b522a9b6acf8985caf003046ac14dfe40a316', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 167690, hash: 'd61a2836a8599bb8faee50a30c8d16cc49c5563507823638c3e3cec14e6f4a47', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 172130, hash: '2bf8fde52ddb48ab794d7a4faaf80b01a5f1081ddd03ac604acc913cd2e60217', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 119436, hash: 'd21eabc22e06f7e1e9155bd8faca708eb4c75554b9680c45fe7dc2c59782bf3e', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'error/index.html': {size: 123237, hash: '31c04361d6c52c6614cf4f794d27193ae334087a8ec3be8ac10342ecd80830a0', text: () => import('./assets-chunks/error_index_html.mjs').then(m => m.default)},
    'styles-TBBLIE2T.css': {size: 91501, hash: 't+6B9jiWQ1M', text: () => import('./assets-chunks/styles-TBBLIE2T_css.mjs').then(m => m.default)}
  },
};
