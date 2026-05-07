
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-U5V42GKJ.js",
      "chunk-XCZHJRWW.js",
      "chunk-COXLYE2J.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LXOOF6WJ.js",
      "chunk-COXLYE2J.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XTPR647M.js"
    ],
    "route": "/about-me"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-EEV7OPVS.js"
    ],
    "route": "/error"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BDHI6ND2.js"
    ],
    "route": "/lab"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TWO7AAHS.js"
    ],
    "route": "/legal"
  },
  {
    "renderMode": 0,
    "redirectTo": "/error",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 57311, hash: 'c5cb254c5bdee7845ab3b0566cf4c83bfdc4a1567da15216a782a4333d55873d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2794, hash: '8bf1f847f917f8b50800ffe88c6c43ae05d3627a576ab9d423fcfd0e8e00856f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 109826, hash: '42570f09a895eafb466167ac599b1d390f8cf249bc54f943813ec1d9790b8714', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'index.html': {size: 162617, hash: '8c3d60933ef3541c09558b9d983e7ce1ec2cac41779e966c5146cad2bdf06adc', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 157599, hash: '0b756d218f14e368feaa3ad7d5e8474da88be9f3982b6f2469ca93974aeb8e1b', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 108502, hash: '9b0cebe73677ff184260af0750de22811d2b6a6749cd046c4157abce7a9d7514', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 112059, hash: 'edde56ac3b197b0a35d47ee58013e615c455dea93355299123136c537a95b9e2', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'styles-LVZTJQBY.css': {size: 92635, hash: '5AlJIRRAVJY', text: () => import('./assets-chunks/styles-LVZTJQBY_css.mjs').then(m => m.default)}
  },
};
