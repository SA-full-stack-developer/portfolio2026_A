
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
    'lab/index.html': {size: 118953, hash: '361377d7db43d8ef55084defffddc861fc272823bd8d1b793e2be0b97bf4ce64', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 167372, hash: 'c69be358cc7d85ba8fd6d628e072013d5c13eb3af7819fec2d8c8938b3b46544', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 171527, hash: '41309c4ba94a8f73cd76aafe24f1d7ee4b0959717f2fa9d87e1932d9149bbb2b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'error/index.html': {size: 122819, hash: '5af426e05a1dcf4d654863dea4db312d214f356addeee86c6efb700d42e7a235', text: () => import('./assets-chunks/error_index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 122511, hash: '9c3a6cf9bc994d49af3b734f250b1aaaf62403a12f439ff48fb51937996c72bb', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 120272, hash: '273d0741213cdd4fd697b0407d50522767743fccb784f31ed13e2341a5224741', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'styles-TBBLIE2T.css': {size: 91501, hash: 't+6B9jiWQ1M', text: () => import('./assets-chunks/styles-TBBLIE2T_css.mjs').then(m => m.default)}
  },
};
