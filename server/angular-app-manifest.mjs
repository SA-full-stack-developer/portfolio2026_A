
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
    'contact/index.html': {size: 157652, hash: '55a6a994caebd8f990150e71cdbc670cf3ac93f2cf505ad3362869aed5171ee7', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 108558, hash: '1b3ff3d0ce44a8fc534d96eb99795f0ef1c07a9c002ef1f29f9f8e6d0aa3b4a5', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'index.html': {size: 161909, hash: '7e8d2d1cc3043da4f6b0b797dfcede16313429db7d25a514293a462b52f970c8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'error/index.html': {size: 112430, hash: '9ef4caee71ca02795541f1f065b3d25974e7595f14276178d32c4f639896a2ef', text: () => import('./assets-chunks/error_index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 112110, hash: 'fefef2bfe3d0bd5c4dd0b9df7af47462422e86532ad233a70edf4bd9f5e22520', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 109877, hash: '396cbd7baec205a72c085862e7d60203f66483c7ef39f3d9eb0e3fa6256e5a48', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'styles-FM43JSMC.css': {size: 93077, hash: 'wLwXYJVWfb4', text: () => import('./assets-chunks/styles-FM43JSMC_css.mjs').then(m => m.default)}
  },
};
