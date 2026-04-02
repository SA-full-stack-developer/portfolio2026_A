import { Component, ElementRef, Injector, afterNextRender, inject, signal } from '@angular/core';

import { RouterLink } from '@angular/router';
import { GsapService } from '@core/services/gsap.service';
import { PlatformService } from '@core/services/platform.service';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderNavComponent } from '../header-nav/header-nav.component';

@Component({
  selector: 'app-header-hamburger',
  imports: [TranslateModule, RouterLink, HeaderNavComponent],
  templateUrl: './header-hamburger.component.html',
  styleUrl: './header-hamburger.component.scss',
})
export class HeaderHamburgerComponent {
  private readonly platformService = inject(PlatformService);
  private readonly gsapService = inject(GsapService);
  private readonly el = inject(ElementRef);
  private readonly injector = inject(Injector);

  readonly isOpen = signal<boolean>(false);

  open(): void {
    this.isOpen.set(true);
    if (!this.platformService.isBrowser) return;

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    afterNextRender(
      () => {
        const gsap = this.gsapService.gsap;
        const drawer = this.el.nativeElement.querySelector('.header-hamburger__drawer');
        if (!drawer) return;

        gsap.fromTo(
          drawer,
          { x: '100%', opacity: 0 },
          { x: '0%', opacity: 1, duration: 0.4, ease: 'power2.out' },
        );
      },
      { injector: this.injector },
    );
  }

  close(): void {
    if (!this.platformService.isBrowser) return;

    const gsap = this.gsapService.gsap;
    const drawer = this.el.nativeElement.querySelector('.header-hamburger__drawer');

    if (!drawer) return;

    gsap.fromTo(
      drawer,
      { x: '0%', opacity: 1 },
      {
        x: '100%',
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => {
          this.isOpen.set(false);
          document.body.style.overflow = '';
          document.body.style.paddingRight = '';
        },
      },
    );
  }

  toggleDrawer(): void {
    this.isOpen() ? this.close() : this.open();
  }

  stopPropagation(event: Event): void {
    event.stopPropagation();
  }
}
