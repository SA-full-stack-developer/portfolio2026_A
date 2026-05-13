
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-HAVC5IDV.js",
      "chunk-AFARBO7T.js",
      "chunk-G7MKTURD.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MCLYQYFV.js",
      "chunk-G7MKTURD.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XJFTATUH.js"
    ],
    "route": "/about-me"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-JHCUVBFV.js"
    ],
    "route": "/error"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HDHOCJNC.js"
    ],
    "route": "/lab"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SKULVMOC.js"
    ],
    "route": "/legal"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YJ35FKBW.js"
    ],
    "route": "/ai"
  },
  {
    "renderMode": 0,
    "redirectTo": "/error",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 57362, hash: '2739a3817dd6d93ae7ed87e1625cb13c3d387def9030e52b202dd68f8dd48550', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2845, hash: '389917cd91f4821b0980e87a1502c9432b69239a41c4f89da6859d1a1b412c3e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 122766, hash: '983abbb7b76f0f4e21c66291d4777bb3b6da5a2b53fc348d81afddf62d565678', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 170062, hash: '677385ded6989fb71be4af143e8f4aedeb4ee460bf89236f8f05f8359f3c510c', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 175748, hash: '6085b6cc526ee17da6e6b42b6f44952923ace0b9077c98517239563d5c98b837', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 125005, hash: '97de11255f32bcf22ce8fa9746de11a16f68784565dbe1182a96d32396c7cbd0', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 121436, hash: '3a4ab48d39e27fcd53bff91bbba19e356a4eb8eee966cd11b50d28e44db14565', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'ai/index.html': {size: 143152, hash: 'c891181660f3746df799fc7e4f6f36ca9b4556f1728b014e450aa7949874f293', text: () => import('./assets-chunks/ai_index_html.mjs').then(m => m.default)},
    'styles-LVZTJQBY.css': {size: 92635, hash: '5AlJIRRAVJY', text: () => import('./assets-chunks/styles-LVZTJQBY_css.mjs').then(m => m.default)}
  },
};
