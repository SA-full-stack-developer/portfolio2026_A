import { initFederation } from '@angular-architects/native-federation';

// Solo inicializa federation en el browser
if (typeof window !== 'undefined') {
  initFederation()
    .catch((err) => console.error(err))
    .then((_) => import('./bootstrap'))
    .catch((err) => console.error(err));
} else {
  import('./bootstrap');
}
