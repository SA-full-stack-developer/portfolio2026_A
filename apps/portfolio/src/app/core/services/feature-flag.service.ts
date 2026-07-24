import { inject, Service } from '@angular/core';

import { FEATURE_FLAGS } from '@core/config/feature-flags.config';
import { SessionService } from '@core/services/session.service';

@Service()
export class FeatureFlagService {
  private readonly session = inject(SessionService);

  isVisible(flagId: string): boolean {
    const flag = FEATURE_FLAGS[flagId];
    if (!flag) return false;

    switch (flag.visibility) {
      case 'public':
        return true;
      case 'admin':
        return this.session.isAdmin();
      case 'hidden':
        return false;
    }
  }

  getVisibility(flagId: string): string {
    const flag = FEATURE_FLAGS[flagId];
    return flag ? flag.visibility : 'hidden';
  }
}
