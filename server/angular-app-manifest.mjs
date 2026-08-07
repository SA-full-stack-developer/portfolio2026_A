
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
    "renderMode": 0,
    "route": "/lab/*"
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
    'index.csr.html': {size: 57304, hash: 'd22d005856bf68be5c23d415e17ade58db76cdc1ff1a5b7b42718a492b033f90', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2560, hash: '711f0c4f222a9d12aaa08fb9ea0c5807d1b4b680cd7d337981c7f50d284d4044', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 83516, hash: '1372e08d4e31c33fe9b762846eb017060f61bac9e3944a1dc5ed56a59ebe2eae', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'index.html': {size: 129525, hash: '61e134457808d4eb3637c74dbf9b5ad93e9ae82dacceecf81af410431dc22998', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 130660, hash: '5b695525ac38eeaf2637cd5b7d55b41838d70a2b84e7040f0f2a4c8f3864f3de', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 81201, hash: '078a3662b7e9c5e9115967472a53d1f0aab00a879bfdce00de3eae7cef38b751', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'lab/index.html': {size: 89193, hash: '809b32f8827e6bc2593097948fed5008e25692aeb1b75751d0bbe5a68cd1c482', text: () => import('./assets-chunks/lab_index_html.mjs').then(m => m.default)},
    'styles-BR7TVPZV.css': {size: 93040, hash: 'RJEJYsOnsak', text: () => import('./assets-chunks/styles-BR7TVPZV_css.mjs').then(m => m.default)}
  },
};
