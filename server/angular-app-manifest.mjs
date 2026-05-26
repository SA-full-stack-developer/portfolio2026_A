
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
    'index.csr.html': {size: 57179, hash: 'e47bfe8d23a3088750c263da6e769eea4de7033ca987dd6e28fee830a4e5a620', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2664, hash: '6ef606f49c3aca45a6b79a20fd0c1272cb1b6a140d901072c8c7eb1e267d5a79', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 127459, hash: '6c7e232156337ad8b302c8fc6148b3cb22527a6c9765494fb583b758c662edd3', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 80679, hash: 'bd886853d469d482084a912be3a29624bbf5a148f91a45f5183f7f95b0d17335', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'index.html': {size: 127230, hash: 'bdefa221fa44ed2a9b696aad9168c3cb985cce94d5e5c4d92e064b0646d14b77', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 82895, hash: 'bab2e78eb6de8589511d9f58acfa7e907a59c709aeab9e4d6630da0ca025316f', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 82646, hash: 'd9e7cd5371e31f83e60c1b59ef7f358c4d7db63eaa6f86dd30473a2acd382245', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'styles-LVZTJQBY.css': {size: 92635, hash: '5AlJIRRAVJY', text: () => import('./assets-chunks/styles-LVZTJQBY_css.mjs').then(m => m.default)}
  },
};
