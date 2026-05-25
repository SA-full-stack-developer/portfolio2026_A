
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
    'index.csr.html': {size: 57128, hash: '73974381912623663d740e6005d8da024245f1ca4ca1c4e5e15c908782053ae3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2613, hash: '30e9f451f8f84b63f16faa8b70691043a3fab07d7e4272d0a541f6167c126784', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 127396, hash: 'a2343f2f9c5e47aedba0547eb1e8b95728645f77e5a166df9d8faf570dca7680', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 90585, hash: 'a97ebcd8496fdb9f0dbb26b4af623c81c75b247fc1f3628d4f5497e0cfccf20d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 80616, hash: '3143bc15a449146f7a7dfd93c15d9229d92927ed333e3f998e84050be86effd3', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 82832, hash: '55c77a1b7e68442bf162adc75b55ff20732830d36883fd7afedc3e5b679e616c', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 79989, hash: 'bbc01fec0916200e221c19960897de2f878dd9021c5353df1a2ad2a280dbb513', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'styles-LVZTJQBY.css': {size: 92635, hash: '5AlJIRRAVJY', text: () => import('./assets-chunks/styles-LVZTJQBY_css.mjs').then(m => m.default)}
  },
};
