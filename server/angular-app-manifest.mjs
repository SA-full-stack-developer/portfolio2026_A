
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
    'index.html': {size: 163455, hash: '50cc1885daf503fdef232af90e8774d646706f6c7a7664fe018393314cd4c00c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 158641, hash: '8bceacb2fe8ed5df7539206f7620cf29905804d5db2a94f5969b12c95632edbf', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 109488, hash: '8c20c36fea62dacede0f1252c9d08757882a553ca93b2115f4f15036efd92640', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'error/index.html': {size: 113420, hash: 'b2139f3a56f075c90181335d7019df2934d8aeceb3493c07912f76ab9af4991b', text: () => import('./assets-chunks/error_index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 113106, hash: '453b704e92c15e7d5de0c54ee08d1844fe6c62b6c5b9b6922bd5464f47c93900', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 110858, hash: '0dc7e9c3951afd1ce476b232c7d348d89f86f0715c2b82f8b2013ad23142c432', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'styles-BXJSOXZA.css': {size: 93125, hash: 'IpnzjdoOBn8', text: () => import('./assets-chunks/styles-BXJSOXZA_css.mjs').then(m => m.default)}
  },
};
