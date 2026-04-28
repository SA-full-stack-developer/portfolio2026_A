
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-IX4ECHRL.js",
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
    'index.csr.html': {size: 68034, hash: '11f4db748c6c0b747e0be2fd1505c199b9b9df94eda107ff5c61ab58372e79e4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 14181, hash: '6eccda8358f2ca27a490401ab0ba81fd6d0ad80def97efcafef53b67351dee77', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 118953, hash: 'f7f01c8e2389d6e259e571d28a6aae0d5c60a203f24714f10be43faa9642dbc0', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'index.html': {size: 171537, hash: '0b8352a572e423d6913797702f69a8047e5cf5ba7567b225183ec1afe7508f09', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 167372, hash: 'c23177d48ab8cfbf5a5def62174b71c5947dd0b8874f14ae8981d12993455ae6', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'error/index.html': {size: 122819, hash: '0f631df8a061611d1d0a4427587a285dbe625873c66e7c4301c71512b2407148', text: () => import('./assets-chunks/error_index_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 120272, hash: 'b4305ded7bfba4606a1778aa448f83d7b117947fca750c7a5ce512759a70589d', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 122511, hash: '61bf9014138bbe604c1a43f668c4505e1d069da4f7fb702a61c816a4159ff28d', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'styles-TBBLIE2T.css': {size: 91501, hash: 't+6B9jiWQ1M', text: () => import('./assets-chunks/styles-TBBLIE2T_css.mjs').then(m => m.default)}
  },
};
