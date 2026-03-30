import { AfterViewInit, Component, ElementRef, inject } from '@angular/core';

import { Router } from '@angular/router';
import { GsapService } from '@core/services/gsap.service';
import { PlatformService } from '@core/services/platform.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero-intro',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './hero-intro.component.html',
  styleUrl: './hero-intro.component.scss',
})
export class HeroIntroComponent implements AfterViewInit {
  private readonly router = inject(Router);
  private readonly gsapService = inject(GsapService);
  private readonly el = inject(ElementRef);
  private readonly platformService = inject(PlatformService);

  ngAfterViewInit(): void {
    if (!this.platformService.isBrowser) return;

    const gsap = this.gsapService.gsap;
    const cards = this.el.nativeElement.querySelectorAll('.hero-intro > *');

    gsap.from(cards, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out',
    });
  }

  scrollToSkills(): void {
    if (this.platformService.isBrowser) {
      const el = document.getElementById('skills');
      if (!el) return;

      const start = window.scrollY;
      const target = el.getBoundingClientRect().top + window.scrollY;
      const duration = 650;
      const startTime = performance.now();

      const scroll = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;

        window.scrollTo(0, start + (target - start) * ease);

        if (progress < 1) {
          requestAnimationFrame(scroll);
        }
      };

      requestAnimationFrame(scroll);
    }
  }

  navigateToContact(): void {
    this.router.navigate(['/contact']);
  }
}
