
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
    'index.csr.html': {size: 57464, hash: 'ac5f16a67cc46428361d5dde93dd25770bf421545578cb4fe1d657419fb56ccf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2949, hash: '89f2f0d1d1c0be3323c1efcaaf69aafe931e4f87c32f62e8c082ffbf1dcf5966', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 114788, hash: 'ba6124e0e00daf809ad9017e43175adb1e37381296c4add2fbae1ad6b3d20c25', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 162978, hash: 'c9c9e6ea03dd6d60e7d7e427cb3b589e52073bae58af07409f127e4ba603c7f7', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 167728, hash: '10df492450b85981be42ec05d4636b6502e831ff72d5e1ba7d4c8b3c4d242b1b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 117004, hash: '4a42d92b2469dafdaa04d9e635371c9bd81afe5a4f251e1ef6884fe92e4dc7b9', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 114167, hash: 'a0714c3b99f53e7081ee21ba85ca9f4f1acff3b1b91a80f0d7776b6f2c89d852', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'styles-LVZTJQBY.css': {size: 92635, hash: '5AlJIRRAVJY', text: () => import('./assets-chunks/styles-LVZTJQBY_css.mjs').then(m => m.default)}
  },
};
