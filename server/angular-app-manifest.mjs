
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-ULHXV3V7.js",
      "chunk-XCZHJRWW.js",
      "chunk-COXLYE2J.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-KXNTKOQW.js",
      "chunk-COXLYE2J.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-II2HTMFP.js"
    ],
    "route": "/about-me"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EEV7OPVS.js"
    ],
    "route": "/error"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TDWVDRE4.js"
    ],
    "route": "/lab"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QKQGPZEU.js"
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
    'index.csr.html': {size: 57214, hash: 'fad6f92d93097ecf98abbd0ee32f77948f9b8e6d6fa420fa263931f4d167b406', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2696, hash: '8b1e3834c9b1291daac1d4a4a684765cf9df03d83f61be275a59cc390c342ff4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 108068, hash: 'bdc1af062f862e86aae4680e20aaa4cb555a2b5012f22b8407f381d2031ac09e', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 157162, hash: '047b8edc6c98b0c45b61a8fb65479f0490c2939385511495af35b5a2019c63bb', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 161419, hash: 'aa80ab787df80801f2e0741055308454ca5a2b47bab27e7879575d5fd9ccc8cc', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'error/index.html': {size: 111934, hash: 'ff650a37024b7f28182569878bdcbca9b1bcb7a8d56ddb8c93ed91dc4d08bd42', text: () => import('./assets-chunks/error_index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 111626, hash: '5a3d8ac8c58ffff68c2960009390b9ab1375c011b7ba5c264a9b3c38264b911d', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 109387, hash: '5f293ca260647877c24e5855839bb297473118e6192f1350b2fa71159342eadf', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'styles-LVZTJQBY.css': {size: 92635, hash: '5AlJIRRAVJY', text: () => import('./assets-chunks/styles-LVZTJQBY_css.mjs').then(m => m.default)}
  },
};
