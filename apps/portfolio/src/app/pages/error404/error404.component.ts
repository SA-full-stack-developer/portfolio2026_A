import { Component, OnInit, inject, signal } from '@angular/core';
import { GsapService, PlatformService } from '@shared-libs/services';

import { Router } from '@angular/router';

@Component({
  selector: 'app-error404',
  imports: [],
  templateUrl: './error404.component.html',
  styleUrl: './error404.component.scss',
})
export class Error404Component implements OnInit {
  private readonly router = inject(Router);
  private readonly gsapService = inject(GsapService);
  private readonly platformService = inject(PlatformService);

  public currentRoute = signal<string>('');
  public terminalLines = signal<string[]>([
    'Initializing system recovery...',
    'Scanning local host for missing routes...',
    'Checking database integrity... [OK]',
    'Warning: Resource not found in sector 404.',
  ]);

  ngOnInit(): void {
    this.currentRoute.set(this.router.url);
  }

  public fixSystem(): void {
    if (!this.platformService.isBrowser) return;

    const gsap = this.gsapService.gsap;
    const tl = gsap.timeline();

    tl.to('.terminal', {
      x: 5,
      duration: 0.05,
      repeat: 10,
      yoyo: true,
      ease: 'power1.inOut',
    })
      .to('.terminal', {
        scale: 0.8,
        opacity: 0,
        duration: 0.3,
        ease: 'back.in(1.7)',
      })
      .call(() => {
        this.ngZoneRunNavigate();
      });
  }

  private ngZoneRunNavigate(): void {
    this.router.navigate(['/']);
  }
}
