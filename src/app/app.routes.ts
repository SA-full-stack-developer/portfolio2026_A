import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/portfolio/portfolio.component').then((m) => m.PortfolioComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/contact.component').then((m) => m.ContactComponent),
  },
  {
    path: 'lab',
    loadComponent: () => import('./features/lab/lab.component').then((m) => m.LabComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
