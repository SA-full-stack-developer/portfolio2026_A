
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-PPGNY7T4.js",
      "chunk-WTKGTLY7.js",
      "chunk-COXLYE2J.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YIQTVF5G.js",
      "chunk-COXLYE2J.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-II2HTMFP.js"
    ],
    "route": "/about-me"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EEV7OPVS.js"
    ],
    "route": "/error"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TDWVDRE4.js"
    ],
    "route": "/lab"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YYQ6O72O.js"
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
    'index.csr.html': {size: 57656, hash: '5099f5f3122d715003b82355d68303fc3642ccb6fb191f345accae8328d7867b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2696, hash: 'e7f7fdf2ded4c0a10cee396ac85f7c7f63e2e141fcd23276012f860981d1044b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 108558, hash: '214fcae4aa9a4ff88ecc4f1e79f3ff603446b39f4bd562f5e7646afb84d3dd1c', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 157652, hash: '0979922d396dc51058ba53acef8035f97ada2b4dda41762c181c3491b39301cc', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 161874, hash: 'e6a049281c1f030485e6c90d8e34b8d058293aef644e448bc236bcd4e406e4e4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'error/index.html': {size: 112424, hash: '9d794cbc41292c106aa62a360e16bdb8f0d526e0d68a5a96b799ec585db3d9ae', text: () => import('./assets-chunks/error_index_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 109877, hash: '4e07f5b6e0e015af85d84be1b91cf89fb7042e5da9b23769a3c3f37a48e0b252', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 112116, hash: 'c52cbd30c0d2d1c966860481d59eb497cf341ec42db5eb80317f9b5a7514ca6b', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'styles-FM43JSMC.css': {size: 93077, hash: 'wLwXYJVWfb4', text: () => import('./assets-chunks/styles-FM43JSMC_css.mjs').then(m => m.default)}
  },
};
