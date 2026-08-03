import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { PLATFORM_ID, Service, inject } from '@angular/core';

@Service()
export class PlatformService {
  private readonly platformId = inject(PLATFORM_ID);

  readonly isBrowser = isPlatformBrowser(this.platformId);
  readonly isServer = isPlatformServer(this.platformId);
}
