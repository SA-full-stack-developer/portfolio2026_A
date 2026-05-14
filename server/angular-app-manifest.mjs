
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-4HE7YKZY.js",
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
    'index.csr.html': {size: 57464, hash: '00c8634a339376f9089214b109336c3108e4f3828b674558eee7908153beeb2e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2949, hash: '19e9c537d3978a41b8bae539f3967713a1d2d3a011aedbccc962befe5c5bf4eb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 161743, hash: '44f526526dd27bbc0b0572d069846438e4a5e4a0876d3d0bb20ecc6b5e430bd1', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 113484, hash: '9a9762af08352214f72f1e754e201695d905aed5ffe1073d3da55daf3e79c993', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'index.html': {size: 166465, hash: '90d55923e31893bb60ae02d1e9d4fd674fb6fc2f0ba4bca9934254cbb5579cea', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 115723, hash: '2af4568add6975139cf01732cfe628f9ae9afa02ef29bc2d4b8f29480f159a90', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 112874, hash: '3c23fb34e16b71ad75f1709431d67b4d5dc8b1d731e507c82296c9c631959d79', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'styles-LVZTJQBY.css': {size: 92635, hash: '5AlJIRRAVJY', text: () => import('./assets-chunks/styles-LVZTJQBY_css.mjs').then(m => m.default)}
  },
};
