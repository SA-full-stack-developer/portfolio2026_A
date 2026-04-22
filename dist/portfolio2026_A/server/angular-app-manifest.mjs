
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-WTZ67TYW.js",
      "chunk-O55INJJ7.js",
      "chunk-AEKVGCBR.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OD7PXXN2.js",
      "chunk-AEKVGCBR.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4TRKR4NW.js"
    ],
    "route": "/about-me"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-AGQSU6LX.js"
    ],
    "route": "/error"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-P5UILUJ3.js"
    ],
    "route": "/lab"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VI7PUASF.js"
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
    'index.csr.html': {size: 67190, hash: 'ed52ce549e7432e2229aa8a2b04d3c371b0d7b7c17c726456ce5ec7925a5e7d8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 13327, hash: '73ab376fa62432a4674d455729e2cd250be0bac8e10a2e110005480baca75756', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 120514, hash: 'b4d3a67a43bebf8773b3e6013ec092190192a6a861e9facae5305dfb4d6115e3', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'index.html': {size: 129685, hash: 'cd3b5b01404a66b918024aaa058cec0cdbfb697fd7b9bb139ee8797389eebb2e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 167547, hash: 'fd707f9c12f37ca602f9b2f89b167b4ebc550e62f8e26452b8c47e9f6535152a', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 122667, hash: 'e5e3c1c0d1cc703aac03e51cc3cd4f297f25abc20b3032f67ce1acc4d959a3ea', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 119205, hash: '54de0e73c78adfa6f527831946648e732efcb328b9f98ef228ef21423a766ae1', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'error/index.html': {size: 123012, hash: 'a37dbf1c5f487789c965a0f31ff7b7510087ccf1784afbdae4e5d40d99179deb', text: () => import('./assets-chunks/error_index_html.mjs').then(m => m.default)},
    'styles-TBBLIE2T.css': {size: 91501, hash: 't+6B9jiWQ1M', text: () => import('./assets-chunks/styles-TBBLIE2T_css.mjs').then(m => m.default)}
  },
};
