
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-VFCRWNX3.js",
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
    'index.csr.html': {size: 57656, hash: '0491d588692d88057ae7f9948c8088b7effc7f84e92531d82d252f327cfd9690', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2696, hash: 'a182b3ab9bdfa9b5849862d6453b84929ac46ec292e3843c33c8a73f67b100c7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 108558, hash: 'bf671f6dafe1fca7c91a06f88b13dff2d639980c9462115c36a3ba4f0feb6aa7', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 157652, hash: 'fd1bf8e00eaa68e78a081b19980c2a750e68d4188cb634726dadbd13e17813cb', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 161862, hash: '0084dc5433aea7828e4aaf2e73d6cd4449b525e02580f810bd7bc31d9db29a15', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 112116, hash: 'bf8040fe9311c9f4d68056fcd54a100ba188ba2fa156e8945581cd766ca53c87', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'error/index.html': {size: 112424, hash: '5ab3bdd5b59d5fd86ac073a8787452477908fcabcfaa4562f69f55c5af4bb76b', text: () => import('./assets-chunks/error_index_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 109877, hash: '854e6305a3fcf1bbc7f66d09f744ca3ce0b9e88db9e7f758a4fa7075eebb19d2', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'styles-FM43JSMC.css': {size: 93077, hash: 'wLwXYJVWfb4', text: () => import('./assets-chunks/styles-FM43JSMC_css.mjs').then(m => m.default)}
  },
};
