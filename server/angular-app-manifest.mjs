
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
    'index.csr.html': {size: 57179, hash: '278396e9add92a049e435794365af539b305940e91173f71c90dbf03a365b5f2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2664, hash: 'a3376ffed4dc49d9897d14db28df893650b35118ffa46f71c4b41bf57792caee', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 80679, hash: '1d4be35acd42b1ee53c58d0ee7a7e98c40ecb4d494133afe0089cc9949d3b0c5', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 127459, hash: '6a9e02f0841876047392b98c2ad48e3384be0291b35d50c69fb7c8c9697a605b', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 127230, hash: '42de67b06316ed259321393d3aacc3347c118bc5f59b660898721e5e3d393ae6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 82895, hash: '0312f9ee2126b1fc1795cf25ff0ca52692fc8266bca0a44a402d553c1de9b8d3', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 86330, hash: '127f3d2046391a3b98d55a9a680a0d6cd183f67f2cab5757a648b733f1304532', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'styles-LVZTJQBY.css': {size: 92635, hash: '5AlJIRRAVJY', text: () => import('./assets-chunks/styles-LVZTJQBY_css.mjs').then(m => m.default)}
  },
};
