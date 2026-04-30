
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-4FXXP5MV.js",
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
    'index.csr.html': {size: 68034, hash: '3c9a4744db0c8c7afb9fe223d8d4248877001effd8b71a23821926d90d5c4cef', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 14181, hash: '2e8938ca2423422ee3fc81560aa611ee59c2956c571119ac4bcd447a7a0bd262', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 118953, hash: '65c0b32b62046fc51f2dd6b3a66983e32d82ef5867d979b7c17ee9ab6049d5f4', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'index.html': {size: 172128, hash: '8dc703ce93ca3e65d4a7b46a95acc056b3378d960b69f5b024d697b315ee936f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 167236, hash: '04b06104e62ea5eb4b37b5f0e29bc4ad6aea6b1a31d1b599963f13e5947fbfde', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'error/index.html': {size: 122819, hash: '27c3e506713f7301811e4f0e9bf2d40607a1ea1308d31ec7ce719151517cb046', text: () => import('./assets-chunks/error_index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 122511, hash: '728827a87ca88443d0c37f20dab4ddb5e9da695ab610658a1135e398d6edfab7', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 120272, hash: 'ad67617b7966b3bfc514554c9da969e8d36f038441dbb9000b250d3fff15eeb6', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'styles-TBBLIE2T.css': {size: 91501, hash: 't+6B9jiWQ1M', text: () => import('./assets-chunks/styles-TBBLIE2T_css.mjs').then(m => m.default)}
  },
};
