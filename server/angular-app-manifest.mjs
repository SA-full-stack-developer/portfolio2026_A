
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
    'index.csr.html': {size: 57237, hash: '84948874809f49ed3f43b840a1740e273badad870456f8b244ca2b360742af36', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2662, hash: 'a3ad857f562886119e78bba86cf6aab3c72fcd02fa6911a06ea1d86572c506aa', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 130164, hash: 'edce4f5f9af6da73c56ef4bec2cda3ae439604b9dfa2056a228311ffe421e7a3', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 82953, hash: 'cf7e522a934fe84dc25a5bbc11d0993cc1bff366f3659f9da6af621860eed3de', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'index.html': {size: 127564, hash: '762875b6c1e35029bc722c95e797ea7b8714cfc1651a705b372afa00f9cd2915', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 80737, hash: '477cdd71c570b4abb88f496fc2b6658b32b0ce9dda329be27c00eb297d518703', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 87101, hash: '742d36040f0dd6f0e848345c1fb056edfe3a78d11ff6e1b6d65857f554a02f57', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'styles-ROCVPKEY.css': {size: 92696, hash: 'Lb3lBv9e/Q4', text: () => import('./assets-chunks/styles-ROCVPKEY_css.mjs').then(m => m.default)}
  },
};
