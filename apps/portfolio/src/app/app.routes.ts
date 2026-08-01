import { Routes } from '@angular/router';
import { adminGuard } from '@core/guards/admin.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/portfolio/portfolio.component').then((m) => m.PortfolioComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then((m) => m.ContactComponent),
  },
  {
    path: 'about-me',
    loadComponent: () =>
      import('./pages/about-me/about-me.component').then((m) => m.AboutMeComponent),
  },
  {
    path: 'error',
    loadComponent: () =>
      import('./pages/error404/error404.component').then((m) => m.Error404Component),
  },
  {
    path: 'lab',
    loadComponent: () => import('./pages/lab/lab.component').then((m) => m.LabComponent),
  },
  {
    path: 'lab/:labId',
    loadComponent: () =>
      import('./pages/lab-detail/lab-detail.component').then((m) => m.LabDetailComponent),
  },
  {
    path: 'legal',
    loadComponent: () => import('./pages/legal/legal.component').then((m) => m.LegalComponent),
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
