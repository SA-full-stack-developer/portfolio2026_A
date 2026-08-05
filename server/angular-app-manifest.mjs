
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
    'index.csr.html': {size: 57135, hash: 'f4e312f9072ff754878f0d83d124f4398db17cb301d4be27c2a5473dc4b73e1d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2560, hash: '037d5ab4a632ad985ada1a8b4913772804476ec4fd7f0f589854a497b15852d2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 82851, hash: '86a369523a277f56fe5bc8c532cd47cf584b6b12a3450c1a4f513528fba7eb05', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'index.html': {size: 128794, hash: 'd3efc39b14e61c8c521abc53b5ab9632278bb57703ca009f994cf2fdc6dae39e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 130062, hash: 'a3f04669c22910b4712ffce7661303fb3e3dfca2eceef402f2fc1467163141f5', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 80635, hash: '7a69b3dd2bd78591133fe92e862707d31e8603d88b53a3ec4f2e1b9002338d47', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 88561, hash: 'b1c40d2d2c229c6da0b45dce2974446219e189f6bd17797aaa4de77ff8098c27', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'styles-ROCVPKEY.css': {size: 92696, hash: 'Lb3lBv9e/Q4', text: () => import('./assets-chunks/styles-ROCVPKEY_css.mjs').then(m => m.default)}
  },
};
