
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
    'about-me/index.html': {size: 122895, hash: '76f32f3b6d5ccde8b3bc7c6fb84742bb87ee8a9dcecf25151339384ce0f223ea', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 120745, hash: 'bc3da2c834404c13f0bdec743903cc2ede629cc009a50a64964225fe0ac46332', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 167690, hash: 'cfa890c91eb7487fd461b63070ee11bf8d9c3567f4d256df42fc56c82d43d52f', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 172130, hash: '25e3697b44eba2a8356738260851f5f2f1508491fc169b1e01737fcd4704f787', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'error/index.html': {size: 123237, hash: '307f07bb9ce39eca3ba2a611bd0bf4e9e175138d30bd22ddcd35c8a6401fd947', text: () => import('./assets-chunks/error_index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 119436, hash: 'a50ae3b219ef4746a55439aa5aac5f475ee067cf25663517c77090b05d24ea13', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'styles-TBBLIE2T.css': {size: 91501, hash: 't+6B9jiWQ1M', text: () => import('./assets-chunks/styles-TBBLIE2T_css.mjs').then(m => m.default)}
  },
};
