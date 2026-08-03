import {
  Component,
  ElementRef,
  Injector,
  OnDestroy,
  QueryList,
  ViewChildren,
  afterNextRender,
  effect,
  inject,
  signal,
} from '@angular/core';
import { GsapService, PlatformService } from '@shared-libs/services';

import { MatIconModule } from '@angular/material/icon';
import { ExperienceService } from '@core/services/experience';
import { TranslateModule } from '@ngx-translate/core';
import { ErrorComponent } from '@shared/components/error/error';
import { ExperienceCardComponent } from './components/experience-card/experience-card';

@Component({
  selector: 'app-experience',
  imports: [ExperienceCardComponent, TranslateModule, MatIconModule, ErrorComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent implements OnDestroy {
  private readonly experienceService = inject(ExperienceService);
  private readonly platformService = inject(PlatformService);
  private readonly gsapService = inject(GsapService);
  private readonly injector = inject(Injector);

  readonly resolvedExperiences = this.experienceService.experiences;
  readonly openProjectId = signal<string | null>(null);
  readonly loading = this.experienceService.isLoading;
  readonly error = this.experienceService.error;

  private scrollTriggers = signal<ScrollTrigger[]>([]);
  private animationInitialized = signal(false);

  @ViewChildren('expCard') expCards!: QueryList<ElementRef>;

  constructor() {
    effect(() => {
      const experiences = this.resolvedExperiences();
      const isLoading = this.loading();

      if (experiences.length > 0 && !isLoading && !this.animationInitialized()) {
        this.animationInitialized.set(true);
        afterNextRender(
          () => {
            if (!this.platformService.isBrowser) return;
            this.animateCards();
          },
          { injector: this.injector },
        );
      }
    });
  }

  private animateCards() {
    const gsap = this.gsapService.gsap;

    this.expCards.forEach((cardRef) => {
      const card = cardRef.nativeElement;
      const st = gsap.fromTo(
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
            invalidateOnRefresh: true,
          },
        },
      );
      if (st.scrollTrigger) {
        this.scrollTriggers.update((triggers) => [...triggers, st.scrollTrigger!]);
      }
    });
  }

  onProjectClick(projectId: string): void {
    this.openProjectId.update((current) => (current === projectId ? null : projectId));
  }

  getCardOrder(index: number): boolean[] {
    return index % 2 === 0 ? [false, true] : [true, false];
  }

  ngOnDestroy(): void {
    this.scrollTriggers().forEach((st) => st.kill());
  }
}
