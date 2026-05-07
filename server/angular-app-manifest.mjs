
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-QWU27POI.js",
      "chunk-332MKX3P.js",
      "chunk-JGKLLGLT.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-COC6EEOZ.js",
      "chunk-JGKLLGLT.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4DHOYVM3.js"
    ],
    "route": "/about-me"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LHYGA43D.js"
    ],
    "route": "/error"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6PZUMQ7C.js"
    ],
    "route": "/lab"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WHF3UJW5.js"
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
    'index.csr.html': {size: 57656, hash: 'b5f6394d2ec1349bf84ba208511c9693b5868236f9f37342babb9d20df6b9ff5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2696, hash: '2fcf4ff12072281b8b0105c68e50413727e97b1e72e6a6e681fb9b23f47c85ec', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 157652, hash: 'e8d231858bfb4cbe4ee4dcc74e581aafd4aaa5a6826cde13de88c43860986999', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 108558, hash: '69378daca15ce46ecc018cb68b6c2f2e897e44cb7c37ce7eb73bd7f92149b157', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'index.html': {size: 161909, hash: 'b46e06faa5dc964db0993a216477467c1bb42b6b3d8fa40776bf73f670303cf1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'error/index.html': {size: 112430, hash: '214d8283a67a2b2384b87d7d53881ea494f5ac61d294ca5de04a92cf675ca6e9', text: () => import('./assets-chunks/error_index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 112110, hash: '82c63f6cbbbc7a9ac8025ea0ac26048a90d3810e15a38579914d679d6001663c', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 109877, hash: 'b6896cc8e6626f331b1da3b5bddc93b3a80859ec8e104cf97330a4c2da91139c', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'styles-FM43JSMC.css': {size: 93077, hash: 'wLwXYJVWfb4', text: () => import('./assets-chunks/styles-FM43JSMC_css.mjs').then(m => m.default)}
  },
};
