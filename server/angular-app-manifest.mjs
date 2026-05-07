
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-U5V42GKJ.js",
      "chunk-XCZHJRWW.js",
      "chunk-COXLYE2J.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LXOOF6WJ.js",
      "chunk-COXLYE2J.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XTPR647M.js"
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
      "chunk-BDHI6ND2.js"
    ],
    "route": "/lab"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TWO7AAHS.js"
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
    'index.csr.html': {size: 57214, hash: '14ab3e6e67d8a3945e1eefd04b57c298e6713986f913ce2f5913dd5bda0d6f69', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2696, hash: '335da5b56021fb2cf5b453095d067f3a9622239e81744bde6b57a495b6beb8d8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 157502, hash: '0077500605719794a3557d0629e4427eff437b18f7e2557e19138d6268b5faf6', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 108399, hash: '47cc616208f2d426148fb0fb74aae33dcc71fc3c8ffebcee97b777046eee350f', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'index.html': {size: 162520, hash: 'e83133ea5a23d1d2f296471adcee9b346819bbfe90f5310b76ca1c679dfa9c83', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'error/index.html': {size: 113041, hash: '0da01e5ac4131e091b444d15b073b703226f1eb6f5166709b0331b927ab34acf', text: () => import('./assets-chunks/error_index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 111962, hash: 'c2bed2a0b397eee15e589e27490973cb9dc549b837a1cb97ff09c57d6202a0b4', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 109735, hash: '4cb05814a8c16aa95e5e67d7c610c78ca4c486431342f6d8d7f7df7b38e6d9b5', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'styles-LVZTJQBY.css': {size: 92635, hash: '5AlJIRRAVJY', text: () => import('./assets-chunks/styles-LVZTJQBY_css.mjs').then(m => m.default)}
  },
};
