import { PLATFORM_ID, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';

import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { SessionService } from '@core/services/session.service';
import { environment } from '@env/environment';
import { firstValueFrom } from 'rxjs';

export const adminGuard: CanActivateFn = async (route: ActivatedRouteSnapshot) => {
  const session = inject(SessionService);
  const router = inject(Router);
  const http = inject(HttpClient);
  const platformId = inject(PLATFORM_ID);

  if (!isPlatformBrowser(platformId)) {
    return true;
  }

  const token = route.paramMap.get('token');
  if (!token) return router.createUrlTree(['/']);

  try {
    const res = await firstValueFrom(
      http.post<{ data: { valid: boolean } }>(`${environment.apiUrl}/auth/validate-token`, {
        token,
      }),
    );
    session.setAdmin(res.data.valid);
  } catch {
    session.setAdmin(false);
  }

  return router.createUrlTree(['/']);
};
