
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
    'lab/index.html': {size: 108068, hash: 'fbc511146e571a0025b851c5d02b5c23ed5cd9fe26a9e6773bd6b8b2aca700e9', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 157162, hash: '068714cf5a407dac6fe78bcba24d973b5afaf284f2c4d7fbe74855d9b383ac61', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 161419, hash: '79e6a1cba5e2bbdda5ed3d9f896a3f5934bd0adb160d7eecdb2cd48b3bb9c9fa', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'error/index.html': {size: 111934, hash: 'f6f27b9feae7fbd0e99a1b4197ae35e3d7b29045d0c06f243550284c0c3573be', text: () => import('./assets-chunks/error_index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 111626, hash: '7f349e95ae1991f3d9da95094a3a8c6e35250c21e4962ed69eba78a1f14d609b', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 109387, hash: '063b85eab27fc4848a5179b72c887099d3219a9f324fd950f6e820e2b85212d9', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'styles-LVZTJQBY.css': {size: 92635, hash: '5AlJIRRAVJY', text: () => import('./assets-chunks/styles-LVZTJQBY_css.mjs').then(m => m.default)}
  },
};
