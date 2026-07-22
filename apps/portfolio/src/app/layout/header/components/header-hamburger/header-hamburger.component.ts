import {
  AfterViewInit,
  Component,
  ElementRef,
  Injector,
  afterNextRender,
  inject,
  signal,
  ChangeDetectionStrategy
} from '@angular/core';
import { GsapService, PlatformService } from '@shared-libs/services';

import { RouterLink } from '@angular/router';
import { HEADER_NAV } from '@core/constants/feaute-flags.constants';
import { TranslateModule } from '@ngx-translate/core';
import { IconComponent } from '@shared/components/icon/icon.component';
import { FeatureFlagDirective } from '@shared/directives/feature-flag.directive';
import { HeaderNavComponent } from '../header-nav/header-nav.component';

@Component({
  selector: 'app-header-hamburger',
  imports: [TranslateModule, RouterLink, HeaderNavComponent, IconComponent, FeatureFlagDirective],
  templateUrl: './header-hamburger.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './header-hamburger.component.scss',
})
export class HeaderHamburgerComponent implements AfterViewInit {
  private readonly platformService = inject(PlatformService);
  private readonly gsapService = inject(GsapService);
  private readonly el = inject(ElementRef);
  private readonly injector = inject(Injector);

  readonly isOpen = signal<boolean>(false);
  readonly HEADER_NAV = HEADER_NAV;

  ngAfterViewInit(): void {
    this.setScrollbarWidth();
  }

  open(): void {
    this.isOpen.set(true);
    if (!this.platformService.isBrowser) return;

    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = 'var(--scrollbar-width)';

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

  private setScrollbarWidth(): void {
    const width = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.setProperty('--scrollbar-width', `${width}px`);
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
