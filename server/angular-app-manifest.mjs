
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-DYQSD5AU.js",
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
    'index.csr.html': {size: 68034, hash: 'c26016a9a3812fb84615a6a8cffd48afa2568ccde010f806373011523d11b96b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 14181, hash: 'ad30b9dbd8813ff83d00fa4e3a164ee8f7b956e1a55b8842c794d0773aea1388', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 118953, hash: '1afa3593554cff48dda015f54f968b1f4fa76e0450fc1c93d86e097fd893e8b2', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 167372, hash: '217ed287f8b2570477f09f32257bbdc2855efe54c0406a5663b495d564eb509c', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 171542, hash: '0eb40abf8d72e550e7da6eac81960d1b3fb1a4d3ed19f777fcde01041fd0e92d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'error/index.html': {size: 122819, hash: '09fc98efb87784d9eaeb3f20d54d689c95b9a2f6461d70dcd0ac733c2ed8e663', text: () => import('./assets-chunks/error_index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 122511, hash: '7277eaea585cfcada2a6acaaa6b5fec2fdf0cb4c756766881f61f5e33fce6072', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 120272, hash: '6b70a910a318ac0e1f02463a590a63c1fd432d5045b0336a9471a67c247c490f', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'styles-TBBLIE2T.css': {size: 91501, hash: 't+6B9jiWQ1M', text: () => import('./assets-chunks/styles-TBBLIE2T_css.mjs').then(m => m.default)}
  },
};
