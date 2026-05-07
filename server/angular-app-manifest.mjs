
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
    'contact/index.html': {size: 157652, hash: 'aa777d1ca8cbc0a6dae2ceba202104fa351605ab070904acbb3925a6de4186b3', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 108558, hash: '047c4f24935cc4cd6f6f35b481e1c8d63b1c0f60960c1af818cef094b2f0cbd8', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'index.html': {size: 161909, hash: 'c950358f3ced375e0474e4fe26228afb2d1b662839042e2a905c1adada246f38', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'error/index.html': {size: 112430, hash: 'b6e92eec737dc657a5eec7efba48af274dcd5ce329871df9f5004730f536bd1b', text: () => import('./assets-chunks/error_index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 112110, hash: '042205cfc5ef5ed170b3a4b637831ca1a87eacf747965af9206639131d99447a', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 109877, hash: '504258ec11f90c7196448be20aa732724dec0525a9766bd43079eb94a049abcd', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'styles-FM43JSMC.css': {size: 93077, hash: 'wLwXYJVWfb4', text: () => import('./assets-chunks/styles-FM43JSMC_css.mjs').then(m => m.default)}
  },
};
