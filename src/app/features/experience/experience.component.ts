import {
  Component,
  ElementRef,
  Injector,
  afterNextRender,
  effect,
  inject,
  signal,
} from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { ExperienceService } from '@core/services/experience.service';
import { GsapService } from '@core/services/gsap.service';
import { PlatformService } from '@core/services/platform.service';
import { TranslateModule } from '@ngx-translate/core';
import { ExperienceCardComponent } from './components/experience-card/experience-card.component';

@Component({
  selector: 'app-experience',
  imports: [ExperienceCardComponent, TranslateModule, MatIconModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  private readonly experienceService = inject(ExperienceService);
  private readonly platformService = inject(PlatformService);
  private readonly gsapService = inject(GsapService);
  private readonly el = inject(ElementRef);
  private readonly injector = inject(Injector);

  readonly resolvedExperiences = this.experienceService.experiences;
  readonly openProjectId = signal<string | null>(null);
  readonly loading = this.experienceService.loading;
  readonly error = this.experienceService.error;

  constructor() {
    effect(() => {
      const experiences = this.resolvedExperiences();
      const isLoading = this.loading();

      if (experiences.length > 0 && !isLoading) {
        afterNextRender(
          () => {
            if (this.platformService.isBrowser) {
              this.animateCards();
            }
          },
          { injector: this.injector },
        );
      }
    });
  }

  private animateCards() {
    const gsap = this.gsapService.gsap;
    const cards = this.el.nativeElement.querySelectorAll('.experience-card');

    cards.forEach((card: HTMLElement) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
          },
        },
      );
    });
  }

  onProjectClick(projectId: string): void {
    this.openProjectId.update((current) => (current === projectId ? null : projectId));
  }

  getCardOrder(index: number): boolean[] {
    return index % 2 === 0 ? [false, true] : [true, false];
  }
}
