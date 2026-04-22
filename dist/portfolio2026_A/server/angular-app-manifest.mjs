
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
    'about-me/index.html': {size: 122661, hash: '8aa155b31e08c7c2c997d74c5b0646cd74ee95065783119672560f2715600850', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 167408, hash: 'c768a577f220d3b9f9a9f853dc8e188e4b73ca3e21e673c831c9824df47303f3', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 120511, hash: '12f283b9572239612944b8aeba789aa05296ea717f9f4e82bce9eaf885aba9b7', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'index.html': {size: 129682, hash: 'ca79355c7ee939edfece2a1de8609a8bf49827e53cb8cf83e412f33156d6ff86', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 119202, hash: '00f4baa0b9a95a4ff7da59ffe582574e5e17b6c562e839a678b6983975569e91', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'error/index.html': {size: 123009, hash: '182e0f9e81f5d1ed145fbc6f9df87a2907654c48731582563bccbc44c0ab0a5b', text: () => import('./assets-chunks/error_index_html.mjs').then(m => m.default)},
    'styles-TBBLIE2T.css': {size: 91501, hash: 't+6B9jiWQ1M', text: () => import('./assets-chunks/styles-TBBLIE2T_css.mjs').then(m => m.default)}
  },
};
