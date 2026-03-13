import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter, withViewTransitions } from '@angular/router';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideClientHydration } from '@angular/platform-browser';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(), // 🔑 Sin ZoneJS
    provideRouter(routes, withViewTransitions()), // Transiciones nativas
    provideClientHydration(), // SSR Hydration
    provideHttpClient(withFetch()), // Fetch API moderna
    provideAnimationsAsync(), // Animaciones lazy
  ],
};
