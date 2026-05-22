import { initNodeFederation } from '@softarc/native-federation-node';
import { join } from 'node:path';

const isDevMode = process.env['NODE_ENV'] !== 'production';

(async () => {
  if (!isDevMode) {
    await initNodeFederation({
      relBundlePath: join(import.meta.dirname, '../browser/'),
      throwIfRemoteNotFound: false,
    });
  }

  await import('./bootstrap-server');
})();
