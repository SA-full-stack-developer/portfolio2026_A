
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
    'index.csr.html': {size: 57128, hash: '5cb124938e36454ddb3546f08e0d0e913ea2abaed90bf26478a8a97e1cacfded', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2613, hash: '80a544d70330a44a264c2323edf5b1ed87e6af310af4f97d20489ae6d6a58361', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 127396, hash: '7969c4b131a671c00b8a584c68028c1a4ed2f893681c6b89d4786ca539cb81da', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 80616, hash: '384c6186c5344019dd2b5052da70fbc33d51a4bd9be120234f1595a087b3a6f0', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'index.html': {size: 90585, hash: 'c9c3f9102476f0de8f48231a407e6da6b70bd1afc04a742ee23f3007d4de8d18', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 82832, hash: '586a76a71fddb1f0dc7323058814bb632ee3ef1eb7ea491e6bada34dd89f5519', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 79989, hash: 'ee1f0258ed014fc1f076d6cf76e693463e12a1be438bd6dd5e3bba55443a705e', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'styles-LVZTJQBY.css': {size: 92635, hash: '5AlJIRRAVJY', text: () => import('./assets-chunks/styles-LVZTJQBY_css.mjs').then(m => m.default)}
  },
};
