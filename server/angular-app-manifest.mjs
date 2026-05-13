
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
      "chunk-IZAQYXSM.js",
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
    'index.csr.html': {size: 57362, hash: 'e7f236e529378b459f0efdf3eee305589bb1d42d1f90274424728ba3e8b0fb57', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2845, hash: '92b05ee1d0bd62eff848b2e657fb63b9831c3b2ebebccfbf7a1a51f3b2fcd52f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 161126, hash: 'a0ab9f723a84fe33abdaf38c1b047edd58aad117724d9935747d73939784c08e', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 112867, hash: '3ad84d09924ce5f73b22b8236c69bbc155faa694120c0ac69adf2d99d76e4e4d', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'index.html': {size: 165848, hash: '5752c3a208529a623e0558f2f247f887e5c0adfed8735431403aaedb335dcfda', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 115106, hash: '001c16bf2d974a785889f12513a4d8dde07ad98b27563aa7d0797c0adb77fa44', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 111537, hash: '1b12926e8b035b77c7a8081b530e3f622815c4f309b6794bf05ad8bd419dd86d', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'styles-LVZTJQBY.css': {size: 92635, hash: '5AlJIRRAVJY', text: () => import('./assets-chunks/styles-LVZTJQBY_css.mjs').then(m => m.default)}
  },
};
