
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
    'contact/index.html': {size: 157514, hash: '3647c1fd8fb9c9eb19b2b410ccca6ad453ef68a842b613f098966d2fcb55ffe7', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 109095, hash: 'fce706bd5aa007191b80e07c1ff4a3aa683b1b4dd8e4bc6d83bcd3a7ab854a05', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'index.html': {size: 162271, hash: '75bc46012aee4e70793f96e38e3e307699350e8ce13d989b1dff836bbb51091d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'error/index.html': {size: 112967, hash: 'fd73cd590ec255eb3163d504456407efaca4bc1e2ed9062c8bcca3fca2031ab7', text: () => import('./assets-chunks/error_index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 112647, hash: '9d0fccb9f235e201c5ac07cc91330cc738d17d93973de424d694e15fc8d7b91e', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 110414, hash: '1085b33f5befa1208dfb3b60fc6cdf7c971470eb3f80ff46a52b597b2790c209', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'styles-JVBUT725.css': {size: 92606, hash: 'bsHQQVElg1Y', text: () => import('./assets-chunks/styles-JVBUT725_css.mjs').then(m => m.default)}
  },
};
