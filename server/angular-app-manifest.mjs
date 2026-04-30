
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-NGZHGF67.js",
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
    'index.csr.html': {size: 68034, hash: '7b90c7a87c2b8692dd4a3cab8d84d6d4dc5d399f03446eaf96e238cdb366d54e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 14181, hash: '9da7147bc323b040a45071d87ddc87a00fbb20068d62b56ca912b2546e30ce0b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 167372, hash: '8b055ac5c9af7d09d631ca108c15679808bda14c322529c4d66f47aa0fcd968e', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 118953, hash: 'e71ad2f686e53cdc0025e86a075ce84adbd18e909759b679fc018519724e89dc', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'index.html': {size: 172140, hash: '3b293e0e7cea189a0bfa5ae0d3a4d637b82edff2ec01c3d6dd57d597e71e7b42', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 122505, hash: 'fe2fff25e003dcfb0fefb2c7d87046350b2441504c7c4f3af6159dee41d209d8', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'error/index.html': {size: 122825, hash: 'cf8bd2a8d10f52ccb8b2d8f9b5e37e9afe276871759ccbcb596a7204b6245fe7', text: () => import('./assets-chunks/error_index_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 120272, hash: 'f3e97cb4e68a441adc72da4599a407fec8cea6b43c1a10be28e4ec0f3cf0fcf0', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'styles-TBBLIE2T.css': {size: 91501, hash: 't+6B9jiWQ1M', text: () => import('./assets-chunks/styles-TBBLIE2T_css.mjs').then(m => m.default)}
  },
};
