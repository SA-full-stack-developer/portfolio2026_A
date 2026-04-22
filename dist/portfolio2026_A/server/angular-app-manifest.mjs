
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-KAHOFYVI.js",
      "chunk-O55INJJ7.js",
      "chunk-AEKVGCBR.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OD7PXXN2.js",
      "chunk-AEKVGCBR.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4TRKR4NW.js"
    ],
    "route": "/about-me"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-AGQSU6LX.js"
    ],
    "route": "/error"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-P5UILUJ3.js"
    ],
    "route": "/lab"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VI7PUASF.js"
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
    'index.csr.html': {size: 67190, hash: '48fe985c222db20dd5665c80f91cf2a2122edecd9fae62e0f9b269c66da97264', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 13327, hash: 'acc507fd8a5b448de05a3a12fba98a54a200d07f1a30691727f1cf56c4a7e7a2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 120694, hash: 'e924ca078499f15608894b01e32ed604f2afb1bd23aeea61cef1cbd08b542653', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 122844, hash: '5e49ba6a0e0c053da51c6042a0badec0636e2f729660b8785508080e74049e8d', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 167591, hash: '5413233d1ef288e738d9bef15616d89f193189fcbf1a22ed0da3f10f9b6832b0', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 172483, hash: '790252be5b5f829cb04eb4ad531cf57288cb3887e3c5b916fabe9bc1fe161cd0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 119385, hash: '806b7d1e59495dcc6781dde9efe1f8922d21dbe125a0f8ce8201e2ef974d5162', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'error/index.html': {size: 123186, hash: 'e08e621dfacd08599d138e07c7bb8020c22a391f8094b6c4230ad41e2cc570e7', text: () => import('./assets-chunks/error_index_html.mjs').then(m => m.default)},
    'styles-TBBLIE2T.css': {size: 91501, hash: 't+6B9jiWQ1M', text: () => import('./assets-chunks/styles-TBBLIE2T_css.mjs').then(m => m.default)}
  },
};
