import { Injectable, signal } from '@angular/core';

import { FEATURE_FLAGS } from '@core/config/feature-flags.config';

@Injectable({ providedIn: 'root' })
export class FeatureFlagService {
  // En el futuro esto vendrá de una llamada a la API
  // para el modo admin. Por ahora es local.
  private readonly _isAdmin = signal<boolean>(false);

  readonly isAdmin = this._isAdmin.asReadonly();

  isVisible(flagId: string): boolean {
    const flag = FEATURE_FLAGS[flagId];
    if (!flag) return false;

    switch (flag.visibility) {
      case 'public':
        return true;
      case 'admin':
        return this._isAdmin();
      case 'hidden':
        return false;
    }
  }

  // Lo activaremos con un token o login en fases posteriores
  enableAdminMode(token: string): void {
    const validToken = 'DEV_ADMIN_2026'; // temporal, lo securizamos con NestJS
    this._isAdmin.set(token === validToken);
  }

  disableAdminMode(): void {
    this._isAdmin.set(false);
  }
}
