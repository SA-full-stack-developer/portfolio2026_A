
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-7ONFX7LQ.js",
      "chunk-W5HZTAKP.js",
      "chunk-QEMQ43O7.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4JAU2KAM.js",
      "chunk-QEMQ43O7.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GS2DVVFQ.js"
    ],
    "route": "/about-me"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BZDIFIBI.js"
    ],
    "route": "/error"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JY63B4O4.js"
    ],
    "route": "/lab"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BD6QLITM.js"
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
    'index.csr.html': {size: 57656, hash: '8c0658da9646047a973ec228c219eca91cda071e2781006b6904762cb58f5aa5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2696, hash: '0df09d638daaf6e44c49fc5c4b744184bbc071b6e86bd5a76bde646637aa82de', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 158641, hash: '56ba573ad85b967d2f739be0773cf84175d89f0f311338b7bb0b30fcad12f47f', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 109488, hash: '4d1bdb2a841f924081e012451f80b89867d660069648f8ae3eb3f5f48527fe1a', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'index.html': {size: 163455, hash: '6ed64c8279eb1ad1da385f603eef4f3882cce6f65d27e2a4c287a3d3d284a077', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'error/index.html': {size: 113420, hash: '1c271cc2a64748c51cef7b35004bb1b4fee860b2ebd4711301abc9ee8ef83ea3', text: () => import('./assets-chunks/error_index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 113100, hash: 'c2a24c4b1436ed67d18180f38034ccd56314ee28e5b8234de9eb4cca36f9a6d7', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 110864, hash: '1199377f7d81a8191488fdfd71cf1190b9a498ef0af3d9f12e8e09cf00b7038c', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'styles-BXJSOXZA.css': {size: 93125, hash: 'IpnzjdoOBn8', text: () => import('./assets-chunks/styles-BXJSOXZA_css.mjs').then(m => m.default)}
  },
};
