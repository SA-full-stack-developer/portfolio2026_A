
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
    'index.csr.html': {size: 57179, hash: '0859094d508c3d23e2a3063e6fdf97893f8f7e844f271500816c5251ce9dc89e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2664, hash: '352e2c50ab5f57a6ad17e64b8f918edbf4c14eae6ef15b807e038e683513225d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 80679, hash: '8fa09a83ac7a3b6e29dd6eacc58465480da207b348e939e0fae3a457744735c0', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'index.html': {size: 127230, hash: '90076b31e5bb927b88936b5fb82dff9fadd7cc1c56c54501ffb59f6e9b46585d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 127459, hash: '6a31f66d45420afec0090f897ddce59eb661e86bb2d1dee07bbe9f643ad9f403', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 82895, hash: '5b57bfb5059b02b2f14e0464d3230683ace9ad63f36bb65e151ad59c9936b251', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 85171, hash: 'ae5ff3625ba74d7939b32f5d69364e5cc261aa43e49aa133d172022c9f2e332c', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'styles-LVZTJQBY.css': {size: 92635, hash: '5AlJIRRAVJY', text: () => import('./assets-chunks/styles-LVZTJQBY_css.mjs').then(m => m.default)}
  },
};
