
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
    'index.csr.html': {size: 68034, hash: '215ef03549094d16e43187ed4bbd788a28095a620a4e2ce8aa211e7a34b020bd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 14181, hash: '64a02def1d6d2ea5624c1995eba7f6fd723046b0f861e6517dde7a92b963595a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 118953, hash: '22ac5188f356f93053882e142b411892cf008c2c90aac85248fbee5d59354ac6', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 167372, hash: 'e8b96907ef2a23ed611016bcfe5bc15d8dc0332801477e9bbfc5202204fad182', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 172129, hash: 'eddbcf0caa45a9ac0a501f1c47a4d1301fd2195a74ec94b9a62810be67530c07', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 122511, hash: '61e1fde31e1a9d7dd4ad8a6396c6b66a153e11955f064c300d980e65593ed0e5', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'error/index.html': {size: 122819, hash: '34fa2fb75958052e9b8b3e62c885be64b444d90c8c80229c137f31529221943a', text: () => import('./assets-chunks/error_index_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 120272, hash: 'b00c89a45684c5879fdd337bf632c694fa66dca08fe568c7e309cc5a1e2a6fd3', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'styles-TBBLIE2T.css': {size: 91501, hash: 't+6B9jiWQ1M', text: () => import('./assets-chunks/styles-TBBLIE2T_css.mjs').then(m => m.default)}
  },
};
