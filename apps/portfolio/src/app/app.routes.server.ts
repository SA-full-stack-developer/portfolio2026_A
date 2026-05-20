import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'about-me', renderMode: RenderMode.Prerender },
  { path: 'contact', renderMode: RenderMode.Prerender },
  { path: 'legal', renderMode: RenderMode.Prerender },
  { path: 'lab', renderMode: RenderMode.Prerender },
  { path: 'error', renderMode: RenderMode.Server },
  { path: 'admin/:token', renderMode: RenderMode.Server },
  { path: '**', renderMode: RenderMode.Server },
];
