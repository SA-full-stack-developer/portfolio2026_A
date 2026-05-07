
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-MR53CKN6.js",
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
    'index.csr.html': {size: 57656, hash: 'cf030be72f37aca41b55ff3dca413ea15aeccc763ced9d2ee28fb116f44bb995', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2696, hash: '5267686565660f6889401afbb26dd48a0177f42fe9a039298d3bc3eaf8b7c38a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 108558, hash: '2172fb0a157fd848f1ef7db293ae0521deedb504dce4afcbbf5c50885122c111', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'index.html': {size: 161909, hash: '9ef271ca9ea612fa4979d4d0db97c00689412d86bc46aa64206fb2e4a550ab60', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 157652, hash: '8c8a26dda55b1fb76536328ab8cc1e1273b88f31a8ef393566e9d21831b734ec', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'error/index.html': {size: 112424, hash: 'ac94d5f53f29bc6d1b1d12591bf7732fe8a7972fb8def55cea4ee387295bba3b', text: () => import('./assets-chunks/error_index_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 109877, hash: 'a9a959601470b41e4b1707cf11a7b02d8146baa34ea272f7e15c2624f98e3cfa', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 112116, hash: '55e3d1c51bdb8b33344210797b2f415505364a1e94ed5edd6af5e404ad1f8444', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'styles-FM43JSMC.css': {size: 93077, hash: 'wLwXYJVWfb4', text: () => import('./assets-chunks/styles-FM43JSMC_css.mjs').then(m => m.default)}
  },
};
