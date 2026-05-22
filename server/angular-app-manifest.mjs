
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
    'index.csr.html': {size: 57128, hash: 'f8ee4b7742819dfb2a02008c27a46330d1eba9a46b093b5324e2824878130c05', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2613, hash: '33c4a529f14cb21ed4357a94ab2fdf9d54433a2b21c868314244ebf34ba1865c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 80628, hash: '2c8366193c7e189b8ba004d5435d8369d9a5ff222ad72c3804fbec9ec5413c25', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'index.html': {size: 126819, hash: 'a679168a63fc015534a50f9ffc85a5d55499273680c05493c2dcaae30010acee', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 127408, hash: 'f63d886447369ab87b1d1f233a266210df5e2b5381b2b112fe4cf71740e9f2ca', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 82844, hash: '6b63f08896287ce2e2c6e3150c91d78bf5b32d1afb92ccd515861a1b94ad0127', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 80001, hash: '95cc78688da7ebb5d6b0a287aa764c3eb05368caff18e4e55291ac187a3f947a', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'styles-LVZTJQBY.css': {size: 92635, hash: '5AlJIRRAVJY', text: () => import('./assets-chunks/styles-LVZTJQBY_css.mjs').then(m => m.default)}
  },
};
