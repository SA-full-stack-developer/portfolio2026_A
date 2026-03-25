import { Component, PLATFORM_ID, inject } from '@angular/core';

import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero-intro',
  imports: [TranslateModule],
  templateUrl: './hero-intro.component.html',
  styleUrl: './hero-intro.component.scss',
})
export class HeroIntroComponent {
  private readonly router = inject(Router);
  private readonly platformId = inject(PLATFORM_ID);

  scrollToSkills(): void {
    if (isPlatformBrowser(this.platformId)) {
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
