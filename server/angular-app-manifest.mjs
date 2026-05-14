
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-KOOYV4AT.js",
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
      "chunk-NE3IQ4UO.js"
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
      "chunk-EOP5XFDX.js"
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
    'index.csr.html': {size: 57464, hash: '52420a0ad21e9e367a6661fc23c97fc461ba075938a9cb4fd818a09f4e575041', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2949, hash: '714e31e2abb2a27e28ec6449b47256aa1c445d1f6c3596c4e0c5d0b08456578f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 161743, hash: '8af587fb7e809e65a50251579f96d49df8baabf525a7689aacf138ba059685eb', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 113484, hash: '179f2c29bbb8be73aa72f845293d8623ec5f727bf2071e4742fcc7773418aff0', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'index.html': {size: 166465, hash: 'b9b482222a31e83e5e2873e1e902669cc0e0fd832b400beb65ac0a658c877d0a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 115723, hash: '25771c18ba94ecfd62577b66094f78e9bb23177cec311a7aa39d120f537ea9cb', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 112874, hash: 'bf749e98677d29550c0f1d035a3f87fb98c3c56ac7513b429a21d9bfb26f1493', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'styles-LVZTJQBY.css': {size: 92635, hash: '5AlJIRRAVJY', text: () => import('./assets-chunks/styles-LVZTJQBY_css.mjs').then(m => m.default)}
  },
};
