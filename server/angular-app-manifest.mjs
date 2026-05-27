
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
    'index.csr.html': {size: 57179, hash: 'bf062e6088c670ce2734900be47a1c8176c9d568060d7d3056eb339f54803149', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2664, hash: 'dcc05d1add94b2e86c493c60b2564ae6d0489cbced148beb484882fe9698a7cf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 80679, hash: 'e9f4cbeeb471a58092d9c3f1603c1765ee679c9c22be10b12d6929c7d2196b03', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'index.html': {size: 127230, hash: 'ce12ba45971565e3d932d83a8fb93ff1af79a7859db6c3746e41cccd5df6a013', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 127459, hash: '7ae1968a8c9246cdc492a788d46ac3aa4a4fcbd59f4afeb21863a37633f54c2e', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 82895, hash: '2ae607b280d4fd1142e8cf813981cd9970da19e045d4a2a317367a6429c3e662', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 84093, hash: '6d815eb17f86b191978b6350ff19a57378c101062df227620b62481591a0abce', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'styles-LVZTJQBY.css': {size: 92635, hash: '5AlJIRRAVJY', text: () => import('./assets-chunks/styles-LVZTJQBY_css.mjs').then(m => m.default)}
  },
};
