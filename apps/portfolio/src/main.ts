import { initFederation } from '@angular-architects/native-federation';

if (typeof window !== 'undefined') {
  initFederation()
    .catch((err) => console.error(err))
    .then(() => import('./bootstrap'))
    .catch((err) => console.error(err));
} else {
  import('./bootstrap');
}
