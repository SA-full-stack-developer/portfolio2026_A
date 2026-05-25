
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
    'index.csr.html': {size: 57179, hash: '85e7f705617fc89e355fb987b48456ea21c61ff7c0365f5b7254a97ec0745c9a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2664, hash: '79a52e7090ad887841e669c148f2931d69ff56987a04647da1a0f49a53ffdff4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 127459, hash: '872342a5c65fe4ddd1f55ddfe6a4d650fe1c6cd5431174e41e1776e0881e8910', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 80679, hash: 'd841b3ebb3b7e22f06ef538c9d525c489fb280e531bb145a90e6e8dce998e874', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'index.html': {size: 126870, hash: 'fd0cbe2ad1584f39122a12a2764303743a8b6f923153fcd90f5c1ba938540a9b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 80039, hash: '9212bec44542892e433c0f06a487572b45e18f902913af2e0909579dc30549de', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 82895, hash: '6e25edbbddd77b44ddb004c3ec9ac27cd599e5a0804846381bd3a49846ed1823', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'styles-LVZTJQBY.css': {size: 92635, hash: '5AlJIRRAVJY', text: () => import('./assets-chunks/styles-LVZTJQBY_css.mjs').then(m => m.default)}
  },
};
