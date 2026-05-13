import { Injectable, inject } from '@angular/core';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PlatformService } from './platform.service';

@Injectable({ providedIn: 'root' })
export class GsapService {
  private readonly platformService = inject(PlatformService);
  private initialized = false;

  init(): void {
    if (!this.platformService.isBrowser || this.initialized) return;
    gsap.registerPlugin(ScrollTrigger);
    this.initialized = true;
  }

  get gsap() {
    if (!this.platformService.isBrowser) {
      throw new Error('GSAP is only available in the browser');
    }
    this.init();
    return gsap;
  }

  get scrollTrigger() {
    if (!this.platformService.isBrowser) {
      throw new Error('ScrollTrigger is only available in the browser');
    }
    this.init();
    return ScrollTrigger;
  }
}
