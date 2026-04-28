
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-Q5HYETQH.js",
      "chunk-QDVRGSIR.js",
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
    'index.csr.html': {size: 68034, hash: '7c9ed20180cdff93c057f87cf86d73db069c5a9ed303ee2d5f496bc27c3c21bc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 14181, hash: '23c0361fe8ff12ca4f42daac2047ed6fb7dedf849b88409aa2c35f5e4993a8a7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 167372, hash: '967c75df7debfc65bbff96c759813bed1a46bbbeb6891dd1269ac94e1d239dbb', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 118953, hash: '61b0b0213165d797041c8977b83725ea074e26b5f018933a6e83c56c307aa969', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'index.html': {size: 171541, hash: '739c147ec2eab00bd9812b638c20c7b20a603cb9fb1a3c394fa68b84682aea4e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'error/index.html': {size: 122825, hash: '2a57ceb0bd4dc51e93e19e688c339867d75c4fd2c21cc2a20b60467c11599862', text: () => import('./assets-chunks/error_index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 122505, hash: '42b25cc6d7fbc19eb88a7259c3eaef897baf0e23d9c40df7f6685921f39f3760', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 120272, hash: '751bd33b3fe0f77a1ad78abc2794a12af09d8fcddbd2ec05d05acdf29da0e5e0', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'styles-TBBLIE2T.css': {size: 91501, hash: 't+6B9jiWQ1M', text: () => import('./assets-chunks/styles-TBBLIE2T_css.mjs').then(m => m.default)}
  },
};
