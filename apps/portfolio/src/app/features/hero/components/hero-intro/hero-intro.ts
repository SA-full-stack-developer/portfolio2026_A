import {
  AfterViewInit,
  Component,
  ElementRef,
  Injector,
  QueryList,
  ViewChildren,
  afterNextRender,
  inject,
} from '@angular/core';
import { GsapService, PlatformService } from '@shared-libs/services';

import { Router } from '@angular/router';
import { HERO_AVATAR } from '@core/constants/feature-flags';
import { navScrollTo } from '@core/utils/navigation';
import { TranslatePipe } from '@ngx-translate/core';
import { FeatureFlagDirective } from '@shared/directives/feature-flag';
import { HeroAvatarComponent } from '../hero-avatar/hero-avatar';

@Component({
  selector: 'app-hero-intro',
  standalone: true,
  imports: [TranslatePipe, HeroAvatarComponent, FeatureFlagDirective],
  templateUrl: './hero-intro.html',
  styleUrl: './hero-intro.scss',
})
export class HeroIntroComponent implements AfterViewInit {
  private readonly router = inject(Router);
  private readonly gsapService = inject(GsapService);
  private readonly platformService = inject(PlatformService);
  private readonly injector = inject(Injector);

  readonly HERO_AVATAR = HERO_AVATAR;

  @ViewChildren('animItem') animItems!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    if (!this.platformService.isBrowser) return;

    afterNextRender(
      () => {
        const gsap = this.gsapService.gsap;
        const cards = this.animItems.map((c) => c.nativeElement);

        gsap.from(cards, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
        });
      },
      { injector: this.injector },
    );
  }

  scrollToSkills(): void {
    if (this.platformService.isBrowser) {
      const el = document.getElementById('skills');
      navScrollTo(el);
    }
  }

  navigateToContact(): void {
    if (this.platformService.isBrowser) {
      this.router.navigate(['/contact']);
    }
  }
}
