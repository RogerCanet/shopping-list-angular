
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/shopping-list-angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/shopping-list-angular"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 518, hash: 'c76ea78eb7dfa1014318fcfb52d7a7b336c4a0d6cbc7cbd0cfdcb1ef7d8e91df', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1031, hash: 'dc2d592d930b8cdde93abcb2fa2f86b50e323323c70863f0eb2408ed3cd46719', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 1010, hash: '26b96508a21b5c38594022cdb3fe63a0318a4964af326f087d9335f108625312', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
