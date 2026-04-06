import { AfterViewInit, Component, ElementRef, inject } from '@angular/core';

import { ExperienceService } from '@core/services/experience.service';
import { GsapService } from '@core/services/gsap.service';
import { PlatformService } from '@core/services/platform.service';
import { TranslateModule } from '@ngx-translate/core';
import { ExperienceCardComponent } from './components/experience-card/experience-card.component';

@Component({
  selector: 'app-experience',
  imports: [ExperienceCardComponent, TranslateModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent implements AfterViewInit {
  private readonly experienceService = inject(ExperienceService);
  private readonly platformService = inject(PlatformService);
  private readonly gsapService = inject(GsapService);
  private readonly el = inject(ElementRef);

  readonly resolvedExperiences = this.experienceService.resolvedExperiences;

  ngAfterViewInit(): void {
    if (!this.platformService.isBrowser) return;
    this.animateCards();
  }

  private animateCards() {
    const gsap = this.gsapService.gsap;
    const cards = this.el.nativeElement.querySelectorAll('app-experience-card');

    gsap.set(cards, { opacity: 0, y: 50 });

    gsap.to(cards, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: this.el.nativeElement.querySelector('.experiences__timeline'),
        start: 'top 80%',
        onEnter: () => ScrollTrigger.refresh(),
      },
    });
  }
}
