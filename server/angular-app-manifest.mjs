
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-677GNLG3.js",
      "chunk-25TRNFGG.js",
      "chunk-UIKA3R6R.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EV7BFHTA.js",
      "chunk-UIKA3R6R.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NE3IQ4UO.js"
    ],
    "route": "/about-me"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-TNE7APFA.js"
    ],
    "route": "/error"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-AQGBFIFS.js"
    ],
    "route": "/lab"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EOP5XFDX.js"
    ],
    "route": "/legal"
  },
  {
    "renderMode": 0,
    "route": "/admin/*"
  },
  {
    "renderMode": 0,
    "redirectTo": "/error",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 57464, hash: '9016a148de32e617559b631a6fa75be4bb3283c43a701ab1d7fa342a3d439d9b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2949, hash: 'ab876f3eb085a7b7c58a926efae1d9404005d8941eb368419134f5d61b5a9c6c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 113484, hash: '9f041941173a11219627d97f3bdde909bf68037443f35e621a87a5a4d56ba7be', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 161743, hash: 'e04cb204a980ce3c56882595962d13760956e7088124cbfccd1f06accffb49ef', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 166465, hash: '47be65cb7d94fe72a055ea7441df40de1c62bd90cbaae768ed9f2b25831d6051', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 115717, hash: '20896e92d850f5d3b35c8d32b5e705c83ce21991abe2b6ca726434504422e319', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 112880, hash: '15dbc3fce9f0911bf53173e6ee0f8021ac88f5390b1569219949fc129aa434af', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'styles-LVZTJQBY.css': {size: 92635, hash: '5AlJIRRAVJY', text: () => import('./assets-chunks/styles-LVZTJQBY_css.mjs').then(m => m.default)}
  },
};
