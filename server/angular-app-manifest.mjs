
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
    'index.csr.html': {size: 57179, hash: '27a97d0b7395fe105789413f2ffc8af02c4edc40cba670e702aa761dc92eed5c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2664, hash: '89656626d32c3bfeb24ae0861f17f159553ebf4f0b3031543e7bb3c91bcd92f9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 80679, hash: '83c3ccf0cb1328d8c30d5d0eb0c81d1f93163f7e9884890e312af27b7260171d', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'index.html': {size: 127230, hash: '7bf998c51fd8fb644920a45871abbac75c6667f68d010a44f19400c2fbca9199', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 127459, hash: '6bb82056539ac85fadadc6cceffd5ce67e4dc931c47fb197f88fd5b1f2cd8fc1', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 82895, hash: 'f2614217add21a3df2c157a860eafacf5d3f13c144bad1240e7df4b02f9f9a71', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 86330, hash: '3ee564b567b141bb9d89d0326d7283bc8f98372da1c81fc6a61f67cb0c8db02d', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'styles-LVZTJQBY.css': {size: 92635, hash: '5AlJIRRAVJY', text: () => import('./assets-chunks/styles-LVZTJQBY_css.mjs').then(m => m.default)}
  },
};
