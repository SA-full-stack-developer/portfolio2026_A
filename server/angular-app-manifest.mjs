
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "route": "/about-me"
  },
  {
    "renderMode": 0,
    "route": "/error"
  },
  {
    "renderMode": 2,
    "route": "/lab"
  },
  {
    "renderMode": 2,
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
    'index.csr.html': {size: 57179, hash: 'f08d7cbe4bf7e4480050cce6a04b098629187599d4bc90c09a0284c35d0d53af', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2664, hash: '7cd117d3252f500b428a683cf10e92510f85f0ab4ffb666d99f0d87f43377adb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 80679, hash: '56a1f5f09522bf202960a1b0cc3bf314b96ce80d827cd7f93e9943541417d7c7', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 127459, hash: '44d24fd0a94149571c297bf198c02b695789d269c276f06f8cb9aadbde8505ca', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 127230, hash: 'c6f719ad9459db97f66662a51a08403566580a80d0c7622dcae9996f0dc4e104', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 82895, hash: '9ba5359bff6585618eae7aa8541cc7017156658e1e208e1d20225090b785ca43', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 85186, hash: '64acfbb3d64e2ca263dc1afa9301e68d1530ca8a42e3adb707cb61713a4bc2d8', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'styles-LVZTJQBY.css': {size: 92635, hash: '5AlJIRRAVJY', text: () => import('./assets-chunks/styles-LVZTJQBY_css.mjs').then(m => m.default)}
  },
};
