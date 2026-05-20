
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
    'legal/index.html': {size: 114788, hash: 'a6aa331ddaaed17de8af25769617c3d661aac06db1c06165f226e9aa8e10c4bf', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 162842, hash: '994dd96dbcc4fc59ed8d4721209b9c9b65ba783eaa266f026b588a4224413d43', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 167728, hash: 'ada0dbbf909e075fa6195f98434d24f4ec21863789ff339b8833c1a522e149d3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 117004, hash: '20cf3b30bd496d25e209eda83e150bb2f095073442a3dc0bed8b1007573e2cfe', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 114167, hash: '6642a555bdda41f5320febd07e932f686f4b5cc07b68b8caf02a0a0699374c02', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'styles-LVZTJQBY.css': {size: 92635, hash: '5AlJIRRAVJY', text: () => import('./assets-chunks/styles-LVZTJQBY_css.mjs').then(m => m.default)}
  },
};
