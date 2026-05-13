
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
    'legal/index.html': {size: 112867, hash: '1e5a02b9cfa348a8724cc3aa7129335d5fc416a04f8cd0f6e7bab7b18187373c', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 161126, hash: '35a03eb622c015c049e31cbfc0f21af111e2e36e643603e38c7585c0842e1229', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 165848, hash: '3a38a507422a0466327efffc5e51a9d921e23a98cd5d1cdbeb14120150de9e3d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 115100, hash: 'cf35c9351a72bf4d192e55cc9f9d376e5507fa079b3f39da2211bc85abfffbd8', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 111543, hash: '73d095c324515a511292c0bf281779ab3217fd85c58ae06d3e1f7e232b6737db', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'styles-LVZTJQBY.css': {size: 92635, hash: '5AlJIRRAVJY', text: () => import('./assets-chunks/styles-LVZTJQBY_css.mjs').then(m => m.default)}
  },
};
