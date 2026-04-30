
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-R5XV54B4.js",
      "chunk-6FRDP2Q4.js",
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
    'index.csr.html': {size: 68034, hash: 'b1587d1aaa08b2277896d455eb948872f0266a53f1d15ded1321ffda1ea75558', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 14181, hash: '79bacd0de6d701360b6223fc77ab3e501611551497b61334b849d0f129adb875', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 118953, hash: 'bbf3d8369e8c0929167600140e1e01cd5196f90e5ebebd8394601973dc60c97a', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'index.html': {size: 171527, hash: 'edf910b7469f42459947729a9ca1cb37fc81bf9b37be25d4afdbd64a7dee9786', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 167372, hash: '0cdff14d647972cd4ed82a0b128971adf4517e13e8c5324bf6d64eb395826783', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'error/index.html': {size: 122819, hash: '63dfcb3947e50bd8328dc7f515ad59333c27aec2d9c9b1e8be9607c5a8b496a9', text: () => import('./assets-chunks/error_index_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 120272, hash: 'b21b0087016113891e12a902bdb2af7619ea7ba6f642a12c000cbff134b5b161', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 122511, hash: 'a892d716a6d86fefbec5338eefc3fabc8488ce15ddc4cf6c6206eac2c1da522f', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'styles-TBBLIE2T.css': {size: 91501, hash: 't+6B9jiWQ1M', text: () => import('./assets-chunks/styles-TBBLIE2T_css.mjs').then(m => m.default)}
  },
};
