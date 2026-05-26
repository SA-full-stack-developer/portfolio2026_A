import { initNodeFederation } from '@softarc/native-federation-node';
import { join } from 'node:path';

const isDevMode = process.env['NODE_ENV'] !== 'production';
const isPrerenderBuild = process.env['APP_PRERENDER'] === 'true';

(async () => {
  if (!isDevMode && !isPrerenderBuild) {
    await initNodeFederation({
      relBundlePath: join(import.meta.dirname, '../browser/'),
      throwIfRemoteNotFound: false,
    }).catch(() => {
      console.warn('initNodeFederation failed, continuing without federation');
    });
  }

  await import('./bootstrap-server');
})();
