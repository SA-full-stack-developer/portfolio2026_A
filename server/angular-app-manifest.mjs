
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-MM2JFMGM.js",
      "chunk-QDVRGSIR.js",
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
    'index.csr.html': {size: 68034, hash: '6ced1eaa9253b8e3fdbedcbe6ad0e3563d39266007d125e9d5a06fa2afee56b2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 14181, hash: '0aba22ffcb8082af9093d8638376806af0b6b5fe3e4961da3c8a86f35990198f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 167236, hash: '9b538cb6d86370c6f1539a40cc4826c9c66165411f6f1990b7c08a5e45d4509a', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 118953, hash: '45fde9503c2c511620eab12c026f1e799af9909128591d7e06a004e9071bd3f5', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'index.html': {size: 171539, hash: '846dd35bfc52148a27a57b6753e69b146cd1d4e7a70bd2be08e2d85293e0508b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'error/index.html': {size: 122825, hash: '991d09c9ec190f461d7bfbd48360e53e54f169c8c7efaf609b33779d322bc1ab', text: () => import('./assets-chunks/error_index_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 120272, hash: '0742ba8565dcd54dbb375c559fca10b68b11bd641a541f9abebbf31471c19764', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 122505, hash: '7d65a064b72525d59e03fb2846806bdd41aa4f84c567dab41a3698e85a95760e', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'styles-TBBLIE2T.css': {size: 91501, hash: 't+6B9jiWQ1M', text: () => import('./assets-chunks/styles-TBBLIE2T_css.mjs').then(m => m.default)}
  },
};
