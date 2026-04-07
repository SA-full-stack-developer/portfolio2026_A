import { AfterViewInit, Component, ElementRef, inject } from '@angular/core';
import { SkillFilter } from '@core/models/skill.model';

import { ID_SKILLS } from '@core/constants/sections.constants';
import { GsapService } from '@core/services/gsap.service';
import { PlatformService } from '@core/services/platform.service';
import { SkillsService } from '@core/services/skills.service';
import { TranslateModule } from '@ngx-translate/core';
import { SkillCardComponent } from './components/skill-card/skill-card.component';
import { SkillFilterComponent } from './components/skill-filter/skill-filter.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillCardComponent, SkillFilterComponent, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements AfterViewInit {
  private readonly skillsService = inject(SkillsService);
  private readonly gsapService = inject(GsapService);
  private readonly el = inject(ElementRef);
  private readonly platformService = inject(PlatformService);

  readonly ID_SKILLS = ID_SKILLS;
  readonly filteredSkills = this.skillsService.filteredSkills;
  readonly categories = this.skillsService.categories;
  readonly filter = this.skillsService.filter;
  readonly highlightedCount = this.skillsService.highlightedCount;
  readonly totalSkills = this.skillsService.totalSkills;

  ngAfterViewInit(): void {
    if (!this.platformService.isBrowser) return;
    this.animateCards();
  }

  private animateCards() {
    const gsap = this.gsapService.gsap;
    const cards = this.el.nativeElement.querySelectorAll('app-skill-card');

    gsap.from(cards, {
      opacity: 0,
      y: 50,
      duration: 0.6,
      stagger: 0.08,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: this.el.nativeElement.querySelector('.skills__grid'),
        start: 'top 80%',
      },
    });
  }

  onFilterChange(changes: Partial<SkillFilter>): void {
    this.skillsService.setFilter(changes);
  }
}
