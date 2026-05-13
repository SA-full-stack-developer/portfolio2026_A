
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-3T3AIJIZ.js",
      "chunk-TDNXF3YG.js",
      "chunk-G7MKTURD.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-N6OH5UKX.js",
      "chunk-G7MKTURD.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HFIRCZFC.js"
    ],
    "route": "/about-me"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-SK4ROSHD.js"
    ],
    "route": "/error"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PWI537WO.js"
    ],
    "route": "/lab"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3N2CAJX7.js"
    ],
    "route": "/legal"
  },
  {
    "renderMode": 0,
    "redirectTo": "/error",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 57362, hash: '7c1a601102e54304454a2148143f9396646cf92ce5dc5de055c2ae18a444b5ac', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2845, hash: '5297f06066e84514b6e530340c2721cf8de2d8bd4a976354db1d833ad849df4b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 112867, hash: '4a0b2c786bbd666061b8c807b48041425f474b48f6ce489545fc20390fea1861', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 161126, hash: '745c18e2b7c0dca152e2dd97b5cf4fe5dfd4e6047fa450ea73400ddf95e9587d', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 165848, hash: 'ce1c8b69199fc7da2167a0df2692bf6d2135983c5868c8cf218030861439d284', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 111543, hash: '7c2382ca52fc0d6436e55ee1e07b2bc83c23c06a4f776e39116f5a313a00ef21', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 115100, hash: 'ee98d89162aa1e149e473e31843b13875cbde2ce527eafeb28920aa20dc5c5dc', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'styles-LVZTJQBY.css': {size: 92635, hash: '5AlJIRRAVJY', text: () => import('./assets-chunks/styles-LVZTJQBY_css.mjs').then(m => m.default)}
  },
};
