import { Routes } from '@angular/router';
import { adminGuard } from '@core/guards/admin';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/portfolio/portfolio').then((m) => m.PortfolioComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact').then((m) => m.ContactComponent),
  },
  {
    path: 'about-me',
    loadComponent: () =>
      import('./pages/about-me/about-me').then((m) => m.AboutMeComponent),
  },
  {
    path: 'error',
    loadComponent: () =>
      import('./pages/error404/error404').then((m) => m.Error404Component),
  },
  {
    path: 'lab',
    loadComponent: () => import('./pages/lab/lab').then((m) => m.LabComponent),
  },
  {
    path: 'lab/:labId',
    loadComponent: () =>
      import('./pages/lab-detail/lab-detail').then((m) => m.LabDetailComponent),
  },
  {
    path: 'legal',
    loadComponent: () => import('./pages/legal/legal').then((m) => m.LegalComponent),
  },
  {
    path: 'admin/:token',
    canActivate: [adminGuard],
    children: [],
  },
  {
    path: '**',
    redirectTo: 'error',
  },
];
