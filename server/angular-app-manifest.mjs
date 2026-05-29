
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
    'index.csr.html': {size: 57179, hash: '786ceee560ef6026466774a1758e5d97be74b3b6dce326ea9f239e8644043d8f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2664, hash: '908693f21a8c7bc782ebaab2271dec118882d9813d16bf4938e9bdda44472cf1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 80679, hash: 'e05e68bfa24dba5a35327945f9685e9efbdab8f0bff18edfd9d63cb8b355689a', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 127459, hash: '68f8fcc2bf369f66fd068dca705b301e46bcbcb52786a26c03b11a0ce8674651', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 127230, hash: 'df5ff8048fa042dadc05dec9dca89fffe355ae5471f8da21fa61e2a0a6dfbd62', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 82895, hash: '1218f3f5d75c14b299efb670188451381ae90fe165ea50c084d780c16e731624', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 86806, hash: 'b6f07cbbf007d0fd350045e3da14a83290a9d2f10bdce7674100ae51a8ce3ae0', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'styles-LVZTJQBY.css': {size: 92635, hash: '5AlJIRRAVJY', text: () => import('./assets-chunks/styles-LVZTJQBY_css.mjs').then(m => m.default)}
  },
};
