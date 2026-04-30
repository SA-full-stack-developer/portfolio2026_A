
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-6WBZHGN5.js",
      "chunk-TM3F4CNV.js",
      "chunk-6JZRQLSL.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZP4YGIWU.js",
      "chunk-6JZRQLSL.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SNPOVVDX.js"
    ],
    "route": "/about-me"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3XTWAFYV.js"
    ],
    "route": "/error"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3GGN7HH6.js"
    ],
    "route": "/lab"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-K2YXKDMN.js"
    ],
    "route": "/legal"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 68034, hash: 'e35b2f1ae2684ae0ebec1bcf97418df6f7a7b0a8db7c9bdf8e541b5c27831e65', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 14181, hash: '0db7340780486c289ede8853943115dc6d793b5afd282652428300f139314574', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 167372, hash: '9f0ff3a7de52f25b2cfdac9f79f8557fdd047f3359ee7e7952093fdf9ae040fe', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 118953, hash: 'c237acb8b353c134a18a5f244ef9a91692473d6fd472f363d9844f8c29b19399', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'index.html': {size: 172128, hash: 'b33b1d18976ea766191ee39bd9bb673b6eb88c608a6a538459018a64ca88e544', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'error/index.html': {size: 122825, hash: 'a507a37edf0400acc1831c038edde4008b14fd3215c80602026b2a2b950fe422', text: () => import('./assets-chunks/error_index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 122505, hash: '667d37fd6dae8ab736c951e5ab8869b8272e8e6d2bb309684e1b821bef2d00d8', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 120272, hash: 'eeee20e12e994e8434fc997e68c1cfc922caaba32aad73e35936687ef8d0119f', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'styles-TBBLIE2T.css': {size: 91501, hash: 't+6B9jiWQ1M', text: () => import('./assets-chunks/styles-TBBLIE2T_css.mjs').then(m => m.default)}
  },
};
