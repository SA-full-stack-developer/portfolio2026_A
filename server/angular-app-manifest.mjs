
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-3JXSCSGN.js",
      "chunk-TDNXF3YG.js",
      "chunk-G7MKTURD.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2MTEENGI.js",
      "chunk-G7MKTURD.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-T5XVKNE2.js"
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
      "chunk-AJ3U6OPW.js"
    ],
    "route": "/lab"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RZ55PGTZ.js"
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
    'index.csr.html': {size: 57311, hash: '797bbb07653c7b349d45a4c92dab309ccb90efba5b8217a491f5e6079e827f0a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2794, hash: '18f14165111193453c95de9839769d4d4ebe4af985db4388dd81f57d0379ac24', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 110737, hash: '09e738d0462429981bd2c114b1dc5e71ef46276be61002a3858b773f80450044', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 158996, hash: 'd3b8095822156cf3f007d6c3506e9ae0ac8d582baf6a2e1dcc40b89a04decee1', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 163718, hash: 'b402337082adfec66003054ab1348f22829bb4a805141a73fee83fcc9f6cd3bc', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 112970, hash: 'e813e936585f1c95c3c5da4e049f59bfc54fe134739c9c34829123db76bd8181', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 109413, hash: 'd106116185a7a6a96c8924548df9262a31aa79c5bab3c1b480ac1df03d45df3a', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'styles-LVZTJQBY.css': {size: 92635, hash: '5AlJIRRAVJY', text: () => import('./assets-chunks/styles-LVZTJQBY_css.mjs').then(m => m.default)}
  },
};
