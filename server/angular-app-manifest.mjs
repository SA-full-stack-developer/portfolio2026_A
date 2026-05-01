
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-6KHSGCYV.js",
      "chunk-TM3F4CNV.js",
      "chunk-6JZRQLSL.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZP4YGIWU.js",
      "chunk-6JZRQLSL.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SNPOVVDX.js"
    ],
    "route": "/about-me"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3XTWAFYV.js"
    ],
    "route": "/error"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3GGN7HH6.js"
    ],
    "route": "/lab"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-K2YXKDMN.js"
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
    'index.csr.html': {size: 58176, hash: 'e61a95fbbb2b6c2e844b59f941e214cd98f69d45af1fcc07ee8f80b74da106ef', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3216, hash: '32f8df3db13a4c0e2dff7c6868a6059c64584b6462bd975badc6cf89f9827558', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 157514, hash: '9062a5c432cfd983b09487a3c7feef3bb52299fec71278e4bb7e02a561b3548a', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 109095, hash: 'b173e235c5b67d88fdbbd112de07f1bc7e2d29cd4f4effd223ec2ee0decccc52', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'index.html': {size: 162271, hash: 'd3d7583e3fe670499b53e127798fe39511d3d79152773236829ab4ecb95e536a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'error/index.html': {size: 112967, hash: 'e7a8cb3e75d4b1abfde78702711ac7c3a162bdfc8f35cd9d19e768b5129796b2', text: () => import('./assets-chunks/error_index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 112647, hash: '250c25a432e3d25aaf12137a820dca4e73672cac7934ff2f52867f4110e8a735', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 110414, hash: 'f07b7fa53246fc94e7834e3699dc55f8cbd3d440080c4907a781a12ca0950ce6', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'styles-JVBUT725.css': {size: 92606, hash: 'bsHQQVElg1Y', text: () => import('./assets-chunks/styles-JVBUT725_css.mjs').then(m => m.default)}
  },
};
