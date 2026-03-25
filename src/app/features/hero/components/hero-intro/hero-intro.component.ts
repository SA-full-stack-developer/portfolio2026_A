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

  /*scrollToSkills(): void {
    if (isPlatformBrowser(this.platformId)) {
      const el = document.getElementById('skills');
      if (el) {
        const rect = el.getBoundingClientRect();
        console.log('top relativo:', rect.top);
        console.log('scrollY actual:', window.scrollY);
        console.log('top absoluto:', rect.top + window.scrollY);

        window.scrollTo({ top: rect.top + window.scrollY, behavior: 'smooth' });
      }
    }
  }*/

  /*scrollToSkills(): void {
    if (isPlatformBrowser(this.platformId)) {
      const el = document.getElementById('skills');
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  }*/

  /*scrollToSkills(): void {
    if (isPlatformBrowser(this.platformId)) {
      const el = document.getElementById('skills');
      if (el) {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          });
        });
      }
    }
  }*/

  /*scrollToSkills(): void {
    if (isPlatformBrowser(this.platformId)) {
      const el = this.goToSkillsSmooth();

      if (!el) {
        const skillsPosition = window.innerHeight * 1.5;
        window.scrollTo({ top: skillsPosition, behavior: 'smooth' });

        setTimeout(() => {
          this.goToSkillsSmooth();
        }, 500);
      }
    }
  }*/

  navigateToContact(): void {
    this.router.navigate(['/contact']);
  }

  /*goToSkillsSmooth(): HTMLElement | null {
    const el = document.getElementById('skills');
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });

    return el;
  }*/
}
