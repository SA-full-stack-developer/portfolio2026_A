
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
    'index.csr.html': {size: 67241, hash: 'e0a2cbd05608ad11c0c62a6fff3830cbe33b3b7a3835c63464a9e79e5f4758f1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 13378, hash: 'bd2c9857b250cf155c160f91c47bef847a999f0a776daffe805012601e147536', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 122898, hash: 'a3b430bda697c707a329d77c1d242ffc84dd0e231eaa4d7e402794d41d178671', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 120748, hash: 'df4d78d90346ac26c2990baf7bc04185ed3bc6a7fe9132b20f530d3e22446815', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 167693, hash: 'f76556851fbecda2b8f1fd58dfad692d4bad7f1dca1446a9b2ac6ab9d85a5999', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 172133, hash: '107fd7e6779cd7d4cdee7b4b73b75b563351eec1b10e0c1cd115e6183c28e785', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'error/index.html': {size: 123240, hash: '3b8b2a670b70b8f8566809e0186d10e22a4f037bf3681deeebd3b6936670b081', text: () => import('./assets-chunks/error_index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 119439, hash: 'fa88b7319689f1bd7857dea5e44f556b7e164240e98a407f981fc89a783be516', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'styles-TBBLIE2T.css': {size: 91501, hash: 't+6B9jiWQ1M', text: () => import('./assets-chunks/styles-TBBLIE2T_css.mjs').then(m => m.default)}
  },
};
