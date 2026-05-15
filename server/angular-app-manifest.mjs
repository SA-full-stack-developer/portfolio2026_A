
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-5IUTITTE.js",
      "chunk-25TRNFGG.js",
      "chunk-UIKA3R6R.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EV7BFHTA.js",
      "chunk-UIKA3R6R.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JT7JUVOI.js",
      "chunk-RKPVMSA4.js"
    ],
    "route": "/about-me"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-TNE7APFA.js"
    ],
    "route": "/error"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-AQGBFIFS.js"
    ],
    "route": "/lab"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GKF72Y2C.js",
      "chunk-RKPVMSA4.js"
    ],
    "route": "/legal"
  },
  {
    "renderMode": 0,
    "route": "/admin/*"
  },
  {
    "renderMode": 0,
    "redirectTo": "/error",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 57464, hash: 'c2fbae2517c32b76849cf6055b06a5258dca78c920efc7cb6131d1694633a7ab', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2949, hash: '99301639b1b8fa8fcbaf6073d811fe9ae30b5af61e91cde57f1362804fa3717b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 162917, hash: '53fd2453b52178a92374e9b40f0d1e171045b80a55a68506d34af9dc409d94c4', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 114727, hash: '26195bbb2d26396899c99fb4e076dc3873c9fd5f8fdd0d0d34e76992a92e18ed', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'index.html': {size: 167639, hash: 'f27b4bb323e7fd6705b018c1a6c5decbd9251bb2bbf2546fc3c8c3eaf4e51970', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 116949, hash: '827b1ce93ce1f769add002183cf23a88058863c09e3d1c5c81c9d5a6335dfe68', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 114048, hash: '88d6178f6fe1b8ada42f58e9901044c49b1ae74a8c490ff5e1026b1952e1dc22', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'styles-LVZTJQBY.css': {size: 92635, hash: '5AlJIRRAVJY', text: () => import('./assets-chunks/styles-LVZTJQBY_css.mjs').then(m => m.default)}
  },
};
