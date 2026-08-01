
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
    "renderMode": 0,
    "route": "/lab/*"
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
    'index.csr.html': {size: 57237, hash: 'd09c7dee3027c73d95fc47f7debba99146fa1c6a32eaa5a0cc42ce3cb1a03a1c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2662, hash: 'a2d564c36aaf0859e03d1b1c608f71081db5eb0530a297d73d66a689aa49ccd7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 82953, hash: '569751146a2516f2b18fb220e87b6dd931f2a30d400eb9d77160ba10ef30160b', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 130164, hash: '416e9e21b0b9a49cd984a992a7a1e39ea0659dc90d9d71a025610f8002c78a3e', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 127564, hash: 'cc6d52eda002205dde64a6610c71a5d1be475e012f3af8087014be33dc1c7cd8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 80737, hash: 'af2bc185e75f298a8fcde187ecf25e6688cd89cd59374c9b2ba2e58f569fd943', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 87101, hash: 'eb8eee63bcaf566314eb5ce07a0ab04422690d3117be2ec0591a94a4506c2f1f', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'styles-ROCVPKEY.css': {size: 92696, hash: 'Lb3lBv9e/Q4', text: () => import('./assets-chunks/styles-ROCVPKEY_css.mjs').then(m => m.default)}
  },
};
